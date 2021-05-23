import { useEffect, useState } from 'react'
import CLIENTS_QUERY, { Clients } from '../graphql/clients_query'
import GQLFetch from '../utils/gql_fetch'

const { mutation } = GQLFetch()

interface State {
    loading: boolean
    clients: Clients
}

export default function useGetClients() {
    const [state, setData] = useState<State>({
        loading: true,
        clients: [],
    })

    useEffect(() => {
        mutation<{ clients: Clients }>(CLIENTS_QUERY).then(({ data, error }) => {
            console.log(error)
            if (data) {
                setData({
                    loading: false,
                    clients: data.clients,
                })
            } else {
                setData({
                    loading: false,
                    clients: [],
                })
            }
        })
    }, [])

    return state
}
