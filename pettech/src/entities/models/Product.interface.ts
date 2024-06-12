import { ICategory } from './Category.interface'

export interface IProduct {
  id?: string
  name: string
  description: string
  image_url: string
  price: number
  categories?: ICategory[]
}
