import { ProductRepository } from '@/repositories/typeorm/Product.repository'
import { FindAllProductsUseCase } from '@/use-cases/FindAllProducts'

export function makeFindAllProductsUseCase() {
  const productRepository = new ProductRepository()
  return new FindAllProductsUseCase(productRepository)
}
