import { useTranslation } from "next-i18next"
import Link from "next/link"
import { Fragment } from "react"
import { Head } from "../components/layout/Head/Head"
import { Page } from "../components/layout/Page/Page"
import { useAbsolutePath } from "../hooks/useAbsolutePath"
import { makeStaticProps } from "../utils/makeStaticProps"

const Custom404 = (): JSX.Element => {
	const { t } = useTranslation()
	const { path } = useAbsolutePath()

	return (
		<Fragment>
			<Head title={t("404.title")} canonical={path("/")} noIndex />

			<Page
				breadcrumps={{
					current: t("404.breadcrump"),
					previous: [["/", t("home.breadcrump")]],
				}}
			>
				<div className="pb-16 text-center">
					<div className="font-heading text-4xl lg:text-6xl">
						{t("404.error")}
					</div>
					<div className="font-heading text-7xl lg:text-9xl">404</div>
					<h1 className="py-8 font-heading text-2xl lg:py-16 lg:text-4xl">
						{t("404.notFound")}
					</h1>
					<Link href="/" legacyBehavior>
						<a className="inline-block bg-primary px-8 py-2 text-xl text-white">
							{t("404.cta")}
						</a>
					</Link>
				</div>
			</Page>
		</Fragment>
	)
}
export const getStaticProps = makeStaticProps()

export default Custom404
