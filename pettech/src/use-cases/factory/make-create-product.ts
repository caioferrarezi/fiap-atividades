import { ProductRepository } from '@/repositories/typeorm/Product.repository'
import { CreateProductUseCase } from '../CreateProduct'

export function makeCreateProductUseCase() {
  const productRepository = new ProductRepository()
  return new CreateProductUseCase(productRepository)
}
