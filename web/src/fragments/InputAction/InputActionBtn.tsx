import { PlusIcon } from '@heroicons/react/24/solid'

type Props = {
  action: () => void
}

export default function InputActionBtn(props: Props) {
  const { action } = props
  return (
    <button
      onClick={action}
      type="button"
      className="flex justify-center items-center gap-2 rounded-full bg-tradewind p-2  font-semibold leading-6 text-white shadow-sm hover:bg-tradewind-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tradewind-600"
    >
      <PlusIcon className="size-5" />
    </button>
  )
}
