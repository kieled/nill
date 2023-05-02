import categories from "./categories"
import {IProduct} from "app/(main)/_components/ProductCard/ProductCard"


const products: IProduct[] = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => ({
  id: i,
  description: 'Test description',
  price: Number(`${i}0`),
  title: `Test ${i}`,
  category: categories[i - 1]
}))
export default products