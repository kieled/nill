import {AvailableCategoriesType} from "mocks/categories"
import Image from "next/image"

interface Props {
  icon: AvailableCategoriesType
  name?: string
}

const Category = ({icon, name}: Props) => {
  return (
    <Image src={`/categories/${icon}.svg`} alt={name ?? ''} title={name} width={20} height={20}/>
  )
}

export default Category