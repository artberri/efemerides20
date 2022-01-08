import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { i18n } from "../next-i18next.config";

class MyDocument extends Document {
  public static override async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps & { locale: string }> {
    const initialProps = await Document.getInitialProps(ctx);
    const locale = ctx.locale || i18n.defaultLocale;

    return { ...initialProps, locale };
  }

  public override render() {
    const { locale } = this.props;

    return (
      <Html lang={locale}>
        <Head>
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/icon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;family=Rajdhani:wght@400&amp;display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
