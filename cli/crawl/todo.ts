import { FutureInstance } from "fluture";

export interface EfemerideNode {
  url: string;
  title: string;
  anchor: string;
}

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
  readonly type: EfemerideType;
  readonly nodes: readonly EfemerideNode[];
}

export interface Efemerides extends ReadonlyArray<Efemeride> {}

export type CrawlTask = FutureInstance<Error, Efemerides>;
