import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';
import { THEME } from '../constants/theme';
import { Subtitles } from '../components/Subtitles';
import { SCENES } from '../constants/manifest';

export const S01_Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sceneMeta = SCENES[0];

  // Camera subtle push-in
  const cameraScale = interpolate(frame, [0, 360], [0.97, 1.03], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Main Headline Animation
  const titleEntrance = spring({
    frame: frame - 10,
    fps,
    config: { damping: 200, mass: 1 },
  });

  const titleOpacity = interpolate(titleEntrance, [0, 1], [0, 1]);
  const titleY = interpolate(titleEntrance, [0, 1], [25, 0]);

  // Three human impact items appearing smoothly and earlier
  const item1Progress = spring({
    frame: frame - 40,
    fps,
    config: { damping: 180, mass: 0.9 },
  });
  const item2Progress = spring({
    frame: frame - 75,
    fps,
    config: { damping: 180, mass: 0.9 },
  });
  const item3Progress = spring({
    frame: frame - 110,
    fps,
    config: { damping: 180, mass: 0.9 },
  });

  // Bifurcating transaction stream line
  const streamProgress = interpolate(frame, [15, 120], [0, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Exit transition fade out (last 15 frames)
  const exitOpacity = interpolate(frame, [345, 360], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME.colors.midnight,
        overflow: 'hidden',
        transform: `scale(${cameraScale})`,
        opacity: exitOpacity,
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 1000,
          height: 600,
          background: 'radial-gradient(circle, rgba(26, 217, 209, 0.12) 0%, rgba(7, 18, 29, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Decorative Grid Lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(26, 217, 209, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 217, 209, 0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          opacity: 0.7,
        }}
      />

      {/* Main Content Center Container */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          padding: '0 100px',
          paddingBottom: 60,
          zIndex: 10,
        }}
      >
        {/* Subtle Category Badge */}
        <div
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '7px 18px',
            borderRadius: 100,
            background: 'rgba(26, 217, 209, 0.1)',
            border: `1px solid ${THEME.colors.cyan}50`,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: THEME.colors.cyan,
              boxShadow: `0 0 10px ${THEME.colors.cyan}`,
            }}
          />
          <span
            style={{
              fontSize: 14,
              fontFamily: THEME.fonts.mono,
              fontWeight: 700,
              color: THEME.colors.cyan,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Human-First Engineering Reality
          </span>
        </div>

        {/* Central Thesis */}
        <h1
          style={{
            ...THEME.typography.heroTitle,
            fontSize: 58,
            textAlign: 'center',
            maxWidth: 1300,
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            margin: '0 0 32px',
          }}
        >
          Behind every software failure,
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #1AD9D1 0%, #E8FAF9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            there can be a real person.
          </span>
        </h1>

        {/* Conceptual Bifurcation Visualization */}
        <div
          style={{
            width: 1040,
            height: 90,
            position: 'relative',
            marginBottom: 36,
          }}
        >
          <svg width="1040" height="90" viewBox="0 0 1040 90" fill="none">
            {/* Trunk line */}
            <path
              d="M 50 45 L 430 45"
              stroke="rgba(136, 169, 182, 0.4)"
              strokeWidth="3"
              strokeDasharray="6 6"
            />
            {/* Upper Bifurcation branch (Expected Flow) */}
            <path
              d="M 430 45 C 530 45, 580 18, 720 18 L 960 18"
              stroke={THEME.colors.pass}
              strokeWidth="3"
              strokeDasharray="1000"
              strokeDashoffset={interpolate(streamProgress, [0, 1], [1000, 0])}
            />
            {/* Lower Bifurcation branch (Race Condition / Divergent State) */}
            <path
              d="M 430 45 C 530 45, 580 72, 720 72 L 960 72"
              stroke={THEME.colors.failure}
              strokeWidth="3"
              strokeDasharray="1000"
              strokeDashoffset={interpolate(streamProgress, [0, 1], [1000, 0])}
            />
          </svg>

          {/* Left Origin Node */}
          <div
            style={{
              position: 'absolute',
              left: 20,
              top: 28,
              background: 'rgba(16, 37, 57, 0.95)',
              border: `1px solid ${THEME.colors.cyan}`,
              borderRadius: 8,
              padding: '6px 14px',
              fontFamily: THEME.fonts.mono,
              fontSize: 13,
              fontWeight: 600,
              color: THEME.colors.cyan,
            }}
          >
            Single Transaction Request
          </div>

          {/* Top Branch Label */}
          <div
            style={{
              position: 'absolute',
              right: 20,
              top: 2,
              background: 'rgba(7, 18, 29, 0.95)',
              border: `1px solid ${THEME.colors.pass}`,
              borderRadius: 8,
              padding: '5px 14px',
              fontFamily: THEME.fonts.mono,
              fontSize: 13,
              fontWeight: 700,
              color: THEME.colors.pass,
              opacity: streamProgress,
              boxShadow: '0 0 15px rgba(54, 198, 139, 0.2)',
            }}
          >
            Expected: Settled (1 Effect)
          </div>

          {/* Bottom Branch Label */}
          <div
            style={{
              position: 'absolute',
              right: 20,
              bottom: 2,
              background: 'rgba(7, 18, 29, 0.95)',
              border: `1px solid ${THEME.colors.failure}`,
              borderRadius: 8,
              padding: '5px 14px',
              fontFamily: THEME.fonts.mono,
              fontSize: 13,
              fontWeight: 700,
              color: THEME.colors.failure,
              opacity: streamProgress,
              boxShadow: '0 0 15px rgba(246, 110, 114, 0.2)',
            }}
          >
            Concurrency Gap: Divergent State
          </div>
        </div>

        {/* Three Human Impact Items Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            width: '100%',
            maxWidth: 1360,
          }}
        >
          {/* Item 1 */}
          <div
            style={{
              background: 'rgba(16, 37, 57, 0.75)',
              backdropFilter: 'blur(16px)',
              border: `1px solid ${THEME.colors.panelBorder}`,
              borderRadius: 16,
              padding: '24px 28px',
              opacity: item1Progress,
              transform: `translateY(${interpolate(item1Progress, [0, 1], [20, 0])}px)`,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <div style={{ fontSize: 13, color: THEME.colors.cyan, fontFamily: THEME.fonts.mono, fontWeight: 700 }}>
              INCIDENT 01
            </div>
            <div style={{ fontSize: 24, fontWeight: 700, color: THEME.colors.ice }}>
              A delayed purchase.
            </div>
            <div style={{ fontSize: 16, color: THEME.colors.muted, lineHeight: 1.45 }}>
              Funds debited from banking app while digital goods register as cancelled.
            </div>
          </div>

          {/* Item 2 */}
          <div
            style={{
              background: 'rgba(16, 37, 57, 0.75)',
              backdropFilter: 'blur(16px)',
              border: `1px solid ${THEME.colors.panelBorder}`,
              borderRadius: 16,
              padding: '24px 28px',
              opacity: item2Progress,
              transform: `translateY(${interpolate(item2Progress, [0, 1], [20, 0])}px)`,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <div style={{ fontSize: 13, color: THEME.colors.cyan, fontFamily: THEME.fonts.mono, fontWeight: 700 }}>
              INCIDENT 02
            </div>
            <div style={{ fontSize: 24, fontWeight: 700, color: THEME.colors.ice }}>
              Money temporarily held.
            </div>
            <div style={{ fontSize: 16, color: THEME.colors.muted, lineHeight: 1.45 }}>
              Pending authorization holds locking real customer spending power.
            </div>
          </div>

          {/* Item 3 */}
          <div
            style={{
              background: 'rgba(16, 37, 57, 0.75)',
              backdropFilter: 'blur(16px)',
              border: `1px solid ${THEME.colors.panelBorder}`,
              borderRadius: 16,
              padding: '24px 28px',
              opacity: item3Progress,
              transform: `translateY(${interpolate(item3Progress, [0, 1], [20, 0])}px)`,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <div style={{ fontSize: 13, color: THEME.colors.cyan, fontFamily: THEME.fonts.mono, fontWeight: 700 }}>
              INCIDENT 03
            </div>
            <div style={{ fontSize: 24, fontWeight: 700, color: THEME.colors.ice }}>
              Unexpected retry behavior.
            </div>
            <div style={{ fontSize: 16, color: THEME.colors.muted, lineHeight: 1.45 }}>
              Network retry paths generating divergent idempotency keys.
            </div>
          </div>
        </div>
      </div>

      {/* Subtitles */}
      <Subtitles text={sceneMeta.subtitle} />
    </AbsoluteFill>
  );
};
