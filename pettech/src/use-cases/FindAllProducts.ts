import { IProduct } from '@/entities/models/Product.interface'
import { IProductRepository } from '@/repositories/Product.repository.interface'

export class FindAllProductsUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async handle(page: number, limit: number): Promise<IProduct[]> {
    return this.productRepository.findAll(page, limit)
  }
}
