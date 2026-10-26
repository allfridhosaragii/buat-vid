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

export const S10_PostmergeCI: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sceneMeta = SCENES[9]; // S10 (duration 330 frames)

  const scale = interpolate(frame, [0, 330], [0.97, 1.01], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const entrance = spring({
    frame: frame - 10,
    fps,
    config: { damping: 200, mass: 1 },
  });

  const opacity = interpolate(entrance, [0, 1], [0, 1]);
  const translateY = interpolate(entrance, [0, 1], [25, 0]);

  // Animated counters
  const vitestCount = Math.min(
    118,
    Math.round(
      interpolate(frame, [30, 120], [0, 118], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      })
    )
  );

  const playwrightCount = Math.min(
    70,
    Math.round(
      interpolate(frame, [50, 140], [0, 70], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      })
    )
  );

  // Exit transition
  const exitOpacity = interpolate(frame, [315, 330], [1, 0], {
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
            Independent Post-Merge Verification
          </div>
          <h1
            style={{
              ...THEME.typography.heroTitle,
              fontSize: 38,
              margin: 0,
            }}
          >
            Continuous Integration on Main Branch
          </h1>
        </div>

        {/* Browser Mockup with Authentic GitHub Actions Screenshot */}
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
            url="https://github.com/allfridhosaragii/FlowGuard-AI/actions/runs/40273469302"
            title="GitHub Actions · Run #40273469302 · branch: main"
          >
            <Img
              src={staticFile('flowguard/github-regression-actions.webp')}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
              }}
            />
          </BrowserMockup>
        </div>

        {/* Scoreboard for Vitest + Playwright Chromium */}
        <div style={{ width: 1360, opacity }}>
          <ProofScoreboard
            suiteTitle="Regression & End-to-End Suite"
            suiteSubtitle="Automated GitHub Actions Pipeline · commit dd00c0b"
            prSha="dd00c0b0a64712da5137c454927ef9c50cebd8be (main)"
            metrics={[
              { label: 'Vitest Unit & Integration', count: vitestCount, total: 118, status: 'passed' },
              { label: 'Playwright Chromium E2E', count: playwrightCount, total: 70, status: 'passed' },
              { label: 'Pass Rate', count: '100%', status: 'info' },
            ]}
            footerNote="Verified post-merge run on Chromium desktop & mobile viewports. No unconfirmed browser engines claimed."
          />
        </div>
      </div>

      <Subtitles text={sceneMeta.subtitle} />
      <AttributionFooter
        label={sceneMeta.citationLabel || ''}
        sourceUrl={sceneMeta.sourceUrls[0]}
        disclaimer="Post-merge automated test pipeline verified on main."
      />
    </AbsoluteFill>
  );
};
