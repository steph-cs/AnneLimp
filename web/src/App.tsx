import './App.css'
import Layout from './pages/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './pages/Services'
import ServiceForm from './pages/ServiceForm'
import { ServiceProvider } from './context/ServiceContext'
import NotFound from './pages/NotFound'
import Bookings from './pages/Bookings'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

function App() {
  return (
    <>
      <Provider store={store}>
        <ServiceProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/services" element={<Services />}></Route>
                <Route
                  path="/service/:type/:id?"
                  element={<ServiceForm />}
                ></Route>
                <Route path="/booking" element={<Bookings />}></Route>
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ServiceProvider>
      </Provider>
    </>
  )
}

export default App
