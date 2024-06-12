import { DataSource } from 'typeorm'
import { env } from '@/env'
import { Product } from '@/entities/Product.entity'
import { Category } from '@/entities/Category.entity'

export const appDataSource = new DataSource({
  type: 'postgres',
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: [Product, Category],
  logging: env.NODE_ENV === 'development',
})

appDataSource
  .initialize()
  .then(() => {
    console.log('DataSource initialized')
  })
  .catch((error) => {
    console.error('Error initializing DataSource', error)
  })