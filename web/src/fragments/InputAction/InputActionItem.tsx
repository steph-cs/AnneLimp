import { XMarkIcon } from '@heroicons/react/24/solid'

type Props = {
  item?: string
  precoDuracao?: { preco: number; duracao: number }
}

export default function InputActionItem(props: Props) {
  const { item, precoDuracao } = props

  return (
    <div className="flex items-center justify-between my-3">
      {precoDuracao ? (
        <p>
          R${precoDuracao.preco} • {precoDuracao.duracao}hrs
        </p>
      ) : (
        <p>{item}</p>
      )}
      <button
        onClick={() => {
          /* remove */
        }}
        type="button"
        className="flex justify-center items-center gap-2 rounded-full  p-2  font-semibold leading-6 shadow-sm hover:text-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
      >
        <XMarkIcon className="size-5" />
      </button>
    </div>
  )
}
