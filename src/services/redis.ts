import { RedisClientOptions, createClient } from 'redis'
import config from '../configs'
import { RedisClientType } from '../configs/types'

const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = config.env
const url = `redis://${
  REDIS_PASSWORD ? `:${REDIS_PASSWORD}@` : ''
}${REDIS_HOST}:${REDIS_PORT}`
const options: RedisClientOptions = { url }

let redisClient: RedisClientType
let isReady: boolean

async function getCache(): Promise<RedisClientType> {
  if (!isReady) {
    redisClient = createClient({
      ...options
    })
    redisClient.on('error', (err) => console.error(`Redis Error: ${err}`))
    redisClient.on('connect', () => console.log('Redis connected'))
    redisClient.on('reconnecting', () => console.log('Redis reconnecting'))
    redisClient.on('ready', () => {
      isReady = true
      console.log('Redis ready!')
    })
    await redisClient.connect()
  }
  return redisClient
}
getCache()
  .then((connection) => {
    redisClient = connection
  })
  .catch((err) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    console.error({ err }, 'Failed to connect to Redis')
  })

export { getCache }
