import getVideoDurationInSeconds from 'get-video-duration'
import * as os from 'os'
import * as path from 'path'
import { seeder } from './seeder'
import fs from 'fs'

export const randomNumber = (min: number, max: number) =>
    min + Math.round(Math.random() * (max - min))

export const getIpAddress = () => {
    const networkInterfaces = os.networkInterfaces()
    let ipAddress
    for (const interfaceName in networkInterfaces) {
        const interfaces = networkInterfaces[interfaceName]

        if (interfaces) {
            for (const i of interfaces) {
                if (i.family === 'IPv4' && !i.internal) {
                    ipAddress = i.address
                    break
                }
            }
            if (ipAddress) break
        }
    }
    return ipAddress || 'localhost'
}

export const isVideoFile = (filename: string) => {
    const vidExtension = '.mp4'
    const extension = path.extname(filename)

    return vidExtension.includes(extension)
}

export const getVideoDuration = async (dir: string) => {
    try {
        const videoDuration = await getVideoDurationInSeconds(dir)

        return videoDuration
    } catch (e) {
        console.error('Error getting duration: ', e)
        throw e
    }
}

export const runSeeder = (path: string) => {
    const updateInterval = 3600 * 1000

    seeder(path)

    // Every  hour make a check to see if anything is different.
    setInterval(() => {
        console.info('Update has started.')
        seeder(path)
        console.info('Update has finished')
    }, updateInterval)
}
export const updateAgent = () => {
    const filePath: string = process.env.PATH_TO_UTILS as string
    const newContent: string = `export const getIp ='${getIpAddress()}'`

    const existingContent: string = fs.readFileSync(filePath, 'utf8')

    if (newContent !== existingContent) {
        fs.writeFileSync(filePath, newContent)
        console.log('File updated.')
    } else {
        console.log('No changes to the IP address.')
    }
}