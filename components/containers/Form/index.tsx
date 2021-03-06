import classnames from 'classnames'
import { CommonProps } from '../../../utils/defined_properties'
import style from './form.module.css'

export interface FormProps extends CommonProps {
    onSubmit: (ev: any) => void
}

export default function Form(
    props: FormProps & { children: JSX.Element | JSX.Element[] | boolean }
) {
    return (
        <form className={classnames(style.form, props.className)} onSubmit={props.onSubmit}>
            {props.children}
        </form>
    )
}
