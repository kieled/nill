import {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react"
import cn from "classnames"

import s from './styles.module.css'

type DefaultBtnType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


const Button: FC<DefaultBtnType> = (
  {className, children, ...props}
) => {
  return (
    <button className={cn(
      s.btn,
      className
    )} {...props}>
      {children}
    </button>
  )
}

export default Button