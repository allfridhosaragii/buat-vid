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

export const S02_IndonesianReport: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sceneMeta = SCENES[1]; // S02 (duration 630 frames)

  // Camera slow cinematic push
  const scale = interpolate(frame, [0, 630], [0.96, 1.02], {
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

  // Balance countdown animation
  const balanceCount = Math.round(
    interpolate(frame, [80, 220], [150000, 100000], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })
  );

  // Exit transition (last 15 frames)
  const exitOpacity = interpolate(frame, [615, 630], [1, 0], {
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
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 1200,
          height: 600,
          background: 'radial-gradient(circle, rgba(26, 217, 209, 0.09) 0%, rgba(7, 18, 29, 0) 70%)',
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
          paddingBottom: 60,
          zIndex: 10,
        }}
      >
        <div
          style={{
            transform: `scale(${scale}) translateY(${translateY}px)`,
            opacity,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <SourceStoryCard
            platform="Reddit · r/indotech"
            date="November 2025"
            authorOrRef="Public Consumer Report · Post ID: 1osvnyi"
            title="QRIS-Funded App Purchase: Balance Debited, Purchase Cancelled"
            highlightLeft={{
              label: 'Bank Account Balance',
              value: `Rp ${balanceCount.toLocaleString('id-ID')}`,
              subtext: 'Saldo terpotong (-Rp 50.000)',
              color: THEME.colors.failure,
            }}
            highlightRight={{
              label: 'Merchant / Google Play Status',
              value: 'CANCELLED',
              subtext: 'Transaksi gagal / Item tidak diterima',
              color: THEME.colors.warning,
            }}
            storyBody="An Indonesian user reported purchasing an in-app item using QRIS. Mobile banking debited the balance immediately, but the store registered the transaction as cancelled and never fulfilled the purchase. The report reflects customer experience—not an independently confirmed software defect."
            uncertaintyBanner="Public user report · Technical root cause unverified · Illustrative incident"
          />
        </div>
      </div>

      <Subtitles text={sceneMeta.subtitle} />
      <AttributionFooter
        label={sceneMeta.citationLabel || ''}
        sourceUrl={sceneMeta.sourceUrls[0]}
        disclaimer="FlowGuard AI did not investigate or fix this third-party report."
      />
    </AbsoluteFill>
  );
};
