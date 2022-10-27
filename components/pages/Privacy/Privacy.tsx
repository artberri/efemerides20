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
				<em>Última modificación: 1 de agosto de 2017.</em>
			</p>

			<p>
				El Titular de esta web se compromete a proteger y respetar su privacidad
			</p>

			<p>
				Esta política (junto con nuestros{" "}
				<Link href="/pagina/terminos">términos y condiciones</Link> y cualquier
				otro documento al que se refiere en los mismos) establece cómo
				procesamos los datos personales que obtenemos de usted, o que usted nos
				proporciona. Por favor lea lo siguiente para entender nuestros puntos de
				vista y nuestras prácticas con respecto a sus datos personales y cómo
				los trataremos. Cuando visite efemerides20.com está aceptando y
				consintiendo las prácticas descritas en esta política, a los efectos de
				la Ley de Protección de Datos de Carácter Personal 15/1999.
			</p>

			<SectionTitle>¿QUÉ INFORMACIÓN OBTENEMOS DE USTED?</SectionTitle>

			<p>Podemos recopilar y procesar los siguientes datos:</p>
			<p>
				<strong>La información que nos proporciona.</strong> Nos puede
				proporcionar información propia al completar formularios en nuestra
				página efemerides20.com (nuestra página) o por correspondencia con
				nosotros por teléfono, correo electrónico o de otra manera, o iniciando
				un carrito de compra. Esto incluye la información que proporciona cuando
				se registra para utilizar nuestra página, se suscribe a nuestro
				servicio, hace un pedido en nuestra página y cuando notifica un problema
				con nuestra página. La información que nos proporciona puede incluir su
				nombre, dirección, dirección de correo electrónico y número de teléfono,
				y otra información personal que decida compartir con nosotros.
			</p>
			<p>
				<strong>La información que recogemos sobre usted.</strong> Cada vez que
				visite nuestra página, podemos recopilar de forma automática la
				siguiente información:
			</p>
			<ul>
				<li>
					Información técnica, incluyendo la dirección de protocolo de Internet
					(IP) utilizada para conectar su ordenador a Internet, su información
					de acceso, tipo de navegador y versión, configuración de zona horaria,
					tipos de plug-in y versiones del navegador, sistema operativo y
					plataforma;
				</li>
				<li>
					Información sobre su visita y patrones de tráfico, incluyendo los
					localizadores uniformes de recursos completos (URL) de clics, nombre
					de dominio del página de referencia, a través y desde nuestra página
					(incluyendo fecha y hora); productos que miró o buscó; tiempos de
					respuesta de la página, errores de descarga, duración de las visitas a
					ciertas páginas, información de interacción de la página (como por
					ejemplo el desplazamiento, los clics y desplazamiento con el ratón), y
					los métodos utilizados para navegar fuera de la página y cualquier
					número de teléfono utilizado para llamar a nuestro número de atención
					al cliente .
				</li>
			</ul>
			<p>
				No consideramos como los datos personales la información que sea anónima
				o que hemos hecho anónima para que no se pueda utilizar para identificar
				a un individuo. De la misma forma que todos los otros negocios de
				Internet, analizaremos los registros de actividad del servidor. Estos
				servidores registran el número de veces en los que diferentes
				ejecuciones creativas se sirven pero no se almacenan otros datos. Estos
				datos registrados no son de identificación personal de ningún usuario.
				No recogemos ninguna información de identificación personal sobre el
				usuario de Internet para la publicidad en Internet.
			</p>
			<p>
				<strong>La información que recibimos de otras fuentes.</strong> Podemos
				recibir información acerca de usted si utiliza cualquiera de las otras
				páginas web que operamos o los otros servicios que proporcionamos. En
				este caso nosotros ya le habremos informado cuando se recogieron los
				datos que podrían ser compartidos internamente y combinados con los
				datos recogidos en esta página. También estamos trabajando en estrecha
				colaboración con terceros (incluyendo, por ejemplo, socios comerciales,
				subcontratistas de servicios técnicos, servicios de pago y entrega,
				redes de publicidad, proveedores de análisis, búsqueda de proveedores de
				información, agencias de referencia de crédito) y podríamos recibir
				información acerca de usted de estas fuentes.
			</p>

			<SectionTitle>COOKIES</SectionTitle>

			<p>
				Nuestra página web utiliza cookies para distinguirle de otros usuarios
				de nuestra página web. Esto nos ayuda a proporcionarle una buena
				experiencia al navegar por nuestra página web y también nos permite
				mejorar nuestra página. Para obtener información detallada sobre las
				cookies que utilizamos y los fines para los que los usamos vea nuestra
				<Link href="/pagina/cookies">Política de cookies</Link>.
			</p>

			<SectionTitle>¿CÓMO USAMOS SU INFORMACIÓN?</SectionTitle>

			<p>
				<strong>La información que nos proporciona. </strong> Utilizaremos esta
				información:
			</p>
			<ul>
				<li>
					Para llevar a cabo nuestras obligaciones derivadas de cualquier
					contrato entre usted y nosotros y para proporcionarle la información,
					productos y servicios que nos solicite;
				</li>
				<li>
					Para ponernos en contacto con usted acerca de la transacción o
					consulta que esté realizando, incluso si no ha completado la misma. Le
					ayudaremos a completar la consulta o transacción;
				</li>
				<li>
					Para proporcionarle, o permitir que terceros seleccionados le
					proporcionen información sobre bienes o servicios que consideremos
					interesantes para usted. Si es un cliente existente, sólo nos
					pondremos en contacto con usted por medios electrónicos (e-mail o SMS)
					con información sobre bienes y servicios similares a los que fueron
					objeto de una venta anterior o negociaciones de una venta para usted.
					Si es un cliente nuevo, y donde permitamos a terceros el uso de sus
					datos, nosotros (o ellos) nos pondremos en contacto con usted por
					medios electrónicos sólo si ha dado su consentimiento para ello. Si no
					desea que utilicemos sus datos de esta manera, o que pasemos su
					información a terceros con fines de marketing, por favor marque la
					casilla correspondiente en el formulario en el que recogemos sus
					datos;
				</li>
				<li>
					Para notificarle sobre cambios o mejoras a nuestra página, servicios o
					productos;
				</li>
				<li>
					Para asegurar que el contenido de nuestra página se presenta de la
					manera más efectiva para usted y para su dispositivo.
				</li>
			</ul>
			<p>
				<strong>La información que recogemos sobre usted. </strong> Utilizaremos
				esta información:
			</p>
			<ul>
				<li>
					Para administrar nuestra página y para operaciones internas,
					incluyendo la solución de problemas, análisis de datos, pruebas,
					investigación, con fines estadísticos y de encuestas;
				</li>
				<li>
					Para mejorar nuestra página para asegurar que el contenido se presenta
					de la manera más eficaz para usted y para su dispositivo, mejorar el
					diseño de nuestra página y nuestras herramientas de análisis web;
				</li>
				<li>
					Para permitirle participar en funciones interactivas de nuestro
					servicio, cuando elija hacerlo;
				</li>
				<li>
					Como parte de nuestros esfuerzos para mantener nuestra página segura;
				</li>
				<li>
					Para medir o comprender la eficacia de la publicidad que le mostramos
					a usted y a otros, y para ofrecer publicidad relevante para usted;
				</li>
				<li>
					Para monitorear los patrones de tráfico y para hacerle sugerencias y
					recomendaciones y a otros usuarios de nuestra página web sobre los
					bienes o servicios que le puedan interesar a usted y a otros.
				</li>
				<li>Para mostrarle publicidad en ocasiones retargeteada;</li>
			</ul>
			<p>
				<strong>La información que recibimos de otras fuentes. </strong> Podemos
				combinar esta información con la información que nos proporciona y la
				información que recogemos sobre usted. Podemos utilizar esta información
				y la información combinada para los fines arriba indicados (en función
				de los tipos de información que recibimos).
			</p>

			<SectionTitle>¿COMPARTIMOS SU INFORMACIÓN?</SectionTitle>

			<p>
				Podemos compartir información anónima o información que hemos hecho
				anónima con nuestros clientes u otras terceras partes para proporcionar
				información para el análisis, uso de la página web o para otros fines
				comerciales.
			</p>
			<p>
				Podemos revelar su información personal, si estamos legalmente obligados
				a hacerlo, a un tercero comprador o vendedor en el caso de que comprar o
				vender cualquier parte de nuestro negocio o activos. Si Efemerides 2.0
				es adquirida por un tercero, los datos personales en su poder sobre sus
				clientes será uno de los activos transferidos.
			</p>
			<p>
				También tenemos el deber de revelar su información personal para cumplir
				las obligaciones legales, para cumplir con los términos y condiciones de
				uso de nuestra página u otros acuerdos, para proteger los derechos,
				propiedad o seguridad de Efemrides 2.0, nuestros clientes u otros. Esto
				incluye la divulgación a los efectos de protección contra el fraude y la
				reducción del riesgo de crédito.
			</p>
			<p>
				Podemos compartir su información con terceras partes seleccionadas
				incluyendo:
			</p>
			<ul>
				<li>
					Socios comerciales, proveedores o empresas subcontratadas para la
					ejecución de cualquier contrato que tengamos con ellos o con usted.
				</li>
				<li>
					Anunciantes y redes publicitarias que requieran los datos para
					seleccionar y mostrar anuncios relevantes para usted y otros. No
					revelamos información sobre individuos identificables a nuestros
					anunciantes, pero podemos proporcionarles información agregada sobre
					nuestros usuarios (por ejemplo, podemos informar que 500 hombres
					menores de 30 años han hecho clic en su anuncio en un día
					determinado). También podemos utilizar la información reunida para
					ayudar a los anunciantes a llegar al tipo de público al que quieren
					dirigirse. Podemos hacer uso de los datos personales que hemos
					recopilado de usted para poder cumplir con los deseos de nuestros
					anunciantes mostrando su anuncio a la audiencia objetivo.
				</li>
				<li>
					Proveedores de motores de búsqueda y análisis que nos ayudan en la
					mejora y optimización de nuestra página.
				</li>
			</ul>

			<SectionTitle>¿CÓMO ALMACENAMOS SU INFORMACIÓN?</SectionTitle>

			<p>
				Todos los datos se almacenan en centros de datos de Amazon Web Services
				en Europa. Amazon Web Services funciona en el más alto nivel
				internacional en materia de seguridad, privacidad y cumplimiento. El
				equipo de Efemerides 2.0 monitoriza periódicamente el desempeño técnico
				y operativo contrastando con los parámetros acordados.
			</p>
			<p>
				Los datos que obtenemos de usted pueden ser transferidos y almacenados
				en un destino fuera del Espacio Económico Europeo (EEE). También pueden
				ser procesados por personal fuera del EEE que trabajan para nosotros o
				para uno de nuestros proveedores. Dicho personal puede estar involucrado
				en, entre otras cosas, el cumplimiento de su pedido, el procesamiento de
				los datos de pago y la prestación de servicios de soporte. Al enviar sus
				datos personales, usted acepta esta transferencia, almacenamiento o
				procesamiento. Tomaremos todas las medidas razonablemente necesarias
				para garantizar que sus datos son tratados de forma segura y de acuerdo
				con esta política de privacidad.
			</p>
			<p>
				Desafortunadamente, la transmisión de información a través de Internet
				no es completamente segura. Aunque haremos todo lo posible para proteger
				sus datos personales y nos tomamos la seguridad en línea muy en serio,
				no podemos garantizar la seguridad de sus datos transmitidos a nuestra
				página; cualquier transmisión es a su propio riesgo. Una vez que
				recibamos su información, utilizamos procedimientos estrictos y
				características de seguridad para tratar de evitar el acceso no
				autorizado.
			</p>
			<p>
				Toda la información que nos proporcione se almacena en nuestros
				servidores seguros. Utilizamos tecnologías de encriptación estándar de
				la industria, incluyendo software Secure Sockets Layer (SSL), para
				proteger la seguridad de sus datos personales. Donde le hayamos asignado
				(o donde haya elegido) una contraseña que le permita acceder a ciertas
				partes de nuestra página, es su responsabilidad mantener su
				confidencialidad. Le pedimos que no comparta una contraseña con nadie.
			</p>

			<SectionTitle>¿CUÁNTO TIEMPO GUARDAMOS SU INFORMACIÓN?</SectionTitle>

			<p>
				Los datos personales se almacenarán durante el tiempo que tenga una
				cuenta activa y se eliminarán cuando desactive su cuenta con nosotros.
			</p>

			<SectionTitle>SUS DERECHOS</SectionTitle>

			<p>
				Queremos mantenerle al día con la información sobre nuestros productos y
				servicios y ayudarle con sus preguntas. Sin embargo, tiene el derecho de
				pedirnos que no procesemos sus datos personales con fines de marketing.
				Normalmente le informaremos (antes de recopilar sus datos) si tenemos la
				intención de utilizar sus datos para estos fines o si tenemos la
				intención de divulgar su información a terceros para tales fines. Puede
				ejercer su derecho de impedir tal procesamiento marcando ciertas
				casillas en los formularios que utilizamos para recoger sus datos.
				También puede ejercer el derecho en cualquier momento poniéndose en
				contacto con nosotros en contacto@efemerides20.com
			</p>

			<SectionTitle>ENLACES A OTROS PÁGINAS</SectionTitle>

			<p>
				Nuestra página puede, de vez en cuando, contener enlaces hacia y desde
				las páginas web de nuestras redes de socios, anunciantes y afiliados. Si
				sigue un enlace a cualquiera de estas páginas web, tenga en cuenta que
				estas páginas web tienen sus propias políticas de privacidad y no
				aceptamos ninguna responsabilidad u obligación por estas políticas. Por
				favor, consulte estas políticas antes de enviar cualquier información
				personal a estas páginas web.
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
