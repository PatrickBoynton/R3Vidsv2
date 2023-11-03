import { Button, Input } from '@mui/material'
import { FileUpload } from '@mui/icons-material'
import { TextColors } from '../../utils/styles'
import useVideoUploadStore from '../../stores/videoUploadStore'

const FileUploader = () => {
  const { selectedFile, setSelectedFile, setVideo } = useVideoUploadStore()

  const handleFileSelect = (e: any): void => {
    const file = e.target.files[0]
    setSelectedFile(file)
  }
  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault()
    try {
      const formData: FormData = new FormData()
      formData.append('file', selectedFile as any)

      setVideo(selectedFile as any)
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
      <Button type="submit" variant="contained">
        Upload
      </Button>
    </form>
  )
}

export default FileUploader
