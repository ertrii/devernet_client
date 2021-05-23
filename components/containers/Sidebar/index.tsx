import { Img, Box, Center, Text, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import styles from './sidebar.module.css'

export default function Sidebar() {
    return (
        <Box>
            <Center>
                <Img my="10" src="images/netoworking.svg" maxW="24" />
            </Center>
            <Text as="h4" fontWeight="bold" textAlign="center" mb="10">
                DEVERNET
            </Text>
            <Box width="100%">
                <Link href="/">
                    <a className={styles.bar}>
                        <Icon mr="2" /> Dashboard
                    </a>
                </Link>
                <Link href="/clients">
                    <a className={styles.bar}>
                        <Icon mr="2" /> Clientes
                    </a>
                </Link>
                <Link href="/products">
                    <a className={styles.bar}>
                        <Icon mr="2" /> Productos
                    </a>
                </Link>
            </Box>
        </Box>
    )
}
