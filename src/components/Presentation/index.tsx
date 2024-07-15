import { ItalianBanner } from './styles'

type Props = {
  category: string
  name: string
  image: string
}

const Presentation = ({ category, name, image }: Props) => (
  <ItalianBanner imagem={image}>
    <div className="container">
      <span>{category}</span>
      <h1>{name}</h1>
    </div>
  </ItalianBanner>
)

export default Presentation
