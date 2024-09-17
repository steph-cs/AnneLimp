import { useNavigate } from 'react-router-dom'
import Caution from '../assets/imgs/caution.png'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-4 mt-14 relative w-fit">
      <h1 className="text-4xl font-bold">Cuidado para não escorregar!</h1>
      <h2 className="text-2xl font-bold">Estamos limpando por aqui.</h2>
      <div>
        <button
          className="flex justify-center items-center gap-2 rounded-md bg-calypso px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-calypso-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-calypso-600"
          onClick={() => navigate('/')}
        >
          Voltar
        </button>
      </div>
      <img
        src={Caution}
        alt=""
        className="w-11/12 absolute top-32 -right-16 md:-right-36 "
      />
      <span
        style={{ textShadow: '0px 0px 1px #b8b8b8', fontSize: '14rem' }}
        className="text-white font-bold absolute -right-24 md:-right-80 -top-36 -z-10"
      >
        404
      </span>
    </div>
  )
}
