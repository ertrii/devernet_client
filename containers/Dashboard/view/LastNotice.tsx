import { Box, Image, Badge, Text } from '@chakra-ui/react'

export default function LastNotice() {
    return (
        <Box w="100%" bgColor="white" borderRadius="xl">
            <Box p="3">
                <Image
                    src="https://bit.ly/2Z4KKcF"
                    alt="image"
                    width="100%"
                    height="52"
                    objectFit="cover"
                    borderRadius="lg"
                />
                <Box p="2" mt="4">
                    <Box d="flex" alignItems="baseline">
                        <Badge borderRadius="full" px="2" colorScheme="teal">
                            Notice
                        </Badge>
                        <Box
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            ml="2"
                        >
                            12 de agosto 2018
                        </Box>
                    </Box>
                    <Box mt="2" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                        Nuevas mejoras
                    </Box>
                    <Box>
                        <Text as="p" fontSize="sm">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste vitae
                            rerum aliquam excepturi, veniam qui accusamus adipisci dolore quam
                            eveniet dolorem optio. Dolor, impedit reiciendis ipsa obcaecati vel
                            nostrum mollitia!
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
