import ProductsList from '@/components/product/products-list'

export default function Home() {
  return (
    <div className="container flex flex-1 flex-col gap-5 py-10">
      <ProductsList />
    </div>
  )
}
