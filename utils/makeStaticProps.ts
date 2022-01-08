import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18n } from "../next-i18next.config";

export const makeStaticProps: () => GetStaticProps<
  Record<string, unknown>,
  { locale: string }
> = () => {
  return async ({ params }) => {
    const locale = params?.["locale"] || i18n.defaultLocale;

    return {
      props: {
        ...(await serverSideTranslations(locale)),
      },
    };
  };
};
