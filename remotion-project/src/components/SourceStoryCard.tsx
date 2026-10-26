import React from 'react';
import { THEME } from '../constants/theme';

interface SourceStoryCardProps {
  platform: string;
  date: string;
  authorOrRef: string;
  title: string;
  highlightLeft: {
    label: string;
    value: string;
    subtext?: string;
    color?: string;
  };
  highlightRight: {
    label: string;
    value: string;
    subtext?: string;
    color?: string;
  };
  storyBody: string;
  uncertaintyBanner: string;
  style?: React.CSSProperties;
}

export const SourceStoryCard: React.FC<SourceStoryCardProps> = ({
  platform,
  date,
  authorOrRef,
  title,
  highlightLeft,
  highlightRight,
  storyBody,
  uncertaintyBanner,
  style,
}) => {
  return (
    <div
      style={{
        width: 1260,
        background: 'rgba(16, 37, 57, 0.75)',
        backdropFilter: 'blur(24px)',
        borderRadius: 20,
        border: `1px solid ${THEME.colors.panelBorder}`,
        boxShadow: THEME.shadows.panel,
        padding: '36px 44px',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        ...style,
      }}
    >
      {/* Header with Source Badge & Date */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 18,
          borderBottom: `1px solid ${THEME.colors.panelBorderMuted}`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span
            style={{
              padding: '6px 14px',
              borderRadius: 6,
              background: 'rgba(26, 217, 209, 0.15)',
              border: `1px solid ${THEME.colors.cyan}`,
              color: THEME.colors.cyan,
              ...THEME.typography.badge,
            }}
          >
            {platform}
          </span>
          <span style={{ ...THEME.typography.sourceCitation, color: THEME.colors.ice }}>
            {authorOrRef}
          </span>
        </div>
        <span style={THEME.typography.sourceCitation}>{date}</span>
      </div>

      {/* Main Title / Report Heading */}
      <h2
        style={{
          ...THEME.typography.cardHeading,
          margin: 0,
          lineHeight: 1.3,
        }}
      >
        {title}
      </h2>

      {/* Highlight Ledger Comparison Blocks */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {/* Left Condition Block */}
        <div
          style={{
            background: 'rgba(7, 18, 29, 0.7)',
            padding: '20px 24px',
            borderRadius: 14,
            border: `1px solid ${highlightLeft.color ? `${highlightLeft.color}40` : THEME.colors.panelBorderMuted}`,
          }}
        >
          <div style={{ fontSize: 16, color: THEME.colors.muted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>
            {highlightLeft.label}
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 800,
              color: highlightLeft.color || THEME.colors.ice,
              letterSpacing: '-0.02em',
            }}
          >
            {highlightLeft.value}
          </div>
          {highlightLeft.subtext && (
            <div style={{ fontSize: 16, color: THEME.colors.muted, marginTop: 4 }}>
              {highlightLeft.subtext}
            </div>
          )}
        </div>

        {/* Right Condition Block */}
        <div
          style={{
            background: 'rgba(7, 18, 29, 0.7)',
            padding: '20px 24px',
            borderRadius: 14,
            border: `1px solid ${highlightRight.color ? `${highlightRight.color}40` : THEME.colors.panelBorderMuted}`,
          }}
        >
          <div style={{ fontSize: 16, color: THEME.colors.muted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>
            {highlightRight.label}
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 800,
              color: highlightRight.color || THEME.colors.ice,
              letterSpacing: '-0.02em',
            }}
          >
            {highlightRight.value}
          </div>
          {highlightRight.subtext && (
            <div style={{ fontSize: 16, color: THEME.colors.muted, marginTop: 4 }}>
              {highlightRight.subtext}
            </div>
          )}
        </div>
      </div>

      {/* Narrative Body */}
      <p
        style={{
          ...THEME.typography.bodyText,
          fontSize: 22,
          lineHeight: 1.5,
          color: '#CBD5E1',
          margin: 0,
        }}
      >
        {storyBody}
      </p>

      {/* Uncertainty Disclaimer Banner */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '12px 18px',
          background: 'rgba(245, 158, 11, 0.1)',
          border: `1px solid rgba(245, 158, 11, 0.35)`,
          borderRadius: 10,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={THEME.colors.warning} strokeWidth="2.5">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <span
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: '#FDE68A',
            letterSpacing: '0.01em',
          }}
        >
          {uncertaintyBanner}
        </span>
      </div>
    </div>
  );
};
