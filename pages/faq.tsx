import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { Fragment } from "react";
import { Answer } from "../components/Answer/Answer";
import { Head } from "../components/Head/Head";
import { Page } from "../components/Page/Page";
import { Question } from "../components/Question/Question";
import { Title } from "../components/Title/Title";
import { useAbsolutePath } from "../hooks/useAbsolutePath";
import { makeStaticProps } from "../utils/makeStaticProps";

const Static: NextPage = () => {
  const { t } = useTranslation();
  const { path } = useAbsolutePath();

  return (
    <Fragment>
      <Head
        title={`${t("faq.title")} - ${t("title")}`}
        canonical={path("/faq")}
      />

      <Page
        breadcrumps={{
          current: t("faq.breadcrump"),
          previous: [["/", t("home.breadcrump")]],
        }}
      >
        <Title>{t("faq.title")}</Title>
        <Question>¿Por qué se llama Efemerides 2.0?</Question>
        <Answer>
          Porque no somos la típica página de efemérides. No pretendemos crear
          una nueva base de datos de Efemérides sino que reutilizamos los datos
          existentes en la Wikipedia, los clasificamos y los ponemos disponibles
          de una manera más estructurada mediante nuestra API. Bueno, por eso y
          porque nacimos en aquel año en el que todo tenía que llamarse 2.0 ;)
        </Answer>
        <Question>
          ¿De dónde procede la información y bajo que licencia está?
        </Question>
        <Answer>
          El contenido sobre efemérides, nacimientos y defunciones disponible en
          esta web está bajo los términos de la{" "}
          <a href="http://es.wikipedia.org/wiki/Wikipedia:Texto_de_la_Licencia_de_documentaci%C3%B3n_libre_de_GNU">
            Licencia de documentación libre de GNU
          </a>
          . Éste contenido ha sido recogido de la{" "}
          <a href="http://es.wikipedia.org/">Wikipedia</a>.
        </Answer>
        <Question>¿Puedo insertar una efeméride?</Question>
        <Answer>
          Estaremos encantados de que nos ayudes a aumentar nuestra base de
          datos, pero no queremos que sea nuestra, sino de todos y por eso nos
          gusta la Wikipedia. Allí ya existe una comunidad que se encarga de
          mantener, actualizar y filtrar las efemérides importantes. Duplicar
          esfuerzos no nos parece muy productivo, por lo que si quieres añadir
          una efeméride importante es mejor que edites la página correspondiente
          al día en la <a href="http://es.wikipedia.org/">Wikipedia</a>.
        </Answer>
        <Question>
          ¿Puedo poner estas efemérides en mi página web o blog?
        </Question>
        <Answer>
          Sí. Pero sentimos decir que nuestra API ya no está disponible, por lo
          que el deberás hacerlo de forma manual.
        </Answer>
        <Question>¿Tienes alguna sugerencia o duda?</Question>
        <Answer>
          Puedes enviar un mail a la dirección:{" "}
          <em>contacto[at]efemerides20[dot]com</em>
        </Answer>
      </Page>
    </Fragment>
  );
};

export const getStaticProps = makeStaticProps();

export default Static;