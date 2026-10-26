import React from 'react';
import { THEME } from '../constants/theme';

interface VerificationComparisonProps {
  mode: 'vulnerable' | 'corrected' | 'split';
  style?: React.CSSProperties;
}

export const VerificationComparison: React.FC<VerificationComparisonProps> = ({
  mode,
  style,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        width: 1400,
        ...style,
      }}
    >
      {/* Synthetic Fixture Honest Disclaimer Banner (Mandatory Rule) */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(10, 24, 38, 0.95)',
          padding: '10px 24px',
          borderRadius: 10,
          border: `1px solid ${THEME.colors.panelBorderMuted}`,
        }}
      >
        <span
          style={{
            fontFamily: THEME.fonts.mono,
            fontSize: 14,
            fontWeight: 700,
            color: THEME.colors.cyan,
            letterSpacing: '0.04em',
          }}
        >
          CONTROLLED VERIFICATION LAB · IN-MEMORY CONCURRENCY HARNESS
        </span>
        <span
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: '#FDE68A',
            letterSpacing: '0.02em',
          }}
        >
          First-party synthetic fixtures only · No real bank or third-party execution
        </span>
      </div>

      {/* Comparison Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: mode === 'split' ? '1fr 1fr' : '1fr', gap: 24 }}>
        {/* Vulnerable Card */}
        {(mode === 'vulnerable' || mode === 'split') && (
          <div
            style={{
              background: 'rgba(16, 37, 57, 0.88)',
              backdropFilter: 'blur(20px)',
              borderRadius: 18,
              border: `2px solid ${THEME.colors.failure}`,
              boxShadow: `${THEME.shadows.glowFail}, 0 20px 40px rgba(0,0,0,0.5)`,
              padding: '28px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 800,
                    padding: '4px 10px',
                    borderRadius: 6,
                    background: 'rgba(246, 110, 114, 0.2)',
                    color: THEME.colors.failure,
                    letterSpacing: '0.05em',
                  }}
                >
                  SYNTHETIC FIXTURE A
                </span>
                <h3 style={{ ...THEME.typography.cardHeading, fontSize: 26, margin: '8px 0 0' }}>
                  VulnerableRefundService
                </h3>
              </div>
              <div
                style={{
                  padding: '10px 18px',
                  borderRadius: 10,
                  background: THEME.colors.failure,
                  color: '#FFFFFF',
                  fontWeight: 900,
                  fontSize: 20,
                  letterSpacing: '0.05em',
                  boxShadow: '0 0 20px rgba(246, 110, 114, 0.5)',
                }}
              >
                VERIFIED_FAIL
              </div>
            </div>

            {/* Test Execution Telemetry */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 12,
                background: 'rgba(7, 18, 29, 0.85)',
                padding: '16px 20px',
                borderRadius: 12,
                border: '1px solid rgba(246, 110, 114, 0.3)',
              }}
            >
              <div>
                <div style={{ fontSize: 13, color: THEME.colors.muted }}>CONCURRENT REQUESTS</div>
                <div style={{ fontSize: 28, fontWeight: 800, color: THEME.colors.ice }}>2</div>
              </div>
              <div>
                <div style={{ fontSize: 13, color: THEME.colors.muted }}>COMMITTED SIDE EFFECTS</div>
                <div style={{ fontSize: 28, fontWeight: 800, color: THEME.colors.failure }}>2 (DUPLICATE)</div>
              </div>
              <div>
                <div style={{ fontSize: 13, color: THEME.colors.muted }}>INVARIANT ALLOWED</div>
                <div style={{ fontSize: 28, fontWeight: 800, color: THEME.colors.ice }}>&le; 1</div>
              </div>
            </div>

            <p style={{ fontSize: 16, color: '#CBD5E1', margin: 0, lineHeight: 1.45 }}>
              Non-atomic race window permits both concurrent asynchronous requests to bypass in-memory idempotency check, triggering double refund settlement.
            </p>
          </div>
        )}

        {/* Corrected Card */}
        {(mode === 'corrected' || mode === 'split') && (
          <div
            style={{
              background: 'rgba(16, 37, 57, 0.88)',
              backdropFilter: 'blur(20px)',
              borderRadius: 18,
              border: `2px solid ${THEME.colors.pass}`,
              boxShadow: `${THEME.shadows.glowPass}, 0 20px 40px rgba(0,0,0,0.5)`,
              padding: '28px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 800,
                    padding: '4px 10px',
                    borderRadius: 6,
                    background: 'rgba(54, 198, 139, 0.2)',
                    color: THEME.colors.pass,
                    letterSpacing: '0.05em',
                  }}
                >
                  SYNTHETIC FIXTURE B
                </span>
                <h3 style={{ ...THEME.typography.cardHeading, fontSize: 26, margin: '8px 0 0' }}>
                  FixedRefundService
                </h3>
              </div>
              <div
                style={{
                  padding: '10px 18px',
                  borderRadius: 10,
                  background: THEME.colors.pass,
                  color: '#07121D',
                  fontWeight: 900,
                  fontSize: 20,
                  letterSpacing: '0.05em',
                  boxShadow: '0 0 20px rgba(54, 198, 139, 0.5)',
                }}
              >
                VERIFIED_PASS
              </div>
            </div>

            {/* Test Execution Telemetry */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 12,
                background: 'rgba(7, 18, 29, 0.85)',
                padding: '16px 20px',
                borderRadius: 12,
                border: '1px solid rgba(54, 198, 139, 0.3)',
              }}
            >
              <div>
                <div style={{ fontSize: 13, color: THEME.colors.muted }}>CONCURRENT REQUESTS</div>
                <div style={{ fontSize: 28, fontWeight: 800, color: THEME.colors.ice }}>2</div>
              </div>
              <div>
                <div style={{ fontSize: 13, color: THEME.colors.muted }}>COMMITTED SIDE EFFECTS</div>
                <div style={{ fontSize: 28, fontWeight: 800, color: THEME.colors.pass }}>1 (ATOMIC)</div>
              </div>
              <div>
                <div style={{ fontSize: 13, color: THEME.colors.muted }}>INVARIANT ALLOWED</div>
                <div style={{ fontSize: 28, fontWeight: 800, color: THEME.colors.ice }}>&le; 1</div>
              </div>
            </div>

            <p style={{ fontSize: 16, color: '#CBD5E1', margin: 0, lineHeight: 1.45 }}>
              Atomic mutex lock acquires idempotency state before asynchronous execution window, deterministically rejecting duplicate attempt.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
