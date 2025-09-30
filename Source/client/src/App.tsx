import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { ClientsPage } from './pages/ClientsPage'
import { ServicesPage } from './pages/ServicesPage'
import { AnalyticsPage } from './pages/AnalyticsPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='flex h-full w-full'>
          <Header />
          <Routes>
            <Route path={'/dashboard'} element={<HomePage />} />
            <Route path={'/clients'} element={<ClientsPage />} />
            <Route path={'/services'} element={<ServicesPage />} />
            <Route path={'/analytics'} element={<AnalyticsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App


