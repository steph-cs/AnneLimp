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

  /* atividades methods */
  const addAtividade = () => {
    const input = inputAtividade.replace(/\s+/g, ' ').trim()
    console.log(input)
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
    console.log(inputsMaiorZero)
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
      }}
    >
      {children}
    </ServiceContext.Provider>
  )
}
