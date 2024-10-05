import { Product } from '@gstore/core'
import Tag from '../shared/tag'
import { IconTag } from '@tabler/icons-react'
import ProductNotFound from './product-not-found'

interface SpecificationsProps {
  product: Product
}

export default function Specifications({ product }: SpecificationsProps) {
  return product ? (
    <div className="flex flex-1 flex-col gap-1">
      <div className="mb-3 flex">
        <Tag label={product.specifications.stand} icon={IconTag} />
      </div>
      {product.specifications &&
        Object.keys(product.specifications)
          .filter((k) => k !== 'stand')
          .map((key) => (
            <div key={key} className="flex gap-1">
              <span className="w-1/3 bg-white/5 p-2">{key}</span>
              <span className="w-full bg-white/5 p-2">
                {product.specifications[key]}
              </span>
            </div>
          ))}
    </div>
  ) : (
    <ProductNotFound />
  )
}
