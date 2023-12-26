import { Response } from 'express'
import { IVideo } from '../interfaces/IVideo'
import { Video } from '../models/videoSchema'
import { getIpAddress, getVideoDuration } from './utils'

export const updateProperties = (
    video: IVideo,
    res: Response,
    propsToUpdate: Record<string, any>
) => {
    if (!video) {
        return res.status(404).json({ message: 'Video not found. ' })
    }

    for (const [key, value] of Object.entries(propsToUpdate)) {
        if (value !== undefined) {
            ;(video as any)[key] = value
        }
    }
}

export const createNewVideo = async (
    title: string,
    filePath: string,
    file: string
) => {
    const videoData = {
        // Removes the file extension
        title,
        description: 'Video description',
        // This is so that the file can be served over the IP address and be used by other devices
        url: `http://${getIpAddress()}:8000/${file}`,
        image: 'https://loremflickr.com/320/240',
        uploadedDate: new Date(),
        tags: [],
        metadata: {
            duration: await getVideoDuration(filePath),
        },
        played: false,
        playCount: 0,
        lastPlayed: undefined,
        currentPlayTime: 0,
    }

    await Video.create(videoData)
}

export const updateVideoUrl = async (title: string, file: string) => {
    const updateIP = {
        url: `http://${getIpAddress()}:8000/${file}`,
    }
    await Video.updateOne({ title }, updateIP)
}
