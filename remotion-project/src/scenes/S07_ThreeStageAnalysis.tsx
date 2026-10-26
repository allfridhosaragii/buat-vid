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
import { RiskPipeline } from '../components/RiskPipeline';
import { AttributionFooter } from '../components/AttributionFooter';
import { Subtitles } from '../components/Subtitles';
import { SCENES } from '../constants/manifest';

export const S07_ThreeStageAnalysis: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sceneMeta = SCENES[6]; // S07 (duration 900 frames)

  const scale = interpolate(frame, [0, 900], [0.97, 1.01], {
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

  // Clean discrete stage switch at frame 420 (0-420: input workspace, 420-900: results)
  const isResultsStage = frame >= 420;

  // Active node in RiskPipeline: 0: Requirement Analyst, 1: Risk Hunter, 2: Verification Planner
  const activeNode = frame < 300 ? 0 : frame < 600 ? 1 : 2;

  // Exit transition
  const exitOpacity = interpolate(frame, [885, 900], [1, 0], {
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
          background: 'radial-gradient(circle, rgba(26, 217, 209, 0.12) 0%, rgba(7, 18, 29, 0) 70%)',
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
          padding: '35px 80px 0',
          zIndex: 10,
        }}
      >
        {/* Title Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: 14,
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
            Multi-Agent Reasoning Pipeline
          </div>
          <h1
            style={{
              ...THEME.typography.heroTitle,
              fontSize: 40,
              margin: 0,
            }}
          >
            Analyzing Code Changes & PR Diff Invariants
          </h1>
        </div>

        {/* Browser Mockup Area */}
        <div
          style={{
            width: 1360,
            height: 380,
            opacity,
            transform: `scale(${scale}) translateY(${translateY}px)`,
            position: 'relative',
            marginBottom: 16,
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7)',
          }}
        >
          <BrowserMockup
            url={
              isResultsStage
                ? 'https://flowguard-ai-smoky.vercel.app/analyze#results'
                : 'https://flowguard-ai-smoky.vercel.app/analyze'
            }
            title="FlowGuard AI — Pull Request & Code Snippet Analysis"
          >
            <Img
              src={
                isResultsStage
                  ? staticFile('flowguard/analysis-risk-results.webp')
                  : staticFile('flowguard/analysis-workspace.webp')
              }
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
              }}
            />
          </BrowserMockup>

          {/* Truth In Advertising Badge */}
          <div
            style={{
              position: 'absolute',
              top: 56,
              right: 16,
              background: 'rgba(7, 18, 29, 0.95)',
              border: `2px solid ${THEME.colors.warning}`,
              borderRadius: 10,
              padding: '8px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
            }}
          >
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: '50%',
                background: THEME.colors.warning,
                boxShadow: `0 0 10px ${THEME.colors.warning}`,
              }}
            />
            <span style={{ fontSize: 13, fontWeight: 800, color: '#FDE68A', letterSpacing: '0.04em' }}>
              POTENTIAL RISK · STATIC REASONING (NOT EXECUTED CODE)
            </span>
          </div>
        </div>

        {/* 3-Stage Multi-Agent Interactive Pipeline Component */}
        <div style={{ width: 1360, opacity }}>
          <RiskPipeline activeNode={activeNode} />
        </div>
      </div>

      <Subtitles text={sceneMeta.subtitle} />
      <AttributionFooter
        label={sceneMeta.citationLabel || ''}
        sourceUrl="https://github.com/allfridhosaragii/FlowGuard-AI"
        disclaimer="Static PR reasoning identifies hypotheses; does not execute third-party GitHub code."
      />
    </AbsoluteFill>
  );
};
