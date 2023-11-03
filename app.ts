import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import { getIpAddress, randomNumber } from './backend/utils/utils'
import { seeder } from './backend/utils/seeder'
import videosRoutes from './backend/routes/videosRoutes'
import { connectDb } from './backend/config/db'
import * as path from 'path'
import cors from 'cors'
dotenv.config()

const app = express()

app.use('/public', express.static('uploads'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({ origin: '*' }))
connectDb()

app.use(express.static(path.join(__dirname, 'public')))

const port = 8000

if (process.env.NODE_ENV === 'development') {
  seeder(path.join(__dirname, 'public'))
}

app.use('/api/videos', videosRoutes)

app.get('/', (req: Request, res: Response): void => {
  res.send(
    `API is running go to http://localhost:${port}/api/videos/ or http://${getIpAddress()}:${port}/api/videos/`
  )
})

app.listen(port, () =>
  console.log(
    `Go to http://localhost:${port}/ or http://${getIpAddress()}:${port}/ for more info`
  )
)
