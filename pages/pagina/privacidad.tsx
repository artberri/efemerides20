import type { NextPage } from "next"
import { useTranslation } from "next-i18next"
import { Fragment } from "react"
import { Head } from "../../components/layout/Head/Head"
import { Page } from "../../components/layout/Page/Page"
import { Privacy } from "../../components/pages/Privacy/Privacy"
import { useAbsolutePath } from "../../hooks/useAbsolutePath"
import { makeStaticProps } from "../../utils/makeStaticProps"

const PrivacyPage: NextPage = () => {
	const { t } = useTranslation()
	const { path } = useAbsolutePath()

	return (
		<Fragment>
			<Head
				title={`${t("privacy.title")} - ${t("title")}`}
				canonical={path("/pagina/privacidad")}
				noIndex
			/>

			<Page
				breadcrumps={{
					current: t("privacy.breadcrump"),
					previous: [["/", t("home.breadcrump")]],
				}}
			>
				<Privacy />
			</Page>
		</Fragment>
	)
}

export const getStaticProps = makeStaticProps()

export default PrivacyPage
