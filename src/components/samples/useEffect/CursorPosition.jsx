import { useState, useEffect, useRef } from 'react';

export default function CursorPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef();

  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('pointermove', handleMove);
    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100px' }} ref={ref}>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'pink',
          borderRadius: '50%',
          opacity: 0.6,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: 'none',
          left: '-6.5rem',
          top: '-11.5rem',
          width: 30,
          height: 30,
        }}
      />
    </div>
  );
}
