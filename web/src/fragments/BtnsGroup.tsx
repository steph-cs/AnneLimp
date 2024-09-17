import { FormEvent } from 'react'

type Props = {
  primaryAction?: (e?: FormEvent) => void
  primaryText: string
  secondaryAction?: () => void
  secondaryText: string
}

export default function BtnsGroup(props: Props) {
  const { primaryAction, primaryText, secondaryAction, secondaryText } = props

  return (
    <div className="flex gap-4 my-3">
      <button
        onClick={primaryAction}
        type="submit"
        className="flex justify-center items-center gap-2 rounded-md bg-calypso px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-calypso-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-calypso-600"
      >
        {primaryText}
      </button>
      <button
        onClick={secondaryAction}
        type="button"
        className={`flex justify-center items-center gap-2 rounded-md px-3 py-1.5 text-sm font-semibold leading-6 ${secondaryText === 'Excluir' ? 'text-red-700 hover:bg-red-700 hover:text-white' : 'text-neutral-400 hover:text-neutral-800'} `}
      >
        {secondaryText}
      </button>
    </div>
  )
}
