import * as S from './styles'

import Estrela from '../../assets/images/estrela.png'

type Props = {
  imagem: string
  nome: string
  nota: string
  info: string
  destaque?: boolean
  categoria: string
  link: string
}

const Restaurant = ({
  destaque,
  categoria,
  nome,
  imagem,
  nota,
  info,
  link
}: Props) => (
  <S.Container>
    <S.Imagem src={imagem} alt={nome} />
    <S.Title>
      <h2>{nome}</h2>
      <span>
        {nota}
        <img src={Estrela} alt="Nota do restaurante" />
      </span>
    </S.Title>
    <S.Info>{info}</S.Info>
    <S.Button to={link}>Saiba mais</S.Button>

    <S.TagContainer destaque={destaque}>
      {destaque ? <S.Tag>Destaque da semana</S.Tag> : ''}
      <S.Tag>{categoria}</S.Tag>
    </S.TagContainer>
  </S.Container>
)

export default Restaurant
