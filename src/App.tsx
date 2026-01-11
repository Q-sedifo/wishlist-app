import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import WishPage from './pages/WishPage'
import { Providers } from './components/providers'
import './App.css'

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/wish/:id" element={<WishPage />} />
        </Routes>
      </BrowserRouter>
    </Providers>
  )
}

export default App
