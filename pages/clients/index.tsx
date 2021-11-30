import {
    Heading,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Stack,
    Text,
    Select,
    Button,
} from '@chakra-ui/react'
import useSubmit from './_lib/useSubmit'

export default function Clients() {
    const { submit, loading } = useSubmit()

    return (
        <form method="post" onSubmit={submit}>
            <Stack maxWidth={600} margin="auto" bg="white" padding="16" paddingTop={10}>
                <Heading mb={8}>Registros de Clientes</Heading>
                <Text fontSize="xl" mb={2} color="blue.500" fontWeight="bold">
                    Datos Personales
                </Text>
                <FormControl id="fullname">
                    <FormLabel>Nombre Completo</FormLabel>
                    <Input name="fullname" borderColor="red" placeholder="Ingresar nombre" />
                    <FormHelperText color="red">We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl id="address">
                    <FormLabel>Dirección</FormLabel>
                    <Input name="address" placeholder="Ingresar dirección" />
                </FormControl>
                <FormControl id="phone_number">
                    <FormLabel>Celular</FormLabel>
                    <Input name="phone_number" placeholder="Ingresar número de celular" />
                </FormControl>
                <FormControl id="email" mb={4}>
                    <FormLabel>Correo</FormLabel>
                    <Input name="email" type="email" placeholder="Correo electrónico" />
                </FormControl>
                <Text fontSize="xl" mb={2} color="blue.500" fontWeight="bold">
                    Instalación
                </Text>
                <FormControl id="tower">
                    <FormLabel>Torre</FormLabel>
                    <Select name="tower" placeholder="Seleccionar Torre">
                        <option value="1">Torre 1 (Erick)</option>
                        <option value="2">Torre 2 (Jacket)</option>
                    </Select>
                </FormControl>
                <FormControl id="ip">
                    <FormLabel>IP</FormLabel>
                    <Input name="ip" placeholder="Ingresar dirección" />
                </FormControl>
                <FormControl id="date" mb={6}>
                    <FormLabel>Fecha</FormLabel>
                    <Input name="date" type="date" placeholder="Ingresar fecha" />
                </FormControl>
                <Button bg="blue.500" color="white" type="submit" isLoading={loading}>
                    Guardar
                </Button>
            </Stack>
        </form>
    )
}
