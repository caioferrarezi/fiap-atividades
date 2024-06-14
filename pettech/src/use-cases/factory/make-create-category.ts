import { CreateCategoryUseCase } from '@/use-cases/CreateCategory'
import { CategoryRepository } from '@/repositories/typeorm/Category.repository'

export function makeCreateCategoryUseCase() {
  const categoryRepository = new CategoryRepository()
  return new CreateCategoryUseCase(categoryRepository)
}
