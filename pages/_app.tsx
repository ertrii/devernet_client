import { ApolloProvider } from '@apollo/client'
import apolloClientCreator from '../config/apollo_client_creator'
import { ChakraProvider } from '@chakra-ui/react'
import 'normalize.css'
import '../css/app.css'
import '../css/spacing.css'
import Layout from '../components/containers/Layout'

interface AppProps {
    Component: () => JSX.Element
    pageProps: Record<string, any>
}

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <ApolloProvider client={apolloClientCreator()}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ApolloProvider>
        </ChakraProvider>
    )
}
