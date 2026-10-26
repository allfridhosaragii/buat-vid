import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { THEME } from '../constants/theme';
import { InvariantLine } from '../components/InvariantLine';
import { AttributionFooter } from '../components/AttributionFooter';
import { Subtitles } from '../components/Subtitles';
import { SCENES } from '../constants/manifest';

export const S05_BusinessInvariant: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sceneMeta = SCENES[4]; // S05 (duration 480 frames)

  const scale = interpolate(frame, [0, 480], [0.97, 1.02], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const entrance = spring({
    frame: frame - 15,
    fps,
    config: { damping: 200, mass: 1 },
  });

  const opacity = interpolate(entrance, [0, 1], [0, 1]);
  const translateY = interpolate(entrance, [0, 1], [30, 0]);

  // Code vs Law contrast cards
  const contrastProgress = spring({
    frame: frame - 120,
    fps,
    config: { damping: 180 },
  });

  // Exit transition
  const exitOpacity = interpolate(frame, [465, 480], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME.colors.midnight,
        overflow: 'hidden',
        opacity: exitOpacity,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 1300,
          height: 650,
          background: 'radial-gradient(circle, rgba(26, 217, 209, 0.12) 0%, rgba(7, 18, 29, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          paddingBottom: 60,
          zIndex: 10,
        }}
      >
        {/* Title Heading */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: 28,
            opacity,
            transform: `translateY(${translateY}px)`,
          }}
        >
          <div
            style={{
              fontSize: 15,
              fontFamily: THEME.fonts.mono,
              fontWeight: 700,
              color: THEME.colors.cyan,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 8,
            }}
          >
            Engineering Foundation
          </div>
          <h1
            style={{
              ...THEME.typography.heroTitle,
              fontSize: 48,
              margin: 0,
            }}
          >
            The Need for Explicit Business Invariants
          </h1>
          <div style={{ fontSize: 20, color: THEME.colors.muted, marginTop: 6 }}>
            Code can execute without syntax errors while completely violating architectural guarantees.
          </div>
        </div>

        {/* Invariant Formula Card */}
        <div
          style={{
            transform: `scale(${scale}) translateY(${translateY}px)`,
            opacity,
            marginBottom: 24,
          }}
        >
          <InvariantLine
            ruleName="INV-PAYMENT-001"
            scope="Payment & Refund Idempotency Specification"
            equation="For 1 Logical Idempotency Key : Committed Side Effects ≤ 1"
            sourceDoc="Stripe API Documentation · Section: Idempotent Requests"
          />
        </div>

        {/* Contrast Row: Code Execution vs Business Law */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
            width: 1200,
            opacity: contrastProgress,
            transform: `translateY(${interpolate(contrastProgress, [0, 1], [20, 0])}px)`,
          }}
        >
          <div
            style={{
              background: 'rgba(7, 18, 29, 0.85)',
              border: `1px solid ${THEME.colors.panelBorderMuted}`,
              borderRadius: 14,
              padding: '18px 24px',
            }}
          >
            <div style={{ fontSize: 13, color: THEME.colors.muted, fontFamily: THEME.fonts.mono }}>TRADITIONAL CHECK</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: THEME.colors.ice, marginTop: 4 }}>
              “Does the code return HTTP 200 without throwing?”
            </div>
          </div>
          <div
            style={{
              background: 'rgba(26, 217, 209, 0.1)',
              border: `1px solid ${THEME.colors.cyan}`,
              borderRadius: 14,
              padding: '18px 24px',
            }}
          >
            <div style={{ fontSize: 13, color: THEME.colors.cyan, fontFamily: THEME.fonts.mono }}>FLOWGUARD INVARIANT CHECK</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#A5F3FC', marginTop: 4 }}>
              “Under concurrency, is the invariant deterministically preserved?”
            </div>
          </div>
        </div>
      </div>

      <Subtitles text={sceneMeta.subtitle} />
      <AttributionFooter
        label={sceneMeta.citationLabel || ''}
        sourceUrl={sceneMeta.sourceUrls[0]}
        disclaimer="Stripe documentation cited as architectural design reference, not incident sponsor."
      />
    </AbsoluteFill>
  );
};
