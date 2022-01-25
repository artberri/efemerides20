/* eslint-disable @typescript-eslint/no-var-requires */
import {
  chain as chainF,
  FutureInstance,
  map as mapF,
  promise,
  reject,
  resolve,
} from "fluture";
import { init, t as tt } from "i18next";
import type { GetStaticPaths, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { map, pipe, slice } from "ramda";
import { Fragment } from "react";
import { Head } from "../components/layout/Head/Head";
import { Page } from "../components/layout/Page/Page";
import { Month } from "../components/pages/Month/Month";
import { useAbsolutePath } from "../hooks/useAbsolutePath";
import { useMonth } from "../hooks/useMonth";
import es from "../locales/es/common.json";
import { getMonths, Month as MonthInstance } from "../utils/date";
import {
  clasifyEphemerides,
  shortEphemerides,
  shuffle,
} from "../utils/ephemerides";
import { findMonthByTranslation } from "../utils/i18n";
import { makeStaticProps } from "../utils/makeStaticProps";
import { fold } from "../utils/maybe";
import { findByMonth } from "../utils/repository";

init({
  lng: "es",
  debug: false,
  resources: {
    es: { translation: es },
  },
});

interface MonthPageProps {
  ephemerides: Ephemerides;
  births: Ephemerides;
  deaths: Ephemerides;
}

const MonthPage: NextPage<MonthPageProps> = ({
  ephemerides,
  births,
  deaths,
}) => {
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
        <Month
          month={month}
          ephemerides={ephemerides}
          births={births}
          deaths={deaths}
        />
      </Page>
    </Fragment>
  );
};

export const getStaticProps = makeStaticProps((params?: { month: string }) => {
  const randomTen = (e: Ephemerides): Ephemerides =>
    shortEphemerides(slice(0, 10, shuffle<Ephemeride>(e)));

  const getEphemerides = pipe(
    findMonthByTranslation(tt),
    fold(
      () =>
        reject(new Error("Month not found")) as FutureInstance<
          Error,
          MonthInstance
        >,
      (month) => resolve(month),
    ),
    chainF(findByMonth),
    mapF(clasifyEphemerides),
    mapF(({ ephemerides, births, deaths }) => ({
      ephemerides: randomTen(ephemerides),
      births: randomTen(births),
      deaths: randomTen(deaths),
    })),
  );

  return promise(getEphemerides(params?.month || ""));
});

export const getStaticPaths: GetStaticPaths<{ month: string }> = () => {
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
