import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { Fragment } from "react";
import { Head } from "../../components/layout/Head/Head";
import { Page } from "../../components/layout/Page/Page";
import { Cookies } from "../../components/pages/Cookies/Cookies";
import { useAbsolutePath } from "../../hooks/useAbsolutePath";
import { makeStaticProps } from "../../utils/makeStaticProps";

const CookiesPage: NextPage = () => {
  const { t } = useTranslation();
  const { path } = useAbsolutePath();

  return (
    <Fragment>
      <Head
        title={`${t("cookies.title")} - ${t("title")}`}
        canonical={path("/pagina/cookies")}
        noIndex
      />

      <Page
        breadcrumps={{
          current: t("cookies.breadcrump"),
          previous: [["/", t("home.breadcrump")]],
        }}
      >
        <Cookies />
      </Page>
    </Fragment>
  );
};

export const getStaticProps = makeStaticProps();

export default CookiesPage;
