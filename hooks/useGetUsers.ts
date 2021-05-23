import { useEffect, useState } from 'react'
import USERS_QUERY, { Users } from '../graphql/users_query'
import GQLFetch from '../utils/gql_fetch'

const { mutation } = GQLFetch()

interface State {
    loading: boolean
    data: Users
}

export default function useGetUsers() {
    const [states, setData] = useState<State>({
        loading: true,
        data: [],
    })

    useEffect(() => {
        mutation<{ users: Users }>(USERS_QUERY).then(({ data, error }) => {
            console.log(error)
            if (data) {
                setData({
                    loading: false,
                    data: data.users,
                })
            } else {
                setData({
                    loading: false,
                    data: [],
                })
            }
        })
    }, [])

    return states
}
