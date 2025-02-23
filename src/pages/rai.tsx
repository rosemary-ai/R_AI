import './rai.css'
import { useState, useEffect, useRef } from 'react';

interface PlayerProps {
  x: number;
  y: number;
}

interface BlockProps {
  x: number;
  y: number;
}

interface WorldProps {
  transitionOver: boolean;
}

const SPEED = 3.5;

const clamp = (x: number, min: number, max: number): number => {
  return Math.max(min, Math.min(x, max));
}

function Player({ x, y }: PlayerProps) {
  // TODO: add image/animation, change css styles to be constants (probably move to inline style)
  return <div className="player" style={{top: y, left: x}}>under construction</div>
}

function Block({ x, y }: BlockProps) {
  return <div className="collision" style={{top: y, left: x}}>COLLISION</div>
}

// TODO: camera, cell scaling

function World({ transitionOver }: WorldProps) {
  const { height, width } = useWindowDimensions();

  const [x, setX] = useState(100);
  const [y, setY] = useState(100);
  const [keys, setKeys] = useState(new Set<string>());
  const animationRef = useRef<number | null>(null);
  const canMoveRef = useRef<boolean>(false);

  useEffect(() => {
    canMoveRef.current = transitionOver;
  }, [transitionOver]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
        setKeys((keys) => {
          if (keys.has(e.key)) return keys;
          return new Set(keys).add(e.key);
        })
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      setKeys((keys) => {
        if (!keys.has(e.key)) return keys;
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
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const move = () => {
      const xMove = Number(keys.has("ArrowRight")) - Number(keys.has("ArrowLeft"));
      const yMove = Number(keys.has("ArrowDown")) - Number(keys.has("ArrowUp"));

      const magnitude = Math.sqrt(xMove * xMove + yMove * yMove);
      if (magnitude) {
        if (canMoveRef.current) {
          setX((x) => clamp(x + (xMove / magnitude) * SPEED, 0, width - 100)); // MAKE THESE (CELL SCALED) CONSTANTS LATER
          setY((y) => clamp(y + (yMove / magnitude) * SPEED, 0, height - 100));
        }

        animationRef.current = requestAnimationFrame(move);
      } else if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    if (keys.size > 0) {
      animationRef.current = requestAnimationFrame(move);
    }
  }, [keys]);
  
  return (
    <div className="world">
      <Player x={x} y={y}/>
      <Block x={200} y={200}/>
    </div>
  )
}

function Rai() {
  const [startTransition, setStartTransition] = useState(false);
  const [transitionOver, setTransitionOver] = useState(false);

  useEffect(() => {
    setStartTransition(true);
  }, []);

  setTimeout(() => {
    setTransitionOver(true);
  }, 1500);

  return (
    <>
    {!transitionOver && (
      <>
      <div className={`transition top ${startTransition && "open"}`}></div>
      <div className={`transition bottom ${startTransition && "open"}`}></div>
      </>
    )}
    <World transitionOver={transitionOver} />
    </>
  )
}

// https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
export default Rai