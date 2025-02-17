import { Link } from 'react-router-dom';
import './index.css'

function Index() {
  return (
    <>
      <h1>R_AI</h1>
      <div className="card">
        <p>
          rosemary ai
        </p>
        <Link to="/rai">PRESS START</Link>
      </div>
    </>
  )
}

export default Index;