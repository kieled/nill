import {FC} from "react"
import s from './styles.module.css'
import Link from "next/link"
import Category from "components/Category"
import {CategoryType} from "mocks/categories"

export interface IProduct {
  id: number
  title: string
  description: string
  price: number
  category: CategoryType
}

const ProductCard: FC<IProduct> = (
  {
    id,
    price,
    title,
    description,
    category
  }
) => {
  return (
    <Link className={s.container} href={`/item/${id}`}>
      <div className={s.content}>
        <div className='flex justify-between px-5 mb-2'>
          <h3 className={s.title}>
            <Category icon={category.icon} name={category.name}/>
            <span>{title}</span>
          </h3>
          <div className={s.price}>{price}$</div>
        </div>
        <div className={s.description}>{description}</div>
      </div>
    </Link>
  )
}

export default ProductCard