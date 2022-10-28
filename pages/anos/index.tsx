import type { NextPage } from "next"
import { useTranslation } from "next-i18next"
import { Fragment } from "react"
import { Head } from "../../components/layout/Head/Head"
import { Page } from "../../components/layout/Page/Page"
import { Years } from "../../components/pages/Years/Years"
import { useAbsolutePath } from "../../hooks/useAbsolutePath"
import { makeStaticProps } from "../../utils/makeStaticProps"

const YearsPage: NextPage = () => {
	const { t } = useTranslation()
	const { path } = useAbsolutePath()

	return (
		<Fragment>
			<Head
				title={`${t("years.seoTitle")} - ${t("title")}`}
				description={t("years.description")}
				keywords={t("years.keywords")}
				canonical={path(`/anos`)}
			/>

			<Page
				breadcrumps={{
					current: t("years.breadcrump"),
					previous: [["/", t("home.breadcrump")]],
				}}
			>
				<Years />
			</Page>
		</Fragment>
	)
}

export const getStaticProps = makeStaticProps()

export default YearsPage
