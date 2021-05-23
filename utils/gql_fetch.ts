import { DocumentNode } from 'graphql'
import apolloClientCreator from '../config/apollo_client_creator'

export interface QueryResult<T> {
    data: T | null
    error: any
}

export interface MutationResult<T> {
    data: T | null
    error: any
}

export default function GQLFetch() {
    async function query<T>(
        document_node: DocumentNode,
        variables: Record<string, any> = {}
    ): Promise<QueryResult<T>> {
        try {
            const query_result = await GQLFetch.client.query({
                query: document_node,
                variables,
            })

            const data: T = query_result.data

            return {
                data,
                error: null,
            }
        } catch (error) {
            return {
                data: null,
                error,
            }
        }
    }

    async function mutation<T>(
        document_node: DocumentNode,
        variables: Record<string, any> = {}
    ): Promise<MutationResult<T>> {
        try {
            const query_result = await GQLFetch.client.mutate({
                mutation: document_node,
                variables,
            })

            const data: T = query_result.data

            return {
                data,
                error: null,
            }
        } catch (error) {
            return {
                data: null,
                error,
            }
        }
    }

    function subscribe<T>(
        document_node: DocumentNode,
        variables: Record<string, any> | null = null,
        listen: (data: T) => void
    ): () => void {
        const observer = GQLFetch.client.subscribe({
            query: document_node,
            variables: variables || {},
        })
        const subscription = observer.subscribe(function (response) {
            listen(response.data)
        })

        return () => subscription.unsubscribe()
    }

    return {
        query,
        mutation,
        subscribe,
    }
}

GQLFetch.client = apolloClientCreator()
