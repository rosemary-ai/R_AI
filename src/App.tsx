import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Rai from './pages/rai';
import Index from './pages';

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rai" element={<Rai />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
