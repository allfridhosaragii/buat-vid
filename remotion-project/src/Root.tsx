import React from 'react';
import { Composition } from 'remotion';
import { FlowGuardDemo } from './FlowGuardDemo';
import { TOTAL_FRAMES, FPS, WIDTH, HEIGHT, SCENES } from './constants/manifest';

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

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Master 3m30s Composition (6,300 frames) */}
      <Composition
        id="FlowGuardDemo"
        component={FlowGuardDemo}
        durationInFrames={TOTAL_FRAMES}
        fps={60}
        width={WIDTH}
        height={HEIGHT}
      />

      {/* Individual Scene Previews */}
      <Composition id="S01-Preview" component={S01_Hook} durationInFrames={SCENES[0].durationInFrames} fps={FPS} width={WIDTH} height={HEIGHT} />
      <Composition id="S02-Preview" component={S02_IndonesianReport} durationInFrames={SCENES[1].durationInFrames} fps={FPS} width={WIDTH} height={HEIGHT} />
      <Composition id="S03-Preview" component={S03_UberEatsReport} durationInFrames={SCENES[2].durationInFrames} fps={FPS} width={WIDTH} height={HEIGHT} />
      <Composition id="S04-Preview" component={S04_MedusaReport} durationInFrames={SCENES[3].durationInFrames} fps={FPS} width={WIDTH} height={HEIGHT} />
      <Composition id="S05-Preview" component={S05_BusinessInvariant} durationInFrames={SCENES[4].durationInFrames} fps={FPS} width={WIDTH} height={HEIGHT} />
      <Composition id="S06-Preview" component={S06_MeetFlowGuard} durationInFrames={SCENES[5].durationInFrames} fps={FPS} width={WIDTH} height={HEIGHT} />
      <Composition id="S07-Preview" component={S07_ThreeStageAnalysis} durationInFrames={SCENES[6].durationInFrames} fps={FPS} width={WIDTH} height={HEIGHT} />
      <Composition id="S08-Preview" component={S08_VerificationLab} durationInFrames={SCENES[7].durationInFrames} fps={FPS} width={WIDTH} height={HEIGHT} />
      <Composition id="S09-Preview" component={S09_TestSpriteEvidence} durationInFrames={SCENES[8].durationInFrames} fps={FPS} width={WIDTH} height={HEIGHT} />
      <Composition id="S10-Preview" component={S10_PostmergeCI} durationInFrames={SCENES[9].durationInFrames} fps={FPS} width={WIDTH} height={HEIGHT} />
      <Composition id="S11-Preview" component={S11_Closing} durationInFrames={SCENES[10].durationInFrames} fps={FPS} width={WIDTH} height={HEIGHT} />
    </>
  );
};
