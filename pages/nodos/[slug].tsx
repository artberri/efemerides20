import { init } from "i18next"
import type { GetStaticPaths, NextPage } from "next"
import { useTranslation } from "next-i18next"
import { Fragment } from "react"
import { Head } from "../../components/layout/Head/Head"
import { Page } from "../../components/layout/Page/Page"
import { TopicItem } from "../../components/pages/TopicItem/TopicItem"
import { useAbsolutePath } from "../../hooks/useAbsolutePath"
import es from "../../locales/es/common.json"
import { sortEphemerides } from "../../utils/ephemerides"
import { makeStaticProps } from "../../utils/makeStaticProps"
import {
	findByTopicUrl,
	findTopTopic,
	findTopTopics,
} from "../../utils/repository"

init({
	lng: "es",
	debug: false,
	resources: {
		es: { translation: es },
	},
})

interface TopicPageProps {
	topic: Topic
	ephemerides: Ephemerides
}

const TopicPage: NextPage<TopicPageProps> = ({ topic, ephemerides }) => {
	const { t } = useTranslation()
	const { path } = useAbsolutePath()

	return (
		<Fragment>
			<Head
				title={`${t(`topic.seoTitle`, { name: topic.title })} - ${t("title")}`}
				description={t(`topic.description`, { name: topic.title })}
				keywords={t(`topic.keywords`, { name: topic.title })}
				canonical={path(`/nodos/${topic.slug}`)}
			/>

			<Page
				breadcrumps={{
					current: t(`topic.breadcrump`, { name: topic.title }),
					previous: [
						["/", t("home.breadcrump")],
						["/nodos", t("topics.breadcrump")],
					],
				}}
			>
				<TopicItem topic={topic} ephemerides={ephemerides} />
			</Page>
		</Fragment>
	)
}

export const getStaticProps = makeStaticProps((params?: { slug: string }) =>
	findTopTopic(params?.slug || "").then((topic) =>
		findByTopicUrl(topic.url).then((ephemerides) => ({
			topic,
			ephemerides: sortEphemerides(ephemerides),
		})),
	),
)

export const getStaticPaths: GetStaticPaths<{ slug: string }> = () =>
	findTopTopics().then((topics) => ({
		paths: topics.map((topic) => ({
			params: {
				slug: `${topic.slug}`,
			},
		})),
		fallback: false,
	}))

export default TopicPage
