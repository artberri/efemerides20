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
				className="transition-all duration-300 bg-primary hover:bg-darker text-white hover:text-white active:text-white focus:text-white hover:text-xl w-full block h-24 sm:h-32 p-4"
			>
				{t(`monthName.${month.name}`)}
			</a>
		</Link>
	)
}
