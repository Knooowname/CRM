import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { ClientsPage } from './pages/ClientsPage'
import { ServicesPage } from './pages/ServicesPage'
import { AnalyticsPage } from './pages/AnalyticsPage'
import { AuthPage } from './pages/AuthPage'
import { RegisterPage } from './pages/RegisterPage'

function App() {

  const url = window.location.pathname

  return (
    <>
      <BrowserRouter>
        <div className='flex h-full w-full'>
          {url !== '/auth' && url !== '/register' ? <Header /> : null}
          <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/clients'} element={<ClientsPage />} />
            <Route path={'/services'} element={<ServicesPage />} />
            <Route path={'/analytics'} element={<AnalyticsPage />} />
            <Route path={'/auth'} element={<AuthPage/>}/>
            <Route path={'/register'} element={<RegisterPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App


