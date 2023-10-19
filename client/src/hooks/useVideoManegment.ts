import { useEffect, useState } from 'react'

import { IVideo } from '../interfaces/interfaces'
import {
  useGetPlayedVideosQuery,
  useGetRandomVideoQuery,
  useGetVideosQuery,
} from '../slices/videoApiSlice'
import { useMutation } from 'react-query'
import axios from 'axios'

const useVideoManegment = (keyword: any = '') => {
  const [videos, setVideos] = useState<IVideo[] | null>(null)
  const [randomVideo, setRandomVideo] = useState<IVideo | null>(null)
  const [playedVideos, setPlayedVideos] = useState<IVideo[] | null>(null)

  const { data, refetch } = useGetVideosQuery(keyword)
  const { data: randomVideoData, refetch: reVids } = useGetRandomVideoQuery()
  const { data: playedVideosData, refetch: rePlayed } =
    useGetPlayedVideosQuery(keyword)

  useEffect((): void => {
    if (data) setVideos(data)
  }, [data])

  useEffect((): void => {
    if (randomVideoData) {
      setRandomVideo(randomVideoData)
    }
  }, [randomVideoData])

  useEffect(() => {
    if (playedVideosData) setPlayedVideos(playedVideosData)
  }, [playedVideosData])

  const uploadVideoMutation = useMutation((formData: FormData) => {
    return axios.put('/upload', formData)
  })

  return {
    videos,
    randomVideo,
    playedVideos,
    refetch,
    reVids,
    rePlayed,
  }
}

export default useVideoManegment
