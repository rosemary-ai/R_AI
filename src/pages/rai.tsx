import './rai.css'
import { useState, useEffect } from 'react';

interface PlayerProps {
  x: number;
  y: number;
}

const SPEED = 5;

function Player({ x, y }: PlayerProps) {
  // TODO: add image/animation
  return <div className="player" style={{top: y, left: x}}>under construction</div>
}

function Rai() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [keys, setKeys] = useState(new Set<string>());

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
        setKeys((keys) => new Set(keys).add(e.key));
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      setKeys((keys) => {
        const newKeys = new Set(keys);
        newKeys.delete(e.key);
        return newKeys;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const move = () => {
      const xMove = Number(keys.has("ArrowRight")) - Number(keys.has("ArrowLeft"));
      const yMove = Number(keys.has("ArrowDown")) - Number(keys.has("ArrowUp"));

      const magnitude = Math.sqrt(xMove * xMove + yMove * yMove);
      if (magnitude) {
        setX((x) => x + (xMove / magnitude) * SPEED);
        setY((y) => y + (yMove / magnitude) * SPEED);

        if (keys.size > 0) {
          requestAnimationFrame(move);
        }
      }
    };

    if (keys.size > 0) {
      requestAnimationFrame(move);
    }
  }, [keys]);


  return (
    <>
    {/* TODO: add transition from PRESS START */}
      <div className="world">
        <Player x={x} y={y}/>
      </div>
    </>
  )
}

export default Rai