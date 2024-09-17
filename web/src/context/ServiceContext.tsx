import { createContext, useState, ReactNode } from 'react'

interface PrecoDuracaoType {
  preco: number
  duracao: number
}

interface ServiceContextType {
  /* atividades */
  atividades: string[]
  setAtividades: (prevState: string[]) => void
  setInputAtividade: (prevState: string) => void
  addAtividade: () => void
  removeAtividade: (atv: string) => void
  /* precoDuracao */
  precoDuracao: PrecoDuracaoType[]
  setInputPreco: (prevState: number) => void
  setInputDuracao: (prevState: number) => void
  setPrecoDuracao: (prevState: PrecoDuracaoType[]) => void
  addPrecoDuracao: () => void
  removePrecoDuracao: (delPrecoDuracao: PrecoDuracaoType) => void
  delServico: (id: string) => void
  refreshPage: () => void
}

export const ServiceContext = createContext<ServiceContextType | undefined>(
  undefined
)

export const ServiceProvider = ({ children }: { children: ReactNode }) => {
  /* atividades */
  const [atividades, setAtividades] = useState<string[]>([])
  const [inputAtividade, setInputAtividade] = useState<string>('')

  /* precoDuracao */
  const [inputPreco, setInputPreco] = useState<number>(0)
  const [inputDuracao, setInputDuracao] = useState<number>(0)
  const [precoDuracao, setPrecoDuracao] = useState<PrecoDuracaoType[]>([])

  const refreshPage = () => {
    window.location.reload()
  }

  /* atividades methods */
  const addAtividade = () => {
    const input = inputAtividade.replace(/\s+/g, ' ').trim()
    if (!atividades.includes(input)) {
      setAtividades((prevState) => [...prevState, input])
    } else {
      console.log('atividade ja existe')
    }
  }

  const removeAtividade = (atv: string) => {
    setAtividades(atividades.filter((el) => el !== atv))
  }

  const addPrecoDuracao = () => {
    const inputsMaiorZero =
      inputPreco && inputPreco > 0 && inputDuracao && inputDuracao > 0
    const precoDuracaoExiste = precoDuracao.some(
      (item) => item.preco === inputPreco && item.duracao === inputDuracao
    )
    if (inputsMaiorZero && !precoDuracaoExiste) {
      const newPrecoDuracao: PrecoDuracaoType = {
        preco: inputPreco,
        duracao: inputDuracao,
      }
      setPrecoDuracao((prevState) => [...prevState, newPrecoDuracao])
    }
  }

  const removePrecoDuracao = (delPrecoDuracao: PrecoDuracaoType) => {
    setPrecoDuracao(
      precoDuracao.filter(
        (el) =>
          el.preco !== delPrecoDuracao.preco &&
          el.duracao !== delPrecoDuracao.duracao
      )
    )
  }

  const delServico = async (id: string) => {
    fetch(`https://annelimp.onrender.com/servicos/${id}`, {
      method: 'DELETE',
    }).then(() => {
      refreshPage()
    })
  }

  return (
    <ServiceContext.Provider
      value={{
        atividades,
        setAtividades,
        setInputAtividade,
        addAtividade,
        removeAtividade,
        setInputPreco,
        setInputDuracao,
        precoDuracao,
        setPrecoDuracao,
        addPrecoDuracao,
        removePrecoDuracao,
        delServico,
        refreshPage,
      }}
    >
      {children}
    </ServiceContext.Provider>
  )
}
