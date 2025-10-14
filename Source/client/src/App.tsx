import { BrowserRouter, Route, Routes, useLocation } from 'react-router'
import './App.css'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { ClientsPage } from './pages/ClientsPage'
import { ServicesPage } from './pages/ServicesPage'
import { AnalyticsPage } from './pages/AnalyticsPage'
import { AuthPage } from './pages/AuthPage'
import { RegisterPage } from './pages/RegisterPage'

function AppWrapper () {
  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
}

function App() {

  const location = useLocation()

  return (
    <>
        <div className='flex h-full w-full'>
          {location.pathname !== '/auth' && location.pathname !== '/register' ? <Header /> : null}
          <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/clients'} element={<ClientsPage />} />
            <Route path={'/services'} element={<ServicesPage />} />
            <Route path={'/analytics'} element={<AnalyticsPage />} />
            <Route path={'/auth'} element={<AuthPage/>}/>
            <Route path={'/register'} element={<RegisterPage/>}/>
          </Routes>
        </div>
    </>
  )
}

export default AppWrapper


