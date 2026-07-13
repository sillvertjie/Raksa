import type { StorageAdapter } from "../contracts/storage-adapter.interface";

export class LocalStorageAdapter implements StorageAdapter {
  private readonly files = new Map<string, Buffer>();

  async upload(
    key: string,
    data: Buffer,
  ): Promise<void> {
    this.files.set(key, data);
  }

  async delete(key: string): Promise<void> {
    this.files.delete(key);
  }

  async getUrl(key: string): Promise<string> {
    if (!this.files.has(key)) {
      throw new Error("Stored file not found.");
    }

    return `/storage/${key}`;
  }
}