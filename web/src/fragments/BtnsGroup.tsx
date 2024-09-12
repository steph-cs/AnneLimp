import { FormEvent } from 'react'

type Props = {
  serviceId: string
  primaryAction?: (e?: FormEvent) => void
  primaryText: string
}

export default function BtnsGroup(props: Props) {
  const { serviceId, primaryAction, primaryText } = props

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
        onClick={() => {
          /* open modal */
          console.log(serviceId)
        }}
        type="button"
        className="flex justify-center items-center gap-2 rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-red-700 hover:bg-red-700 hover:text-white"
      >
        Excluir
      </button>
    </div>
  )
}
