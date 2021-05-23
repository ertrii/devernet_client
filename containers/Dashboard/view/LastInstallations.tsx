import { Flex, Button, Text, Box, Grid, GridItem, Image } from '@chakra-ui/react'

export default function LastInstallations() {
    return (
        <Box mb="8">
            <Flex justifyContent="space-between" alignItems="center">
                <Text fontWeight="bold">Últimas instalaciones</Text>
                <Button color="white" background="steelblue" size="xs">
                    Ver todos
                </Button>
            </Flex>
            <Box mt="4" padding="4" background="white" borderRadius="3xl">
                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                    <GridItem borderRadius="xl">
                        <Image
                            src="https://bit.ly/2Z4KKcF"
                            alt="image"
                            width="100%"
                            height="52"
                            objectFit="cover"
                            borderRadius="lg"
                        />
                    </GridItem>
                    <GridItem borderRadius="xl">
                        <Image
                            src="https://bit.ly/2Z4KKcF"
                            alt="image"
                            width="100%"
                            height="52"
                            objectFit="cover"
                            borderRadius="lg"
                        />
                    </GridItem>
                    <GridItem borderRadius="xl">
                        <Image
                            src="https://bit.ly/2Z4KKcF"
                            alt="image"
                            width="100%"
                            height="52"
                            objectFit="cover"
                            borderRadius="lg"
                        />
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    )
}
