import { vi } from "vitest";

export const mockPrisma = {
  note: {
    create: vi.fn(),
    findMany: vi.fn(),
    findFirst: vi.fn(),
    updateMany: vi.fn(),
    deleteMany: vi.fn(),
  },

  capture: {
    create: vi.fn(),
    findMany: vi.fn(),
    findFirst: vi.fn(),
    updateMany: vi.fn(),
    deleteMany: vi.fn(),
  },

  search: {},

  summary: {},
};

export function resetPrismaMocks() {
  vi.clearAllMocks();
}