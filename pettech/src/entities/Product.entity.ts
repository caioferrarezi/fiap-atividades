import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { IProduct } from './models/Product.interface'
import { ICategory } from './models/Category.interface'
import { Category } from './Category.entity'

@Entity({
  name: 'product',
})
export class Product implements IProduct {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id?: string

  @Column({ name: 'name', type: 'varchar' })
  name: string

  @Column({ name: 'description', type: 'text' })
  description: string

  @Column({ name: 'image_url', type: 'varchar' })
  image_url: string

  @Column({ name: 'price', type: 'double precision' })
  price: number

  @ManyToMany(() => Category, {
    cascade: true,
  })
  @JoinTable({
    name: 'product_category',
    joinColumn: {
      name: 'product_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'category_id',
      referencedColumnName: 'id',
    },
  })
  categories?: ICategory[]
}
