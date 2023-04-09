import { RedisClientOptions, createClient } from 'redis'
import config from '../configs'
import { RedisClientType } from '../configs/types'
import currencyList from '../utils/currencyList';

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
    await redisClient.set('currencyList', JSON.stringify( currencyList ))
  }
  return redisClient
}

export { getCache }
