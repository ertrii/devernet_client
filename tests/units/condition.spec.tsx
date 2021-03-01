import Condition from '../../components/utils/Condition'
import { render, screen } from '@testing-library/react'

describe('condition', function () {
    it('first', function () {
        function Component({ show }: { show: boolean }) {
            return (
                <Condition isEqual={show} to>
                    visible
                </Condition>
            )
        }
        render(<Component show />)
        expect(screen.queryByText('visible')).toBeInTheDocument()
    })
})
