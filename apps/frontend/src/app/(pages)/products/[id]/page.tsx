import BuyBanner from '@/components/product/buy-banner'
import ProductInfo from '@/components/product/product-info'
import ProductNotFound from '@/components/product/product-not-found'
import ProductTitle from '@/components/product/product-title'
import { products } from '@gstore/core'

export default function ProductPage(props: any) {
  const id = Number(props.params.id)
  const product = products.find((product) => product.id === id)
  return product ? (
    <div className="container flex flex-col gap-20 py-10">
      <div className="flex flex-col gap-10">
        <ProductTitle product={product} />
        <ProductInfo product={product} />
        <BuyBanner product={product} />
      </div>
    </div>
  ) : (
    <ProductNotFound />
  )
}
