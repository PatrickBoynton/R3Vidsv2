import { Button, Input } from '@mui/material'
import { FileUpload } from '@mui/icons-material'
import { useState } from 'react'
import { useUploadVideoMutation } from '../../slices/videoApiSlice'
import { TextColors } from '../../utils/styles'


const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploadVideo] = useUploadVideoMutation()
  // eslint-disable-next-line no-unused-vars
  const [_, setVideo] = useState('')
  const handleFileSelect = (e: any): void => {
    const file = e.target.files[0]
    setSelectedFile(file)
  }
  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault()
    try {
      const formData: FormData = new FormData()
      formData.append('file', selectedFile as any)

      const res: any = await uploadVideo(formData)
      setVideo(res.video)

    } catch (e: any) {
      console.error(e?.data?.message || e.error)
    }
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <Input
        type="file"
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleFileSelect}
      />
      <label htmlFor="upload-button">
        <Button
          variant="contained"
          component="span"
          startIcon={<FileUpload />}
        ></Button>
      </label>
      {selectedFile && (
        <p style={TextColors}>Selected File: {selectedFile.name}</p>
      )}
      <Button
        type="submit"
        variant="contained">
        Upload
      </Button>
    </form>
  )
}

export default FileUploader
