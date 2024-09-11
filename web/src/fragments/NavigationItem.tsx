import { ReactElement } from 'react'

type Props = {
  active?: boolean
  title: string
  link: string
  icon: ReactElement
}

export default function NavigationItem(props: Props) {
  const { active, title, link, icon } = props

  return (
    <>
      <a
        href={link}
        className={`flex items-center gap-3 text-base text-neutral-700 my-2 p-2 rounded-md  
          ${active && 'bg-white'} ${!active && 'hover:bg-neutral-200'} ${title === 'Sair' && 'text-red-700'}`}
      >
        {icon} {title}
      </a>
    </>
  )
}
