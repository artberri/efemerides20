import { Trans, useTranslation } from "next-i18next"
import Link from "next/link"
import { Content } from "../../../shared/Content/Content"
import { FooterLink } from "./FooterLink"

export const Footer = (): JSX.Element => {
	const { t } = useTranslation()

	return (
		<footer className="pb-4 text-center">
			<Content>
				<p className="py-2 text-xs text-gray-600">
					<Trans
						i18nKey="footer.projectof"
						components={{
							berriartLink: (
								<FooterLink
									href="https://www.albertovarela.net/"
									target="_blank"
									rel="noopener noreferrer"
								>
									_
								</FooterLink>
							),
						}}
					/>{" "}
					|{" "}
					<Link href="/faq" passHref legacyBehavior>
						<FooterLink>{t("faq.breadcrump")}</FooterLink>
					</Link>{" "}
					|{" "}
					<Link href="/pagina/aviso-legal" passHref legacyBehavior>
						<FooterLink>{t("tos.breadcrump")}</FooterLink>
					</Link>{" "}
					|{" "}
					<Link href="/pagina/privacidad" passHref legacyBehavior>
						<FooterLink>{t("privacy.breadcrump")}</FooterLink>
					</Link>{" "}
					|{" "}
					<Link href="/pagina/cookies" passHref legacyBehavior>
						<FooterLink>{t("cookies.breadcrump")}</FooterLink>
					</Link>
				</p>
				<p className="py-2 text-xs text-gray-400">
					Only free software was used and no kitties were harmed in the making
					of this website.
				</p>
			</Content>
		</footer>
	)
}
