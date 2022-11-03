import { init } from "i18next"
import type { NextPage } from "next"
import { useTranslation } from "next-i18next"
import { Fragment } from "react"
import { Head } from "../../components/layout/Head/Head"
import { Page } from "../../components/layout/Page/Page"
import { TopicList } from "../../components/pages/TopicList/TopicList"
import { useAbsolutePath } from "../../hooks/useAbsolutePath"
import es from "../../locales/es/common.json"
import { makeStaticProps } from "../../utils/makeStaticProps"
import { findTopTopics } from "../../utils/repository"

init({
	lng: "es",
	debug: false,
	resources: {
		es: { translation: es },
	},
})

interface TopicsPageProps {
	topics: Topics
}

const TopicsPage: NextPage<TopicsPageProps> = ({ topics }) => {
	const { t } = useTranslation()
	const { path } = useAbsolutePath()

	return (
		<Fragment>
			<Head
				title={`${t("topics.seoTitle")} - ${t("title")}`}
				description={t("topics.description")}
				keywords={t("topics.keywords")}
				canonical={path(`/nodos`)}
			/>

			<Page
				breadcrumps={{
					current: t("topics.breadcrump"),
					previous: [["/", t("home.breadcrump")]],
				}}
			>
				<TopicList topics={topics} />
			</Page>
		</Fragment>
	)
}

export const getStaticProps = makeStaticProps(() =>
	findTopTopics().then((topics) => ({ topics })),
)

export default TopicsPage
