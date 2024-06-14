import { ProductRepository } from '@/repositories/typeorm/Product.repository'
import { FindProductUseCase } from '@/use-cases/FindProduct'

export function makeFindProductUseCase() {
  const productRepository = new ProductRepository()
  return new FindProductUseCase(productRepository)
}
