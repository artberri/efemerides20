export const useAbsolutePath = (): {
	base: string
	path: (name: string) => string
} => {
	const basePath = process.env["basePath"] || `https://www.efemerides20.com`

	return {
		base: basePath,
		path: (pathname: string) => `${basePath}${pathname}`,
	}
}
