import { Grid, GridItem } from '@chakra-ui/react'
import Container from '../components/containers/Container'
import LastInstallations from '../containers/Dashboard/view/LastInstallations'
import LastNotice from '../containers/Dashboard/view/LastNotice'
import LastPays from '../containers/Dashboard/view/LastPays'
import PendingInstalations from '../containers/Dashboard/view/PendingInstalations'
import Summary from '../containers/Dashboard/view/Summary'

export default function HomePage() {
    return (
        <Container>
            <Grid templateColumns="repeat(6, 1fr)" gap={8}>
                <GridItem colSpan={4} h="10">
                    <LastInstallations />
                    <LastPays />
                    <Grid templateColumns="repeat(2, 1fr)" gap={8}>
                        <LastNotice />
                        <PendingInstalations />
                    </Grid>
                </GridItem>
                <GridItem colStart={5} colEnd={7} bg="white" borderRadius="3xl" padding="4">
                    <Summary />
                </GridItem>
            </Grid>
        </Container>
    )
}
