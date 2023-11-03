import { create } from 'zustand'

type InitialUploadState = {
  selectedFile: null | File
  videoToUpload: string
}

type Action = {
  setVideo: (videoToUpload: File) => void
  setSelectedFile: (selectedFile: any) => void
}
export const useVideoUploadStore = create<InitialUploadState & Action>(set => ({
  selectedFile: null,
  videoToUpload: '',
  setVideo: (videoToUpload: any) => {
    set(() => ({ videoToUpload }))
  },
  setSelectedFile: (selectedFile: any) => {
    set(() => ({ selectedFile }))
  },
}))
