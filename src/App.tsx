import './App.css'
import Rai from './pages/rai';
import Index from './pages';
import { useState } from 'react';

function App() {
  const [pressStart, setPressStart] = useState(false);
  const onStartClick = () => {
    setPressStart(true);
  }
  
  return !pressStart ? <Index onStartClick={onStartClick}/> : <Rai />;
}

export default App
