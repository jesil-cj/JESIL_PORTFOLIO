import React, { useEffect, useRef } from 'react';

// Major global developer tech hubs (Latitude, Longitude)
const TECH_HUBS = [
  { id: 'sf', name: 'San Francisco, US', lat: 37.7749, lng: -122.4194, role: 'Silicon Valley Hub' },
  { id: 'london', name: 'London, UK', lat: 51.5074, lng: -0.1278, role: 'Europe UX & Dev Node' },
  { id: 'tokyo', name: 'Tokyo, JP', lat: 35.6762, lng: 139.6503, role: 'Asia Innovation Node' },
  { id: 'bengaluru', name: 'Bengaluru, IN', lat: 12.9716, lng: 77.5946, role: 'Tech Engineering Hub' },
  { id: 'kochi', name: 'Kochi, IN (Jesil HQ)', lat: 9.9312, lng: 76.2673, role: 'Creative UI/UX Base' },
  { id: 'sydney', name: 'Sydney, AU', lat: -33.8688, lng: 151.2093, role: 'Oceania Network Node' },
  { id: 'saopaulo', name: 'São Paulo, BR', lat: -23.5505, lng: -46.6333, role: 'LATAM Dev Center' },
  { id: 'berlin', name: 'Berlin, DE', lat: 52.5200, lng: 13.4050, role: 'EU Design Studio' }
];

// Connection arcs between global hubs
const CONNECTIONS = [
  { from: 'kochi', to: 'london', color: '#818cf8' },
  { from: 'kochi', to: 'bengaluru', color: '#38bdf8' },
  { from: 'sf', to: 'tokyo', color: '#a78bfa' },
  { from: 'sf', to: 'london', color: '#818cf8' },
  { from: 'london', to: 'berlin', color: '#34d399' },
  { from: 'tokyo', to: 'sydney', color: '#f43f5e' },
  { from: 'bengaluru', to: 'tokyo', color: '#fbbf24' },
  { from: 'london', to: 'saopaulo', color: '#c084fc' }
];

// Generate landmass continent point cloud grid
function generateLandmassDots() {
  const dots = [];
  
  // Continental latitude/longitude bounds clusters (approximate simplified outlines)
  const continentBounds = [
    // North America
    { minLat: 15, maxLat: 70, minLng: -165, maxLng: -50, density: 0.22 },
    // South America
    { minLat: -55, maxLat: 12, minLng: -82, maxLng: -34, density: 0.22 },
    // Europe
    { minLat: 35, maxLat: 70, minLng: -10, maxLng: 40, density: 0.3 },
    // Africa
    { minLat: -35, maxLat: 35, minLng: -18, maxLng: 52, density: 0.22 },
    // Asia
    { minLat: 8, maxLat: 75, minLng: 40, maxLng: 150, density: 0.25 },
    // Australia
    { minLat: -42, maxLat: -10, minLng: 112, maxLng: 154, density: 0.25 },
    // India region
    { minLat: 6, maxLat: 35, minLng: 68, maxLng: 90, density: 0.35 }
  ];

  continentBounds.forEach(region => {
    const latStep = 3.5 / region.density;
    const lngStep = 4.0 / region.density;

    for (let lat = region.minLat; lat <= region.maxLat; lat += latStep) {
      for (let lng = region.minLng; lng <= region.maxLng; lng += lngStep) {
        // Exclude deep oceans with simple shape filters
        const inOcean =
          (lat > 20 && lat < 50 && lng > -150 && lng < -120) || // Mid North Pacific
          (lat > -40 && lat < -10 && lng > -140 && lng < -90) || // South Pacific
          (lat > 15 && lat < 45 && lng > -45 && lng < -25) ||  // Mid Atlantic
          (lat > -40 && lat < 0 && lng > -10 && lng < 10) ||   // South Atlantic
          (lat > -40 && lat < 0 && lng > 60 && lng < 100);    // Indian Ocean

        if (!inOcean && Math.random() > 0.15) {
          const jitterLat = lat + (Math.random() - 0.5) * 0.8;
          const jitterLng = lng + (Math.random() - 0.5) * 0.8;
          dots.push({ lat: jitterLat, lng: jitterLng, size: Math.random() > 0.7 ? 1.4 : 1.0 });
        }
      }
    }
  });

  return dots;
}

