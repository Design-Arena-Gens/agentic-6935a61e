type IconProps = React.SVGProps<SVGSVGElement>;

export const WaveformIcon = (props: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" {...props}>
    <path
      d="M6 24h3m3 0h3m3 0h3m3 0h3m3 0h3m3 0h3M12 24v-8m6 8v12m6-12V8m6 16v10m6-10V18"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SparkIcon = (props: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" {...props}>
    <path
      d="M24 6v9m0 18v9m12-21h9m-30 0H6m26.5-7.5L39 9m-30 30 6.5-6.5M9 9l6.5 6.5M39 39l-6.5-6.5"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MeshIcon = (props: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" {...props}>
    <path
      d="M12 9 4 24l8 15 8-15L12 9Zm24 0-8 15 8 15 8-15-8-15Zm-12 6 8 15h-16l8-15Z"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Icon = ({
  name,
  className
}: {
  name: "waveform" | "spark" | "mesh";
  className?: string;
}) => {
  const props = { className };
  switch (name) {
    case "waveform":
      return <WaveformIcon {...props} />;
    case "spark":
      return <SparkIcon {...props} />;
    case "mesh":
    default:
      return <MeshIcon {...props} />;
  }
};
