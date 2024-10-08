import { useNavigate } from 'react-router-dom'
import BtnsGroup from '../fragments/BtnsGroup'
import { ServiceModel } from '../pages/Services'
import { useContext } from 'react'
import { ServiceContext } from '../context/ServiceContext'

type Props = {
  service: ServiceModel
}

export default function Card(props: Props) {
  const { service } = props

  const navigate = useNavigate()

  /* Context */
  const serviceContext = useContext(ServiceContext)
  if (!serviceContext) {
    return null
  }
  const { delServico } = serviceContext

  return (
    <div className="border shadow-md rounded-md p-4">
      <h2 className="text-xl font-bold">Limpeza {service.tipo}</h2>
      <p className="text-sm text-neutral-500">{service.descricao.titulo}</p>
      <div className="my-2">
        <h3 className="text-sm ">Preços:</h3>
        <ul className="ml-3">
          {service.precoDuracao.map((el, key) => (
            <li key={key} className="text-sm text-neutral-500">
              R${el.preco.toFixed(2)} • {el.duracao}hrs
            </li>
          ))}
        </ul>
      </div>
      <BtnsGroup
        primaryAction={() => {
          navigate(`/service/edit/${service._id}`)
        }}
        primaryText="Editar"
        secondaryAction={() => {
          delServico(service._id)
        }}
        secondaryText="Excluir"
      />
    </div>
  )
}
