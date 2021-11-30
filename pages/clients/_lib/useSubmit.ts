import { FormEvent, useState } from 'react'
import { db } from '../../../firebase/fb'

interface PropsInputs {
    value: string
}

interface Inputs {
    fullname: PropsInputs
    address: PropsInputs
    phone_number: PropsInputs
    email: PropsInputs
    tower: PropsInputs
    ip: PropsInputs
    date: PropsInputs
}

interface DataDoc {
    fullname: string
    address: string
    phone_number: string
    email: string
    tower: {
        value: string
        label: string
    }
    ip: string
    date: string
}

export default function useSubmit() {
    const [loading, setLoading] = useState(false)

    async function submit(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault()
        const form = ev.target as typeof ev.target & Inputs

        form.fullname.value = 's'

        const data: DataDoc = {
            fullname: form.fullname.value,
            address: form.address.value,
            phone_number: form.phone_number.value,
            email: form.email.value,
            tower: {
                value: form.tower.value,
                label: 'sdd',
            },
            ip: form.ip.value,
            date: form.date.value,
        }

        setLoading(true)
        const result = await db.collection('users').doc().set(data)
        console.log(result)
        setLoading(false)
    }

    return {
        submit,
        loading,
    }
}
