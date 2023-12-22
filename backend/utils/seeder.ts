import * as fs from 'fs'
import * as path from 'path'
import { getIpAddress } from './utils'
import { isVideoFile } from './utils'
import { Video } from '../models/videoSchema'
import { createNewVideo, updateVideoUrl } from './controllerUtils'

export const seeder = async (dir: string) => {
    try {
        const files = fs.readdirSync(dir)

        if (files.length === 0) {
            console.log('No files found.')
            return
        }

        const videoCount = await Video.countDocuments()

        if (files.length === videoCount) {
            console.log(
                'Number of video files in the directory matches the video count in the collection. No new videos to add.'
            )
            return
        }

        for (const file of files) {
            const filePath = path.join(dir, file)

            if (isVideoFile(file)) {
                const title = file.replace(/\.[^/.]+$/, '')
                const existingVideo = await Video.findOne({ title })
                const url = existingVideo?.url
                const ipPath = `http://${getIpAddress()}:8000/${file}`

                if (!existingVideo) {
                    await createNewVideo(title, filePath, file)
                } else if (existingVideo && url != ipPath) {
                    await updateVideoUrl(title, file)
                } else if (url == ipPath) {
                    console.info('Url unchanged. Nothing to update.')
                }
            }
        }
        console.log('Video count:', videoCount)
        console.log('Finished.')
    } catch (e) {
        console.error('Problem adding the videos to the database: ', e)
    }
}
