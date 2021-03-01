import Container from '../components/containers/Container'
import Form from '../components/containers/Form'
import Input from '../components/forms/Input'
import Condition from '../components/utils/Condition'
import useCreateBrand from '../hooks/use_create_brand'

export default function HomePage() {
    const { handleSubmit, loading } = useCreateBrand()

    return (
        <Container spacing>
            <h1>Welcome to Devernet</h1>
            <Form onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nombre" />
                <Input name="image_url" placeholder="ruta de imagen" />
                <Condition isEqual={loading} to>
                    <p>Loading...</p>
                </Condition>
                <button>Crear marca</button>
            </Form>
        </Container>
    )
}
