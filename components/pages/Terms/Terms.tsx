import { useTranslation } from "next-i18next"
import Link from "next/link"
import { Fragment } from "react"
import { SectionTitle } from "../../shared/SectionTitle/SectionTitle"
import { Title } from "../../shared/Title/Title"

export const Terms = (): JSX.Element => {
	const { t } = useTranslation()

	return (
		<Fragment>
			<Title>{t("tos.title")}</Title>

			<p>
				<em>Última revisión: 27 de octubre de 2022.</em>
			</p>

			<SectionTitle>Información sobre el titular</SectionTitle>

			<p>
				El sitio web Efemérides 2.0 (en adelante &quot;Este Sitio&quot;), cuyo
				titular es Alberto Varela Sánchez (&quot;El Titular&quot;), con
				domicilio en Plaza Celestino María del Arenal, 10 - 48015, Bilbao; con
				D.N.I. nº <span className="whitespace-nowrap">7 2 4 0 0 2 3 1 A</span>,
				está constituido por los sitios web asociados a los dominios
				efemerides20.com.
			</p>
			<p>Este Sitio ofrece información sobre efemérides pasadas.</p>

			<SectionTitle>Otros documentos aplicables</SectionTitle>

			<ul>
				<li>
					<Link href="/pagina/privacidad">Nuestra Política de Privacidad</Link>,
					que establece los términos en los que procesamos cualquier dato
					personal que recopilamos o que usted nos proporcione.
				</li>
				<li>
					<Link href="/pagina/cookies">Nuestra Política de Cookies</Link>, que
					establece información sobre las cookies en nuestro sitio.
				</li>
			</ul>

			<SectionTitle>Cambios en este Aviso legal</SectionTitle>

			<p>
				Desde Efemerides 2.0 podemos revisar y modificar este Aviso legal en
				cualquier momento. Por favor, consulte esta página con asiduidad para
				tomar nota de cualquier cambio que podamos hacer.
			</p>

			<SectionTitle>Responsabilidad de los contenidos</SectionTitle>

			<p>
				El Titular no se hace responsable de la legalidad de otros sitios web de
				terceros desde los que pueda accederse al portal. El Titular tampoco
				responde por la legalidad de otros sitios web de terceros, que pudieran
				estar vinculados o enlazados desde este portal.
			</p>
			<p>
				El Titular se reserva el derecho a realizar cambios en el sitio web sin
				previo aviso, al objeto de mantener actualizada su información,
				añadiendo, modificando, corrigiendo o eliminando los contenidos
				publicados o el diseño del portal. Tenga en cuenta, sin embargo, que
				cualquier contenido de nuestro sitio puede estar desactualizado en
				cualquier momento, y no tenemos ninguna obligación de actualizarlo. No
				garantizamos que nuestro sitio, o cualquier contenido en él, esté libre
				de errores u omisiones.
			</p>
			<p>
				El Titular no será responsable del uso que terceros hagan de la
				información publicada en el portal, ni tampoco de los daños sufridos o
				pérdidas económicas que, de forma directa o indirecta, produzcan o
				puedan producir perjuicios económicos, materiales o sobre datos,
				provocados por el uso de dicha información.
			</p>

			<SectionTitle>Propiedad intelectual e industrial</SectionTitle>
			<p>
				El diseño del portal y su código fuente, así como los logos, marcas y
				demás signos distintivos que aparecen en el mismo pertenecen al Titular
				y están protegidos por los correspondientes derechos de propiedad
				intelectual e industrial.
			</p>

			<p>
				El Titular es propietario o licenciatario de todos los derechos de
				propiedad intelectual (incluidos, entre otros, código fuente, textos,
				gráficos, logotipos, iconos, fotografías e imágenes, clips de audio,
				archivos digitales, compilaciones de datos, herramientas y software)
				publicados en Este Sitio, a excepción de:
			</p>

			<ul>
				<li>
					<strong>
						El contenido sobre efemérides, nacimientos y defunciones
					</strong>{" "}
					disponible en Este Sitio que está bajo los términos de la{" "}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://es.wikipedia.org/wiki/Wikipedia:Texto_de_la_Licencia_de_documentaci%C3%B3n_libre_de_GNU"
					>
						Licencia de documentación libre de GNU
					</a>{" "}
					y que ha sido recogido de la{" "}
					<a
						href="https://es.wikipedia.org/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Wikipedia
					</a>
					.
				</li>
				<li>
					<strong>El código fuente de las librerías de terceros</strong>{" "}
					utilizadas para la realización de Este Sitio. Éste se puede consultar
					en el{" "}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/artberri/efemerides20"
					>
						siguiente enlace
					</a>{" "}
					dónde se publica integro el código fuente propio de Este Sitio y dónde
					se referencian esas librerías.
				</li>
			</ul>

			<SectionTitle>Información no vinculante</SectionTitle>

			<p>
				El contenido de nuestro sitio se proporciona sólo para información
				general y no de manera vinculante. Puede obtener asesoramiento
				profesional o especializado antes de realizar cualquier acción basada en
				el contenido de nuestro sitio. Aunque nos esforzamos en actualizar la
				información, no ofrecemos garantías, expresas o implícitas, de que el
				contenido de nuestro sitio sea exacto, completo o actualizado.
			</p>

			<SectionTitle>Vinculación a nuestro sitio</SectionTitle>

			<p>
				Puede vincular a nuestra página, siempre y cuando lo haga de una manera
				que sea justa y legal y no dañe nuestra reputación o no se aproveche de
				ella. Usted no debe establecer un enlace de tal manera que sugiera
				cualquier forma de asociación o aprobación de nuestra parte cuando no
				exista.
			</p>

			<SectionTitle>Jurisdicción y ley aplicable</SectionTitle>

			<p>
				La ley aplicable en caso de disputa o conflicto de interpretación de los
				términos que conforman este aviso legal, así como cualquier cuestión
				relacionada con los servicios del presente sitio web, será la ley
				española.
			</p>

			<SectionTitle>Contáctenos</SectionTitle>

			<p>
				Para ponerse en contacto con nosotros, envíe un correo electrónico a
				contacto@efemerides20.com. Gracias por visitar nuestro sitio.
			</p>
		</Fragment>
	)
}
