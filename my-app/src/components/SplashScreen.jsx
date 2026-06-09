import React, { useEffect, useState } from 'react';
import logoImg from '../assets/logo.png';

const EMOJIS = ['🍜', '🍛', '🥘', '🍱', '🥗', '🍝', '🧆', '🍲', '🥙', '🍣', '🥟', '🍤'];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function Particle({ emoji, style }) {
  return (
    <span className="sp-particle" style={style}>
      {emoji}
    </span>
  );
}

const SplashScreen = ({ onFinish }) => {
  const [step, setStep] = useState('logoReveal'); // straight to logo
  const [particles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      emoji: EMOJIS[i % EMOJIS.length],
      left: `${randomBetween(2, 95)}%`,
      delay: `${randomBetween(0, 4)}s`,
      duration: `${randomBetween(4, 9)}s`,
      size: `${randomBetween(1.2, 3)}rem`,
      opacity: randomBetween(0.15, 0.4),
    }))
  );

  useEffect(() => {
    const t1 = setTimeout(() => setStep('exit'), 2800);
    const t2 = setTimeout(() => onFinish(), 3500);
    return () => [t1, t2].forEach(clearTimeout);
  }, [onFinish]);

  const isExit = step === 'exit';

  return (
    <div className={`sp-root${isExit ? ' sp-root--exit' : ''}`}>

      {/* floating food particles */}
      <div className="sp-particles">
        {particles.map(p => (
          <Particle
            key={p.id}
            emoji={p.emoji}
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              fontSize: p.size,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* logo stage */}
      <div className={`sp-logo-stage${isExit ? ' sp-logo-stage--exit' : ''}`}>
        {/* glow rings */}
        <div className="sp-glow-ring" />
        <div className="sp-glow-ring sp-glow-ring--2" />
        <div className="sp-glow-ring sp-glow-ring--3" />

        {/* logo card */}
        <div className="sp-logo-card">
          <img src={logoImg} alt="Logo" className="sp-logo-img" />
        </div>

        {/* tagline */}
        <p className="sp-tagline">
          {'Delivering happiness to your door'.split('').map((ch, i) => (
            <span
              key={i}
              className="sp-tagline-char"
              style={{ animationDelay: `${0.3 + i * 0.03}s` }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </span>
          ))}
        </p>

        {/* animated underline */}
        <div className="sp-line" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');

        .sp-root {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: radial-gradient(ellipse at 50% 60%, #061629 0%, #09090f 70%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .sp-root--exit {
          opacity: 0;
          transform: scale(1.05);
          pointer-events: none;
        }

        /* ── particles ── */
        .sp-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }
        .sp-particle {
          position: absolute;
          bottom: -60px;
          animation: floatUp linear infinite;
          user-select: none;
        }
        @keyframes floatUp {
          0%   { transform: translateY(0) rotate(0deg);    opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 0.7; }
          100% { transform: translateY(-115vh) rotate(360deg); opacity: 0; }
        }

        /* ── logo stage ── */
        .sp-logo-stage {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          animation: stageIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .sp-logo-stage--exit {
          animation: stageOut 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes stageIn {
          from { opacity: 0; transform: scale(0.82) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes stageOut {
          from { opacity: 1; transform: scale(1); }
          to   { opacity: 0; transform: scale(1.12); }
        }

        /* glow rings */
        .sp-glow-ring {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          border: 1.5px solid rgba(22,66,125,0.9);
          animation: ringPulse 2.4s ease-in-out infinite;
        }
        .sp-glow-ring--2 {
          width: 460px;
          height: 460px;
          border-color: rgba(74,133,212,0.35);
          animation-delay: 0.5s;
        }
        .sp-glow-ring--3 {
          width: 620px;
          height: 620px;
          border-color: rgba(74,133,212,0.12);
          animation-delay: 1s;
        }
        @keyframes ringPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1);    opacity: 1; }
          50%       { transform: translate(-50%, -50%) scale(1.07); opacity: 0.45; }
        }

        /* logo card */
        .sp-logo-card {
          width: 190px;
          height: 190px;
          border-radius: 40px;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 0 80px rgba(22,66,125,0.55),
            0 0 160px rgba(74,133,212,0.2),
            0 30px 80px rgba(0,0,0,0.8),
            inset 0 1px 0 rgba(255,255,255,0.12);
          animation: cardFloat 3s ease-in-out infinite;
        }
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-12px); }
        }
        .sp-logo-img {
          width: 130px;
          height: auto;
          filter: brightness(0) invert(1);
          animation: logoGlow 2.5s ease-in-out infinite alternate;
        }
        @keyframes logoGlow {
          from { filter: brightness(0) invert(1) drop-shadow(0 0 0px #4a85d4); }
          to   { filter: brightness(0) invert(1) drop-shadow(0 0 18px #4a85d4); }
        }

        /* tagline */
        .sp-tagline {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          color: rgba(255,255,255,0.7);
          font-size: clamp(0.8rem, 2vw, 1rem);
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin: 0;
          max-width: 450px;
        }
        .sp-tagline-char {
          display: inline-block;
          opacity: 0;
          animation: charIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes charIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* underline */
        .sp-line {
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #16427D, transparent);
          border-radius: 2px;
          animation: lineGrow 0.9s 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes lineGrow {
          from { width: 0;     opacity: 0; }
          to   { width: 220px; opacity: 1; }
        }

        /* responsive */
        @media (max-width: 480px) {
          .sp-logo-card { width: 150px; height: 150px; border-radius: 30px; }
          .sp-logo-img  { width: 100px; }
          .sp-glow-ring { width: 220px; height: 220px; }
          .sp-glow-ring--2 { width: 340px; height: 340px; }
          .sp-glow-ring--3 { width: 460px; height: 460px; }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
