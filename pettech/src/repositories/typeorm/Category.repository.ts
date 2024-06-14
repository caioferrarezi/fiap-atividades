import { Repository } from 'typeorm'
import { ICategoryRepository } from '@/repositories/Category.repository.interface'
import { Category } from '@/entities/Category.entity'
import { appDataSource } from '@/lib/typeorm/typeorm'

export class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>

  constructor() {
    this.repository = appDataSource.getRepository(Category)
  }

  async create(name: string): Promise<void> {
    await this.repository.save({ name })
  }
}
