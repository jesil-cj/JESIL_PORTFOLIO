import React, { useState } from 'react';
import { Sparkles, Sliders, Palette, Code, Copy, Check, Eye } from 'lucide-react';

export default function FigmaSandbox() {
  const [accentColor, setAccentColor] = useState('#4f46e5');
  const [borderRadius, setBorderRadius] = useState(20);
  const [blurAmount, setBlurAmount] = useState(12);
  const [showWireframes, setShowWireframes] = useState(false);
  const [copied, setCopied] = useState(false);

  const getCssSnippet = () => {
    return `.custom-ui-card {
  background: #ffffff;
  backdrop-filter: blur(${blurAmount}px);
  border-radius: ${borderRadius}px;
  border: 1px solid ${accentColor}40;
  box-shadow: 0 10px 30px ${accentColor}18;
}`;
  };

  const handleCopyCss = () => {
    navigator.clipboard.writeText(getCssSnippet());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sandbox" className="py-24 relative z-10 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE FIGMA SANDBOX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
            Live <span className="text-gradient-indigo">Design System</span> Tokens
          </h2>
          <p className="text-slate-600 text-base font-sans">
            Adjust design tokens live on this canvas. Watch how Figma design properties automatically transform into production CSS variables.
          </p>
        </div>

        {/* Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-indigo-700">
                <Sliders className="w-4 h-4" />
                <span>FIGMA TOKENS CONTROL</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">Live State Engine</span>
            </div>

            {/* Accent Color Picker */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-700 font-semibold block">
                Accent Token (`--primary-accent`)
              </label>
              <div className="flex items-center gap-3">
                {[
                  { color: '#4f46e5', label: 'Indigo' },
                  { color: '#7c3aed', label: 'Violet' },
                  { color: '#d97706', label: 'Amber' },
                  { color: '#059669', label: 'Emerald' },
                ].map((c) => (
                  <button
                    key={c.color}
                    onClick={() => setAccentColor(c.color)}
                    className={`w-10 h-10 rounded-xl transition-all flex items-center justify-center ${
                      accentColor === c.color ? 'ring-2 ring-slate-900 scale-110' : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: c.color }}
                  >
                    {accentColor === c.color && <Check className="w-4 h-4 text-white font-bold" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Border Radius Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-slate-700 font-semibold">
                <span>Border Radius (`--border-radius`)</span>
                <span className="text-indigo-600 font-bold">{borderRadius}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                value={borderRadius}
                onChange={(e) => setBorderRadius(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>

            {/* Wireframe Bounds Toggle */}
            <div className="pt-2 flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-indigo-600" />
                <span className="text-xs font-mono text-slate-700 font-semibold">Highlight Wireframe Bounds</span>
              </div>
              <button
                onClick={() => setShowWireframes(!showWireframes)}
                className={`w-12 h-6 rounded-full transition-colors relative ${
                  showWireframes ? 'bg-indigo-600' : 'bg-slate-300'
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                    showWireframes ? 'translate-x-6' : 'translate-x-0'
                  }`}
                ></span>
              </button>
            </div>

          </div>

          {/* Canvas Live Output */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Card Preview Box */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl relative light-dots-pattern overflow-hidden min-h-[300px] flex items-center justify-center">
              
              {/* Dynamic Styled Component Card */}
              <div
                className={`p-6 max-w-md w-full transition-all duration-300 ${
                  showWireframes ? 'outline-2 outline-dashed outline-indigo-600' : ''
                }`}
                style={{
                  backgroundColor: '#ffffff',
                  backdropFilter: `blur(${blurAmount}px)`,
                  WebkitBackdropFilter: `blur(${blurAmount}px)`,
                  borderRadius: `${borderRadius}px`,
                  border: `1px solid ${accentColor}40`,
                  boxShadow: `0 20px 40px ${accentColor}18`,
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md"
                    style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
                  >
                    Figma Component #01
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Jesil UX Library</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1 font-heading">
                  Interactive Card Component
                </h3>
                <p className="text-xs text-slate-600 mb-4 font-sans">
                  This component re-renders live based on design token edits.
                </p>

                <div className="flex items-center gap-3">
                  <button
                    className="px-4 py-2 text-xs font-bold font-sans transition-transform hover:scale-105"
                    style={{
                      backgroundColor: accentColor,
                      color: '#ffffff',
                      borderRadius: `${Math.max(6, borderRadius / 2)}px`,
                    }}
                  >
                    Action Token
                  </button>
                  <span className="text-[11px] font-mono text-slate-500">
                    Radius: {borderRadius}px
                  </span>
                </div>
              </div>

            </div>

            {/* Generated CSS Token Output Box */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl space-y-3 font-mono">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-amber-400" />
                  <span>GENERATED CSS DESIGN TOKENS</span>
                </span>
                <button
                  onClick={handleCopyCss}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 text-slate-200 hover:text-white transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Tokens'}</span>
                </button>
              </div>

              <pre className="text-xs text-amber-300 bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto">
                {getCssSnippet()}
              </pre>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
