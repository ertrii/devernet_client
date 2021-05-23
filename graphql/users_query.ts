import { gql } from '@apollo/client'

export type Users = Array<{
    id: number
    name: string
    lastname: string
    email: string
    address: string
    user_type: 'admin' | 'client' | 'technical'
}>

const USERS_QUERY = gql`
    {
        users {
            id
            name
            lastname
            email
            address
            user_type
        }
    }
`

export default USERS_QUERY
