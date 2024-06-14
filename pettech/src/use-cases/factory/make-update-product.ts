import { ProductRepository } from '@/repositories/typeorm/Product.repository'
import { UpdateProductUseCase } from '@/use-cases/UpdateProduct'

export function makeUpdateProductUseCase() {
  const productRepository = new ProductRepository()
  return new UpdateProductUseCase(productRepository)
}
