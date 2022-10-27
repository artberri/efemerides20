import { useTranslation } from "next-i18next"
import { Fragment } from "react"
import { Title } from "../../shared/Title/Title"

export const Cookies = (): JSX.Element => {
	const { t } = useTranslation()

	return (
		<Fragment>
			<Title>{t("cookies.title")}</Title>

			<p>
				<em>Última revisión: 27 de octubre de 2022.</em>
			</p>

			<p>
				El sitio web Efemérides 2.0 (en adelante &quot;Este Sitio&quot;) no
				utiliza cookies para recoger información de las personas usuarias.
			</p>

			<p>
				Este Sitio contiene enlaces a sitios web de terceros, cuyas políticas de
				privacidad son ajenas a la de este Sitio. Al acceder a tales sitios web
				usted puede decidir si acepta sus políticas de privacidad y de cookies.
				Con carácter general, si navega por internet usted puede aceptar o
				rechazar las cookies de terceros desde las opciones de configuración de
				su navegador.
			</p>
		</Fragment>
	)
}
