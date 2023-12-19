export type MetaData = {
	duration: number
}

export type Video = {
	_id: string
	title: string
	description: string
	url: string
	image: string
	uploadDate: string
	tags: string[]
	metadata: MetaData
	played: boolean
	currentPlayTime: number
	playCount: number
	lastPlayed: Date
}
