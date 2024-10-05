import { Product } from '@gstore/core'
import Image from 'next/image'
import Specifications from './specifications'

interface ProductInfoProps {
  product: Product
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="flex items-center rounded-xl bg-violet-dark p-5">
      <div className="relative flex h-96 flex-1 justify-center">
        <Image
          src={product.image}
          fill
          className="object-cover p-7"
          alt="imagem do produto"
        />
      </div>
      <Specifications product={product} />
    </div>
  )
}
