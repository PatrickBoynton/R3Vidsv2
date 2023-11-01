import { create } from 'zustand'

interface InitialUploadState {
  selectedFile: null | File
  videoToUpload: string
  setVideo: (videoToUpload: File) => void
  setSelectedFile: (selectedFile: any) => void
}

const useVideoUploadStore = create<InitialUploadState>(set => ({
  selectedFile: null,
  videoToUpload: '',
  setVideo: (videoToUpload: any) => {
    set(() => ({ videoToUpload }))
  },
  setSelectedFile: (selectedFile: any) => {
    set(() => ({ selectedFile }))
  },
}))

export default useVideoUploadStore
