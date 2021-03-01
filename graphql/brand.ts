import { gql } from '@apollo/client'

export const BRANDS = gql`
    {
        brands {
            id
            name
            deleted
            created_at
            updated_at
        }
    }
`

export const CREATE_BRAND = gql`
    mutation create_brand($data: IntoBrand!) {
        create_brand(into_brand: $data) {
            id
            name
            image_url
            created_at
            updated_at
        }
    }
`