const LANDMASS_DOTS = generateLandmassDots();

export default function GithubGlobeCanvas({ height = 480, className = "" }) {
  const canvasRef = useRef(null);

  // Rotation angles & drag interaction state
  const rotationRef = useRef({ x: 0.3, y: -0.5, vx: 0, vy: 0.003 });
  const isDraggingRef = useRef(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth || 500);
    let canvasHeight = (canvas.height = height);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth || 500;
      canvasHeight = canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    // Dynamic pulse progress for arc connections
    let pulseTime = 0;

    // Convert lat/lng to 3D Cartesian coordinates on sphere
    const radius = Math.min(width, canvasHeight) * 0.38;
    const center = { x: width / 2, y: canvasHeight / 2 };

    function latLngToVector3(lat, lng, r = radius) {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);

      const x = -(r * Math.sin(phi) * Math.cos(theta));
      const z = r * Math.sin(phi) * Math.sin(theta);
      const y = r * Math.cos(phi);

      return { x, y, z };
    }

    // Apply 3D Rotation matrices
    function rotateVector3(v, rotX, rotY) {
      // Rotate around Y axis (longitude)
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = v.x * cosY + v.z * sinY;
      const z1 = -v.x * sinY + v.z * cosY;

      // Rotate around X axis (latitude)
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = v.y * cosX - z1 * sinX;
      const z2 = v.y * sinX + z1 * cosX;

      return { x: x1, y: y2, z: z2 };
    }

    // Render loop
    const render = () => {
      pulseTime += 0.015;

      // Inertia and continuous auto-spin when not dragging
      const rot = rotationRef.current;
      if (!isDraggingRef.current) {
        rot.x += rot.vx;
        rot.y += rot.vy;
        rot.vx *= 0.95; // Dampen velocity
      }

      ctx.clearRect(0, 0, width, canvasHeight);

      // 1. Render Outer Atmospheric Glow Rings (GitHub Blue / Violet glow)
      const auraGradient = ctx.createRadialGradient(
        center.x, center.y, radius * 0.85,
        center.x, center.y, radius * 1.35
      );
      auraGradient.addColorStop(0, 'rgba(99, 102, 241, 0.18)');
      auraGradient.addColorStop(0.5, 'rgba(124, 58, 237, 0.08)');
      auraGradient.addColorStop(1, 'rgba(79, 70, 229, 0)');

      ctx.fillStyle = auraGradient;
      ctx.beginPath();
      ctx.arc(center.x, center.y, radius * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // 2. Render Dark Metallic Globe Sphere Silhouette
      const globeBgGradient = ctx.createRadialGradient(
        center.x - radius * 0.3, center.y - radius * 0.3, radius * 0.1,
        center.x, center.y, radius
      );
      globeBgGradient.addColorStop(0, 'rgba(15, 23, 42, 0.95)');
      globeBgGradient.addColorStop(0.7, 'rgba(15, 23, 42, 0.98)');
      globeBgGradient.addColorStop(1, 'rgba(30, 27, 75, 1)');

      ctx.save();
      ctx.beginPath();
      ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = globeBgGradient;
      ctx.shadowColor = 'rgba(79, 70, 229, 0.4)';
      ctx.shadowBlur = 25;
      ctx.fill();
      ctx.restore();

      // Globe equator / latitude grid guide rings (GitHub style subtle cyan rings)
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.15)';
      ctx.lineWidth = 1;
      for (let rFactor of [0.3, 0.6, 0.85]) {
        ctx.beginPath();
        ctx.ellipse(center.x, center.y, radius, radius * rFactor * Math.abs(Math.sin(rot.x)), 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 3. Render Landmass Point Cloud Dots
      LANDMASS_DOTS.forEach((dot) => {
        const v3 = latLngToVector3(dot.lat, dot.lng);
        const rotV3 = rotateVector3(v3, rot.x, rot.y);

        // Only draw dots on front hemisphere (z > -radius * 0.15)
        if (rotV3.z > -radius * 0.15) {
          const screenX = center.x + rotV3.x;
          const screenY = center.y - rotV3.y;

          // Depth opacity & scale
          const depthAlpha = Math.max(0.1, (rotV3.z + radius) / (2 * radius));
          const dotSize = dot.size * (0.6 + depthAlpha * 0.8);

          ctx.fillStyle = `rgba(165, 180, 252, ${depthAlpha * 0.75})`;
          ctx.beginPath();
          ctx.arc(screenX, screenY, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Map transformed 3D hub positions for arc connections & markers
      const projectedHubs = {};
      TECH_HUBS.forEach((hub) => {
        const v3 = latLngToVector3(hub.lat, hub.lng);
        const rotV3 = rotateVector3(v3, rot.x, rot.y);
        projectedHubs[hub.id] = {
          ...hub,
          rotV3,
          screenX: center.x + rotV3.x,
          screenY: center.y - rotV3.y,
          visible: rotV3.z > -radius * 0.1
        };
      });

      // 4. Render 3D Curved Arc Connections with Traveling Laser Energy Pulses
      CONNECTIONS.forEach((conn) => {
        const h1 = projectedHubs[conn.from];
        const h2 = projectedHubs[conn.to];

        if (h1 && h2 && (h1.visible || h2.visible)) {
          const midX = (h1.rotV3.x + h2.rotV3.x) / 2;
          const midY = (h1.rotV3.y + h2.rotV3.y) / 2;
          const midZ = (h1.rotV3.z + h2.rotV3.z) / 2;

          const dist = Math.sqrt(
            Math.pow(h1.rotV3.x - h2.rotV3.x, 2) +
            Math.pow(h1.rotV3.y - h2.rotV3.y, 2) +
            Math.pow(h1.rotV3.z - h2.rotV3.z, 2)
          );

          const arcHeight = radius + dist * 0.35;
          const midLen = Math.sqrt(midX * midX + midY * midY + midZ * midZ) || 1;
          const ctrlV3 = {
            x: (midX / midLen) * arcHeight,
            y: (midY / midLen) * arcHeight,
            z: (midZ / midLen) * arcHeight
          };

          const p1 = { x: h1.screenX, y: h1.screenY };
          const p2 = { x: h2.screenX, y: h2.screenY };
          const ctrlP = { x: center.x + ctrlV3.x, y: center.y - ctrlV3.y };

          const avgZ = (h1.rotV3.z + h2.rotV3.z + ctrlV3.z) / 3;
          const arcAlpha = Math.max(0.08, (avgZ + radius) / (2.5 * radius));

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.quadraticCurveTo(ctrlP.x, ctrlP.y, p2.x, p2.y);
          ctx.strokeStyle = conn.color;
          ctx.globalAlpha = arcAlpha * 0.6;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Draw Traveling Laser Particle Pulse along Quadratic Bezier Curve
          const t = (pulseTime + (h1.lat * 0.1)) % 1;
          const pulseX = Math.pow(1 - t, 2) * p1.x + 2 * (1 - t) * t * ctrlP.x + Math.pow(t, 2) * p2.x;
          const pulseY = Math.pow(1 - t, 2) * p1.y + 2 * (1 - t) * t * ctrlP.y + Math.pow(t, 2) * p2.y;

          ctx.globalAlpha = arcAlpha;
          ctx.shadowColor = conn.color;
          ctx.shadowBlur = 12;
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2);
          ctx.fill();

          ctx.restore();
        }
      });

      // 5. Render Tech Hub Node Markers (Glowing Rings & Pins)
      TECH_HUBS.forEach((hub) => {
        const ph = projectedHubs[hub.id];
        if (!ph || !ph.visible) return;

        const depthAlpha = Math.max(0.2, (ph.rotV3.z + radius) / (2 * radius));

        if (hub.id === 'kochi') {
          const rippleR = 6 + Math.sin(pulseTime * 4) * 4;
          ctx.strokeStyle = 'rgba(52, 211, 153, 0.8)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(ph.screenX, ph.screenY, rippleR, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.save();
        ctx.fillStyle = hub.id === 'kochi' ? '#34d399' : '#818cf8';
        ctx.shadowColor = hub.id === 'kochi' ? '#10b981' : '#6366f1';
        ctx.shadowBlur = 10;

        ctx.beginPath();
        ctx.arc(ph.screenX, ph.screenY, hub.id === 'kochi' ? 4.5 : 3.5, 0, Math.PI * 2);
        ctx.fill();

        if (depthAlpha > 0.45 || hub.id === 'kochi') {
          ctx.font = '600 10px "JetBrains Mono", monospace';
          ctx.fillStyle = hub.id === 'kochi' ? '#6ee7b7' : 'rgba(226, 232, 240, 0.85)';
          ctx.fillText(hub.name.split(',')[0], ph.screenX + 8, ph.screenY + 3);
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Mouse drag rotation listeners
    const handleMouseDown = (e) => {
      isDraggingRef.current = true;
      lastMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (isDraggingRef.current) {
        const dx = e.clientX - lastMouseRef.current.x;
        const dy = e.clientY - lastMouseRef.current.y;

        rotationRef.current.y += dx * 0.008;
        rotationRef.current.x += dy * 0.008;
        rotationRef.current.x = Math.max(-1.2, Math.min(1.2, rotationRef.current.x));

        rotationRef.current.vx = dy * 0.001;
        rotationRef.current.vy = dx * 0.001;

        lastMouseRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Touch drag listeners for mobile devices
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        lastMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e) => {
      if (isDraggingRef.current && e.touches.length === 1) {
        const dx = e.touches[0].clientX - lastMouseRef.current.x;
        const dy = e.touches[0].clientY - lastMouseRef.current.y;

        rotationRef.current.y += dx * 0.008;
        rotationRef.current.x += dy * 0.008;
        rotationRef.current.x = Math.max(-1.2, Math.min(1.2, rotationRef.current.x));

        lastMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [height]);

  return (
    <div className={`relative w-full overflow-hidden rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl flex flex-col items-center justify-center p-2 ${className}`}>
      
      {/* Top Header Controls Overlay */}
      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-[11px] font-mono text-indigo-300 backdrop-blur-md shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-bold">GITHUB GLOBE VISUALIZER</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-slate-400 bg-slate-900/80 px-3 py-1 rounded-lg border border-slate-800">
          <span>🖱️ Click & Drag to Rotate</span>
        </div>
      </div>

      {/* HTML5 Canvas Element */}
      <canvas
        ref={canvasRef}
        className="w-full cursor-grab active:cursor-grabbing z-0"
        style={{ height: `${height}px` }}
      />

      {/* Footer Info HUD */}
      <div className="w-full px-4 py-2.5 border-t border-slate-800/80 bg-slate-900/80 backdrop-blur-md flex items-center justify-between text-[11px] font-mono text-slate-400 z-10 rounded-b-2xl">
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Kochi, IN
          </span>
          <span className="text-slate-500">↔</span>
          <span className="text-indigo-300 font-semibold">Global Tech Nodes</span>
        </div>

        <div className="text-indigo-400 font-bold text-[10px] hidden sm:block">
          ⚡ 60 FPS • 8 Active Arc Beams
        </div>
      </div>

    </div>
  );
}
