import "@fontsource/rajdhani/400.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/700.css"
import { appWithTranslation } from "next-i18next"
import type { AppProps } from "next/app"
import "../styles/globals.css"

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
	<Component {...pageProps} />
)

export default appWithTranslation(MyApp)
