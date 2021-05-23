import { Flex, Text, Avatar } from '@chakra-ui/react'
import Sidebar from '../Sidebar'
import style from './layout.module.css'

export default function Layout(props: { children: React.ReactNode }) {
    return (
        <Flex h="100vh" w="full">
            <aside className={style.sidebar}>
                <Sidebar />
            </aside>
            <section className={style.section}>
                <nav className={style.navbar}>
                    <Text fontSize="xx-large" fontWeight="black">
                        Dashboard
                    </Text>
                    <Flex alignItems="center">
                        <Text as="p" mr="3">
                            Hi, Erick
                        </Text>
                        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                    </Flex>
                </nav>
                <main className={style.content}>{props.children}</main>
            </section>
        </Flex>
    )
}
