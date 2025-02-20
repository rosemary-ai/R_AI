import './index.css'

interface IndexProps {
  onStartClick: () => void;
}

function Index({ onStartClick }: IndexProps) {
  return (
    <>
      <div className="wrapper">
        <div className="sliding-background"></div>
        <div className="card">
          <h1>R_AI</h1>
          <p>rosemary ai</p>
          <a onClick={onStartClick} id="press-start">[ PRESS START ]</a>
        </div>
      </div>
    </>
  )
}

export default Index;