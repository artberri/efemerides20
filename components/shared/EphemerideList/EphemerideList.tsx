import { Ephemeride } from "../Ephemeride/Ephemeride"

export interface EphemerideListProps {
	title: string
	ephemerides: Ephemerides
	className?: string
	type: "month" | "day" | "year"
}

export const EphemerideList = ({
	title,
	ephemerides,
	className,
	type,
}: EphemerideListProps): JSX.Element => {
	return (
		<div className={`pt-6 ${className}`}>
			<h2 className="pb-4 font-heading text-3xl text-primary">{title}</h2>
			{ephemerides.map((ephemeride) => (
				<Ephemeride
					key={ephemeride.content}
					ephemeride={ephemeride}
					type={type}
				/>
			))}
		</div>
	)
}
