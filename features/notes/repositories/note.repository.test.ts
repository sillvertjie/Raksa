import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/prisma", () => {
  return {
    prisma: {
      note: {
        findMany: vi.fn(),
        findFirst: vi.fn(),
        create: vi.fn(),
        updateMany: vi.fn(),
        deleteMany: vi.fn(),
      },
    },
  };
});

import { prisma } from "@/lib/prisma";
import { NoteRepository } from "./note.repository";

const repository = new NoteRepository();

beforeEach(() => {
  vi.clearAllMocks();
});

describe("NoteRepository", () => {
  it("should call prisma.note.findMany with userId", async () => {
    vi.mocked(prisma.note.findMany).mockResolvedValue([]);

    await repository.findAll("user-123");

    expect(prisma.note.findMany).toHaveBeenCalledWith({
      where: {
        userId: "user-123",
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  });

  it("should call prisma.note.findFirst with id and userId", async () => {
    vi.mocked(prisma.note.findFirst).mockResolvedValue(null);

    await repository.findById("note-1", "user-123");

    expect(prisma.note.findFirst).toHaveBeenCalledWith({
      where: {
        id: "note-1",
        userId: "user-123",
      },
    });
  });

  it("should call prisma.note.create", async () => {
    vi.mocked(prisma.note.create).mockResolvedValue({} as never);

    await repository.create("user-123", {
      title: "Test",
      content: "Content",
    });

    expect(prisma.note.create).toHaveBeenCalledWith({
      data: {
        userId: "user-123",
        title: "Test",
        content: "Content",
      },
    });
  });

  it("should call prisma.note.updateMany", async () => {
    vi.mocked(prisma.note.updateMany).mockResolvedValue({
      count: 1,
    } as never);

    await repository.update("note-1", "user-123", {
      title: "Updated",
      content: "Updated Content",
    });

    expect(prisma.note.updateMany).toHaveBeenCalledWith({
      where: {
        id: "note-1",
        userId: "user-123",
      },
      data: {
        title: "Updated",
        content: "Updated Content",
      },
    });
  });

  it("should call prisma.note.deleteMany", async () => {
    vi.mocked(prisma.note.deleteMany).mockResolvedValue({
      count: 1,
    } as never);

    await repository.delete("note-1", "user-123");

    expect(prisma.note.deleteMany).toHaveBeenCalledWith({
      where: {
        id: "note-1",
        userId: "user-123",
      },
    });
  });
});