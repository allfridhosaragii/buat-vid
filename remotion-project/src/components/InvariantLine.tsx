import React from 'react';
import { THEME } from '../constants/theme';

interface InvariantLineProps {
  ruleName?: string;
  scope?: string;
  equation?: string;
  sourceDoc?: string;
  style?: React.CSSProperties;
}

export const InvariantLine: React.FC<InvariantLineProps> = ({
  ruleName = 'INV-PAYMENT-001',
  scope = 'Refund Execution & Idempotency Guarantee',
  equation = 'For 1 Logical Idempotency Key : Committed Side Effects ≤ 1',
  sourceDoc = 'Stripe API Architecture Standard · Section: Idempotent Requests',
  style,
}) => {
  return (
    <div
      style={{
        width: 1200,
        background: 'rgba(16, 37, 57, 0.85)',
        backdropFilter: 'blur(20px)',
        borderRadius: 20,
        border: `2px solid ${THEME.colors.cyan}`,
        boxShadow: `${THEME.shadows.glowCyan}, 0 20px 50px rgba(0,0,0,0.6)`,
        padding: '36px 44px',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        ...style,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              padding: '6px 14px',
              borderRadius: 6,
              background: 'rgba(26, 217, 209, 0.2)',
              border: `1px solid ${THEME.colors.cyan}`,
              color: THEME.colors.cyan,
              ...THEME.typography.badge,
            }}
          >
            {ruleName}
          </span>
          <span style={{ fontSize: 20, color: THEME.colors.ice, fontWeight: 600 }}>
            {scope}
          </span>
        </div>
        <span style={{ fontSize: 16, color: THEME.colors.muted, fontFamily: THEME.fonts.mono }}>
          FORMAL INVARIANT
        </span>
      </div>

      {/* High Impact Equation Box */}
      <div
        style={{
          background: 'rgba(7, 18, 29, 0.9)',
          padding: '24px 32px',
          borderRadius: 14,
          border: `1px solid rgba(26, 217, 209, 0.3)`,
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontFamily: THEME.fonts.mono,
            fontSize: 34,
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '0.02em',
          }}
        >
          {equation}
        </span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 17, color: THEME.colors.muted }}>
          Guidance reference: <strong style={{ color: THEME.colors.ice }}>{sourceDoc}</strong>
        </span>
        <span style={{ fontSize: 15, color: THEME.colors.cyan }}>
          Deterministic Business Law
        </span>
      </div>
    </div>
  );
};
