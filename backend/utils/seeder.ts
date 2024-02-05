import * as fs from 'fs'
import { checkFilesExist, checkIpAddresses, displayCurrentDateAndTime, getIpAddress, processFiles } from './utils'
import { Video } from '../models/videoSchema'



export const seeder = async (dir: string) => {
    const videoCount = await Video.countDocuments()
    const testVideo = await Video.findOne({ title: 'AA1' })
    const testUrl = testVideo?.url ? new URL(testVideo?.url as string) : ''

    const testIpPath = new URL(
        `http://${getIpAddress()}:8000/${testVideo?.title}`
    )

    try {
        const files = fs.readdirSync(dir)
        if (!checkFilesExist(files)) return
        checkIpAddresses(testUrl as URL, testIpPath)
        await processFiles(files, dir)

        if(files.length === videoCount) {
            console.info('Number of video files in the directory matches the video count in the collection. No new videos to add.')
        }

        console.info('Video count:', videoCount)
        console.info('Finished.')
        console.log(displayCurrentDateAndTime())
    } catch (e) {
        console.error('Problem adding the videos to the database: ', e)
    }
}

