import { useTranslation } from "next-i18next"
import Link from "next/link"
import { Month as MonthItem } from "../../../../../utils/date"

export interface MonthLinkProps {
	month: MonthItem
}

export const MonthLink = ({ month }: MonthLinkProps): JSX.Element => {
	const { t } = useTranslation()

	return (
		<Link href={`/${t(`monthName.${month.name}`)}`} legacyBehavior>
			<a
				title={t("month.title", {
					month: t(`monthName.${month.name}`),
				})}
				className="block h-24 w-full bg-primary p-4 text-white transition-all duration-300 hover:bg-darker hover:text-xl hover:text-white focus:text-white active:text-white sm:h-32"
			>
				{t(`monthName.${month.name}`)}
			</a>
		</Link>
	)
}
