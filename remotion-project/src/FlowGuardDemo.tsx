import React from 'react';
import { AbsoluteFill, Sequence, Audio, staticFile } from 'remotion';
import { SCENES } from './constants/manifest';
import { THEME } from './constants/theme';

// Import all 11 Scenes
import { S01_Hook } from './scenes/S01_Hook';
import { S02_IndonesianReport } from './scenes/S02_IndonesianReport';
import { S03_UberEatsReport } from './scenes/S03_UberEatsReport';
import { S04_MedusaReport } from './scenes/S04_MedusaReport';
import { S05_BusinessInvariant } from './scenes/S05_BusinessInvariant';
import { S06_MeetFlowGuard } from './scenes/S06_MeetFlowGuard';
import { S07_ThreeStageAnalysis } from './scenes/S07_ThreeStageAnalysis';
import { S08_VerificationLab } from './scenes/S08_VerificationLab';
import { S09_TestSpriteEvidence } from './scenes/S09_TestSpriteEvidence';
import { S10_PostmergeCI } from './scenes/S10_PostmergeCI';
import { S11_Closing } from './scenes/S11_Closing';

export const FlowGuardDemo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: THEME.colors.midnight }}>
      {/* Background Ambient Bed (Clean programatic synth, ducked under speech) */}
      <Audio
        src={staticFile('audio/ambient_bed.wav')}
        volume={(f) => {
          // Fade in over first 60 frames (2s), fade out over last 90 frames (3s)
          const fadeIn = Math.min(1, f / 60);
          const fadeOut = Math.min(1, (6300 - f) / 90);
          return 0.12 * Math.max(0, fadeIn * fadeOut);
        }}
      />

      {/* S01: Hook [0, 360) · 12.0s */}
      <Sequence from={SCENES[0].from} durationInFrames={SCENES[0].durationInFrames} name="S01 - Hook">
        <S01_Hook />
        <Sequence from={10}>
          <Audio src={staticFile('audio/S01.wav')} volume={0.95} />
        </Sequence>
      </Sequence>

      {/* S02: Indonesian QRIS report [360, 990) · 21.0s */}
      <Sequence from={SCENES[1].from} durationInFrames={SCENES[1].durationInFrames} name="S02 - Indonesian QRIS">
        <S02_IndonesianReport />
        <Sequence from={12}>
          <Audio src={staticFile('audio/S02.wav')} volume={0.95} />
        </Sequence>
      </Sequence>

      {/* S03: Uber Eats pending hold report [990, 1500) · 17.0s */}
      <Sequence from={SCENES[2].from} durationInFrames={SCENES[2].durationInFrames} name="S03 - Uber Eats Report">
        <S03_UberEatsReport />
        <Sequence from={12}>
          <Audio src={staticFile('audio/S03.wav')} volume={0.95} />
        </Sequence>
      </Sequence>

      {/* S04: Medusa developer bug report [1500, 2100) · 20.0s */}
      <Sequence from={SCENES[3].from} durationInFrames={SCENES[3].durationInFrames} name="S04 - Medusa Issue">
        <S04_MedusaReport />
        <Sequence from={12}>
          <Audio src={staticFile('audio/S04.wav')} volume={0.95} />
        </Sequence>
      </Sequence>

      {/* S05: Business invariant [2100, 2580) · 16.0s */}
      <Sequence from={SCENES[4].from} durationInFrames={SCENES[4].durationInFrames} name="S05 - Business Invariant">
        <S05_BusinessInvariant />
        <Sequence from={12}>
          <Audio src={staticFile('audio/S05.wav')} volume={0.95} />
        </Sequence>
      </Sequence>

      {/* S06: Meet FlowGuard AI [2580, 3090) · 17.0s */}
      <Sequence from={SCENES[5].from} durationInFrames={SCENES[5].durationInFrames} name="S06 - Meet FlowGuard">
        <S06_MeetFlowGuard />
        <Sequence from={12}>
          <Audio src={staticFile('audio/S06.wav')} volume={0.95} />
        </Sequence>
      </Sequence>

      {/* S07: Three-stage analysis [3090, 3990) · 30.0s */}
      <Sequence from={SCENES[6].from} durationInFrames={SCENES[6].durationInFrames} name="S07 - Analysis Pipeline">
        <S07_ThreeStageAnalysis />
        <Sequence from={12}>
          <Audio src={staticFile('audio/S07.wav')} volume={0.95} />
        </Sequence>
      </Sequence>

      {/* S08: Controlled verification lab [3990, 5070) · 36.0s */}
      <Sequence from={SCENES[7].from} durationInFrames={SCENES[7].durationInFrames} name="S08 - Verification Lab">
        <S08_VerificationLab />
        <Sequence from={12}>
          <Audio src={staticFile('audio/S08.wav')} volume={0.95} />
        </Sequence>
      </Sequence>

      {/* S09: Final TestSprite evidence [5070, 5760) · 23.0s */}
      <Sequence from={SCENES[8].from} durationInFrames={SCENES[8].durationInFrames} name="S09 - TestSprite Evidence">
        <S09_TestSpriteEvidence />
        <Sequence from={12}>
          <Audio src={staticFile('audio/S09.wav')} volume={0.95} />
        </Sequence>
      </Sequence>

      {/* S10: Postmerge CI [5760, 6090) · 11.0s */}
      <Sequence from={SCENES[9].from} durationInFrames={SCENES[9].durationInFrames} name="S10 - Postmerge CI">
        <S10_PostmergeCI />
        <Sequence from={10}>
          <Audio src={staticFile('audio/S10.wav')} volume={0.95} />
        </Sequence>
      </Sequence>

      {/* S11: Closing [6090, 6300) · 7.0s */}
      <Sequence from={SCENES[10].from} durationInFrames={SCENES[10].durationInFrames} name="S11 - Closing">
        <S11_Closing />
        <Sequence from={10}>
          <Audio src={staticFile('audio/S11.wav')} volume={0.95} />
        </Sequence>
      </Sequence>
    </AbsoluteFill>
  );
};
