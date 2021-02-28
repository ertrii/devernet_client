import { gql, useQuery } from '@apollo/client'

const BRANDS = gql`
    {
        brands {
            id
            name
            deleted
        }
    }
`

function HomePage() {
    const result = useQuery(BRANDS)
    console.log(result.data)
    return <div>Welcome to Next.js!</div>
}

export default HomePage
