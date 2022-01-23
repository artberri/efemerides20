import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { find, pipe } from "ramda";
import { getMonths, Month, months } from "../utils/date";
import { fromNullable, option } from "../utils/maybe";

export const useMonth = (): Month => {
  const { t } = useTranslation();
  const router = useRouter();
  const { month } = router.query;

  const findMonth = pipe(
    () => getMonths(),
    find((m) => t(`monthName.${m.name}`) === month),
    fromNullable,
    option(() => months[1]),
  );

  return findMonth();
};
