import { IProductRepository } from '@/repositories/Product.repository.interface'

export class DeleteProductUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async handle(id: string): Promise<void> {
    await this.productRepository.delete(id)
  }
}
