import { create } from 'zustand'

type ReactPlayerStoreState = {
	playing: boolean
	volume: number
	muted: boolean
	playbackRate: number
	played: boolean
	fullScreen: boolean
	duration: number
	progress: number
	togglePlay: () => void
	setVolume: (volume: number) => void
	toggleMute: () => void
	setPlaybackRate: (playbackRate: number) => void
	setPlayed: (played: boolean) => void
	setPlaying: (playing: boolean) => void
	setDuration: (duration: number) => void
	toggleFullScreen: () => void
	setProgress: (progress: number) => void
}

export const useReactPlayerStore = create<ReactPlayerStoreState>(set => ({
	playing: false,
	volume: 0,
	muted: false,
	playbackRate: 1,
	played: false,
	fullScreen: false,
	duration: 0,
	progress: 0,
	togglePlay: () =>
		set((state: ReactPlayerStoreState) => ({ playing: !state.playing })),
	setVolume: volume => set({ volume }),
	toggleMute: () =>
		set((state: ReactPlayerStoreState) => ({ muted: !state.muted })),
	setPlaybackRate: playbackRate => set({ playbackRate }),
	setPlayed: played => set({ played }),
	setPlaying: playing => set({ playing }),
	setDuration: duration => ({ duration }),
	toggleFullScreen: () => set(state => ({ fullScreen: !state.fullScreen })),
	setProgress: progress => set({ progress }),
}))
