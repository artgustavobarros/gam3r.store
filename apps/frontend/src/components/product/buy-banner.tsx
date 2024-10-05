'use client'

import { Currency, Product } from '@gstore/core'
import useInstallment from '@/data/hooks/use-installment'
import { IconCreditCard, IconShoppingCart } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

interface BuyBannerProps {
  product: Product
}

export default function BuyBanner({ product }: BuyBannerProps) {
  const router = useRouter()
  //   const addItemToCart = (product: Product) => {}
  const installment = useInstallment(product.promotionalPrice)

  return (
    <div className="flex">
      <div className="flex flex-col border-r border-zinc-500 pr-5">
        <div className="text-zinc-400 line-through">
          de R$ {product.basePrice}
        </div>
        <div className="text-2xl font-semibold">
          <span className="text-base text-zinc-300">por </span>
          <span className="text-emerald-500">
            R$ {product.promotionalPrice}
          </span>
          <span className="text-base text-zinc-300"> à vista </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col pl-5 text-2xl font-semibold text-zinc-400">
        <span className="text-base text-zinc-300">
          {installment.numberOfInstallments}x de
        </span>
        {Currency.format(installment.installmentPrice)}
      </div>
      <div className="flex items-center gap-2">
        <button className="button flex-1 bg-pink-600" onClick={() => {}}>
          <IconShoppingCart size={20} />
          <span>Adicionar</span>
        </button>
        <button
          className="button flex-1 bg-violet-700"
          onClick={() => {
            router.push('/checkout/payment')
          }}
        >
          <IconCreditCard size={20} />
          <span>Comprar</span>
        </button>
      </div>
    </div>
  )
}
