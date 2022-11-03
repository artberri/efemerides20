export {}

declare global {
	interface Window {
		addthis: {
			update(type: string, key: string, value: string): void
		}
	}
}
