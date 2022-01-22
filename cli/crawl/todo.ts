import { FutureInstance } from "fluture";

export const enum EfemerideType {
  Efemeride = "efemeride",
  Birth = "birth",
  Death = "death",
}

export interface Efemeride {
  readonly month: number;
  readonly day: number;
  readonly year: number;
  readonly content: string;
  readonly rawContent: string;
  readonly type: EfemerideType;
}

export interface Efemerides extends ReadonlyArray<Efemeride> {}

export type CrawlTask = FutureInstance<Error, Efemerides>;
