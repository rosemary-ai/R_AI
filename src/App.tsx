import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Rai from './pages/rai';

function App() {
  return (
    <>
      <h1>R_AI</h1>
      <div className="card">
        <p>
          rosemary ai
        </p>
      </div>

    {/* last resort add a state to determine if we show router or not >:( */}
     <BrowserRouter>
        <Link to="/rai">PRESS START</Link>
        <Routes>
          <Route path="/rai" element={<Rai />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
