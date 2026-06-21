export interface SourceDiagnostics {
  detected: boolean;
  fields: string[];
}

export interface ProbeDiagnostics {
  html?: SourceDiagnostics;
  openGraph?: SourceDiagnostics;
  twitter?: SourceDiagnostics;
}
