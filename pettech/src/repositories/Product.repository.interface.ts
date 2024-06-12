import { IProduct } from '@/entities/models/Product.interface'

export interface IProductRepository {
  create(product: IProduct): Promise<IProduct>
}
