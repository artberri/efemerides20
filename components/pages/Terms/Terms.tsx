import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Fragment } from "react";
import { SectionTitle } from "../../shared/SectionTitle/SectionTitle";
import { Title } from "../../shared/Title/Title";

export const Terms = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Title>{t("tos.title")}</Title>

      <p>
        POR FAVOR, LEA ATENTAMENTE ESTOS TÉRMINOS Y CONDICIONES ANTES DE SEGUIR
        USANDO ESTA WEB
      </p>

      <p>
        <em>Última modificación: 8 de agosto de 2017.</em>
      </p>

      <SectionTitle> 1. Términos de uso del sitio web (Términos)</SectionTitle>

      <p>
        Estos Términos (junto con los documentos a los que se hace referencia en
        este documento) le informan sobre los términos en los que puede hacer
        uso de nuestro sitio web efemerides20.com (nuestro sitio), ya sea como
        visitante o como usuario registrado. El uso de nuestro sitio incluye
        acceso, navegación o registro.
      </p>
      <p>
        Lea estos Términos atentamente antes de empezar a utilizar nuestro
        sitio, ya que estos se aplicarán a su uso. Al utilizar nuestro sitio,
        confirma que conoce estos Términos y que acepta cumplir con ellos.
      </p>

      <SectionTitle> 2. Otros términos aplicables</SectionTitle>

      <p>
        Estos Términos generales se refieren a los siguientes términos
        adicionales, que también se incluyen en el uso de nuestro sitio:
      </p>
      <ul>
        <li>
          <Link href="/pagina/privacidad">
            <a>Nuestra Política de Privacidad</a>
          </Link>
          , que establece los términos en los que procesamos cualquier dato
          personal que recopilamos o que usted nos proporcione. Al utilizar
          nuestro sitio, da su consentimiento a dicho procesamiento de datos y
          garantiza que toda la información proporcionada por usted es correcta
          y exacta.
        </li>
        <li>
          <Link href="/pagina/cookies">
            <a>Nuestra Política de Cookies</a>
          </Link>
          , que establece información sobre las cookies en nuestro sitio.
        </li>
      </ul>

      <SectionTitle> 3. Información sobre el titular</SectionTitle>

      <p>
        La web efemerides20.com es un sitio operado por Alberto Varela Sánchez
        (&quot;nosotros&quot;), con domicilio en Plaza Celestino María del
        Arenal, 10 - 48015, Bilbao; con N.I.F. nº{" "}
        <span className="whitespace-nowrap">7 2 4 0 0 2 3 1 A</span>.
      </p>
      <p>Nuestra web ofrece información sobre efemérides pasadas.</p>

      <SectionTitle> 4. Cambios en estos términos</SectionTitle>

      <p>
        Desde Efemerides 2.0 podemos revisar y modificar estos Términos en
        cualquier momento. Por favor, consulte esta página con asiduidad para
        tomar nota de cualquier cambio que podamos hacer. Tras la modificación,
        estos cambios son vinculantes.
      </p>

      <SectionTitle> 5. Cambios en nuestro sitio</SectionTitle>

      <p>
        Podemos actualizar nuestra web o cambiar el contenido en cualquier
        momento. Tenga en cuenta, sin embargo, que cualquier contenido de
        nuestro sitio puede estar desactualizado en cualquier momento, y no
        tenemos ninguna obligación de actualizarlo. No garantizamos que nuestro
        sitio, o cualquier contenido en él, esté libre de errores u omisiones.
      </p>

      <SectionTitle> 6. Acceso a nuestra página web</SectionTitle>

      <p>
        No garantizamos que nuestra web, o cualquier contenido en ella, esté
        siempre disponible o sea ininterrumpido y su acceso está permitido
        temporalmente. Podemos suspender, retirar, interrumpir o cambiar toda o
        cualquier parte de nuestro contenido y servicios sin previo aviso. No
        seremos responsables ante el usuario si por alguna razón nuestro sitio
        no está disponible en cualquier momento o durante un período.
      </p>
      <p>
        El usuario es responsable de hacer todo lo posible para tener acceso a
        la página web. También es responsable de asegurar que todas las personas
        que accedan a nuestro sitio web a través de su conexión a Internet son
        conscientes de estos Términos y otros términos y condiciones específicos
        aplicables, y que cumplen con ellos.
      </p>

      <SectionTitle> 7. Su cuenta y contraseña</SectionTitle>

      <p>
        Cuando registre una cuenta de usuario en nuestro sitio web, se le pedirá
        que proporcione su email. Dicha información debe ser verdadera y precisa
        y debe asegurarse de mantenerla actualizada.
      </p>
      <p>
        Al utilizar nuestra web garantiza que tiene una edad mínima de 18 años.
      </p>
      <p>
        Si decide utilizar nuestro sitio y registrarse como usuario o solictar
        una API key, se le proporcionará un código de identificación de usuario
        y una contraseña o una clave de API. También se le puede pedir que
        proporcione más información como parte de nuestros procedimientos de
        seguridad. Debe tratar cualquier información como confidencial y no debe
        divulgarlo a ningún tercero.
      </p>
      <p>
        Tenemos el derecho de desactivar cualquier código de identificación del
        usuario o contraseña o clave de API si, con una razón justificada,
        entendemos que el usuario ha incumplido con cualquiera de las
        disposiciones de estos Términos.
      </p>
      <p>
        Si sabe o sospecha que alguien más conoce su código de identificación de
        usuario o contraseña o clave de API, debe notificarnos en el menor plazo
        posible a contacto@efemerides20.com.
      </p>

      <SectionTitle> 8. El uso de nuestro sitio</SectionTitle>

      <p>
        Puede utilizar nuestro sitio únicamente con fines legales. No puede usar
        nuestra web con los siguientes fines:
      </p>

      <ul>
        <li>
          De cualquier manera que viole cualquier ley o regulación local,
          nacional o internacional aplicable.
        </li>
        <li>
          De cualquier manera que sea ilegal o fraudulenta, o tenga cualquier
          propósito o efecto ilegal o fraudulento.
        </li>
        <li>
          Con el propósito de dañar o intentar dañar a menores de cualquier
          manera.
        </li>
        <li>
          Enviar, recibir, cargar, descargar, usar o reutilizar a sabiendas
          cualquier material que no cumpla con nuestros estándares de contenido.
        </li>
        <li>
          Transmitir o adquirir el envío de cualquier material publicitario o
          promocional no solicitado o no autorizado o cualquier otra forma de
          difusión similar (spam).
        </li>
        <li>
          Transmitir a sabiendas cualquier dato, envío o carga de cualquier
          material que contenga cualquier tipo de virus, troyanos, bombas de
          tiempo, gusanos, ‘key loggers’, ‘spyware’, ‘adware’ o cualquier otro
          programa dañino diseñado para dañar ente el funcionamiento de
          cualquier software o hardware.
        </li>
      </ul>

      <p>Al aceptar estos térmisno también está de acuerdo en:</p>

      <ul>
        <li>
          No reproducir, duplicar, copiar o revender cualquier parte de nuestra
          página web que afecte a las disposiciones de estos Términos.
        </li>
        <li>
          No acceder sin autorización, interferir, dañar o interrumpir cualquier
          parte de nuestro sitio web; así como cualquier equipo o red en la que
          se almacene nuestro sitio, cualquier software utilizado en la
          provisión de nuestro sitio, o cualquier equipo, red o software de
          nuestra propiedad o utilizado por terceros.
        </li>
      </ul>

      <SectionTitle> 9. Servicios interactivos</SectionTitle>

      <p>
        En el caso de que proporcionemos cualquier servicio interactivo en
        nuestra web incluyendo (sin limitación) blogs, salas de chat, o tablones
        de anuncios, no tenemos ninguna obligación de supervisar o moderar los
        contenidos y excluimos expresamente nuestra responsabilidad por
        cualquier pérdida o daños derivados del uso de cualquier servicio
        interactivo por un usuario que contravenga nuestros estándares de
        contenido establecidos en el siguiente párrafo (normas de contenido). El
        uso de cualquier servicio interactivo por parte de un menor está sujeto
        al consentimiento de su padre o tutor.
      </p>

      <SectionTitle> 10. Derechos de propiedad intelectual</SectionTitle>

      <p>
        Somos propietarios o licenciatarios de todos los derechos de propiedad
        intelectual (incluidos, entre otros, textos, gráficos, logotipos,
        iconos, fotografías e imágenes, clips de audio, archivos digitales,
        compilaciones de datos, herramientas y software) publicados en nuestra
        web, excepto el contenido sobre efemérides, nacimientos y defunciones
        disponible en esta web que está bajo los términos de la
        <a href="http://es.wikipedia.org/wiki/Wikipedia:Texto_de_la_Licencia_de_documentaci%C3%B3n_libre_de_GNU">
          Licencia de documentación libre de GNU
        </a>{" "}
        y que ha sido recogido de la{" "}
        <a href="http://es.wikipedia.org/">Wikipedia</a>. Ninguna de estas
        condiciones le transfiere o le asigna a usted ninguno de nuestros
        derechos de propiedad intelectual respecto a nuestra tecnología,
        productos, servicios o nuestra web. Todos los derechos están reservados.
        Estos términos no le otorgan una licencia a ningún software. Nuestras
        marcas comerciales no pueden ser utilizadas de ninguna manera excepto
        como está expresamente permitido aquí o con nuestro consentimiento
        expreso por escrito.
      </p>
      <p>
        Usted nos indemnizará contra cualquier pérdida, daños, costos, gastos
        (incluyendo honorarios legales razonables) u otras reclamaciones
        derivadas de cualquier infracción de las garantías mencionadas
        anteriormente.
      </p>

      <SectionTitle> 11. Información no vinculante</SectionTitle>

      <p>
        El contenido de nuestro sitio se proporciona sólo para información
        general y no de manera vinculante. Puede obtener asesoramiento
        profesional o especializado antes de realizar cualquier acción basada en
        el contenido de nuestro sitio. Aunque nos esforzamos en actualizar la
        información, no ofrecemos garantías, expresas o implícitas, de que el
        contenido de nuestro sitio sea exacto, completo o actualizado.
      </p>

      <SectionTitle> 12. Limitación de nuestra responsabilidad</SectionTitle>

      <p>
        Ninguna de estas condiciones excluye o limita nuestra responsabilidad
        por muerte o lesiones personales derivadas de nuestra negligencia,
        fraude o declaración falsa fraudulenta, o cualquier otra responsabilidad
        que la ley española no pueda excluir o limitar.
      </p>
      <p>
        No seremos responsables ante ningún usuario de ninguna pérdida o daño,
        ya sea en contrato, agravio (incluyendo negligencia), incumplimiento de
        deber estatutario, o de otra manera, incluso previsible, que surja en o
        en conexión con el uso de, o incapacidad para usar, nuestro sitio; o el
        uso de o la confianza en cualquier contenido que se muestra en nuestro
        sitio.
      </p>
      <p>
        Tenga en cuenta que, en particular, no seremos responsables de la
        pérdida de beneficios, ventas, negocios o ingresos; interrupción del
        negocio; pérdida de ahorros previstos; pérdida de oportunidad de
        negocio, buena voluntad o reputación; o cualquier pérdida, costo, gasto,
        daño u otras reclamaciones indirectas o consecuentes (ya sea causada por
        nuestra negligencia, empleados, agentes o de otro tipo) que surjan de o
        en conexión con la provisión del material.
      </p>
      <p>
        No seremos responsables de ninguna pérdida o daño causado por un virus,
        ataque distribuido de denegación de servicio u otro material dañino en
        la tecnología que pueda infectar su equipo informático, programas
        informáticos, datos u otro material de propiedad debido al uso de
        nuestro sitio o a la descarga de cualquier contenido, o en cualquier
        sitio web vinculado a nosotros.
      </p>
      <p>
        No asumimos ninguna responsabilidad por el contenido de los sitios web
        enlazados en nuestro sitio ni deben ser interpretados como apoyo o
        respaldo de esos sitios web enlazados. No seremos responsables de
        ninguna pérdida o daño que pueda surgir del uso de los mismos. La
        aceptación de sus términos y condiciones, también actuará como una
        liberación general por nuestra parte y cualquiera de nuestras
        subsidiarias (y todos sus directivos, directores, agentes y empleados)
        de cualquier responsabilidad por cualquier reclamación, pérdida, daño
        (tanto directo como indirecto, incluyendo pérdida de beneficios, buena
        voluntad y oportunidad de negocio) que surjan de o de alguna manera
        relacionados con el uso de nuestro sitio.
      </p>
      <p>
        En la medida permitida por la ley, excluimos todas las condiciones,
        garantías, representaciones u otros términos que puedan aplicarse a
        nuestro sitio o cualquier contenido de éste, ya sea expreso o implícito.
      </p>

      <SectionTitle> 13. Indemnidad</SectionTitle>

      <p>
        Usted nos indemnizará (así como a nuestros afiliados, socios, productos
        derivados, respectivos directores, funcionarios y empleados) y nos
        mantendrá a salvo, de y contra cualquier pérdida, daños, costos, gastos
        (incluyendo honorarios legales razonables) u otros reclamos derivados de
        cualquier incumplimiento por su parte de cualquiera de los Términos. Nos
        reservamos el derecho, a nuestro costo, de asumir la defensa y control
        exclusivo de cualquier asunto sujeto a indemnización.
      </p>

      <SectionTitle> 14. Seguridad</SectionTitle>

      <p>
        Usted es responsable de proteger la confidencialidad de su cuenta y
        contraseña o clave API. Debe notificarnos inmediatamente cualquier uso
        no autorizado de ellos o cualquier otro incumplimiento de seguridad.
      </p>
      <p>
        No garantizamos que nuestro sitio sea seguro o libre de errores o virus.
        Usted es el responsable de configurar su tecnología de información,
        programas y plataforma informática para acceder a nuestro sitio. Usted
        debe usar su propio software de protección contra virus.
      </p>
      <p>
        No debe intentar obtener acceso no autorizado a nuestro sitio, al
        servidor en el que se almacena nuestro sitio o a cualquier servidor,
        ordenador o bases de datos conectadas a nuestro sitio web. No debe
        atacar nuestro sitio a través de un ataque de denegación de servicio o
        un ataque distribuido de denegación de servicio. Informaremos de
        cualquier incumplimiento a las autoridades policiales pertinentes y
        cooperaremos con esas autoridades revelándoles su identidad. En el caso
        de que se produzca tal incumplimiento, su derecho a utilizar nuestro
        sitio cesará inmediatamente.
      </p>
      <p>
        Cualquier pérdida incurrida o sostenida por usted en la información
        transmitida será su responsabilidad exclusiva y en ningún caso dichas
        pérdidas serán total o parcialmente asumidas por nosotros.
      </p>

      <SectionTitle> 15. Vinculación a nuestro sitio</SectionTitle>

      <p>
        Puede vincular a nuestra página, siempre y cuando lo haga de una manera
        que sea justa y legal y no dañe nuestra reputación o no se aproveche de
        ella. Usted no debe establecer un enlace de tal manera que sugiera
        cualquier forma de asociación o aprobación de nuestra parte cuando no
        exista.
      </p>

      <SectionTitle>
        16. Enlaces y recursos de terceros en nuestro sitio
      </SectionTitle>

      <p>
        No tenemos ningún control, no aceptamos ninguna responsabilidad y no
        ofrecemos ninguna garantía con respecto a enlaces de terceros y recursos
        proporcionados en nuestro sitio. Si nuestro sitio contiene enlaces a
        otros sitios y recursos proporcionados por terceros, estos enlaces se
        proporcionan únicamente para su información.
      </p>

      <SectionTitle> 17. Suspensión y conclusiones</SectionTitle>

      <p>
        Nos reservamos el derecho a nuestra voluntad para determinar si ha
        habido un incumplimiento de estos Términos a través de su uso de nuestro
        sitio. Cuando haya ocurrido un incumplimiento de estos Términos, podemos
        tomar las medidas que consideremos apropiadas.
      </p>
      <p>
        El incumplimiento constituye un incumplimiento material de estas
        Condiciones en las que está autorizado a utilizar nuestro sitio y puede
        dar como resultado que tomemos todas o alguna de las siguientes
        acciones:
      </p>
      <ul>
        <li>
          Retiro inmediato, temporal o permanente de su derecho a utilizar
          nuestro sitio.
        </li>
        <li>
          Eliminación inmediata, temporal o permanente de cualquier publicación
          o material cargado por usted en nuestro sitio.
        </li>
        <li>Emisión de una advertencia.</li>
        <li>
          Procesos legales por el reembolso de todos los costos sobre una base
          de indemnización (incluyendo, pero no limitado a, costos
          administrativos y legales razonables) como resultado del
          incumplimiento.
        </li>
        <li>Otras acciones legales contra usted.</li>
        <li>
          Divulgación de dicha información a las autoridades policiales que
          razonablemente creamos que es necesario.
        </li>
      </ul>
      <p>
        Excluimos la responsabilidad por las acciones tomadas en respuesta a
        incumplimientos de estos Términos. Las respuestas descritas en estos
        Términos no están limitadas y podemos tomar cualquier otra acción que
        razonablemente consideremos apropiada.
      </p>

      <SectionTitle> 18. Comunicación electrónica</SectionTitle>

      <p>
        Para propósitos contractuales, usted acepta recibir comunicaciones
        electrónicas y acepta que todos los acuerdos, notificaciones,
        revelaciones y otras comunicaciones que le proporcionamos
        electrónicamente satisfacen cualquier requisito legal de que dichas
        comunicaciones sean por escrito. Por cada mensaje de correo electrónico
        enviado en conexión con su uso de nuestro sitio, usted reconoce y acepta
        que el destinatario ha acordado recibir dicha comunicación.
      </p>

      <SectionTitle> 19. Términos de uso de la API</SectionTitle>

      <p>
        <strong>19.1. Aplicación</strong>
      </p>

      <p>
        La siguiente política (punto 10 completo de los términos de uso)
        establece los términos y condiciones para usar las API y el Contenido de
        Efemerides 2.0 disponible de las API de Efemerides 2.0 en conexión con
        Tus aplicaciones. Al usar las API de Efemerides 2.0, aceptas estos
        Términos de uso de API sin modificaciones.
      </p>

      <p>
        <strong>19.2. Propiedad</strong>
      </p>

      <p>
        El Contenido del sitio transmitido en conexión con las API de Efemerides
        2.0 está bajo los términos de la
        <a href="http://es.wikipedia.org/wiki/Wikipedia:Texto_de_la_Licencia_de_documentaci%C3%B3n_libre_de_GNU">
          Licencia de documentación libre de GNU
        </a>{" "}
        y que ha sido recogido de la{" "}
        <a href="http://es.wikipedia.org/">Wikipedia</a>. Recuérdalo cuando
        estés diseñando tu aplicación. No hagas nada que pueda menoscabar el
        Contenido del sitio o incumplir la licencia.
      </p>

      <p>
        <strong>19.3. Atribución</strong>
      </p>

      <p>
        Debes usar tu nombre propio, el nombre de tu empresa, los logotipos,
        marcas comerciales o nombres de aplicaciones en conexión con Tus
        aplicaciones y no los logotipos, marcas comerciales o nombres de
        aplicaciones de Efemerides 2.0. En cualquier caso, Tus aplicaciones
        deben crearse de una forma que deje bien claro a los Usuarios que no
        pertenecen a Efemerides 2.0 y que Efemerides 2.0 ni las desarrolla ni
        las controla. Si tienes preguntas sobre esto, envíanos un correo
        electrónico a contacto@efemerides20.com.
      </p>

      <p>
        <strong>19.4. Responsabilidad</strong>
      </p>

      <p>
        Eres el único responsable de Tu aplicación y de cualquier uso que los
        Usuarios realicen de Tu aplicación. Entre otras cosas, esto significa
        que eres responsable de mantener tus propio acuerdo con el usuario y tu
        propia política de privacidad para los usuarios de Tu aplicación y del
        cumplimiento de esas políticas. Tu acuerdo con el usuario debe permitir
        que tú y los usuarios de Tu aplicación cumpláis los Términos de
        servicio, incluidos sin limitaciones estos Términos de uso de API y la
        Política de privacidad de Efemerides 2.0. Tu política de privacidad debe
        ser, como mínimo, tan protectora de los Datos personales como la
        Política de privacidad de Efemerides 2.0. En general, esperamos que seas
        responsable y considerado y que no abuses de nuestros datos de Usuario.
      </p>

      <p>
        <strong>19.5. Licencia</strong>
      </p>

      <p>
        Sujeto a los términos y condiciones de este documento, Efemerides 2.0 te
        concede un derecho limitado personal, no exclusivo, no transferible, no
        sublicenciable, revocable (de acuerdo con la Sección 19.6 a
        continuación) para acceder a y usar las API de Efemerides 2.0 para
        desarrollar, probar y ofrecer compatibilidad con Tu aplicación y para
        distribuir o permitir el acceso a tu integración de las API de
        Efemerides 2.0 en Tu aplicación a usuarios finales de Tu aplicación, en
        cada caso, (a) conforme a los Términos de Uso, incluidos sin
        limitaciones, estos Términos de uso de API y (b) en la medida en la que
        lo permitan todas las leyes y normativas aplicables (locales, estatales,
        provinciales y nacionales) y otras leyes y normativas. No tienes ningún
        derecho a distribuir o permitir el acceso a las API independientes de
        Efemerides 2.0. Todos los derechos que no se te otorguen expresamente
        están reservados por Efemerides 2.0.
      </p>

      <p>
        <strong>19.6. Rescisión de licencia</strong>
      </p>

      <p>
        Puedes rescindir la licencia y tu acceso a las API de Efemerides 2.0 y
        su uso dejando de utilizar todas las API de Efemerides 2.0 y cerrando tu
        cuenta de desarrollador de API. Efemerides 2.0 puede poner fin a tu
        acceso a las API de Efemerides 2.0 y su uso en cualquier momento sin
        previo aviso, (a) por tu infracción o incumplimiento de los Términos de
        servicio, incluidos sin limitaciones estos Términos de uso, (b) por tu
        uso indebido o tu abuso de las API de Efemerides 2.0, (c) por el cese
        unilateral del servicio por parte de Efemerides 2.0 o (d) si el hecho de
        permitirte el acceso a los Servicios y su uso pudiera infringir alguna
        ley, normativa o reglamento local, estatal, provincial o nacional o
        exponer a Efemerides 2.0 a responsabilidades jurídicas.
      </p>

      <p>
        <strong>19.7. Límite de frecuencia</strong>
      </p>

      <p>
        Existe un límite de frecuencia y una restricción a los campos de datos
        mostrados por aplicación o servicio que utilicen las API de Efemerides
        2.0 y tú aceptas que cumplirás el límite de frecuencia y la restricción
        a los campos de datos en todo momento. El límite de frecuencia es de 10
        llamadas por hora. Estos límites y restricciones de frecuencia están
        sujetos a cambios ocasionales a discreción de Efemerides 2.0, con
        entrada en vigor inmediatamente tras su publicación. Tu uso de cualquier
        método con la intención de subvertir los límites de frecuencia o de las
        restricciones de campos de datos constituye una infracción de estos
        Términos de uso de API. Si necesitas más llamadas o un límite más
        elevado, basta con que nos envíes un correo electrónico a
        contacto@efemerides20.com y nos proporciones una explicación. Nosotros
        determinaremos si se debe aumentar tu límite de frecuencia.
      </p>

      <p>
        <strong>19.8. Renuncia</strong>
      </p>

      <p>
        El Contenido que obtengas de los Servicios a través de Tu aplicación es
        Contenido proporcionado por terceros. Como tal, Efemerides 2.0 no hace
        ninguna representación ni garantiza la precisión, autenticidad,
        integridad o legalidad del Contenido obtenido de las API de Efemerides
        2.0, que usas en su totalidad bajo tu propia cuenta y riesgo.
      </p>

      <p>
        <strong>19.9. No exclusividad</strong>
      </p>

      <p>
        Reconoces y aceptas que estos Términos de uso de API y la licencia y
        otros derechos otorgados por el presente documento no crean una relación
        exclusiva entre tú y Efemerides 2.0. Efemerides 2.0 puede, o puede
        participar o puede permitir que otros, desarrollen aplicaciones que sean
        las mismas o similares a Tu aplicación para cualquier finalidad,
        incluido sin limitación cualquier fin comercial.
      </p>
      <p>
        <strong>19.10. Asistencia</strong>
      </p>

      <p>
        Efemerides 2.0 se reserva el derecho a cambiar, suspender o suprimir
        cualquier aspecto de las API de Efemerides 2.0 en cualquier momento,
        incluida la disponibilidad de cualquier API de Efemerides 2.0.
      </p>
      <p>
        <strong>19.11. Tarifas y pagos</strong>
      </p>

      <p>
        Efemerides 2.0 se reserva el derecho a cobrar tarifas por el acceso o
        uso futuro de la API de Efemerides 2.0 a discreción de Efemerides 2.0.
        Si Efemerides 2.0 decide cobrar por cualquiera de las APIs de Efemerides
        2.0, no tienes ninguna obligación de seguir usando tales APIs de
        Efemerides 2.0.
      </p>

      <SectionTitle> 20. Otros</SectionTitle>

      <p>
        Usted acepta cumplir con todas las leyes, estatutos y reglamentos
        aplicables en relación con el uso de nuestro sitio.
      </p>
      <p>
        En cualquier acción o procedimiento para hacer cumplir los derechos bajo
        estas Condiciones, la parte que prevalece tendrá derecho a recuperar los
        costos y honorarios legales.
      </p>
      <p>
        Si alguna parte de estas Condiciones se encuentra inaplicable
        (incluyendo cualquier provisión en la cual excluimos nuestra
        responsabilidad para con usted) la aplicabilidad de cualquier otra parte
        de estos Términos no se verá afectada y permanecerá en vigor.
      </p>
      <p>
        Estos Términos contienen todo el acuerdo entre nosotros en relación con
        el tema tratado y sustituyen cualquier acuerdo, compromiso o propuesta
        anterior, escrito u oral, entre nosotros en relación con tales asuntos o
        cualquier declaración hecha por usted, incluyendo (sin Limitación) a
        cualquiera de nuestros empleados o agentes. Excepto por fraude o
        declaración falsa fraudulenta, no tendremos ninguna responsabilidad de
        que tal representación sea falsa o engañosa.
      </p>
      <p>
        Tendremos derecho a ceder, transferir o subcontratar de cualquier manera
        el beneficio o la carga de estos Términos a un tercero.
      </p>
      <p>
        Una renuncia por nuestra parte, o un incumplimiento de hacer cumplir o
        ejercer cualquiera de estos Términos, no se considerará o interpretará
        como una renuncia de cualquier término en el futuro, ni nuestros
        derechos serán afectados con respecto a cualquier incumplimiento
        posterior de los Términos. Todos los derechos y recursos contenidos en
        estos Términos serán distintos, separados y acumulativos, y ninguna
        acción o inacción por nuestra parte operará para excluir o privarnos de
        cualquier otro derecho permitido por la ley.
      </p>
      <p>
        Nadie más que una parte de estos Términos tendrá derecho a hacer cumplir
        cualquiera de sus términos.
      </p>
      <p>
        Nada en estos Términos constituirá una sociedad, agencia o empresa
        conjunta entre las partes.
      </p>

      <SectionTitle> 21. Jurisdicción y ley aplicable</SectionTitle>

      <p>
        Estos Términos, su materia y su formación, se rigen por la ley española.
        Usted y nosotros aceptamos irrevocablemente que los Tribunales de España
        tendrán jurisdicción no exclusiva en relación con cualquier controversia
        que surja o esté relacionada con estos Términos, su objeto o su
        formación (incluyendo cualquier disputa o demanda no contractual).
      </p>

      <SectionTitle> 22. Contáctenos</SectionTitle>

      <p>
        Para ponerse en contacto con nosotros, envíe un correo electrónico a
        contacto@efemerides20.com. Gracias por visitar nuestro sitio.
      </p>
    </Fragment>
  );
};
