import { ApolloProvider } from '@apollo/client'
import apolloClientCreator from '../config/apollo_client_creator'
import 'normalize.css'
import '../css/app.css'

interface AppProps {
    Component: () => JSX.Element
    pageProps: Record<string, any>
}

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={apolloClientCreator()}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}
