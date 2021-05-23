import {
    Table,
    TableCaption,
    Thead,
    Tr,
    Th,
    Tbody,
    Tfoot,
    Td,
    Box,
    Flex,
    Heading,
    Button,
    Avatar,
    Text,
} from '@chakra-ui/react'

export default function TableProducts() {
    return (
        <Box>
            <Flex justifyContent="space-between" mb="4">
                <Heading as="h2" size="sm">
                    Productos
                </Heading>
                <Box>
                    <Button color="white" background="steelblue" size="xs" mr="2">
                        Nuevo +
                    </Button>
                    <Button color="white" background="teal.500" size="xs">
                        Agregar Stock +
                    </Button>
                </Box>
            </Flex>
            <Table variant="simple">
                <TableCaption>Estos son todos los productos recientes</TableCaption>
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Nombre</Th>
                        <Th>Cantidad</Th>
                        <Th isNumeric>Precio ($/.)</Th>
                        <Th>Acciones</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>1</Td>
                        <Td>
                            <Flex alignItems="center">
                                <Avatar size="sm" name="POE" mr="2" />
                                <Box>
                                    <Text fontSize="lg">POE</Text>
                                    <Text fontSize="xs">Ubiquiti</Text>
                                </Box>
                            </Flex>
                        </Td>
                        <Td>1</Td>
                        <Td isNumeric>$/. 50</Td>
                        <Td>1</Td>
                    </Tr>
                    <Tr>
                        <Td>2</Td>
                        <Td>
                            <Flex alignItems="center">
                                <Avatar size="sm" name="NanoLoco AC" mr="2" />
                                <Box>
                                    <Text fontSize="lg">NanoLoco AC</Text>
                                    <Text fontSize="xs">Ubiquiti</Text>
                                </Box>
                            </Flex>
                        </Td>
                        <Td>1</Td>
                        <Td isNumeric>$/. 265</Td>
                        <Td>1</Td>
                    </Tr>
                    <Tr>
                        <Td>3</Td>
                        <Td>
                            <Flex alignItems="center">
                                <Avatar size="sm" name="LiteBeam AC" mr="2" />
                                <Box>
                                    <Text fontSize="lg">LiteBeam AC</Text>
                                    <Text fontSize="xs">Ubiquiti</Text>
                                </Box>
                            </Flex>
                        </Td>
                        <Td>2</Td>
                        <Td isNumeric>$/. 270</Td>
                        <Td>1</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th></Th>
                        <Th></Th>
                        <Th>Total: </Th>
                        <Th isNumeric>$/. 1500</Th>
                        <Td>1</Td>
                    </Tr>
                </Tfoot>
            </Table>
        </Box>
    )
}
