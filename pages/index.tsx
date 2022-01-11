import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { Fragment } from "react";
import { Head } from "../components/Head/Head";
import { Page } from "../components/Page/Page";
import { useAbsolutePath } from "../hooks/useAbsolutePath";
import { makeStaticProps } from "../utils/makeStaticProps";

const myLoader = ({ src }: { src: string }): string => {
  return src;
};

const Home: NextPage = () => {
  const { t, i18n } = useTranslation();
  const { path } = useAbsolutePath();

  return (
    <Fragment>
      <Head
        title={t("home.title")}
        description={t("home.description")}
        keywords={t("home.keywords")}
        canonical={path("/")}
      />

      <Page breadcrumps={{ current: t("home.breadcrump") }}>
        <h1>
          {i18n.language} Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <h2>{t("home.title")}</h2>

        <p>
          Get started by editing <code>pages/index.tsx</code>
        </p>

        <div>
          <a href="https://nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/master/examples">
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>

        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
                loader={myLoader}
              />
            </span>
          </a>
        </footer>
      </Page>
    </Fragment>
  );
};

export const getStaticProps = makeStaticProps();

export default Home;
