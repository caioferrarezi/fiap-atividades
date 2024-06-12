import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ICategory } from './models/Category.interface'

@Entity({
  name: 'category',
})
export class Category implements ICategory {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id?: number

  @Column({ name: 'name', type: 'varchar' })
  name: string

  @Column({
    name: 'created_at',
    type: 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt?: Date
}
