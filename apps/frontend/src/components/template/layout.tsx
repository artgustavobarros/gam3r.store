import { ReactNode } from 'react'
import Header from './header'
import Footer from './footer'

export interface LayoutProps {
  children: ReactNode
  className?: string
  withoutHeader?: boolean
  withouthFooter?: boolean
}

export default function Layout({
  children,
  className,
  withoutHeader,
  withouthFooter,
}: LayoutProps) {
  return (
    <div
      className="flex min-h-screen flex-col"
      style={{
        background: 'radial-gradient(50% 50% at 50%, #2d0064 0%, #0d001c 100%)',
      }}
    >
      <div
        className="flex w-screen flex-1 flex-col"
        style={{ background: 'url("/background.png")' }}
      >
        {!withoutHeader && <Header />}
        <main className={`flex flex-1 flex-col ${className ?? ''}`}>
          {children}
        </main>
        {!withouthFooter && <Footer />}
      </div>
    </div>
  )
}
