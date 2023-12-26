import express from 'express'
import {
    deletePlayedVideos,
    getAllVideos,
    getPlayedVideos,
    getRandomPlayedVideos,
    getRandomVideo,
    getTags,
    updateVideo,
    uploadVideo,
} from '../controllers/videosController'
import upload from '../middleware/storage'

const router = express.Router()

// For editing data when a video is played.
router.patch('/edit/:id', updateVideo)
router.post('/upload', upload.single('file'), uploadVideo)
router.delete('/played', deletePlayedVideos)
router.get('/random', getRandomVideo)
router.get('/random/played', getRandomPlayedVideos)
router.get('/played', getPlayedVideos)
router.get('/tags', getTags)
router.get('/search', getAllVideos)
router.get('/', getAllVideos)

export default router
