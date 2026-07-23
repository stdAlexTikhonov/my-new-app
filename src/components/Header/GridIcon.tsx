import React from "react";

export interface GridIconProps {
  size?: number;
  colors?: [string, string, string];
  background?: string;
  gap?: number;
  radius?: number;
}

const cell = 28;
const cols = 3;
const rows = 3;

export const GridIcon = ({
  size = 120,
  colors = ["#FFD21F", "#F59E0B", "#F97316"],
  background = "transparent",
  gap = 4,
  radius = 2,
}: GridIconProps) => {
  const [c1, c2, c3] = colors;

  const width = cols * cell + (cols - 1) * gap;
  const height = rows * cell + (rows - 1) * gap;

  const gradientId = React.useId();
  const maskId = React.useId();
  const clipId = React.useId();

  const positions: { x: number; y: number }[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      positions.push({
        x: col * (cell + gap),
        y: row * (cell + gap),
      });
    }
  }

  return (
    <svg
      width={size}
      height={size * (height / width)}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Grid icon"
    >
      <defs>
        <linearGradient 
          id={gradientId} 
          x1="0%" 
          y1="0%"     
          x2="100%" 
          y2="100%"
        >
          <stop offset="0%" stopColor={c1} />
          <stop offset="50%" stopColor={c2} />
          <stop offset="100%" stopColor={c3} />
        </linearGradient>

        {/* Маска из ячеек */}
        <mask id={maskId}>
          <rect width={width} height={height} fill="black" />
          {positions.map((p, i) => (
            <rect
              key={i}
              x={p.x}
              y={p.y}
              width={cell}
              height={cell}
              fill="white"
            />
          ))}
        </mask>

        <clipPath id={clipId}>
          <rect width={width} height={height} rx={radius} />
        </clipPath>
      </defs>

      {/* Фон */}
      <rect width={width} height={height} rx={radius} fill={background} />

      {/* Градиент, обрезанный маской из ячеек */}
      <g clipPath={`url(#${clipId})`}>
        <rect 
          width={width} 
          height={height} 
          fill={`url(#${gradientId})`}
          mask={`url(#${maskId})`}
        />
      </g>
    </svg>
  );
};