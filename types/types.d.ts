interface EphemerideTopic {
	url: string
	title: string
	anchor: string
}

interface Topic {
	url: string
	title: string
	image?: string
	description: string
	slug: string
	count: number
}

type EphemerideType = "ephemeride" | "birth" | "death"

interface Ephemeride {
	readonly month: number
	readonly day: number
	readonly year: number
	readonly content: string
	readonly type: EphemerideType
	readonly nodes: readonly EphemerideTopic[]
}

interface Ephemerides extends ReadonlyArray<Ephemeride> {}

interface Topics extends ReadonlyArray<Topic> {}
