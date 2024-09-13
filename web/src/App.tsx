import './App.css'
import Layout from './pages/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './pages/Services'
import ServiceForm from './pages/ServiceForm'
import { ServiceProvider } from './context/ServiceContext'

function App() {
  return (
    <>
      <ServiceProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/services" element={<Services />}></Route>
              <Route
                path="/service/:type/:id?"
                element={<ServiceForm />}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ServiceProvider>
    </>
  )
}

export default App
