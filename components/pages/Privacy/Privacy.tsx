import { useTranslation } from "next-i18next"
import Link from "next/link"
import { Fragment } from "react"
import { SectionTitle } from "../../shared/SectionTitle/SectionTitle"
import { Title } from "../../shared/Title/Title"

export const Privacy = (): JSX.Element => {
	const { t } = useTranslation()

	return (
		<Fragment>
			<Title>{t("privacy.title")}</Title>

			<p>
				<em>Última revisión: 27 de octubre de 2022.</em>
			</p>

			<p>
				El Titular de el sitio web Efemérides 2.0 (en adelante &quot;Este
				Sitio&quot;) se compromete a proteger y respetar su privacidad.
			</p>

			<p>
				Esta política (junto con nuestros{" "}
				<Link href="/pagina/aviso-legal">términos y condiciones</Link> y
				cualquier otro documento al que se refiere en los mismos) establece cómo
				procesamos los datos personales que obtenemos de usted, o que usted nos
				proporciona. Por favor lea lo siguiente para entender nuestros puntos de
				vista y nuestras prácticas con respecto a sus datos personales y cómo
				los trataremos.
			</p>

			<p>
				A través de Este Sitio no se recaban datos de carácter personal de las
				personas usuarias, ni se ceden a terceros.
			</p>

			<p>
				Con la finalidad de ofrecerle el mejor servicio y con el objeto de
				facilitar el uso, se analizan el número de páginas visitadas, el número
				de visitas, así como la actividad de las persona visitantes y su
				frecuencia de utilización. A estos efectos, el Titular de Este Sitio
				utiliza la información estadística elaborada por &quot;Cloudflare,
				Inc&quot; a través de su producto &quot;Web analytics&quot; y cuya
				política de privacidad se puede leer{" "}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.cloudflare.com/es-es/privacypolicy/"
				>
					aquí
				</a>
				.
			</p>

			<p>
				Este Sitio contiene enlaces a sitios web de terceros, cuyas políticas de
				privacidad son ajenas a la de Este Sitio. Al acceder a tales sitios web
				usted puede decidir si acepta sus políticas de privacidad y de cookies.
				Con carácter general, si navega por internet usted puede aceptar o
				rechazar las cookies de terceros desde las opciones de configuración de
				su navegador.
			</p>

			<SectionTitle>COOKIES</SectionTitle>

			<p>
				Este Sitio no utiliza cookies para recoger información de las personas
				usuarias, ni registra las direcciones IP de acceso. Puede obtener más
				información sobre el uso de cookies de Este Sitio en el siguiente
				enlace:
				<Link href="/pagina/cookies"> Política de cookies</Link>.
			</p>

			<SectionTitle>CAMBIOS EN NUESTRA POLÍTICA DE PRIVACIDAD</SectionTitle>

			<p>
				Revisamos periódicamente nuestra política de privacidad y cualquier
				cambio que podamos efectuar en el futuro se publicará en esta página.
				Por favor, consúltela con frecuencia para ver las actualizaciones o
				cambios en nuestra política de privacidad.
			</p>

			<SectionTitle>CONTACTO Y ACCESO A SU INFORMACIÓN</SectionTitle>

			<p>
				Si tiene alguna pregunta, comentario o petición relacionada con esta
				política de privacidad o para ejercer sus derechos, póngase en contacto
				con nuestro responsable de protección de datos. Email:
				contacto@efemerides20.com
			</p>
		</Fragment>
	)
}
