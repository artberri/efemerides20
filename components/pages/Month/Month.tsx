import { useTranslation } from "next-i18next";
import { Fragment } from "react";
import { getMonthDays, Month as MonthItem } from "../../../utils/date";
import { Title } from "../../shared/Title/Title";
import { MonthPagination } from "./components/MonthPagination/MonthPagination";

export interface MonthProps {
  month: MonthItem;
}

export const Month = ({ month }: MonthProps): JSX.Element => {
  const { t } = useTranslation();
  const days = getMonthDays(month);

  return (
    <Fragment>
      <Title>
        {t("month.title", {
          month: t(`monthName.${month.name}`),
        })}
      </Title>
      <MonthPagination days={days} />
    </Fragment>
  );
};
