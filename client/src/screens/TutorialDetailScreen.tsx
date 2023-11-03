import {
  Container,
  Grid,
  Paper,
  Box,
  Typography,
  Divider,
  List,
  ListItemText,
  Button,
  ListItemButton,
} from '@mui/material'
import ReactPlayer from 'react-player'
import Controls from '../components/Controls'
import { useRef, useState } from 'react'
import Comments from '../components/Comments'
import { useVideoApiStore } from '../stores/videoApiStore'

const TutorialDetailScreen = () => {
  const [test, setTest] = useState(false)
  const vidRef = useRef(null)
  const { videos } = useVideoApiStore()
  return (
    <Container maxWidth="lg">
      <Grid container spacing={0}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3}>
            {/* Video Player */}
            <Box p={2}>
              <ReactPlayer src={videos[0].url} controls ref={vidRef} />
              <Controls vidRef={vidRef} />
            </Box>
          </Paper>
          <Box sx={{ display: 'flex' }}>
            <Button
              onClick={() => setTest(true)}
              variant="contained"
              color="secondary"
              fullWidth
            >
              Comment
            </Button>
            <Button
              onClick={() => setTest(false)}
              variant="contained"
              color="secondary"
              fullWidth
            >
              Overview
            </Button>
          </Box>
          {test ? (
            <Paper elevation={3}>
              <Box p={2}>
                <Comments />
              </Box>
            </Paper>
          ) : (
            <Paper elevation={3}>
              <Box p={2}>
                <Typography variant="h5" color="secondary">
                  Overview
                </Typography>
                <Divider />
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  vitae elit libero, a pharetra augue.
                </Typography>
              </Box>
            </Paper>
          )}
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3}>
            {/* Course Content */}
            <Box p={2}>
              <Typography variant="h5" color="secondary">
                Course Title
              </Typography>
              <Divider />
              <List>
                <ListItemButton>
                  <ListItemText primary="Introduction" color="primary" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Section 1: Getting Started" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Section 2: Advanced Topics" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Section 3: Conclusion" />
                </ListItemButton>
              </List>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default TutorialDetailScreen
