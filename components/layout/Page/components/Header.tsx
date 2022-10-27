import { useTranslation } from "next-i18next"
import Link from "next/link"
import { Content } from "../../../shared/Content/Content"

export const Header = (): JSX.Element => {
	const { t } = useTranslation()

	return (
		<header className="bg-primary text-center text-white">
			<Content>
				<h1 className="pt-4 font-heading text-4xl sm:pt-8 sm:text-5xl lg:pt-16 lg:text-7xl">
					<Link href="/" legacyBehavior>
						<a
							className="text-white hover:text-white focus:text-white active:text-white"
							title={t("subtitle")}
						>
							{t("title")}
						</a>
					</Link>
				</h1>
				<div className="text-l pt-2 pb-4 font-heading sm:pt-4 sm:pb-8 sm:text-xl lg:pt-8 lg:pb-16 lg:text-2xl">
					{t("subtitle")}
				</div>
			</Content>
		</header>
	)
}
