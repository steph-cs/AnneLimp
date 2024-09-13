import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ServiceModel, tipoServico } from './Services'
import InputAction from '../fragments/InputAction/InputAction'
import BtnsGroup from '../fragments/BtnsGroup'
import InputActionItem from '../fragments/InputAction/InputActionItem'
import InputActionBtn from '../fragments/InputAction/InputActionBtn'
import { SubmitHandler, useForm } from 'react-hook-form'
import InputError from '../fragments/InputError'
import { ServiceContext } from '../context/ServiceContext'

interface ServiceInputs {
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

export default function ServiceForm() {
  const { type, id } = useParams()
  const [service, setService] = useState<ServiceModel>()
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  /* Context */
  const serviceContext = useContext(ServiceContext)
  if (!serviceContext) {
    return null
  }
  const {
    atividades,
    setAtividades,
    addAtividade,
    precoDuracao,
    setPrecoDuracao,
    addPrecoDuracao,
  } = serviceContext

  const getServico = async () => {
    fetch(`https://annelimp.onrender.com/servicos/${id}`)
      .then((response) => response.json())
      .then((json: ServiceModel) => {
        const service = json
        setService(service)
        setAtividades(service.descricao.atividades)
        setPrecoDuracao(service.precoDuracao)
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false)
      })
  }

  const putServico = async (data: ServiceInputs) => {
    data.descricao.atividades = atividades
    data.precoDuracao = precoDuracao
    fetch(`https://annelimp.onrender.com/servicos/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    })
  }

  useEffect(() => {
    getServico()
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ServiceInputs>()

  const onSubmit: SubmitHandler<ServiceInputs> = (data) => {
    putServico(data)
    navigate('/services')
  }

  return (
    <>
      {/* section title */}
      <div>
        <h1 className="text-4xl font-bold">
          {type === 'create' ? 'Cadastrar' : 'Editar'} serviço
        </h1>
      </div>
      {id && (
        <form className="my-8" id={id} onSubmit={handleSubmit(onSubmit)}>
          {!loading ? (
            <div className="mb-16">
              <div className="my-10 grid gap-x-6 gap-y-8 sm:grid-cols-1 md:grid-cols-3">
                {/* tipo */}
                <div>
                  <label
                    htmlFor="tipo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Tipo
                  </label>
                  <div className="mt-2">
                    <select
                      id="tipo"
                      defaultValue={service?.tipo}
                      {...register('tipo')}
                      className="block w-full h-full  rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-0 focus:ring-2 focus:ring-inset focus:ring-tradewind-600 :ring-tradewind-600 sm:text-sm leading-8"
                    >
                      <option value={'simples'}>Simples</option>
                      <option value={'pesada'}>Pesada</option>
                    </select>
                  </div>
                </div>
                {/* titulo */}
                <div>
                  <label
                    htmlFor="titulo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Título
                  </label>
                  <div className="mt-2">
                    <input
                      id="titulo"
                      type="text"
                      {...register('descricao.titulo', {
                        required: true,
                        maxLength: 50,
                      })}
                      defaultValue={service?.descricao.titulo}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-0 focus:ring-inset focus:ring-tradewind-600 sm:text-sm sm:leading-6"
                    />
                    {errors.descricao && errors.descricao.titulo && (
                      <InputError />
                    )}
                  </div>
                </div>
                {/* descricao */}
                <div>
                  <label
                    htmlFor="descricao"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Descrição
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="descricao"
                      rows={3}
                      defaultValue={service?.descricao.descricao}
                      {...register('descricao.descricao', {
                        required: true,
                        maxLength: 200,
                      })}
                      className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-0 focus:ring-inset focus:ring-tradewind-600 sm:text-sm sm:leading-6"
                    ></textarea>
                    {errors.descricao && errors.descricao.descricao && (
                      <InputError />
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-1 md:grid-cols-8 ">
                {/* atividades */}
                <div className="md:col-span-3">
                  <div className="flex gap-4 items-end w-full ">
                    <InputAction titulo="Atividades" type="atividades" />
                    <InputActionBtn action={addAtividade} />
                  </div>

                  {/* lista atividades */}
                  <div>
                    {atividades.map((el: string, key: number) => (
                      <InputActionItem item={el} key={key} />
                    ))}
                  </div>
                </div>
                {/* precoDuracao */}
                <div className="lg:col-start-6 lg:col-span-3 md:col-start-4 md:col-span-5 ">
                  <div className="flex gap-4 items-end w-full">
                    <InputAction titulo="Preço" type="preco" />
                    <InputAction titulo="Duração" type="duracao" />
                    <InputActionBtn action={addPrecoDuracao} />
                  </div>
                  {/* lista preco/duracao */}
                  <div>
                    {precoDuracao.map((el, key) => (
                      <InputActionItem precoDuracao={el} key={key} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading</p>
          )}

          <BtnsGroup primaryText="Salvar alterações" serviceId={id} />
        </form>
      )}
    </>
  )
}
