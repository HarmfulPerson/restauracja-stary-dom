export function WaveDivider({ fill = 'var(--bg-surface)', flip = false }: { fill?: string; flip?: boolean }) {
  return (
    <div className={`divider${flip ? ' divider--bottom' : ' divider--top'}`} aria-hidden="true">
      <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={flip ? { transform: 'rotate(180deg)' } : undefined}>
        <path d="M0,32 C360,0 720,48 1080,16 C1260,4 1380,24 1440,32 L1440,48 L0,48 Z" fill={fill} />
      </svg>
    </div>
  );
}

export function Separator() {
  return (
    <div className="separator" aria-hidden="true">
      <div className="separator__line" />
      <div className="separator__dot" />
      <div className="separator__line" />
    </div>
  );
}
