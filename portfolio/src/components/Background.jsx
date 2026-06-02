import { useEffect, useState } from "react";

export default function Background() {
  const [mouse, setMouse] = useState({ x: -1000, y: -1000 });
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize.width < 768) return;

    let timeout;

    const handleMove = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setMouse({
          x: -1000,
          y: -1000,
        });
      }, 300);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      clearTimeout(timeout);
    };
  }, [screenSize.width]);

  const cellSize = screenSize.width < 768 ? 55 : 80;

  const cols = Math.ceil(screenSize.width / cellSize);
  const rows = Math.ceil(screenSize.height / cellSize);

  const isMobile = screenSize.width < 768;

  return (
    <div className="fixed inset-0 bg-slate-950 -z-10 overflow-hidden">
      <div
        className="grid w-full h-full"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {Array.from({ length: rows * cols }).map((_, index) => {
          const col = index % cols;
          const row = Math.floor(index / cols);

          const cellWidth = screenSize.width / cols;
          const cellHeight = screenSize.height / rows;

          const centerX = col * cellWidth + cellWidth / 2;
          const centerY = row * cellHeight + cellHeight / 2;

          let intensity = 0;

          if (!isMobile) {
            const distance = Math.hypot(mouse.x - centerX, mouse.y - centerY);

            intensity = Math.max(0, 1 - distance / 180);
          }

          return (
            <div
              key={index}
              className="border border-cyan-500/10 transition-all duration-200"
              style={{
                backgroundColor: `rgba(34,211,238,${intensity * 0.12})`,
                boxShadow:
                  intensity > 0
                    ? `0 0 ${intensity * 25}px rgba(34,211,238,${
                        intensity * 0.5
                      })`
                    : "none",
              }}
            />
          );
        })}
      </div>

      {/* Center Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,255,255,0.12), transparent 45%)",
        }}
      />
    </div>
  );
}
