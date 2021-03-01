export interface PropsCondition {
    children: JSX.Element | JSX.Element[]
    isEqual: string | number | boolean
    to: string | number | boolean | string[] | number[] | boolean[]
}

export default function Condition(props: PropsCondition): JSX.Element | null {
    if (Array.isArray(props.to)) {
        for (const value in props.to) {
            if (props.isEqual === value) {
                return <>{props.children}</>
            }
        }

        return null
    }
    if (props.isEqual === props.to) {
        return <>{props.children}</>
    }
    return null
}
