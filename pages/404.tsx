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
				<div className="text-center pb-16">
					<div className="font-heading text-4xl lg:text-6xl">
						{t("404.error")}
					</div>
					<div className="font-heading text-7xl lg:text-9xl">404</div>
					<h1 className="font-heading text-2xl lg:text-4xl py-8 lg:py-16">
						{t("404.notFound")}
					</h1>
					<Link href="/">
						<a className="inline-block text-white bg-primary text-xl px-8 py-2">
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
