export interface FetchHtmlOptions {
  timeout?: number;
}

export interface FetchHtmlResult {
  contentType?: string;
  html: string;
  url: string;
}
