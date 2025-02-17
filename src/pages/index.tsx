import { Link } from 'react-router-dom';
import './index.css'

function Index() {
  return (
    <>
      <h1>R_AI</h1>
      <p>
        rosemary ai
      </p>
      <Link to="/rai" id="press-start">[ PRESS START ]</Link>
    </>
  )
}

export default Index;