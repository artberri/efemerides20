import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { Fragment } from "react";
import { Head } from "../../components/layout/Head/Head";
import { Page } from "../../components/layout/Page/Page";
import { Terms } from "../../components/pages/Terms/Terms";
import { useAbsolutePath } from "../../hooks/useAbsolutePath";
import { makeStaticProps } from "../../utils/makeStaticProps";

const TermsPage: NextPage = () => {
  const { t } = useTranslation();
  const { path } = useAbsolutePath();

  return (
    <Fragment>
      <Head
        title={`${t("tos.title")} - ${t("title")}`}
        canonical={path("/pagina/terminos")}
        noIndex
      />

      <Page
        breadcrumps={{
          current: t("tos.breadcrump"),
          previous: [["/", t("home.breadcrump")]],
        }}
      >
        <Terms />
      </Page>
    </Fragment>
  );
};

export const getStaticProps = makeStaticProps();

export default TermsPage;
