import { Trans, useTranslation } from "next-i18next";
import Link from "next/link";
import { Content } from "../../../shared/Content/Content";
import { FooterLink } from "./FooterLink";

export const Footer = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <footer className="text-center pb-4">
      <Content>
        <p className="text-gray-600 py-2 text-xs">
          <Trans
            i18nKey="footer.projectof"
            components={{
              berriartLink: (
                <FooterLink
                  href="https://www.berriart.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  _
                </FooterLink>
              ),
            }}
          />{" "}
          |{" "}
          <Link href="/faq" passHref>
            <FooterLink>{t("faq.breadcrump")}</FooterLink>
          </Link>{" "}
          |{" "}
          <Link href="/pagina/terminos" passHref>
            <FooterLink>{t("tos.breadcrump")}</FooterLink>
          </Link>{" "}
          |{" "}
          <Link href="/pagina/privacidad" passHref>
            <FooterLink>{t("privacy.breadcrump")}</FooterLink>
          </Link>{" "}
          |{" "}
          <Link href="/pagina/cookies" passHref>
            <FooterLink>{t("cookies.breadcrump")}</FooterLink>
          </Link>
        </p>
        <p className="text-gray-400 py-2 text-xs">
          Only free software was used and no kitties were harmed in the making
          of this website.
        </p>
      </Content>
    </footer>
  );
};
