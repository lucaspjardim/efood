import { Container, Button } from './styles'

type Props = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
  onclick: () => void
}

const Plates = ({ foto, nome, descricao, onclick }: Props) => {
  const returnDescription = (descricao: string) => {
    if (descricao.length > 123) {
      return descricao.slice(0, 120) + '...'
    }
  }

  return (
    <>
      <Container>
        <img src={foto} alt={nome} />
        <h2>{nome}</h2>
        <p>{returnDescription(descricao)}</p>
        <Button onClick={onclick}>Mais detalhes</Button>
      </Container>
    </>
  )
}

export default Plates
