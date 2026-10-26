import React from 'react';
import { THEME } from '../constants/theme';

interface RiskPipelineProps {
  activeNode?: number; // 0, 1, 2
  style?: React.CSSProperties;
}

export const RiskPipeline: React.FC<RiskPipelineProps> = ({
  activeNode = 1,
  style,
}) => {
  const nodes = [
    {
      id: 'A',
      name: 'Requirement Analyst',
      action: 'Extracts Machine Invariants',
      tag: 'Deterministic Invariants',
      color: THEME.colors.cyan,
      output: 'INV-PAYMENT-001 (Atomic Lock)',
    },
    {
      id: 'B',
      name: 'Risk Hunter',
      action: 'Identifies Concurrency Gaps',
      tag: 'POTENTIAL RISK ONLY',
      color: THEME.colors.warning,
      output: 'Unsynchronized async window detected',
    },
    {
      id: 'C',
      name: 'Verification Planner',
      action: 'Synthesizes Test Harness',
      tag: 'Reproducible Spec',
      color: '#A78BFA', // Purple/Violet
      output: 'Assert concurrent requests == 1 side effect',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        background: 'rgba(7, 18, 29, 0.92)',
        backdropFilter: 'blur(20px)',
        borderRadius: 18,
        border: `1px solid ${THEME.colors.panelBorder}`,
        padding: '24px 32px',
        boxShadow: THEME.shadows.panel,
        ...style,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 18, fontWeight: 700, color: THEME.colors.ice, letterSpacing: '0.05em' }}>
          FLOWGUARD MULTI-AGENT REASONING PIPELINE
        </span>
        <div
          style={{
            padding: '4px 12px',
            borderRadius: 6,
            background: 'rgba(245, 158, 11, 0.15)',
            border: `1px solid ${THEME.colors.warning}`,
            color: '#FDE68A',
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.05em',
          }}
        >
          EXTERNAL FINDINGS: POTENTIAL (NOT EXECUTED CODE)
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, position: 'relative' }}>
        {nodes.map((node, i) => {
          const isActive = i <= activeNode;
          return (
            <div
              key={node.id}
              style={{
                background: isActive ? 'rgba(16, 37, 57, 0.9)' : 'rgba(16, 37, 57, 0.4)',
                borderRadius: 12,
                border: `1px solid ${isActive ? node.color : THEME.colors.panelBorderMuted}`,
                padding: '16px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                transition: 'all 0.3s ease',
                boxShadow: isActive ? `0 0 25px ${node.color}30` : 'none',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    padding: '2px 8px',
                    borderRadius: 4,
                    background: `${node.color}25`,
                    color: node.color,
                  }}
                >
                  STAGE {i + 1}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: node.color,
                    letterSpacing: '0.04em',
                  }}
                >
                  {node.tag}
                </span>
              </div>

              <div style={{ fontSize: 20, fontWeight: 700, color: THEME.colors.ice }}>
                {node.name}
              </div>

              <div style={{ fontSize: 14, color: THEME.colors.muted }}>
                {node.action}
              </div>

              <div
                style={{
                  marginTop: 6,
                  padding: '8px 12px',
                  borderRadius: 6,
                  background: 'rgba(7, 18, 29, 0.8)',
                  border: `1px solid ${THEME.colors.panelBorderMuted}`,
                  fontFamily: THEME.fonts.mono,
                  fontSize: 13,
                  color: isActive ? THEME.colors.ice : THEME.colors.muted,
                }}
              >
                {node.output}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
