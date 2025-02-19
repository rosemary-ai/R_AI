import { Link } from 'react-router-dom';
import './index.css'

function Index() {
  return (
    <>
      <div className="wrapper">
        <div className="sliding-background"></div>
        <div className="card">
          <h1>R_AI</h1>
            <p>
              rosemary ai
            </p>
            <Link to="/rai" id="press-start">[ PRESS START ]</Link>
        </div>
      </div>
    </>
  )
}

export default Index;