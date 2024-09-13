import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ServiceContext } from '../../context/ServiceContext'

type Props = {
  item?: string
  precoDuracao?: { preco: number; duracao: number }
}

export default function InputActionItem(props: Props) {
  const { item, precoDuracao } = props

  /* Context */
  const serviceContext = useContext(ServiceContext)
  if (!serviceContext) {
    return null
  }
  const { removeAtividade, removePrecoDuracao } = serviceContext

  const handleAction = () => {
    if (item) {
      removeAtividade(item)
    }
    if (precoDuracao) {
      removePrecoDuracao(precoDuracao)
    }
  }
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
        onClick={handleAction}
        type="button"
        className="flex justify-center items-center gap-2 rounded-full  p-2  font-semibold leading-6 shadow-sm hover:text-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
      >
        <XMarkIcon className="size-5" />
      </button>
    </div>
  )
}
