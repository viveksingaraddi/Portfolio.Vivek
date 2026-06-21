import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = e => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  return (
    <div
      className="fixed w-6 h-6 rounded-full bg-black pointer-events-none z-50 mix-blend-difference"
      style={{
        left: pos.x - 12,
        top: pos.y - 12,
      }}
    />
  );
}
