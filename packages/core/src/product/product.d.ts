import Priceable from './priceable'
import Specifications from './specification'

export default interface Product extends Priceable {
  id: number
  name: string
  description: string
  brand: string
  model: string
  image: string
  score: number
  reviewVideo: string
  tags: string[]
  
  specifications: Specifications
}
