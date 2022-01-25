import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { pipe } from "ramda";
import { Month, months } from "../utils/date";
import { findMonthByTranslation } from "../utils/i18n";
import { option } from "../utils/maybe";

export const useMonth = (): Month => {
  const { t } = useTranslation();
  const router = useRouter();
  const { month } = router.query;

  const findMonth = pipe(
    () => findMonthByTranslation(t)(month as string),
    option(() => months[1]),
  );

  return findMonth();
};
