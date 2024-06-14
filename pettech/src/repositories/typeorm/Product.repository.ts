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

  async findAll(page: number, limit: number): Promise<IProduct[]> {
    return this.repository.find({
      relations: ['categories'],
      skip: (page - 1) * limit,
      take: limit,
    })
  }

  async findById(id: string): Promise<IProduct | null> {
    return this.repository.findOne({
      relations: ['categories'],
      where: { id },
    })
  }

  async create(product: IProduct): Promise<IProduct> {
    return this.repository.save(product)
  }

  async update(product: IProduct): Promise<IProduct> {
    return this.repository.save(product)
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({ id })
  }
}
