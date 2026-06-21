import type {ProbeOptions} from "./probe";

export interface ProbeManyOptions extends ProbeOptions {
  concurrency?: number;
}
