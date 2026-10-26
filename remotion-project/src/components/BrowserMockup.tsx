import React from 'react';
import { THEME } from '../constants/theme';

interface BrowserMockupProps {
  url?: string;
  title?: string;
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
}

export const BrowserMockup: React.FC<BrowserMockupProps> = ({
  url = 'https://flowguard-ai-smoky.vercel.app/',
  title = 'FlowGuard AI — Architectural Concurrency & Invariant Verification',
  children,
  width = '100%',
  height = '100%',
  style,
}) => {
  return (
    <div
      style={{
        width,
        height,
        background: THEME.colors.darkPanel,
        borderRadius: 16,
        border: `1px solid ${THEME.colors.panelBorder}`,
        boxShadow: THEME.shadows.panel,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Browser Title Bar */}
      <div
        style={{
          height: 48,
          background: 'rgba(7, 18, 29, 0.95)',
          borderBottom: `1px solid rgba(26, 217, 209, 0.15)`,
          display: 'flex',
          alignItems: 'center',
          padding: '0 18px',
          gap: 16,
          flexShrink: 0,
        }}
      >
        {/* Traffic Light Dots */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: '#FF5F56',
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: '#FFBD2E',
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: '#27C93F',
            }}
          />
        </div>

        {/* URL Pill */}
        <div
          style={{
            flex: 1,
            maxWidth: 620,
            margin: '0 auto',
            height: 30,
            background: 'rgba(16, 37, 57, 0.8)',
            border: '1px solid rgba(136, 169, 182, 0.2)',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            padding: '0 14px',
            gap: 10,
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke={THEME.colors.cyan}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span
            style={{
              fontFamily: THEME.fonts.mono,
              fontSize: 13,
              color: THEME.colors.ice,
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {url}
          </span>
        </div>

        {/* Status / Title on Right */}
        <span
          style={{
            fontSize: 13,
            color: THEME.colors.muted,
            fontWeight: 500,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: 320,
          }}
        >
          {title}
        </span>
      </div>

      {/* Browser Viewport Content */}
      <div
        style={{
          flex: 1,
          position: 'relative',
          overflow: 'hidden',
          background: THEME.colors.midnight,
        }}
      >
        {children}
      </div>
    </div>
  );
};
