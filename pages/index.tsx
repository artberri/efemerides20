import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { Fragment } from "react";
import { Head } from "../components/layout/Head/Head";
import { Page } from "../components/layout/Page/Page";
import { Home } from "../components/pages/Home/Home";
import { useAbsolutePath } from "../hooks/useAbsolutePath";
import { makeStaticProps } from "../utils/makeStaticProps";

const HomePage: NextPage = () => {
  const { t } = useTranslation();
  const { path } = useAbsolutePath();

  return (
    <Fragment>
      <Head
        title={t("home.title")}
        description={t("home.description")}
        keywords={t("home.keywords")}
        canonical={path("/")}
      />

      <Page breadcrumps={{ current: t("home.breadcrump") }}>
        <Home />
      </Page>
    </Fragment>
  );
};

export const getStaticProps = makeStaticProps();

export default HomePage;
