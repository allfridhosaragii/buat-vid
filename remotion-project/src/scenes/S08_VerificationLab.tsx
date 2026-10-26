import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Img,
  staticFile,
} from 'remotion';
import { THEME } from '../constants/theme';
import { BrowserMockup } from '../components/BrowserMockup';
import { VerificationComparison } from '../components/VerificationComparison';
import { AttributionFooter } from '../components/AttributionFooter';
import { Subtitles } from '../components/Subtitles';
import { SCENES } from '../constants/manifest';

export const S08_VerificationLab: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sceneMeta = SCENES[7]; // S08 (duration 1080 frames)

  const scale = interpolate(frame, [0, 1080], [0.97, 1.01], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const entrance = spring({
    frame: frame - 15,
    fps,
    config: { damping: 200, mass: 1 },
  });

  const opacity = interpolate(entrance, [0, 1], [0, 1]);
  const translateY = interpolate(entrance, [0, 1], [25, 0]);

  // Clean discrete fixture switch at frame 540 (0-540: vulnerable, 540-1080: corrected)
  const isCorrected = frame >= 540;

  // Exit transition
  const exitOpacity = interpolate(frame, [1065, 1080], [1, 0], {
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
          top: '25%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 1400,
          height: 600,
          background: isCorrected
            ? 'radial-gradient(circle, rgba(54, 198, 139, 0.15) 0%, rgba(7, 18, 29, 0) 70%)'
            : 'radial-gradient(circle, rgba(246, 110, 114, 0.15) 0%, rgba(7, 18, 29, 0) 70%)',
          pointerEvents: 'none',
          transition: 'background 0.5s ease',
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: '100%',
          padding: '30px 80px 0',
          zIndex: 10,
        }}
      >
        {/* Title Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: 12,
            opacity,
            transform: `translateY(${translateY}px)`,
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontFamily: THEME.fonts.mono,
              fontWeight: 700,
              color: isCorrected ? THEME.colors.pass : THEME.colors.failure,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 4,
            }}
          >
            {isCorrected
              ? 'Stage 2: Corrected Fixture Execution'
              : 'Stage 1: Vulnerable Fixture Race Window'}
          </div>
          <h1
            style={{
              ...THEME.typography.heroTitle,
              fontSize: 38,
              margin: 0,
            }}
          >
            Controlled Verification Lab
          </h1>
        </div>

        {/* Browser Mockup with Real Lab Evidence Screenshots */}
        <div
          style={{
            width: 1360,
            height: 380,
            opacity,
            transform: `scale(${scale}) translateY(${translateY}px)`,
            position: 'relative',
            marginBottom: 14,
            boxShadow: isCorrected ? THEME.shadows.glowPass : THEME.shadows.glowFail,
          }}
        >
          <BrowserMockup
            url={
              isCorrected
                ? 'https://flowguard-ai-smoky.vercel.app/lab#fixed-fixture'
                : 'https://flowguard-ai-smoky.vercel.app/lab#vulnerable-fixture'
            }
            title="FlowGuard AI — Controlled Concurrency Verification Harness"
          >
            <Img
              src={
                isCorrected
                  ? staticFile('flowguard/lab-corrected-evidence.webp')
                  : staticFile('flowguard/lab-vulnerable-evidence.webp')
              }
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
              }}
            />
          </BrowserMockup>

          {/* Dynamic Floating Outcome Badge */}
          <div
            style={{
              position: 'absolute',
              top: 56,
              right: 18,
              background: 'rgba(7, 18, 29, 0.95)',
              border: `2px solid ${isCorrected ? THEME.colors.pass : THEME.colors.failure}`,
              borderRadius: 10,
              padding: '10px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              boxShadow: isCorrected ? THEME.shadows.glowPass : THEME.shadows.glowFail,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: isCorrected ? THEME.colors.pass : THEME.colors.failure,
                boxShadow: `0 0 10px ${isCorrected ? THEME.colors.pass : THEME.colors.failure}`,
              }}
            />
            <span
              style={{
                fontSize: 20,
                fontWeight: 900,
                color: isCorrected ? THEME.colors.pass : THEME.colors.failure,
                letterSpacing: '0.06em',
              }}
            >
              {isCorrected ? 'VERIFIED_PASS' : 'VERIFIED_FAIL'}
            </span>
          </div>
        </div>

        {/* Verification Comparison Component */}
        <div style={{ width: 1360, opacity }}>
          <VerificationComparison mode={isCorrected ? 'corrected' : 'vulnerable'} />
        </div>
      </div>

      <Subtitles text={sceneMeta.subtitle} />
      <AttributionFooter
        label={sceneMeta.citationLabel || ''}
        sourceUrl="https://flowguard-ai-smoky.vercel.app/lab"
        disclaimer="First-party synthetic simulations only · No live banking integration"
      />
    </AbsoluteFill>
  );
};
