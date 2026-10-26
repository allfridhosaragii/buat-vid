import React from 'react';
import { THEME } from '../constants/theme';

interface SubtitlesProps {
  text: string;
  opacity?: number;
}

export const Subtitles: React.FC<SubtitlesProps> = ({ text, opacity = 1 }) => {
  if (!text) return null;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 85,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 160px',
        opacity,
        zIndex: 90,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          background: 'rgba(7, 18, 29, 0.88)',
          backdropFilter: 'blur(16px)',
          border: `1px solid rgba(26, 217, 209, 0.25)`,
          borderRadius: 14,
          padding: '10px 28px',
          maxWidth: 1400,
          textAlign: 'center',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6)',
        }}
      >
        <span
          style={{
            ...THEME.typography.bodyText,
            fontSize: 21,
            lineHeight: 1.4,
            fontWeight: 500,
            color: '#FFFFFF',
            textShadow: '0 2px 4px rgba(0,0,0,0.8)',
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};
