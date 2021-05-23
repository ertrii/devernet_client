import { Box, Text, Avatar, Flex, Icon, Badge } from '@chakra-ui/react'
// import useGetClients from '../../hooks/useGetClients'

const users = [
    { name: 'Dan Abrahmov' },
    { name: 'Mario Iva' },
    { name: 'Samuel Eria' },
    { name: 'Mirian Traves' },
]

export default function PendingInstalations() {
    // const { clients } = useGetClients()
    return (
        <Box w="100%" p="8" bgColor="white" borderRadius="xl">
            <Text fontSize="sm" fontWeight="bold" mb="3" color="gray.500">
                Instalaciones Pendiente
            </Text>
            {users.map((user, i) => (
                <Box py="3" key={i}>
                    <Flex alignItems="center" width="100%">
                        <Avatar name={user.name} mr="3" />
                        <Box>
                            <Flex alignItems="center">
                                <Text as="h4" size="md" fontWeight="semibold">
                                    {user.name}
                                </Text>
                                <Badge ml="1" borderRadius="full" px="2" colorScheme="teal">
                                    936151510
                                </Badge>
                            </Flex>
                            <Icon color="gray.500" boxSize="3">
                                <path
                                    fill="currentColor"
                                    d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                                />
                            </Icon>{' '}
                            <Text color="gray.500" as="span" fontSize="xs">
                                Dirección San Antiono L-151
                            </Text>
                            <Icon color="gray.500" ml="3" boxSize="3">
                                <path
                                    fill="currentColor"
                                    d="M17 10H7V12H17V10ZM19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM14 14H7V16H14V14Z"
                                />{' '}
                            </Icon>{' '}
                            <Text color="gray.500" as="span" fontSize="xs">
                                12/12/2020
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            ))}
        </Box>
    )
}
