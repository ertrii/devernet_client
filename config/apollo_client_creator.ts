import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { GRAPHQL_URI } from './variables'

export default function apolloClientCreator(): ApolloClient<NormalizedCacheObject> {
    const client = new ApolloClient({
        uri: GRAPHQL_URI,
        cache: new InMemoryCache(),
    })

    return client
}
