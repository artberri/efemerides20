import { Trans } from "next-i18next";
import { Content } from "../../Content/Content";
import { FooterLink } from "./FooterLink";

export const Footer = () => {
  return (
    <footer className="text-center text-xs pb-4">
      <Content>
        <p className="text-gray-600 py-2">
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
          <FooterLink href="{{ path('static', {'page': 'faq'}) }}">
            FAQ
          </FooterLink>{" "}
          |{" "}
          <FooterLink href="{{ path('static_new', {'page': 'terminos'}) }}">
            Términos de uso
          </FooterLink>{" "}
          |{" "}
          <FooterLink href="{{ path('static_new', {'page': 'privacidad'}) }}">
            Política de privacidad
          </FooterLink>{" "}
          |{" "}
          <FooterLink href="{{ path('static_new', {'page': 'cookies'}) }}">
            Política de cookies
          </FooterLink>
        </p>
        <p className="text-gray-400 py-2">
          Only free software was used and no kitties were harmed in the making
          of this website.
        </p>
      </Content>
    </footer>
  );
};
