import Layout from '@/components/template/layout'
import { ReactNode } from 'react'

export default function LayoutPage({ children }: { children: ReactNode }) {
  return <Layout>{children}</Layout>
}
