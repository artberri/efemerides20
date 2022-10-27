import { useTranslation } from "next-i18next"
import { Fragment } from "react"
import { FacebookIcon } from "./components/FacebookIcon/FacebookIcon"
import { HomeInfo } from "./components/HomeInfo/HomeInfo"
import { Months } from "./components/Months/Months"
import { TagCloud } from "./components/TagCloud/TagCloud"
import { TwitterIcon } from "./components/TwitterIcon/TwitterIcon"

export const Home = (): JSX.Element => {
	const { t } = useTranslation()

	return (
		<Fragment>
			<div className="flex w-full flex-col lg:flex-row">
				<div className="basis-full lg:basis-3/4">
					<Months />
				</div>
				<aside className="flex basis-full flex-col items-center pl-0 pt-8 lg:basis-1/4 lg:pl-8 lg:pt-0 ">
					<a
						href="https://twitter.com/intent/follow?screen_name=efemerides20"
						target="_blank"
						rel="noreferrer noopener"
						className="block flex w-full items-center justify-center rounded-full bg-twitter px-4 py-2 text-center text-white hover:bg-twitter-darker hover:text-white focus:bg-twitter-darker focus:text-white"
					>
						<TwitterIcon className="inline-block h-6 w-6 pr-2" /> Seguir a
						@efemerides20
					</a>

					<a
						href="https://www.facebook.com/efemerides20/"
						target="_blank"
						rel="noreferrer noopener"
						className="mt-8 block flex w-full items-center justify-center rounded-full bg-facebook px-4 py-2 text-center text-white hover:bg-facebook-darker hover:text-white focus:bg-facebook-darker focus:text-white"
					>
						<FacebookIcon className="inline-block h-6 w-6 pr-2" /> Me gusta
						Efemérides 2.0
					</a>

					<div className="mt-8">
						<TagCloud />
					</div>
				</aside>
			</div>
			<div className="w-full columns-1 pt-8 md:columns-3">
				<HomeInfo
					className="basis-full lg:basis-1/3"
					title={t("home.section.aboutUs.title")}
					description={t("home.section.aboutUs.description")}
					anchor={t("home.section.aboutUs.anchor")}
					link="/faq"
				/>
				<HomeInfo
					className="basis-full lg:basis-1/3"
					title={t("home.section.top.title")}
					description={t("home.section.top.description")}
					anchor={t("home.section.top.anchor")}
					link="/nodos"
				/>
				<HomeInfo
					className="basis-full lg:basis-1/3"
					title={t("home.section.byYear.title")}
					description={t("home.section.byYear.description")}
					anchor={t("home.section.byYear.anchor")}
					link="/anos"
				/>
			</div>
		</Fragment>
	)
}
