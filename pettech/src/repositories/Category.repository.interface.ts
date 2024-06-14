import { IProduct } from '@/entities/models/Product.interface'

export interface ICategoryRepository {
  create(name: string, products?: IProduct[]): Promise<void>
}
