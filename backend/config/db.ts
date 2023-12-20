import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { URI }  from '../utils/constants'

dotenv.config({path: '../.env'})

export const connectDb = async () => {
  try {

    const connection = await mongoose.connect(URI)
    console.log(`MongoDB connected to ${connection.connection.host}`)
  }
  catch(e){
    console.error('ERROR: ', e)
    process.exit(1)
  }
}