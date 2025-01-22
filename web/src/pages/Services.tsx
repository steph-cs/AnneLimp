import { useEffect } from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
import Card from '../components/Card'
import CardLoading from '../components/CardLoading'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../redux/store.ts'
import { GetServices } from '../redux/service/serviceThunk.ts'

export type tipoServico = 'simples' | 'pesada'

export interface ServiceModel {
  _id: string
  tipo: tipoServico
  descricao: {
    titulo: string
    descricao: string
    atividades: string[]
  }
  precoDuracao: {
    preco: number
    duracao: number
  }[]
}

export default function Services() {
  const { services, request } = useSelector((state: RootState) => state.service)
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const getServicos = () => {
    dispatch(GetServices())
  }

  useEffect(() => {
    getServicos()
  }, [])

  return (
    <>
      {/* section title */}
      <div>
        <div className="flex gap-10">
          <h1 className="text-4xl font-bold">Serviços</h1>
          <button
            type="button"
            onClick={() => {
              navigate(`/service/create`)
            }}
            className="flex justify-center items-center gap-2 rounded-md bg-calypso px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-calypso-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-calypso-600"
          >
            <PlusIcon className="size-5" />
            Adicionar serviço
          </button>
        </div>
        <p className="text-neutral-700 text-sm mt-4">
          Body text for whatever you’d like to say.{' '}
        </p>
      </div>
      <main className="grid 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-8">
        {request !== 'success' && services.length > 0
          ? Array.from({ length: 2 }).map((_, index) => (
              <CardLoading key={index} />
            ))
          : services.map((service, key) => (
              <Card service={service} key={key} />
            ))}
      </main>
    </>
  )
}
