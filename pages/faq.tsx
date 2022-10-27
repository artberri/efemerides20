import type { NextPage } from "next"
import { useTranslation } from "next-i18next"
import { Fragment } from "react"
import { Head } from "../components/layout/Head/Head"
import { Page } from "../components/layout/Page/Page"
import { Faq } from "../components/pages/Faq/Faq"
import { useAbsolutePath } from "../hooks/useAbsolutePath"
import { makeStaticProps } from "../utils/makeStaticProps"

const FaqPage: NextPage = () => {
	const { t } = useTranslation()
	const { path } = useAbsolutePath()

	return (
		<Fragment>
			<Head
				title={`${t("faq.title")} - ${t("title")}`}
				canonical={path("/faq")}
			/>

			<Page
				breadcrumps={{
					current: t("faq.breadcrump"),
					previous: [["/", t("home.breadcrump")]],
				}}
			>
				<Faq />
			</Page>
		</Fragment>
	)
}

export const getStaticProps = makeStaticProps()

export default FaqPage
