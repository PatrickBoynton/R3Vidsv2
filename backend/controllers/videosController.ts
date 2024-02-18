import { Request, Response } from 'express'
import { IVideo } from '../interfaces/IVideo'
import { Video } from '../models/videoSchema'
import { updateProperties } from '../utils/controllerUtils'
import { displayCurrentDateAndTime } from '../utils/utils'

export const getAllVideos = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { title, tags } = req.query
    let videos: IVideo[] = await Video.find({})
    try {
        if (req.path.includes('/search')) {
            if (title) {
                videos = await Video.find({
                    title: { $regex: new RegExp(title as string, 'i') },
                })
            } else if (tags) {
                videos = await Video.find({
                    tags: { $regex: new RegExp(tags as string, 'i') },
                })
            }
        }

        if (videos.length === 0) {
            console.log('No videos found.')
            res.status(404).json({ message: 'No videos found.' })
        } else {
            console.log(
                'All videos finished retrieving at: ' +
                    displayCurrentDateAndTime()
            )
            res.status(200).json(videos)
        }
    } catch (error) {
        console.error('An error happened. ', error)
        res.status(500).json({ message: 'Error finding videos.' })
    }
}

export const getRandomVideo = async (
    req: Request,
    res: Response
): Promise<any> => {
    let videos = await Video.aggregate([{ $sample: { size: 200 } }])

    const isReqEmpty = Object.keys(req.query).length === 0
    const { filter } = req.query

    if (!isReqEmpty && filter === 'lte') {
        videos = await Video.aggregate([
            { $sample: { size: 200 } },
            {
                $match: {
                    'metadata.duration': {
                        $lte: parseInt(req.query.duration as string),
                    },
                },
            },
        ])
    } else if (!isReqEmpty && filter === 'gte') {
        videos = await Video.aggregate([
            { $sample: { size: 200 } },
            {
                $match: {
                    'metadata.duration': {
                        $gte: parseInt(req.query.duration as string),
                    },
                },
            },
        ])
    }

    if (!videos || videos.length === 0)
        return res.status(404).send({ message: 'Video not found.' })

    const randomVideo = videos[Math.floor(Math.random() * videos.length)]

    const playedVideo = await Video.findById(randomVideo._id)

    if (playedVideo) {
        playedVideo.played = true
        playedVideo.playCount += 1
        playedVideo.lastPlayed = new Date()
        await playedVideo?.save()
    }
    console.log('Random video selected at: ' + displayCurrentDateAndTime())
    res.status(200).send(randomVideo)
}

export const getPreviousVideo = async (req: Request, res: Response) => {
    const videos = await Video.find({ played: true }).sort({
        lastPlayed: 'desc',
    })
    if (videos.length > 0) {
        const video = videos[0]
        console.log(
            'Previous video selected at: ' + displayCurrentDateAndTime()
        )
        res.send(video)
    } else {
        return res.status(404).end()
    }
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
    console.log('Random played video at: ' + displayCurrentDateAndTime())
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

        updateProperties(video, res, req.body)

        await video.save()
        console.log('Video updated at: ' + displayCurrentDateAndTime())
        return res.status(204).json({ video })
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
        video.playCount = 0
        video.currentPlayTime = 0
        await video.save()
    }
    console.log('Video deleted at: ' + displayCurrentDateAndTime())
    res.status(204).send()
}

export const getTags = async (_: Request, res: Response) => {
    try {
        const videoTypes = await Video.distinct('tags')

        if (!videoTypes || videoTypes.length === 0)
            return res.status(404).json({ message: 'No tags available.' })

        res.status(200).json(videoTypes)
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong. ', error })
    }
}
