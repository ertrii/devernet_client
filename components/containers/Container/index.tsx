import { CommonProps } from '../../../utils/defined_properties'
import classnames from 'classnames'
import style from './container.module.css'

export interface ContainerProps extends CommonProps {
    spacing?: boolean
    center?: boolean
}

export default function Container({
    children,
    className,
    center = false,
    spacing = false,
    ...props
}: ContainerProps & { children: JSX.Element | JSX.Element[] | string }) {
    const classNames = classnames(
        style.container,
        {
            [style.center]: center,
            [style.spacing]: spacing,
        },
        className
    )
    return (
        <div {...props} className={classNames}>
            {children}
        </div>
    )
}
