import { Grid, GridItem } from '@chakra-ui/react'
import Container from '../components/containers/Container'
import ContentBrands from '../containers/products/ContentBrands'
import TableProducts from '../containers/products/TableProducts'

export default function Products() {
    return (
        <Container>
            <Grid templateColumns="repeat(6, 1fr)" gap={8}>
                <GridItem colSpan={4} bg="white" borderRadius="3xl" padding="8">
                    <TableProducts />
                </GridItem>
                <GridItem colStart={5} colEnd={7} bg="white" borderRadius="3xl" padding="8">
                    <ContentBrands />
                </GridItem>
            </Grid>
        </Container>
    )
}
