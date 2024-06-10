class Restaurants {
  title: string
  description: string
  image: string
  // infos: string
  favorite: boolean
  type: string
  note: number
  id: number

  constructor(
    id: number,
    favorite: boolean,
    title: string,
    type: string,
    note: number,
    image: string,
    description: string
  ) {
    this.id = id
    this.favorite = favorite
    this.title = title
    this.type = type
    this.note = note
    this.image = image
    this.description = description
  }
}

export default Restaurants
