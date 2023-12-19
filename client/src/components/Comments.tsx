import { Box, Button, TextField, Typography } from '@mui/material'

const Comments = () => {
  return (
    <form>
      <Typography variant="h5" color="secondary">
        Comments
      </Typography>
      <TextField label="Add a Comment" fullWidth variant="outlined" />
      <Box mt={2}>
        <Button type="submit" variant="contained" color="secondary">
          Add Comment
        </Button>
      </Box>
    </form>
  )
}

export default Comments
