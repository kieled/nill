import {DetailedHTMLProps, FC, InputHTMLAttributes} from "react"
import cn from "classnames"

import s from './styles.module.css'

type DefaultInputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

interface Props extends DefaultInputType {
  hasError?: boolean
}

const Input: FC<Props> = (
  {className, hasError, ...props}
) => {
  return (
    <input className={cn(
      s.input,
      {[s.error]: hasError},
      className
    )} {...props}/>
  )
}

export default Input