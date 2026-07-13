export interface UploadFileDto {
  name: string;
  mimeType: string;
  size: number;
  data: Buffer;
}