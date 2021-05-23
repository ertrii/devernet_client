import { gql } from '@apollo/client'

export type Clients = Array<{
    id: number
    user_id: number
    instalation_id: number
    active: boolean
}>

const CLIENTS_QUERY = gql`
    {
        clients {
            id
            user_id
            instalation_id
            active
        }
    }
`

export default CLIENTS_QUERY
