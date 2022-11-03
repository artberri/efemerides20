import { useTranslation } from "next-i18next"
import Image from "next/image"
import Link from "next/link"
import { Fragment } from "react"
import { Title } from "../../shared/Title/Title"

interface TopicListProps {
	topics: Topics
}

const myLoader = ({ src }: { src: string }): string => src

export const TopicList = ({ topics }: TopicListProps): JSX.Element => {
	const { t } = useTranslation()

	return (
		<Fragment>
			<Title>{t("topics.title")}</Title>
			<p>{t("topics.subtitle")}</p>
			<ul className="m-0 flex flex-wrap p-0">
				{topics.map((topic, key) => (
					<li key={`topic-${topic.slug}`} className="m-0 w-1/3 list-none p-0">
						<Link href={`/nodos/${topic.slug}`} legacyBehavior>
							<a className="m-3 block bg-gray-100 p-3 text-black transition duration-300 hover:bg-gray-200 hover:text-black active:text-black">
								<article className="flex w-full">
									{topic.image && (
										<Image
											loader={myLoader}
											src={topic.image}
											alt={topic.title}
											width="90"
											height="60"
											className="relative object-contain"
										/>
									)}
									<div className="flex-1 px-3">
										<h1 className="pb-2 font-heading text-2xl">
											{topic.title}
										</h1>
										<p className="text-sm">
											{t("topics.countOf", { count: topic.count })}
										</p>
									</div>

									<div className="block h-10 w-10 bg-primary p-2 text-white">
										{t("topics.ranking", { position: key + 1 })}
									</div>
								</article>
							</a>
						</Link>
					</li>
				))}
			</ul>
		</Fragment>
	)
}
