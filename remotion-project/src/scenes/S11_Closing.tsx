import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { THEME } from '../constants/theme';
import { BrandClosing } from '../components/BrandClosing';
import { AttributionFooter } from '../components/AttributionFooter';
import { Subtitles } from '../components/Subtitles';
import { SCENES } from '../constants/manifest';

export const S11_Closing: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sceneMeta = SCENES[10]; // S11 (duration 210 frames)

  // Gentle zoom out for calm ending
  const scale = interpolate(frame, [0, 210], [0.95, 1.0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const entrance = spring({
    frame: frame - 10,
    fps,
    config: { damping: 200, mass: 1 },
  });

  const opacity = interpolate(entrance, [0, 1], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME.colors.midnight,
        overflow: 'hidden',
      }}
    >
      {/* Background Ambience */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 1400,
          height: 700,
          background: 'radial-gradient(circle, rgba(26, 217, 209, 0.18) 0%, rgba(7, 18, 29, 0) 70%)',
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
          opacity: 0.6,
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
        <BrandClosing opacity={opacity} scale={scale} />
      </div>

      <Subtitles text={sceneMeta.subtitle} />
      <AttributionFooter
        label="FlowGuard AI · Hackathon Season 4 Candidate"
        sourceUrl="https://flowguard-ai-smoky.vercel.app/"
        disclaimer="Live demo accessible without login · Repository publicly available on GitHub"
      />
    </AbsoluteFill>
  );
};
