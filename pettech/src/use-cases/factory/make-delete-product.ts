import { ProductRepository } from '@/repositories/typeorm/Product.repository'
import { DeleteProductUseCase } from '@/use-cases/DeleteProduct'

export function makeDeleteProductUseCase() {
  const productRepository = new ProductRepository()
  return new DeleteProductUseCase(productRepository)
}
