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

export const S03_UberEatsReport: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sceneMeta = SCENES[2]; // S03 (duration 510 frames)

  const scale = interpolate(frame, [0, 510], [0.96, 1.02], {
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
            platform="Reddit · r/UberEATS"
            date="April 2026"
            authorOrRef="Customer Discussion · Post ID: 1sn6soa"
            title="Temporarily Unavailable Funds: Authorization Hold vs Settled Charge"
            highlightLeft={{
              label: 'Banking Ledger Status',
              value: 'PENDING HOLD',
              subtext: 'Authorization hold (funds reserved)',
              color: THEME.colors.warning,
            }}
            highlightRight={{
              label: 'Settled Settlement',
              value: 'NOT SETTLED',
              subtext: 'Pending hold ≠ Double charge',
              color: THEME.colors.cyan,
            }}
            storyBody="An Uber Eats customer described unexpected funds deducted that they could not immediately use. Community analysis suggested a temporary pending authorization hold rather than a confirmed duplicate settled capture. The friction and confusion for the customer were nevertheless real."
            uncertaintyBanner="Illustrative customer discussion · Temporary authorization hold ≠ Proven double settled charge"
          />
        </div>
      </div>

      <Subtitles text={sceneMeta.subtitle} />
      <AttributionFooter
        label={sceneMeta.citationLabel || ''}
        sourceUrl={sceneMeta.sourceUrls[0]}
        disclaimer="Reported during project research; not investigated or resolved by FlowGuard."
      />
    </AbsoluteFill>
  );
};
