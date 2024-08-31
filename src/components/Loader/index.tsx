import { ClockLoader } from 'react-spinners'
import { Container } from './styles'
import { Cores } from '../../styles'

const ClockSpinner = () => {
  return (
    <Container>
      <ClockLoader color={Cores.salmao} />
    </Container>
  )
}

export default ClockSpinner
