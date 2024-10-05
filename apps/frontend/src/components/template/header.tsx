import Link from 'next/link'
import Logo from '../shared/logo'
import CartIcon from '../shared/cart-icon'
// import useCarrinho from '@/data/hooks/useCarrinho'

export default function Header() {
  const itensAmount = 0
  // const { qtdeItens } = useCarrinho()
  return (
    <div
      className="flex h-20 flex-col"
      style={{
        background:
          'linear-gradient(90deg, #14002D 0%, #420093 50%, #14002D 100%)',
      }}
    >
      <div className="container flex flex-1 flex-col justify-center">
        <div className="flex items-center justify-between">
          <Logo />
          <Link href="/checkout/carrinho">
            <CartIcon itensAmount={itensAmount} />
          </Link>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20"></div>
    </div>
  )
}
