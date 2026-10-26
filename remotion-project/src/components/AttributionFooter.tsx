import React from 'react';
import { THEME } from '../constants/theme';

interface AttributionFooterProps {
  label: string;
  sourceUrl?: string;
  disclaimer?: string;
  opacity?: number;
}

export const AttributionFooter: React.FC<AttributionFooterProps> = ({
  label,
  sourceUrl,
  disclaimer,
  opacity = 1,
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 30,
        left: THEME.dimensions.safeMarginX,
        right: THEME.dimensions.safeMarginX,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 24px',
        background: 'rgba(10, 24, 38, 0.88)',
        backdropFilter: 'blur(12px)',
        borderRadius: 12,
        border: `1px solid ${THEME.colors.panelBorderMuted}`,
        opacity,
        zIndex: 100,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: THEME.colors.cyan,
            boxShadow: `0 0 10px ${THEME.colors.cyan}`,
          }}
        />
        <span
          style={{
            ...THEME.typography.sourceCitation,
            color: THEME.colors.ice,
            fontWeight: 600,
          }}
        >
          {label}
        </span>
        {disclaimer && (
          <span
            style={{
              ...THEME.typography.sourceCitation,
              fontSize: 16,
              color: THEME.colors.muted,
              paddingLeft: 12,
              borderLeft: `1px solid ${THEME.colors.panelBorderMuted}`,
            }}
          >
            {disclaimer}
          </span>
        )}
      </div>

      {sourceUrl && (
        <span
          style={{
            ...THEME.typography.sourceCitation,
            fontFamily: THEME.fonts.mono,
            fontSize: 15,
            color: THEME.colors.cyan,
            letterSpacing: '0.02em',
          }}
        >
          {sourceUrl.replace('https://', '')}
        </span>
      )}
    </div>
  );
};
