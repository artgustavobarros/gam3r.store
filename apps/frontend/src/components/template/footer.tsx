import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandYoutube,
} from '@tabler/icons-react'
import Logo from '../shared/logo'

export default function Footer() {
  return (
    <footer className="mt-10 flex flex-col bg-black/30 text-zinc-400">
      <div className="h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20"></div>
      <div className="container flex flex-col gap-10 py-10">
        <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:items-start md:gap-0 md:text-left">
          <Logo />
          <div className="flex flex-col gap-1">
            <span className="pb-2 text-2xl font-bold text-zinc-200">Sobre</span>
            <span className="text-sm">Nossa História</span>
            <span className="text-sm">Política de Privacidade</span>
            <span className="text-sm">Termos de Uso</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="pb-2 text-2xl font-bold text-zinc-200">
              Contato
            </span>
            <span className="text-sm">suporte@gam3r.store</span>
            <div className="flex items-center justify-center gap-2 text-sm md:justify-start">
              <IconBrandWhatsapp size={20} className="text-green-500" />
              <span>WhatsApp</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-1.5 md:flex-row">
          <div className="flex gap-2">
            <IconBrandYoutube size={28} stroke={1} />
            <IconBrandInstagram size={28} stroke={1} />
            <IconBrandFacebook size={28} stroke={1} />
            <IconBrandLinkedin size={28} stroke={1} />
          </div>
          <div className="flex flex-col items-center gap-1.5 text-sm text-zinc-500 md:flex-row">
            <div className="flex gap-1.5">
              <span>Feito com</span>
              <span>❤️</span>
              <span>em 2024</span>
            </div>
            <span className="hidden md:inline-block">-</span>
            <span>Todos os direitos reservados</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
