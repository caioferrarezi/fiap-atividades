import { IProduct } from '@/entities/models/Product.interface'
import { IProductRepository } from '@/repositories/Product.repository.interface'
import { ResourceNotFoundError } from './errors/ResourceNotFoundError'

export class FindProductUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async handle(id: string): Promise<IProduct | null> {
    const product = await this.productRepository.findById(id)
    if (!product) throw new ResourceNotFoundError()
    return product
  }
}
