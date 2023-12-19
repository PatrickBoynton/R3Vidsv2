import { Video } from '../models/videoSchema'
import { Request, Response } from 'express'
import { IVideo } from '../interfaces/IVideo'

export const getAllVideos = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title } = req.query
    const keyword = { title: { $regex: title, $options: 'i' } }

    if (title !== '' && title !== undefined) {
      const videos: IVideo[] = await Video.find(keyword)

      res.status(200).json(videos)
    } else {
      const videos: IVideo[] = await Video.find({})

      res.status(200).json(videos)
    }
  } catch (error) {
    res.status(500).json({ message: 'Error finding videos.' })
  }
}

export const getAllVideosFiltered = async (
  req: Request,
  res: Response
): Promise<any> => {
  const keyword = req.query.keyword
    ? { title: { $regex: req.query.keyword, $options: 'i' } }
    : {}
  const filterNumber = Number(req.query.filter)
  const condition = req.query.condition

  if (isNaN(filterNumber)) {
    return res.status(400).json({ message: 'Invalid filterNumber' })
  }

  const videos: IVideo[] = await Video.find({ ...keyword })

  let filteredVideos: IVideo[] = []

  if (condition === 'lt') {
    filteredVideos = videos.filter(
      video => video.metadata.duration < filterNumber
    )
  } else if (condition === 'lte') {
    filteredVideos = videos.filter(
      video => video.metadata.duration <= filterNumber
    )
  } else if (condition === 'gt') {
    filteredVideos = videos.filter(
      video => video.metadata.duration > filterNumber
    )
  } else if (condition === 'gte') {
    filteredVideos = videos.filter(
      video => video.metadata.duration >= filterNumber
    )
  } else {
    res.status(400).json({ message: 'Invalid condition ' })
  }

  res.status(200).json(filteredVideos)
}

export const getSingleVideo = async (
  req: Request,
  res: Response
): Promise<void> => {
  const video = await Video.findById(req.params.id)
  res.status(200).json(video)
}

export const getRandomVideo = async (
  req: Request,
  res: Response
): Promise<any> => {
  // Gets a random video.
  const videos = await Video.aggregate([{ $sample: { size: 200 } }])
  const filterNumber = Number(req.query.filter)
  const condition = req.query.condition

  const filter: any = {}

  if (condition === 'lt') {
    filter['metadata.duration'] = { $lt: filterNumber }
  } else if (condition === 'lte') {
    filter['metadata.duration'] = { $lte: filterNumber }
  } else if (condition === 'gt') {
    filter['metadata.duration'] = { $gt: filterNumber }
  } else if (condition === 'gte') {
    filter['metadata.duration'] = { $gte: filterNumber }
  }

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
  req: Request,
  res: Response
): Promise<void> => {
  const videos = await Video.find({ played: true })

  res.status(200).send(videos)
}

export const getRandomPlayedVideos = async (
  req: Request,
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

export const uploadVideo = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.json({ message: 'File uploaded!' })
}

export const updateVideo = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const {
      title,
      description,
      url,
      image,
      uploadedDate,
      played,
      tags,
      metadata,
      playCount,
    } = req.body
    const video = (await Video.findById(req.params.id)) as IVideo

    if (!video) {
      return res.status(404).json({ message: 'Video not found. ' })
    }

    if (title !== undefined) {
      video.title = title
    }

    if (description !== undefined) {
      video.description = description
    }

    if (url !== undefined) {
      video.url = url
    }

    if (image !== undefined) {
      video.image = image
    }

    if (uploadedDate !== undefined) {
      video.uploadedDate = uploadedDate
    }

    if (tags !== undefined) {
      video.tags = tags
    }

    if (metadata !== undefined) {
      video.metadata = metadata
    }

    if (playCount !== undefined) {
      video.playCount = playCount
    }

    if (played !== undefined) {
      video.played = played
    }
    console.log(req.body)
    console.log(video)
    await video.save()

    return res.status(204).json({ message: 'Updated video!' })
  } catch (e) {
    return res.status(500).json({ message: 'Something went wrong.' })
  }
}

export const deletePlayedVideos = async (
  req: Request,
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
