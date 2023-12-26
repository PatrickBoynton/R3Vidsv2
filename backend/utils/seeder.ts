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
            console.info(
                'No files found. Check to see if the docker container is running.'
            )
            return
        }

        const videoCount = await Video.countDocuments()
        const testVideo = await Video.findOne({ title: 'AA1' })
        const testUrl = new URL(testVideo?.url as string)
        const testIpPath = new URL(
            `http://${getIpAddress()}:8000/${testVideo?.title}`
        )

        if (testIpPath.origin === testUrl.origin) {
            console.info('Ip addresses are  the same.')
        } else {
            console.warn(
                'Ip address has changed, please update the agent file.'
            )
            console.info(
                `Go to http://${getIpAddress()}:8000/ to reach the application on your device.`
            )
        }

        for (const file of files) {
            const filePath = path.join(dir, file)

            if (isVideoFile(file)) {
                const title = file.replace(/\.[^/.]+$/, '')
                const existingVideo = await Video.findOne({ title })
                const url = new URL(existingVideo?.url as string)
                const ipPath = new URL(`http://${getIpAddress()}:8000/${file}`)

                if (!existingVideo) {
                    await createNewVideo(title, filePath, file)
                }

                if (url.origin !== ipPath.origin) {
                    await updateVideoUrl(title, file)
                    console.warn('Please update the agent file.')
                }
            }
        }

        if (files.length === videoCount) {
            console.info('Video count:', videoCount)
            console.info(
                'Number of video files in the directory matches the video count in the collection. No new videos to add.'
            )
            return
        }
        console.info('Video count:', videoCount)
        console.info('Finished.')
    } catch (e) {
        console.error('Problem adding the videos to the database: ', e)
    }
}
