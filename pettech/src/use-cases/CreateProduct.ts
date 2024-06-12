import { IProduct } from '@/entities/models/Product.interface'
import { IProductRepository } from '@/repositories/Product.repository.interface'

export class CreateProductUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async handle(product: IProduct): Promise<IProduct> {
    return this.productRepository.create(product)
  }
}
