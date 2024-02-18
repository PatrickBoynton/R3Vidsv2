import cors from 'cors'
import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import path from 'path'
import { connectDb } from './backend/config/db'
import videosRoutes from './backend/routes/videosRoutes'
import { getIpAddress, runSeeder, updateAgent } from './backend/utils/utils'
dotenv.config()

const app = express()

app.use('/public', express.static('uploads'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(
    cors({
        origin: '*',
        methods: '*',
        preflightContinue: false,
    })
)

updateAgent()

connectDb()

app.use(express.static(path.join(__dirname, 'public')))

const port = 8000

if (process.env.NODE_ENV === 'development') {
    runSeeder(path.join(__dirname, 'public'))
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
