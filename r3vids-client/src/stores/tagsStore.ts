import { create } from 'zustand'
import agent from '../agent.ts'
type TagsState = {
	tags: string[]
	getTags: () => void
}
export const useTagsStore = create<TagsState>(set => ({
	tags: [],
	getTags: async () => {
		const tags = await agent.Tags.list()
		set({ tags })
	},
}))
