import * as fs from "fs"
import * as path from "path"
import { Video } from "../models/videoSchema"
import { getIpAddress } from './utils'
import getVideoDurationInSeconds from 'get-video-duration'
const isVideoFile = (filename: string) => {
    const vidExtension = '.mp4'
    const extension  = path.extname(filename)

    return vidExtension.includes(extension)
}

const getVideoDuration = async (dir: string) => {
    try {
       const videoDuration = await getVideoDurationInSeconds(dir)

        return videoDuration
    }
    catch(e){
        console.error('Error getting duration: ', e)
        throw e
    }
} 

export const seeder = async (dir: string) => {
    try {
        const files = fs.readdirSync(dir)
        const videos = await Video.find({})

        if(files.length === 0) {
            console.log('No files found.')
            return
        }

        const videoCount = await Video.countDocuments()

        if (files.length === videoCount) {
            console.log("Number of video files in the directory matches the video count in the collection. No new videos to add.")
            return
        }


        for (const file of files) {
            const filePath = path.join(dir, file)

            if(isVideoFile(file)) {
                const title = file.replace(/\.[^/.]+$/, "")
                const existingVideo = await Video.findOne({ title })
                if(!existingVideo) {
                    const videoData = {
                        // Removes the file extension
                        title: file.replace(/\.[^/.]+$/, ""),
                        description: 'Video description',
                        // This is so that the file can be served over the IP address and be used by other devices
                        url: `http://${getIpAddress()}:8000/${file}`,
                        image: 'https://loremflickr.com/320/240',
                        uploadedDate: new Date(),
                        tags: ['example'],
                        metadata: {
                            duration: await getVideoDuration(filePath),
                        },
                        played: false,
                        playCount: 0,
                        lastPlayed: undefined,
                        currentPlayTime: 0
                    }

                    await Video.create(videoData)
                }
            }
        }
        console.log('Video count:', videoCount)
        console.log('Finished.')
    }
    catch(e){
        console.error("Problem adding the videos to the database: ", e)
    }
}