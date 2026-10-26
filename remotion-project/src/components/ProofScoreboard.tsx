import React from 'react';
import { THEME } from '../constants/theme';

interface MetricItem {
  label: string;
  count: number | string;
  total?: number | string;
  status: 'passed' | 'failed' | 'blocked' | 'info';
}

interface ProofScoreboardProps {
  suiteTitle: string;
  suiteSubtitle: string;
  prSha?: string;
  metrics: MetricItem[];
  footerNote?: string;
  style?: React.CSSProperties;
}

export const ProofScoreboard: React.FC<ProofScoreboardProps> = ({
  suiteTitle,
  suiteSubtitle,
  prSha,
  metrics,
  footerNote,
  style,
}) => {
  return (
    <div
      style={{
        width: 1200,
        background: 'rgba(16, 37, 57, 0.9)',
        backdropFilter: 'blur(24px)',
        borderRadius: 20,
        border: `2px solid ${THEME.colors.pass}`,
        boxShadow: `${THEME.shadows.glowPass}, 0 25px 60px rgba(0,0,0,0.6)`,
        padding: '36px 44px',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        ...style,
      }}
    >
      {/* Title Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <span
              style={{
                padding: '4px 12px',
                borderRadius: 6,
                background: 'rgba(54, 198, 139, 0.2)',
                border: `1px solid ${THEME.colors.pass}`,
                color: THEME.colors.pass,
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: '0.06em',
              }}
            >
              100% PASSING VERIFICATION
            </span>
            {prSha && (
              <span style={{ fontFamily: THEME.fonts.mono, fontSize: 14, color: THEME.colors.cyan }}>
                SHA: {prSha}
              </span>
            )}
          </div>
          <h2 style={{ ...THEME.typography.cardHeading, fontSize: 32, margin: 0 }}>
            {suiteTitle}
          </h2>
          <div style={{ fontSize: 18, color: THEME.colors.muted, marginTop: 4 }}>
            {suiteSubtitle}
          </div>
        </div>

        <div
          style={{
            padding: '12px 24px',
            borderRadius: 12,
            background: THEME.colors.pass,
            color: '#07121D',
            fontWeight: 900,
            fontSize: 22,
            letterSpacing: '0.04em',
            boxShadow: '0 0 25px rgba(54, 198, 139, 0.5)',
          }}
        >
          ALL CHECKS GREEN
        </div>
      </div>

      {/* Metrics Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${metrics.length}, 1fr)`, gap: 16 }}>
        {metrics.map((m, idx) => {
          const color =
            m.status === 'passed'
              ? THEME.colors.pass
              : m.status === 'failed'
              ? THEME.colors.failure
              : m.status === 'blocked'
              ? THEME.colors.warning
              : THEME.colors.cyan;

          return (
            <div
              key={idx}
              style={{
                background: 'rgba(7, 18, 29, 0.85)',
                borderRadius: 14,
                border: `1px solid ${color}40`,
                padding: '20px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
              }}
            >
              <span style={{ fontSize: 13, color: THEME.colors.muted, letterSpacing: '0.05em' }}>
                {m.label.toUpperCase()}
              </span>
              <div style={{ fontSize: 36, fontWeight: 900, color, letterSpacing: '-0.02em' }}>
                {m.count}
                {m.total && (
                  <span style={{ fontSize: 22, color: THEME.colors.muted, fontWeight: 500 }}>
                    {' '}/ {m.total}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Note */}
      {footerNote && (
        <div
          style={{
            paddingTop: 16,
            borderTop: `1px solid ${THEME.colors.panelBorderMuted}`,
            fontSize: 16,
            color: THEME.colors.muted,
          }}
        >
          {footerNote}
        </div>
      )}
    </div>
  );
};
