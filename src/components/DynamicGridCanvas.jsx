import React, { useEffect, useRef } from 'react';

export default function DynamicGridCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight || 800);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight || 800;
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Grid spacing
    const cols = Math.floor(width / 32) + 2;
    const rows = Math.floor(height / 32) + 2;
    const spacingX = width / (cols - 1);
    const spacingY = height / (rows - 1);

    const render = () => {
      // Smooth lerp mouse tracking
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      const warpRadius = 240;
      const warpStrength = 55;

      // Displaced node calculation
      const gridNodes = [];
      for (let r = 0; r < rows; r++) {
        const rowNodes = [];
        for (let c = 0; c < cols; c++) {
          const baseX = c * spacingX;
          const baseY = r * spacingY;

          let displacedX = baseX;
          let displacedY = baseY;

          if (mouse.active) {
            const dx = baseX - mouse.x;
            const dy = baseY - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < warpRadius && dist > 0) {
              const factor = Math.pow((warpRadius - dist) / warpRadius, 2);
              // Pull grid nodes inward toward mouse location
              displacedX -= (dx / dist) * factor * warpStrength;
              displacedY -= (dy / dist) * factor * warpStrength;
            }
          }

          rowNodes.push({ x: displacedX, y: displacedY });
        }
        gridNodes.push(rowNodes);
      }

      // Draw Grid Lines cleanly
      ctx.lineWidth = 1;

      // Horizontal grid lines
      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const node = gridNodes[r][c];
          if (c === 0) {
            ctx.moveTo(node.x, node.y);
          } else {
            ctx.lineTo(node.x, node.y);
          }
        }
        ctx.strokeStyle = 'rgba(79, 70, 229, 0.2)'; // Crisp clean grid lines
        ctx.stroke();
      }

      // Vertical grid lines
      for (let c = 0; c < cols; c++) {
        ctx.beginPath();
        for (let r = 0; r < rows; r++) {
          const node = gridNodes[r][c];
          if (r === 0) {
            ctx.moveTo(node.x, node.y);
          } else {
            ctx.lineTo(node.x, node.y);
          }
        }
        ctx.strokeStyle = 'rgba(79, 70, 229, 0.2)';
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
