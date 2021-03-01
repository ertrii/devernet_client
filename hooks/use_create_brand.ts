// import { useRender } from 'redity'
import { useState } from 'react'
import { CREATE_BRAND } from '../graphql/brand'
import GQLFetch from '../utils/gql_fetch'

export default function useCreateBrand() {
    // useRender()
    const [loading, setLoading] = useState(false)
    const { mutation } = GQLFetch()

    async function handleSubmit(ev: any) {
        ev.preventDefault()
        const form = ev.target
        setLoading(true)
        const { data, error } = await mutation(CREATE_BRAND, {
            data: {
                name: form.name.value,
                image_url: form.image_url.value,
            },
        })
        setLoading(false)
        if (error) {
            console.log(error)
            return
        }
        console.log(data)
    }
    return {
        handleSubmit,
        loading,
    }
}
