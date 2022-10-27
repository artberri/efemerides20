import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript,
} from "next/document"
import { i18n } from "../next-i18next.config"

class MyDocument extends Document {
	public static override async getInitialProps(
		ctx: DocumentContext,
	): Promise<DocumentInitialProps & { locale: string }> {
		const initialProps = await Document.getInitialProps(ctx)
		const locale = ctx.locale || i18n.defaultLocale

		return { ...initialProps, locale }
	}

	public override render(): JSX.Element {
		const { locale } = this.props

		return (
			<Html lang={locale}>
				<Head>
					<link rel="manifest" href="/manifest.webmanifest" />
					<link rel="icon" href="/favicon.ico" sizes="any" />
					<link rel="icon" href="/icon.svg" type="image/svg+xml" />
					<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				</Head>
				<body>
					<Main />
					<NextScript />
					<script
						type="text/javascript"
						dangerouslySetInnerHTML={{
							__html: `var addthis_config = addthis_config||{};
							addthis_config.data_use_cookies_ondomain = false;
							addthis_config.data_use_cookies = false;`,
						}}
					/>
				</body>
			</Html>
		)
	}
}

export default MyDocument
