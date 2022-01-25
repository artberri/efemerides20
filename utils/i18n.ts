import { TFunction } from "i18next";
import { find, pipe } from "ramda";
import { getMonths, Month } from "./date";
import { fromNullable, Maybe } from "./maybe";

export const findMonthByTranslation =
  (t: TFunction) =>
  (translatedMonth: string): Maybe<Month> =>
    pipe(
      find((m: Month) => t(`monthName.${m.name}`) === translatedMonth),
      fromNullable,
    )(getMonths());
