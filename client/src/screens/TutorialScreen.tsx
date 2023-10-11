import { IVideo } from '../interfaces/interfaces'
import {
  Card,
  Typography,
  CardMedia,
    CardContent, CardActions,
} from '@mui/material'

const randomNumber = Math.round(Math.random() * 20)
interface ISeries {
  id?: number
  title: string
  description: string
  dateAdded: Date
  thumbnail: string
  numVideos: number
  videos: IVideo[]
  progress: string
}
const TutorialScreen = () => {
  const getRandomDate = (): Date => {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = Math.floor(Math.random() * 12) + 1 // 1-12
    const day = Math.floor(Math.random() * 31) + 1   // 1-31
    const hours = Math.floor(Math.random() * 24)  // 0-23
    const minutes = Math.floor(Math.random() * 60)  // 0-59

    const dateStr = `${year}-${month}-${day}T${hours}:${minutes}:00Z`
    const randomDate = new Date(dateStr)

    return randomDate
  }
  const series: ISeries[] = [
    {id: 0, title: 'Title1', description: 'Some fun things about this video', dateAdded:  getRandomDate(), thumbnail: 'https://picsum.photos/200/300', numVideos: randomNumber, videos: [], progress: ''},
    {id: 1, title: 'Title2', description: 'Some fun things about this video', dateAdded: getRandomDate(), thumbnail: 'https://picsum.photos/200/100', numVideos: randomNumber, videos: [], progress: ''},
    {id: 2, title: 'Title3', description: 'Some fun things about this video', dateAdded:  getRandomDate(), thumbnail: 'https://picsum.photos/100/200', numVideos: randomNumber, videos: [], progress: ''},
    {id: 3, title: 'Title4', description: 'Some fun things about this video', dateAdded:  getRandomDate(), thumbnail: 'https://picsum.photos/400/300', numVideos: randomNumber, videos: [], progress: ''},
    {id: 4, title: 'Title5', description: 'Some fun things about this video', dateAdded:   getRandomDate(), thumbnail: 'https://picsum.photos/200/350', numVideos: randomNumber, videos: [], progress: ''},
    {id: 5, title: 'Title6', description: 'Some fun things about this video', dateAdded:  getRandomDate(), thumbnail: 'https://picsum.photos/300/300', numVideos: randomNumber, videos: [], progress: ''},
    {id: 6, title: 'Title7', description: 'Some fun things about this video', dateAdded:  getRandomDate(), thumbnail: 'https://picsum.photos/450/300', numVideos: randomNumber, videos: [], progress: ''},
    {id: 7, title: 'Title8', description: 'Some fun things about this video', dateAdded:  getRandomDate(), thumbnail: 'https://picsum.photos/255/400', numVideos: randomNumber, videos: [], progress: ''},
    {id: 8, title: 'Title9', description: 'Some fun things about this video', dateAdded:  getRandomDate(), thumbnail: 'https://picsum.photos/220/150', numVideos: randomNumber, videos: [], progress: ''},
  ]
  return <>
    {series.map(tutorial =>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>)}
  </>
}

export default TutorialScreen