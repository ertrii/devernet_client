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
    const client = apolloClientCreator()

    async function query<T>(
        document_node: DocumentNode,
        variables: Record<string, any> = {}
    ): Promise<QueryResult<T>> {
        try {
            const query_result = await client.query({
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
            const query_result = await client.mutate({
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

    return {
        query,
        mutation,
    }
}
