'use client'

import { Currency, Product } from '@gstore/core'
import { IconShoppingCartPlus } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import Score from '../shared/score'

export interface ProductItemProps {
  product: Product
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <Link
      href={`products/${product.id}`}
      className="relative flex max-w-[350px] flex-col rounded-xl border border-white/10 bg-violet-dark"
    >
      <div className="absolute right-2.5 top-2.5 flex justify-end">
        <Score score={product.score} />
      </div>
      <div className="relative h-48 w-full">
        <Image
          src={product.image}
          fill
          className="object-contain"
          alt="imagem do produto"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 border-t border-white/10 p-5">
        <span className="text-lg font-semibold">{product.name}</span>
        <div className="self-start border-b border-dashed text-sm">
          {product.specifications.stand}
        </div>
        <div className="flex-1"></div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 line-through">
            de {Currency.format(product.basePrice)}
          </span>
          <span className="text-xl font-semibold text-emerald-400">
            por {Currency.format(product.promotionalPrice)}
          </span>
          {/* <span className="text-zinc-400 text-xs">
            
          </span> */}
        </div>
        <button
          className="flex h-8 items-center justify-center gap-2 rounded-full border-emerald-50 bg-violet-700 hover:border-2"
          onClick={(e) => {
            e.preventDefault()
            // addItem(product)
          }}
        >
          <IconShoppingCartPlus size={20} />
          <span>Adicionar</span>
        </button>
      </div>
    </Link>
  )
}
