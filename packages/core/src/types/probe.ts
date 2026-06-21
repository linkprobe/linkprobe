import type {ProbeDiagnostics} from "./build-diagnostics";
import type {Metadata} from "./metadata";
import type {MetadataCoverage} from "./metadata-coverage";

export interface ProbeOptions {
  timeout?: number;
}

export interface PageInfo {
  contentType?: string;
  finalUrl: string;
  requestedUrl: string;
}

export interface ProbeSuccess {
  coverage: MetadataCoverage;
  diagnostics: ProbeDiagnostics;
  metadata: Metadata;
  page: PageInfo;
  status: "success";
}

export interface ProbeError {
  code: string;
  message: string;
}

export interface ProbeFailed {
  error: ProbeError;
  status: "failed";
}

export type ProbeResult = ProbeSuccess | ProbeFailed;
