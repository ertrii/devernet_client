import classnames from 'classnames'
import { InputHTMLAttributes } from 'react'
import style from './input.module.css'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

export default function Input({ className = '', ...props }: InputProps) {
    const classNames = classnames(style.input, className)
    return <input {...props} className={classNames} />
}
