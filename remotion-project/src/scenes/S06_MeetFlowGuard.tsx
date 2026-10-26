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
import { AttributionFooter } from '../components/AttributionFooter';
import { Subtitles } from '../components/Subtitles';
import { SCENES } from '../constants/manifest';

export const S06_MeetFlowGuard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sceneMeta = SCENES[5]; // S06

  // Camera 2.5D push-in & perspective
  const scale = interpolate(frame, [0, 510], [0.93, 1.02], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const tilt = interpolate(frame, [0, 200, 510], [3, 0, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Entrance spring
  const entrance = spring({
    frame: frame - 10,
    fps,
    config: { damping: 200, mass: 1 },
  });

  const opacity = interpolate(entrance, [0, 1], [0, 1]);
  const translateY = interpolate(entrance, [0, 1], [40, 0]);

  // Floating highlight badges appearing over the browser
  const badge1Progress = spring({
    frame: frame - 120,
    fps,
    config: { damping: 180 },
  });
  const badge2Progress = spring({
    frame: frame - 200,
    fps,
    config: { damping: 180 },
  });
  const badge3Progress = spring({
    frame: frame - 280,
    fps,
    config: { damping: 180 },
  });

  // Exit transition
  const exitOpacity = interpolate(frame, [495, 510], [1, 0], {
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
      {/* Background Ambience */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 1400,
          height: 700,
          background: 'radial-gradient(circle, rgba(26, 217, 209, 0.15) 0%, rgba(7, 18, 29, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Main Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          padding: '0 80px',
          zIndex: 10,
          perspective: 1200,
        }}
      >
        {/* Title Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: 24,
            opacity,
            transform: `translateY(${translateY}px)`,
          }}
        >
          <div
            style={{
              fontSize: 16,
              fontFamily: THEME.fonts.mono,
              fontWeight: 700,
              color: THEME.colors.cyan,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 8,
            }}
          >
            Introducing The Solution
          </div>
          <h1
            style={{
              ...THEME.typography.heroTitle,
              fontSize: 52,
              margin: 0,
            }}
          >
            Meet FlowGuard AI
          </h1>
          <div style={{ fontSize: 22, color: THEME.colors.muted, marginTop: 6 }}>
            Architectural Concurrency & Invariant Verification for Modern Web Applications
          </div>
        </div>

        {/* Browser Mockup displaying authentic homepage screenshot */}
        <div
          style={{
            width: 1360,
            height: 640,
            opacity,
            transform: `scale(${scale}) rotateX(${tilt}deg) translateY(${translateY}px)`,
            transformOrigin: 'center center',
            position: 'relative',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.7), 0 0 50px rgba(26, 217, 209, 0.2)',
          }}
        >
          <BrowserMockup
            url="https://flowguard-ai-smoky.vercel.app/"
            title="FlowGuard AI — Architectural Concurrency & Invariant Verification"
          >
            <Img
              src={staticFile('flowguard/homepage-desktop.webp')}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
              }}
            />
          </BrowserMockup>

          {/* Floating Pill Badge 1 */}
          <div
            style={{
              position: 'absolute',
              top: 70,
              right: -30,
              background: 'rgba(7, 18, 29, 0.92)',
              backdropFilter: 'blur(16px)',
              border: `1px solid ${THEME.colors.cyan}`,
              boxShadow: THEME.shadows.glowCyan,
              borderRadius: 12,
              padding: '12px 20px',
              opacity: badge1Progress,
              transform: `translateX(${interpolate(badge1Progress, [0, 1], [40, 0])}px)`,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: THEME.colors.cyan,
              }}
            />
            <span style={{ fontSize: 16, fontWeight: 700, color: THEME.colors.ice }}>
              Formal Requirement Invariants
            </span>
          </div>

          {/* Floating Pill Badge 2 */}
          <div
            style={{
              position: 'absolute',
              bottom: 120,
              left: -30,
              background: 'rgba(7, 18, 29, 0.92)',
              backdropFilter: 'blur(16px)',
              border: `1px solid ${THEME.colors.warning}`,
              boxShadow: THEME.shadows.panel,
              borderRadius: 12,
              padding: '12px 20px',
              opacity: badge2Progress,
              transform: `translateX(${interpolate(badge2Progress, [0, 1], [-40, 0])}px)`,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: THEME.colors.warning,
              }}
            />
            <span style={{ fontSize: 16, fontWeight: 700, color: THEME.colors.ice }}>
              POTENTIAL vs VERIFIED Scope Guard
            </span>
          </div>

          {/* Floating Pill Badge 3 */}
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              right: -20,
              background: 'rgba(7, 18, 29, 0.92)',
              backdropFilter: 'blur(16px)',
              border: `1px solid ${THEME.colors.pass}`,
              boxShadow: THEME.shadows.glowPass,
              borderRadius: 12,
              padding: '12px 20px',
              opacity: badge3Progress,
              transform: `translateY(${interpolate(badge3Progress, [0, 1], [30, 0])}px)`,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: THEME.colors.pass,
              }}
            />
            <span style={{ fontSize: 16, fontWeight: 700, color: THEME.colors.ice }}>
              Controlled Concurrency Verification Lab
            </span>
          </div>
        </div>
      </div>

      {/* Footer and Subtitles */}
      <Subtitles text={sceneMeta.subtitle} />
      <AttributionFooter
        label={sceneMeta.citationLabel || ''}
        sourceUrl="https://flowguard-ai-smoky.vercel.app/"
        disclaimer="Real production homepage screenshot · Vercel live deployment"
      />
    </AbsoluteFill>
  );
};
