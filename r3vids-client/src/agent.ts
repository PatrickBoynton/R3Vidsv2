import axios, { AxiosResponse } from 'axios'
import { Video } from './types/types.ts'

axios.defaults.baseURL = 'http://192.168.1.17:8000/api/videos'

const responseBody = (response: AxiosResponse) => response.data

const requests = {
	get: <T>(url: string) => axios.get<T>(url).then(responseBody),
	post: <T>(url: string, body: object) =>
		axios.post<T>(url, body).then(responseBody),
	patch: <T>(url: string, body: object) =>
		axios.patch<T>(url, body).then(responseBody),
	delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Videos = {
	list: () => requests.get<Video[]>('/'),
	played: () => requests.get<Video[]>('/played/'),
	random: () => requests.get<Video>('/random'),
	randomPlayed: () => requests.get<Video>('/random/played'),
	update: (video: Partial<Video>) => {
		requests.patch<Video>(`edit/${video._id}`, video)
	},
	delete: () => requests.delete('/played'),
}

const agent = {
	Videos,
}

export default agent
