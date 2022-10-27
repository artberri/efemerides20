export const useAbsolutePath = () => {
	return {
		base: process.env["basePath"],
		path: (pathname: string) => `${process.env["basePath"]}${pathname}`,
	}
}
