import { useTranslation } from "next-i18next"
import Link from "next/link"
import { Content } from "../../../shared/Content/Content"

export const Header = (): JSX.Element => {
	const { t } = useTranslation()

	return (
		<header className="bg-primary text-white text-center">
			<Content>
				<h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl pt-4 sm:pt-8 lg:pt-16">
					<Link href="/" legacyBehavior>
						<a
							className="text-white hover:text-white active:text-white focus:text-white"
							title={t("subtitle")}
						>
							{t("title")}
						</a>
					</Link>
				</h1>
				<div className="font-heading pt-2 sm:pt-4 lg:pt-8 pb-4 sm:pb-8 lg:pb-16 text-l sm:text-xl lg:text-2xl">
					{t("subtitle")}
				</div>
			</Content>
		</header>
	)
}
