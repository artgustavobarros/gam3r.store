import ProductItem from './product-item'
import ProductNotFound from './product-not-found'
import { products } from '@gstore/core'

export default function ProductsList() {
  return products.length ? (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  ) : (
    <ProductNotFound withoutButton />
  )
}
