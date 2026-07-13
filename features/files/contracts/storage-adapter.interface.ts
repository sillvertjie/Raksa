export interface StorageAdapter {
  upload(
    key: string,
    data: Buffer,
  ): Promise<void>;

  delete(key: string): Promise<void>;

  getUrl(key: string): Promise<string>;
}