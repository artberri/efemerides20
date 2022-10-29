import { useRouter } from "next/router"
import { parseIntegerOrThrow } from "../utils/number"

const rangeRegexp = /^desde-(\d+)-a-(\d+)$/i

export const useYearOrRange = ():
	| { year: number; from?: undefined; to?: undefined }
	| { year?: undefined; from: number; to: number }
	| { year?: undefined; from?: undefined; to?: undefined } => {
	const router = useRouter()
	const { slug } = router.query

	if (slug === "hasta-0") {
		return {}
	}

	const [_, fromString, toString] = rangeRegexp.exec(String(slug)) || []

	if (fromString && toString) {
		const from = parseIntegerOrThrow(fromString)
		const to = parseIntegerOrThrow(toString)

		return { from, to }
	}

	const year = parseIntegerOrThrow(String(slug))

	return { year }
}
