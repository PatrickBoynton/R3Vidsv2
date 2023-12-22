import { Video } from '../models/videoSchema'
import { Request, Response } from 'express'
import { updateProperties } from '../utils/controllerUtils'
import { IVideo } from '../interfaces/IVideo'

export const getAllVideos = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { title, type } = req.query
    try {
        let videos: IVideo[] = await Video.find({})

        if (req.path.includes('/search')) {
            if (title) {
                videos = await Video.find({ title })
                res.status(200).json({ videos })
            } else if (type) {
                videos = await Video.find({ type })
                res.status(200).json({ videos })
            }
        }

        if (videos.length === 0)
            res.status(404).json({ message: 'No videos found.' })

        res.status(200).json(videos)
    } catch (error) {
        res.status(500).json({ message: 'Error finding videos.' })
    }
}

export const getRandomVideo = async (
    _: Request,
    res: Response
): Promise<any> => {
    const videos = await Video.aggregate([{ $sample: { size: 200 } }])

    if (!videos) return res.status(404).send({ message: 'Video not found.' })

    const randomVideo =
        videos[Math.floor(Math.pow(Math.random(), 1.3) * videos.length)]

    const playedVideo = await Video.findById(randomVideo._id)

    if (!playedVideo?.played && playedVideo) playedVideo.played = true
    if (!playedVideo?.playCount && playedVideo) playedVideo.playCount += 1
    if (!playedVideo?.lastPlayed && playedVideo)
        playedVideo.lastPlayed = new Date()

    await playedVideo?.save()

    res.status(200).send(randomVideo)
}

export const getPlayedVideos = async (
    _: Request,
    res: Response
): Promise<void> => {
    const videos = await Video.find({ played: true })

    res.status(200).send(videos)
}

export const getRandomPlayedVideos = async (
    _: Request,
    res: Response
): Promise<void> => {
    const videos: IVideo[] = await Video.aggregate([
        { $match: { played: true } },
        { $sample: { size: 1 } },
    ])
    const video = await Video.findById(videos[0]._id)

    if (video) {
        video.playCount += 1
        video.lastPlayed = new Date()
        await video.save()
    } else {
        res.status(404).json({ message: 'No video found.' })
    }

    res.status(200).json(video)
}

export const uploadVideo = async (_: Request, res: Response): Promise<void> => {
    res.json({ message: 'File uploaded!' })
}

export const updateVideo = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {
        const video = (await Video.findById(req.params.id)) as IVideo

        await updateProperties(video, res, req.body)

        await video.save()

        return res.status(204).json({ message: 'Updated video!' })
    } catch (e) {
        return res.status(500).json({ message: 'Something went wrong.' })
    }
}

export const deletePlayedVideos = async (
    _: Request,
    res: Response
): Promise<void> => {
    const playedVideos = await Video.find({ played: true })

    for (const video of playedVideos) {
        video.played = false
        video.lastPlayed = undefined
        await video.save()
    }

    res.status(204).send()
}

export const getTypes = async (_: Request, res: Response) => {
    try {
        const videoTypes = await Video.distinct('type')

        if (!videoTypes) return res.status(404).json({ message: 'No videos.' })

        res.status(200).json(videoTypes)
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong. ', error })
    }
}
