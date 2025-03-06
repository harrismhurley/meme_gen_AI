export interface MemeTemplate {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
}

export interface MemeText {
  x: number;
  y: number;
  size: number;
  content: string;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  error_message?: string;
}
