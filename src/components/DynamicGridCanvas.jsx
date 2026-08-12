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
    const cols = Math.floor(width / 36) + 2;
    const rows = Math.floor(height / 36) + 2;
    const spacingX = width / (cols - 1);
    const spacingY = height / (rows - 1);

    // GitHub Laser Pulses traveling along grid lines
    const laserPulses = Array.from({ length: 8 }, () => ({
      horizontal: Math.random() > 0.5,
      index: Math.floor(Math.random() * (Math.random() > 0.5 ? rows : cols)),
      pos: Math.random() * 1000,
      speed: 1.5 + Math.random() * 2.5,
      length: 120 + Math.random() * 160,
      color: Math.random() > 0.5 ? 'rgba(99, 102, 241, ' : 'rgba(56, 189, 248, '
    }));

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
        ctx.strokeStyle = 'rgba(79, 70, 229, 0.18)'; // Crisp clean grid lines
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
        ctx.strokeStyle = 'rgba(79, 70, 229, 0.18)';
        ctx.stroke();
      }

      // Draw GitHub Laser Light Pulses traveling across grid lines
      laserPulses.forEach((pulse) => {
        pulse.pos += pulse.speed;
        const maxDist = pulse.horizontal ? width + pulse.length : height + pulse.length;
        if (pulse.pos > maxDist) {
          pulse.pos = -pulse.length;
          pulse.horizontal = Math.random() > 0.5;
          pulse.index = Math.floor(Math.random() * (pulse.horizontal ? rows : cols));
        }

        ctx.save();
        if (pulse.horizontal && pulse.index < rows) {
          const r = pulse.index;
          const headX = pulse.pos;
          const tailX = pulse.pos - pulse.length;
          const y = gridNodes[r][0].y;

          const grad = ctx.createLinearGradient(tailX, y, headX, y);
          grad.addColorStop(0, pulse.color + '0)');
          grad.addColorStop(0.7, pulse.color + '0.4)');
          grad.addColorStop(1, pulse.color + '0.9)');

          ctx.strokeStyle = grad;
          ctx.lineWidth = 2;
          ctx.shadowColor = 'rgba(99, 102, 241, 0.8)';
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.moveTo(tailX, y);
          ctx.lineTo(headX, y);
          ctx.stroke();
        } else if (!pulse.horizontal && pulse.index < cols) {
          const c = pulse.index;
          const headY = pulse.pos;
          const tailY = pulse.pos - pulse.length;
          const x = gridNodes[0][c].x;

          const grad = ctx.createLinearGradient(x, tailY, x, headY);
          grad.addColorStop(0, pulse.color + '0)');
          grad.addColorStop(0.7, pulse.color + '0.4)');
          grad.addColorStop(1, pulse.color + '0.9)');

          ctx.strokeStyle = grad;
          ctx.lineWidth = 2;
          ctx.shadowColor = 'rgba(56, 189, 248, 0.8)';
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.moveTo(x, tailY);
          ctx.lineTo(x, headY);
          ctx.stroke();
        }
        ctx.restore();
      });

      // Draw Cursor Radial Glow Spotlight (GitHub Copilot style ambient cursor follow)
      if (mouse.active) {
        ctx.save();
        const radGrad = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, warpRadius
        );
        radGrad.addColorStop(0, 'rgba(99, 102, 241, 0.25)');
        radGrad.addColorStop(0.5, 'rgba(124, 58, 237, 0.08)');
        radGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, warpRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
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

