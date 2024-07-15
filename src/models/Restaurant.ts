class Restaurant {
  category: string
  image: string
  name: string
  note: string
  info: string
  id: number
  link: string
  highlights?: boolean

  constructor(
    category: string,
    image: string,
    name: string,
    note: string,
    info: string,
    id: number,
    link: string,
    highlights?: boolean
  ) {
    this.category = category
    this.image = image
    this.name = name
    this.note = note
    this.info = info
    this.id = id
    this.link = link
    this.highlights = highlights
  }
}

export default Restaurant
