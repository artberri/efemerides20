import { init, t as tt } from "i18next";
import type { GetStaticPaths, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { map, pipe } from "ramda";
import { Fragment } from "react";
import { Head } from "../components/layout/Head/Head";
import { Page } from "../components/layout/Page/Page";
import { Month } from "../components/pages/Month/Month";
import { useAbsolutePath } from "../hooks/useAbsolutePath";
import { useMonth } from "../hooks/useMonth";
import es from "../locales/es/common.json";
import { getMonths } from "../utils/date";
import { makeStaticProps } from "../utils/makeStaticProps";

const MonthPage: NextPage = () => {
  const { t } = useTranslation();
  const { path } = useAbsolutePath();
  const month = useMonth();

  const translatedMonth = t(`monthName.${month.name}`);

  return (
    <Fragment>
      <Head
        title={`${t("month.seoTitle", {
          month: translatedMonth,
        })} - ${t("title")}`}
        description={t("month.description")}
        keywords={t("month.keywords")}
        canonical={path(`/${translatedMonth}`)}
      />

      <Page
        breadcrumps={{
          current: t("month.breadcrump", {
            month: translatedMonth,
          }),
          previous: [["/", t("home.breadcrump")]],
        }}
      >
        <Month month={month} />
      </Page>
    </Fragment>
  );
};

export const getStaticProps = makeStaticProps();

export const getStaticPaths: GetStaticPaths<{ month: string }> = () => {
  init({
    lng: "es",
    debug: false,
    resources: {
      es: { translation: es },
    },
  });

  const pathParams = pipe(
    () => getMonths(),
    map((m) => tt(`monthName.${m.name}`)),
    map((month) => ({ params: { month } })),
  );

  return {
    paths: pathParams(),
    fallback: false,
  };
};

export default MonthPage;
