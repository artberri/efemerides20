import { getMonths } from "../../../../../utils/date"
import { MonthLink } from "../MonthLink/MonthLink"

export const Months = (): JSX.Element => {
	const months = getMonths()

	return (
		<ul className="grid grid-cols-2 gap-4 p-0 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 md:gap-8">
			{months.map((month) => (
				<li key={month.name} className="list-none pb-0">
					<MonthLink month={month} />
				</li>
			))}
		</ul>
	)
}
