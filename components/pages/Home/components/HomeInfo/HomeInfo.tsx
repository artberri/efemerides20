import Link from "next/link"

export interface HomeInfoProps {
	className?: string
	title: string
	description: string
	link: string
	anchor: string
}

export const HomeInfo = ({
	title,
	description,
	link,
	className,
	anchor,
}: HomeInfoProps): JSX.Element => {
	return (
		<section className={className}>
			<h1 className="font-heading text-2xl pb-3">{title}</h1>
			<p className="text-sm">{description}</p>

			<p className="text-sm">
				<Link href={link} legacyBehavior>
					<a className="underline">{anchor}</a>
				</Link>
			</p>
		</section>
	)
}
