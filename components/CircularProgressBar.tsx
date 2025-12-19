
import React from 'react';

interface CircularProgressBarProps {
  percentage: number;
  label: string;
  color: string;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ percentage, label, color }) => {
  const sqSize = 120;
  const strokeWidth = 10;
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className="flex flex-col items-center justify-center">
      <svg width={sqSize} height={sqSize} viewBox={viewBox}>
        <circle
          className="fill-none stroke-surface-dark"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          className="fill-none transition-all duration-1000 ease-in-out"
          stroke={color}
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeLinecap="round"
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
        <text
          className="fill-white text-xl font-bold"
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
        >
          {`${percentage}%`}
        </text>
      </svg>
      <p className="mt-4 text-text-secondary uppercase text-sm tracking-widest font-semibold">{label}</p>
    </div>
  );
};

export default CircularProgressBar;
