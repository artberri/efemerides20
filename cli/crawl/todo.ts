import { t } from "i18next";
import { Day } from "../../utils/date";

const baseUrl = "http://es.wikipedia.org";

export const getWikipediaUrl = (day: Day) =>
  `${baseUrl}/wiki/${day.number}_de_${t(`monthName.${day.month.name}`)}`;

export const enum EfemerideType {
  Efemeride = "efemeride",
  Birth = "birth",
  Death = "death",
}

export interface Efemeride {
  readonly month: number;
  readonly day: number;
  readonly content: string;
  readonly rawContent: string;
  readonly type: EfemerideType;
}
