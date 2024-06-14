import { ICategoryRepository } from '@/repositories/Category.repository.interface'

export class CreateCategoryUseCase {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async handle(name: string): Promise<void> {
    await this.categoryRepository.create(name)
  }
}
