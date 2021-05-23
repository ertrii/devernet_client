import {
    Flex,
    Button,
    Text,
    Box,
    Grid,
    GridItem,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
} from '@chakra-ui/react'

export default function LastPays() {
    return (
        <Box mb="8">
            <Flex justifyContent="space-between" alignItems="center">
                <Text fontWeight="bold">Ultimos pagos</Text>
                <Button color="white" background="steelblue" size="xs">
                    Ver todos
                </Button>
            </Flex>
            <Box mt="4" padding="4" background="white" borderRadius="3xl">
                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                    <GridItem borderRadius="xl" p="4" bg="green.100">
                        <Stat>
                            <StatLabel>Samuel Eria</StatLabel>
                            <StatNumber>S/0.00</StatNumber>
                            <StatHelpText>12 enero 2021</StatHelpText>
                        </Stat>
                    </GridItem>
                    <GridItem borderRadius="xl" p="4" bg="green.100">
                        <Stat>
                            <StatLabel>Lopez Rule</StatLabel>
                            <StatNumber>S/0.00</StatNumber>
                            <StatHelpText>12 enero 2021</StatHelpText>
                        </Stat>
                    </GridItem>
                    <GridItem borderRadius="xl" p="4" bg="green.100">
                        <Stat>
                            <StatLabel>Minar Cawa</StatLabel>
                            <StatNumber>S/50.00</StatNumber>
                            <StatHelpText>12 enero 2021</StatHelpText>
                        </Stat>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    )
}
