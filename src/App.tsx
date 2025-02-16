import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Rai from './pages/rai'
import Layout from './pages/Layout'
import Index from './pages/index'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="rai" element={<Rai />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
