import { gql } from '@apollo/client'

export interface IntoUser {
    name: string
    lastname: string
    email: string
    username: string
    address: string
    phone_number: string
    password: string
}

export interface CreatedUser {
    id: number
    name: string
    lastname: string
    email: string
    username: string
    address: string
    phone_number: string
    user_type: 'admin' | 'client' | 'technical'
}

const CREATE_USER_MUTATION = gql`
    mutation create($body: IntoUser!) {
        create_user(into_user: $body) {
            id
            name
            lastname
            email
            username
            address
            phone_number
            user_type
        }
    }
`

export default CREATE_USER_MUTATION
