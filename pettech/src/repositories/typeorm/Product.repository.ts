import { Repository } from 'typeorm'
import { appDataSource } from '@/lib/typeorm/typeorm'
import { Product } from '@/entities/Product.entity'
import { IProduct } from '@/entities/models/Product.interface'
import { IProductRepository } from '../Product.repository.interface'

export class ProductRepository implements IProductRepository {
  private repository: Repository<Product>

  constructor() {
    this.repository = appDataSource.getRepository(Product)
  }

  async create(product: IProduct): Promise<IProduct> {
    return this.repository.save(product)
  }
}
