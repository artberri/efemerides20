import { useTranslation } from "next-i18next";
import { Fragment, useEffect } from "react";
import { useScript } from "../../../hooks/useScript";
import { HomeInfo } from "./components/HomeInfo/HomeInfo";
import { Months } from "./components/Months/Months";
import { TagCloud } from "./components/TagCloud/TagCloud";

export const Home = (): JSX.Element => {
  const { t } = useTranslation();

  useScript({
    src: "https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v12.0&appId=38171299365&autoLogAppEvents=1",
    crossOrigin: "anonymous",
    nonce: "6pcPGncx",
  });
  useScript({ src: "https://platform.twitter.com/widgets.js" });

  useEffect(() => {
    window.twttr && window.twttr.widgets.load();
    window.FB && window.FB.XFBML.parse();
  });

  return (
    <Fragment>
      <div id="fb-root"></div>

      <div className="w-full flex flex-col lg:flex-row">
        <div className="basis-full lg:basis-3/4">
          <Months />
        </div>
        <aside className="basis-full lg:basis-1/4 pl-0 pt-8 lg:pl-8 lg:pt-0 flex flex-col items-center ">
          <div>
            <a
              href="https://twitter.com/efemerides20?ref_src=twsrc%5Etfw"
              className="twitter-follow-button"
              data-size="large"
              data-dnt="true"
              data-show-count="false"
            >
              Seguir a @efemerides20
            </a>
          </div>
          <div
            className="fb-page pt-8 lg:w-full"
            data-href="https://www.facebook.com/efemerides20/"
            data-tabs="timeline"
            data-width="360"
            data-height="70"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
            data-lazy="true"
          >
            <blockquote
              cite="https://www.facebook.com/efemerides20/"
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/efemerides20/">
                Efemérides 2.0
              </a>
            </blockquote>
          </div>
          <div className="pt-8">
            <TagCloud />
          </div>
        </aside>
      </div>
      <div className="w-full columns-1 md:columns-3 pt-8">
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
  );
};
