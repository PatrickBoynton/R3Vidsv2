import * as os from 'os'

export const randomNumber = (min: number, max: number) =>
  min + Math.round(Math.random() * (max - min))
export const getIpAddress = () => {
  const networkInterfaces = os.networkInterfaces()
  let ipAddress
  for (const interfaceName in networkInterfaces) {
    const interfaces = networkInterfaces[interfaceName]

    if (interfaces) {
      console.log('interfaces: ', interfaces)
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
