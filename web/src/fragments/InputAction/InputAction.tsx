import { useContext } from 'react'
import { ServiceContext } from '../../context/ServiceContext'

type Props = {
  titulo: string
  type: 'atividades' | 'preco' | 'duracao'
}

export default function InputAction(props: Props) {
  const { titulo, type } = props

  /* Context */
  const serviceContext = useContext(ServiceContext)
  if (!serviceContext) {
    return null
  }
  const { setInputAtividade, setInputPreco, setInputDuracao } = serviceContext

  return (
    <div className="w-full">
      <label
        htmlFor={type}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {titulo}
      </label>
      <div className="mt-2 flex gap-3">
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-60 w-full">
          {/* atividades */}
          {type === 'atividades' && (
            <>
              <input
                type="text"
                name={type}
                id={type}
                onChange={(e) => {
                  setInputAtividade(e.target.value)
                }}
                className="w-full block flex-1 rounded-md border-0 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 outline-0 focus:ring-inset focus:ring-tradewind-600 sm:text-sm sm:leading-6"
                placeholder="tirar o pó"
              />
            </>
          )}
          {/* preco */}
          {type === 'preco' && (
            <>
              <span className="flex select-none items-center px-3 text-gray-500 sm:text-sm">
                R$
              </span>
              <input
                type="number"
                name={type}
                id={type}
                onChange={(e) => {
                  setInputPreco(Number(e.target.value))
                }}
                className="w-full block flex-1 rounded-md border-0 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 outline-0 focus:ring-inset focus:ring-tradewind-600 sm:text-sm sm:leading-6"
                placeholder="0,00"
              />
            </>
          )}
          {/* horas */}
          {type === 'duracao' && (
            <>
              <input
                type="number"
                name={type}
                id={type}
                onChange={(e) => {
                  setInputDuracao(Number(e.target.value))
                }}
                className="w-full block flex-1 rounded-md border-0 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 outline-0 focus:ring-inset focus:ring-tradewind-600 sm:text-sm sm:leading-6"
                placeholder="4"
              />
              <span className="flex select-none items-center px-3 text-gray-500 sm:text-sm">
                hrs
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
