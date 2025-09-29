import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='flex h-full w-full'>
          <Header />
          <Routes>
            <Route path={'/'} element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App


