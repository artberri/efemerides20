import { Trans, useTranslation } from "next-i18next"
import { Fragment } from "react"
import { AddThis } from "../../shared/AddThis/AddThis"
import { EphemerideList } from "../../shared/EphemerideList/EphemerideList"
import { Title } from "../../shared/Title/Title"

export interface TopicItemProps {
	ephemerides: Ephemerides
	topic: Topic
}

export const TopicItem = ({
	ephemerides,
	topic,
}: TopicItemProps): JSX.Element => {
	const { t } = useTranslation()

	return (
		<Fragment>
			<Title>{t(`topic.title`, { name: topic.title })}</Title>
			<div
				dangerouslySetInnerHTML={{
					__html: topic.description,
				}}
			/>
			<p>
				<Trans
					i18nKey={`topic.goToWikipedia`}
					components={{
						wikilink: (
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={`https://es.wikipedia.org${topic.url}`}
							>
								_
							</a>
						),
					}}
					values={{ name: topic.title }}
				/>
			</p>
			<EphemerideList
				title={t(`topic.subtitle`)}
				ephemerides={ephemerides}
				type="topic"
			/>
			<AddThis key={`addthis-script-topic-${topic.slug}`} />
		</Fragment>
	)
}
