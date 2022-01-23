import { useTranslation } from "next-i18next";
import { Fragment } from "react";
import { Title } from "../../shared/Title/Title";

export const Cookies = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Title>{t("cookies.title")}</Title>

      <p>
        <em>Última modificación: 1 de agosto de 2017.</em>
      </p>

      <p>
        El sitio web Efemerides 2.0 (El Sitio) utiliza cookies para distinguirle
        de otros usuarios de nuestra página web. Una cookie es un fichero que se
        descarga en su ordenador al acceder a determinadas páginas Web. Las
        cookies permiten a una página Web, entre otras cosas, almacenar y
        recuperar información sobre los hábitos de navegación de un Usuario o de
        su equipo y, dependiendo de la información que contengan y de la forma
        en que utilice su equipo, pueden utilizarse para reconocer al Usuario.
        Si continua navegando por la página, está aceptando el uso de cookies.
        Las cookies que puede utilizar un sitio Web son del siguiente tipo:
      </p>

      <ul>
        <li>
          Cookies propias: son aquellas que se envían al equipo terminal del
          Usuario desde un equipo o dominio gestionado por el propio editor y
          desde el que se presta el servicio solicitado por el Usuario.
        </li>
        <li>
          Cookies de terceros: son aquellas que se envían al equipo terminal del
          Usuario desde un equipo o dominio que no es gestionado por el editor,
          sino por otra entidad que trata los datos obtenidos a través de las
          cookies.
        </li>
        <li>
          Cookies de sesión: son un tipo de cookies diseñadas para recabar y
          almacenar datos mientras el Usuario accede a una página web.
        </li>
        <li>
          Cookies persistentes: son un tipo de cookies en el que los datos
          siguen almacenados en el terminal y pueden ser accedidos y tratados
          durante un periodo definido por el responsable de la cookie y que
          puede ir de unos minutos a varios años.
        </li>
        <li>
          Cookies de análisis: son aquéllas que bien tratadas por Efemerides 2.0
          o por terceros, nos permiten cuantificar el número de Usuarios y así
          realizar la medición y análisis estadístico de la utilización que
          hacen los Usuarios del servicio ofertado. Para ello se analiza su
          navegación en nuestra página web con el fin de mejorar la oferta de
          productos o servicios que le ofrecemos.
        </li>
        <li>
          Cookies publicitarias: son aquellas que permiten la gestión, de la
          forma más eficaz posible, de los espacios publicitarios que, en su
          caso, el editor haya incluido en una página web, aplicación o
          plataforma desde la que presta el servicio solicitado en base a
          criterios como el contenido editado o la frecuencia en la que se
          muestran los anuncios.
        </li>
        <li>
          Cookies de publicidad comportamental: son aquéllas que permiten la
          gestión, de la forma más eficaz posible, de los espacios publicitarios
          que, en su caso, el editor haya incluido en una página web, aplicación
          o plataforma desde la que presta el servicio solicitado. Estas cookies
          almacenan información del comportamiento de los Usuarios obtenida a
          través de la observación continuada de sus hábitos de navegación, lo
          que permite desarrollar un perfil específico para mostrar publicidad
          en función del mismo.
        </li>
      </ul>

      <p>
        Actualmente el presente sitio no utiliza cookies, más allá de las
        imprescindibles para posibilitar su navegación en el sitio, y las
        utilizadas por el servicio de Google Analytics, Twitter, Google Plus,
        Facebook, Addthis y Google AdSense, para la recogida de información
        estadística y analítica y relacionada con la inserción de publicidad
        comportamental. En ninguno de los dos casos, se recaban datos de
        carácter personal. Respecto a las cookies de terceros, los prestadores
        de servicios con los que hemos contratado algún servicio para el que es
        necesaria la utilización de cookies son:
      </p>

      <ul>
        <li>
          &quot;Efemerides 2.0&quot;: Las cookies propias de el sitio web
          Efemerides 2.0 son usadas para gestionar la sesión del usuario y el
          funcionamiento apropiado de la web. No guarda datos del usuario.
        </li>
        <li>
          &quot;Google Analytics&quot;: Herramienta de análisis que nos permite
          recoger datos a efectos estadísticos como: fecha de primera visita,
          número de veces que se ha visitado, fecha de la última visita, URL y
          dominio de la que proviene, explorador utilizado y resolución de la
          pantalla. También están habilitadas las funciones para anunciantes de
          Google Analytics, las cuales incluyen: remarketing con Google
          Analytics, informes de impresiones de la Red de Display de Google,
          informes de datos demográficos y de intereses de Google Analytics,
          servicios integrados que requieren Google Analytics para recopilar
          datos mediante las cookies de publicidad de Google y los
          identificadores anónimos. Para inhabilitar las cookies de Google
          Analytics haga clic aquí:
          <a href="https://tools.google.com/dlpage/gaoptout/">
            https://tools.google.com/dlpage/gaoptout/
          </a>
        </li>
        <li>
          &quot;Google AdSense&quot;: cuando un usuario accede a un sitio web
          adscrito al servicio de &quot;Google AdSense&quot; y hace clic en él
          se introduce una cookie en su navegador, a través de la cual
          &quot;Google&quot; recopila información de la navegación del Usuario
          para gestionar y luego publicar anuncios a través del programa de
          publicidad &quot;Google Adsense&quot;. El Usuario puede inhabilitar en
          cualquier momento el uso de la cookie de Google a través de la
          desactivación de la cookie en su navegador o a través de la
          <a href="http://www.google.com/settings/ads">
            Configuración de anuncios de Google
          </a>
          . (Google, Inc. 1600 Amphitheatre Parkway, Mountain View (California),
          CA 94043, USA.) Más información de las cookies de Google en:
          <a href="http://www.google.es/intl/es/policies/privacy/key-terms/#toc-terms-cookie">
            http://www.google.es/intl/es/policies/privacy/key-terms/#toc-terms-cookie
          </a>
        </li>
        <li>
          &quot;Addthis&quot;: Addthis usa cookies para identificar a los
          usuarios y personalizar los botones de compartir que ofrece su
          servicio basandose en su experiencia de navegación. Para obtener más
          información sobre la política de privacidad y las cookies de Addthis:
          <a href="http://www.addthis.com/privacy/privacy-policy">
            http://www.addthis.com/privacy/privacy-policy
          </a>
        </li>
        <li>
          &quot;Facebook&quot;: La finalidad de las cookies de Facebook es poder
          compartir contenidos en Facebook y retargetizar los Usuarios de
          nuestro Sitio Web para mostrar publicidad personalizada en futuras
          conexiones.
        </li>
        <li>
          &quot;Twitter&quot;: La finalidad de las cookies de Twitter es poder
          compartir contenidos en Twitter
        </li>
        <li>
          &quot;Google Plus&quot;: La finalidad de las cookies de Google Plus es
          poder compartir contenidos en Google Plus
        </li>
      </ul>

      <p>
        El Usuario puede aceptar o no la instalación de cookies, bloquear o
        eliminar las cookies instaladas en su equipo. En caso que no permita la
        instalación de cookies en su navegador es posible que no pueda acceder a
        alguna de las secciones de nuestro Sitio Web. EN los siguientes enlaces
        encontrará información de como deshabilitar cookies en diferentes
        navegadores:
      </p>

      <ul>
        <li>
          Chrome:{" "}
          <a href="http://support.google.com/chrome/bin/answer.ph?hl=es&amp;answer=95647">
            http://support.google.com/chrome/bin/answer.ph?hl=es&amp;answer=95647
          </a>
        </li>
        <li>
          Firefox:{" "}
          <a href="http://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=es-ES&amp;redirectslug=Cookies">
            http://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=es-ES&amp;redirectslug=Cookies
          </a>
        </li>
        <li>
          Internet Explorer:{" "}
          <a href="http://support.microsoft.com/kb/196955">
            http://support.microsoft.com/kb/196955
          </a>
        </li>
        <li>
          Safari Web:{" "}
          <a href="http://support.apple.com/kb/PH5042">
            http://support.apple.com/kb/PH5042
          </a>
        </li>
        <li>
          Safari iOs:{" "}
          <a href="http://support.apple.com/kb/HT1677">
            http://support.apple.com/kb/HT1677
          </a>
        </li>
      </ul>

      <p>
        Si lo desea, el Usuario también puede inhabilitar el uso de cookies de
        un proveedor tercero a través de la{" "}
        <a href="http://www.networkadvertising.org/managing/opt_out.asp">
          página de inhabilitación de Network Advertising Initiative
        </a>
        .
      </p>
    </Fragment>
  );
};
