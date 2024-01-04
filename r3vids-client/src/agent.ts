import axios, { AxiosResponse } from 'axios'
import { Video } from './types/types'
import { getIp } from './utils/utils'

axios.defaults.baseURL = `http://${getIp}:8000/api/videos`

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
	list: (searchTerm = '') =>
		requests.get<Video[]>(`/search?title=${searchTerm}`),
	played: () => requests.get<Video[]>('/played/'),
	random: () => requests.get<Video>('/random'),
	randomPlayed: () => requests.get<Video>('/random/played'),
	update: (video: Partial<Video>) => {
		requests.patch<Video>(`/edit/${video._id}`, video)
	},
	delete: () => requests.delete('/played'),
	search: (keyword: string) => requests.get(`/search?title=${keyword}`),
}

const Tags = {
	list: () => requests.get<string[]>('/tags'),
}

const agent = {
	Videos,
	Tags,
}

export default agent
