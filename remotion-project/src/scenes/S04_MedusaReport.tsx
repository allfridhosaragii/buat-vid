import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { THEME } from '../constants/theme';
import { SourceStoryCard } from '../components/SourceStoryCard';
import { AttributionFooter } from '../components/AttributionFooter';
import { Subtitles } from '../components/Subtitles';
import { SCENES } from '../constants/manifest';

export const S04_MedusaReport: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sceneMeta = SCENES[3]; // S04 (duration 600 frames)

  const scale = interpolate(frame, [0, 600], [0.96, 1.02], {
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

  // Exit transition
  const exitOpacity = interpolate(frame, [585, 600], [1, 0], {
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
          width: 1200,
          height: 600,
          background: 'radial-gradient(circle, rgba(26, 217, 209, 0.09) 0%, rgba(7, 18, 29, 0) 70%)',
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
        <div
          style={{
            transform: `scale(${scale}) translateY(${translateY}px)`,
            opacity,
          }}
        >
          <SourceStoryCard
            platform="GitHub · medusajs/medusa"
            date="September 2026"
            authorOrRef="Public Open Source Issue #16681"
            title="Refund Retry Mechanism: Divergent Idempotency Keys on Provider Error"
            highlightLeft={{
              label: 'Initial Refund Attempt',
              value: 'KEY-A (Timeout)',
              subtext: 'Payment provider executed, response lost',
              color: THEME.colors.warning,
            }}
            highlightRight={{
              label: 'Automatic Retry Call',
              value: 'KEY-B (New Key)',
              subtext: 'Fresh idempotency token sent to provider',
              color: THEME.colors.failure,
            }}
            storyBody="An open-source developer report noted that retrying a refund following a gateway timeout generated an entirely new idempotency key. If the first refund had actually succeeded remotely before the timeout occurred, sending Key B creates a conditional risk of double payout."
            uncertaintyBanner="Public GitHub issue · Conditional duplicate refund risk · Medusa does not endorse FlowGuard"
          />
        </div>
      </div>

      <Subtitles text={sceneMeta.subtitle} />
      <AttributionFooter
        label={sceneMeta.citationLabel || ''}
        sourceUrl={sceneMeta.sourceUrls[0]}
        disclaimer="Issue analyzed for architectural study; no claim that duplicate payout occurred in production."
      />
    </AbsoluteFill>
  );
};
