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
import { ProofScoreboard } from '../components/ProofScoreboard';
import { AttributionFooter } from '../components/AttributionFooter';
import { Subtitles } from '../components/Subtitles';
import { SCENES } from '../constants/manifest';

export const S09_TestSpriteEvidence: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sceneMeta = SCENES[8]; // S09 (duration 690 frames)

  const scale = interpolate(frame, [0, 690], [0.97, 1.01], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const entrance = spring({
    frame: frame - 15,
    fps,
    config: { damping: 200, mass: 1 },
  });

  const opacity = interpolate(entrance, [0, 1], [0, 1]);
  const translateY = interpolate(entrance, [0, 1], [25, 0]);

  // Scoreboard entrance
  const boardProgress = spring({
    frame: frame - 90,
    fps,
    config: { damping: 180 },
  });

  // Animated counter for passing tests (0 to 97)
  const passCount = Math.min(
    97,
    Math.round(
      interpolate(frame, [100, 200], [0, 97], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      })
    )
  );

  // Exit transition
  const exitOpacity = interpolate(frame, [675, 690], [1, 0], {
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
          top: '25%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 1400,
          height: 600,
          background: 'radial-gradient(circle, rgba(54, 198, 139, 0.12) 0%, rgba(7, 18, 29, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: '100%',
          padding: '30px 80px 0',
          zIndex: 10,
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: 12,
            opacity,
            transform: `translateY(${translateY}px)`,
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontFamily: THEME.fonts.mono,
              fontWeight: 700,
              color: THEME.colors.cyan,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 4,
            }}
          >
            Autonomous Vendor Verification
          </div>
          <h1
            style={{
              ...THEME.typography.heroTitle,
              fontSize: 38,
              margin: 0,
            }}
          >
            Official TestSprite V3 Merge Gate Verification
          </h1>
        </div>

        {/* Browser Mockup with Authentic Checks Screenshot */}
        <div
          style={{
            width: 1360,
            height: 380,
            opacity,
            transform: `scale(${scale}) translateY(${translateY}px)`,
            position: 'relative',
            marginBottom: 14,
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(54, 198, 139, 0.2)',
          }}
        >
          <BrowserMockup
            url="https://github.com/allfridhosaragii/FlowGuard-AI/pull/14"
            title="FlowGuard-AI · PR #14 Required Checks · TestSprite V3 Status"
          >
            <Img
              src={staticFile('flowguard/github-pr14-checks.webp')}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
              }}
            />
          </BrowserMockup>

          {/* Historical Run Caption Notice */}
          <div
            style={{
              position: 'absolute',
              bottom: 10,
              left: 16,
              background: 'rgba(7, 18, 29, 0.92)',
              borderRadius: 6,
              padding: '4px 10px',
              border: `1px solid ${THEME.colors.panelBorderMuted}`,
              fontSize: 12,
              color: THEME.colors.muted,
            }}
          >
            Note: Background screenshot shows GitHub PR #14 check status; scoreboard below reflects official final run on PR head.
          </div>
        </div>

        {/* Animated Proof Scoreboard */}
        <div
          style={{
            width: 1360,
            opacity: boardProgress,
            transform: `translateY(${interpolate(boardProgress, [0, 1], [25, 0])}px)`,
          }}
        >
          <ProofScoreboard
            suiteTitle="Official TestSprite V3 Suite"
            suiteSubtitle="Automated PR Quality Gate · Season 4 Hackathon Runner"
            prSha="0f575c33d3d424843885eac73b46f2ff4b832d0e (PR #14 Final Head)"
            metrics={[
              { label: 'Passed Tests', count: passCount, total: 97, status: 'passed' },
              { label: 'Failed Tests', count: 0, status: 'passed' },
              { label: 'Blocked Tests', count: 0, status: 'passed' },
              { label: 'Coverage Rate', count: '100%', status: 'info' },
            ]}
            footerNote="Official final vendor report verified on PR #14 final commit before merge into main."
          />
        </div>
      </div>

      <Subtitles text={sceneMeta.subtitle} />
      <AttributionFooter
        label={sceneMeta.citationLabel || ''}
        sourceUrl={sceneMeta.sourceUrls[0]}
        disclaimer="Official TestSprite V3 vendor check executed on final PR head 0f575c3."
      />
    </AbsoluteFill>
  );
};
