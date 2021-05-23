import CREATE_USER_MUTATION, { CreatedUser, IntoUser } from '../../../graphql/create_user_mutation'
import GQLFetch from '../../../utils/gql_fetch'

const { mutation } = GQLFetch()

export default function useCreateUser() {
    async function handleSubmit(ev: any) {
        ev.preventDefault()
        const form = ev.target
        const body: IntoUser = {
            name: form.name.value,
            lastname: form.lastname.value,
            email: form.email.value,
            username: form.username.value,
            address: form.address.value,
            phone_number: form.phone_number.value,
            password: form.password.value,
        }
        const { data, error } = await mutation<CreatedUser>(CREATE_USER_MUTATION, { body })
        console.log(data)
        if (error) return null
        return data
    }

    return {
        handleSubmit,
    }
}
