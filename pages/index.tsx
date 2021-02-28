import { gql, useMutation, useQuery } from '@apollo/client'
import Container from '../components/Container'
import Form from '../components/Form'
import Input from '../components/Input'

const BRANDS = gql`
    {
        brands {
            id
            name
            deleted
            created_at
            updated_at
        }
    }
`

const CREATE_BRANDS = gql`
    mutation create_brand($data: IntoBrand!) {
        create_brand(into_brand: $data) {
            id
            name
            image_url
            created_at
            updated_at
        }
    }
`

export default function HomePage() {
    const result = useQuery(BRANDS)
    const [create_brand] = useMutation(CREATE_BRANDS)
    console.log(result.data)
    function handleSubmit(ev: any) {
        ev.preventDefault()
        const form = ev.target
        create_brand({
            variables: {
                data: {
                    name: form.name.value,
                    image_url: form.image_url.value,
                },
            },
        })
    }

    return (
        <Container spacing>
            <h1>Welcome to Next.js!</h1>
            <Form onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nombre" />
                <Input name="image_url" placeholder="ruta de imagen" />
                <button>Crear marca</button>
            </Form>
        </Container>
    )
}
