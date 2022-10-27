interface EphemerideNode {
	url: string
	title: string
	anchor: string
}

type EphemerideType = "ephemeride" | "birth" | "death"

interface Ephemeride {
	readonly month: number
	readonly day: number
	readonly year: number
	readonly content: string
	readonly type: EphemerideType
	readonly nodes: readonly EphemerideNode[]
}

interface Ephemerides extends ReadonlyArray<Ephemeride> {}
