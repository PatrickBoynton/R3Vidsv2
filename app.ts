import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import { getIpAddress } from './backend/utils/utils'
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

app.use(
    cors({
        origin: '*',
        methods: '*',
        preflightContinue: false,
    })
)

connectDb()

app.use(express.static(path.join(__dirname, 'public')))

const port = 8000

if (process.env.NODE_ENV === 'development') {
    // 1 hour updates.
    const updateInterval = 3600 * 1000

    seeder(path.join(__dirname, 'public'))

    // Every  hour make a check to see if anything is differnet.
    setInterval(() => {
        console.info('Update has started.')
        seeder(path.join(__dirname, 'public'))
        console.info('Update has finished')
    }, updateInterval)
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
