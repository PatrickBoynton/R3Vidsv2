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
import { useRef } from 'react'

const TutorialDetailScreen = () => {
  const vidRef = useRef(null)
  return (
    <Container maxWidth="lg">
      <Grid container spacing={0}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3}>
            {/* Video Player */}
            <Box p={2}>
              <ReactPlayer src="" controls ref={vidRef} />
              <Controls vidRef={vidRef} />
            </Box>
          </Paper>

          {/* Extra Buttons */}
          <Paper elevation={3}>
            <Box p={2} sx={{ display: 'flex' }}>
              <Button variant="contained" color="secondary" fullWidth>
                Comment
              </Button>
              <Button variant="contained" color="secondary" fullWidth>
                Overview
              </Button>
            </Box>
          </Paper>

          {/* Course Details */}
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
