import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Fragment, ReactNode } from "react";
import routes from "../../routes.config";

export interface PageProps {
  children: ReactNode;
}

export const Page = ({ children }: PageProps) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <header className="bg-main text-white text-center px-4">
        <h1 className="font-heading text-6xl pt-16">
          <Link href={routes.homepage.path}>
            <a title={t("subtitle")}>{t("title")}</a>
          </Link>
        </h1>
        <div className="pt-8 pb-16 text-2xl">{t("subtitle")}</div>
      </header>
      {children}
    </Fragment>
  );
};
