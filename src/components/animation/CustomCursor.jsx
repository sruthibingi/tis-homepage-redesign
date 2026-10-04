import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handlePointerOver = (event) => {
      setHovering(Boolean(event.target.closest('a, button, [role="button"]')));
    };

    document.addEventListener('pointerover', handlePointerOver);
    return () => document.removeEventListener('pointerover', handlePointerOver);
  }, []);

  return (
    <motion.div
      className="cursor-ring"
      animate={{ x, y, scale: hovering ? 1.65 : 1, opacity: hovering ? 0.75 : 1 }}
      transition={{ type: 'spring', stiffness: 500, damping: 35, mass: 0.2 }}
      aria-hidden="true"
    />
  );
}
