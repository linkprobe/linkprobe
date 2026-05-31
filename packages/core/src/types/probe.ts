import { Metadata } from "./metadata";

export interface ProbeOptions {
  timeout?: number;
}

export interface ProbeManyOptions extends ProbeOptions {
  concurrency?: number;
}

export interface PageInfo {
  requestedUrl: string;
  finalUrl: string;
  contentType?: string;
}

export interface SourceDiagnostics {
  detected: boolean;
  fields: string[];
}

export interface ProbeDiagnostics {
  openGraph?: SourceDiagnostics;
  twitter?: SourceDiagnostics;
  html?: SourceDiagnostics;
}

export interface ProbeSuccess {
  status: "success";
  metadata: Metadata;
  page: PageInfo;
  diagnostics?: ProbeDiagnostics;
}

export interface ProbeError {
  code: string;
  message: string;
}

export interface ProbeFailed {
  status: "failed";
  error: ProbeError;
}

export type ProbeResult = ProbeSuccess | ProbeFailed;
