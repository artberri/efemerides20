import { useTranslation } from "next-i18next"
import NextHead from "next/head"
import { useAbsolutePath } from "../../../hooks/useAbsolutePath"

export interface HeadProps {
	title: string
	description?: string | undefined
	keywords?: string | undefined
	canonical: string
	noIndex?: boolean
}

export const Head = ({
	title,
	description,
	keywords,
	canonical,
	noIndex,
}: HeadProps): JSX.Element => {
	const { t } = useTranslation()
	const { base } = useAbsolutePath()

	return (
		<NextHead>
			<title>{title}</title>
			<meta name="viewport" content="width=device-width,initial-scale=1" />
			{description && <meta name="description" content={description} />}
			{keywords && <meta name="keywords" content={keywords} />}
			{noIndex && <meta name="robots" content="noindex, nofollow" />}
			<link rel="canonical" href={canonical} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@efemerides20" />
			<meta name="twitter:creator" content="@artberri" />
			<meta property="og:locale" content="es_ES" />
			<meta property="og:title" content={title} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={canonical} />
			<meta property="og:image" content={`${base}/efemerideslogo.png`} />
			<meta property="og:site_name" content={t("title")} />
			<meta property="og:description" content={description} />
			{process.env["facebookAppId"] && (
				<meta property="fb:app_id" content={process.env["facebookAppId"]} />
			)}
		</NextHead>
	)
}
