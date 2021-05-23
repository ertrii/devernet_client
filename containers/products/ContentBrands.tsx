import {
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Box,
    Button,
    Flex,
    Heading,
    Avatar,
} from '@chakra-ui/react'

export default function ContentBrands() {
    return (
        <Box>
            <Flex justifyContent="space-between" mb="4">
                <Heading as="h2" size="sm">
                    Marcas
                </Heading>
                <Button color="white" background="steelblue" size="xs">
                    Nuevo +
                </Button>
            </Flex>
            <Table size="sm">
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Nombre</Th>
                        <Th>Acciones</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>1</Td>
                        <Td>
                            <Flex alignItems="center">
                                <Avatar size="xs" name="Ubiquiti" mr="2" /> Ubiquiti
                            </Flex>
                        </Td>
                        <Td>2</Td>
                    </Tr>
                    <Tr>
                        <Td>2</Td>
                        <Td>
                            <Flex alignItems="center">
                                <Avatar size="xs" name="Mikrotik" mr="2" /> Mikrotik
                            </Flex>
                        </Td>
                        <Td>2</Td>
                    </Tr>
                    <Tr>
                        <Td>3</Td>
                        <Td>
                            <Flex alignItems="center">
                                <Avatar size="xs" name="TPLink" mr="2" /> TP Link
                            </Flex>
                        </Td>
                        <Td>2</Td>
                    </Tr>
                </Tbody>
            </Table>
        </Box>
    )
}
