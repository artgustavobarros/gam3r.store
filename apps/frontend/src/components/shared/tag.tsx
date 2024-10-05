import { ElementType } from 'react'

interface TagProps {
  label: string
  icon: ElementType
  outlined?: boolean
}

export default function Tag({ label, icon: Icon, outlined }: TagProps) {
  return (
    <div
      className={`flex items-center gap-2 self-start rounded-full px-4 py-1 text-xs uppercase ${outlined ? 'border border-violet-500' : 'bg-gradient-to-r from-violet-600 to-violet-700'}`}
    >
      <Icon size={15} />
      <span>{label}</span>
    </div>
  )
}
