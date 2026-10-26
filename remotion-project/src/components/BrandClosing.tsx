import React from 'react';
import { THEME } from '../constants/theme';

interface BrandClosingProps {
  opacity?: number;
  scale?: number;
  style?: React.CSSProperties;
}

export const BrandClosing: React.FC<BrandClosingProps> = ({
  opacity = 1,
  scale = 1,
  style,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
        opacity,
        transform: `scale(${scale})`,
        textAlign: 'center',
        ...style,
      }}
    >
      {/* Brand Icon Shield / Lock Node */}
      <div
        style={{
          width: 110,
          height: 110,
          borderRadius: 28,
          background: 'linear-gradient(135deg, rgba(26, 217, 209, 0.25) 0%, rgba(16, 37, 57, 0.8) 100%)',
          border: `2px solid ${THEME.colors.cyan}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `0 0 50px ${THEME.colors.cyanGlow}, inset 0 0 20px rgba(26, 217, 209, 0.2)`,
        }}
      >
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={THEME.colors.cyan} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      </div>

      {/* Brand Name */}
      <div>
        <h1
          style={{
            ...THEME.typography.heroTitle,
            fontSize: 68,
            letterSpacing: '-0.03em',
            margin: 0,
            background: 'linear-gradient(180deg, #FFFFFF 0%, #A5F3FC 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          FlowGuard AI
        </h1>
        <div
          style={{
            fontFamily: THEME.fonts.mono,
            fontSize: 20,
            color: THEME.colors.cyan,
            letterSpacing: '0.12em',
            marginTop: 8,
            textTransform: 'uppercase',
          }}
        >
          Architectural Invariant & Concurrency Verification
        </div>
      </div>

      {/* Main Tagline */}
      <div
        style={{
          maxWidth: 900,
          fontSize: 32,
          fontWeight: 600,
          lineHeight: 1.4,
          color: THEME.colors.ice,
          textShadow: '0 2px 10px rgba(0,0,0,0.5)',
        }}
      >
        “Evidence before verdicts. Don't just review code. Prove the behavior.”
      </div>

      {/* Live App URL Box */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          background: 'rgba(16, 37, 57, 0.85)',
          padding: '16px 36px',
          borderRadius: 14,
          border: `1px solid ${THEME.colors.panelBorder}`,
          boxShadow: THEME.shadows.panel,
        }}
      >
        <span style={{ fontSize: 16, color: THEME.colors.muted, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
          LIVE DEPLOYMENT
        </span>
        <span style={{ color: THEME.colors.panelBorderMuted }}>|</span>
        <span
          style={{
            fontFamily: THEME.fonts.mono,
            fontSize: 24,
            fontWeight: 700,
            color: THEME.colors.cyan,
            letterSpacing: '0.02em',
          }}
        >
          flowguard-ai-smoky.vercel.app
        </span>
      </div>
    </div>
  );
};
