'use client';

import React from 'react';

export interface CircularProgressProps {
  /** Progress value 0-100 */
  value: number;
  /** Size in pixels */
  size?: number;
  /** Stroke width */
  strokeWidth?: number;
  /** Custom className */
  className?: string;
  /** Show percentage text */
  showValue?: boolean;
  /** Custom color (hsl values) */
  color?: string;
  /** Children to render in center */
  children?: React.ReactNode;
}

/**
 * Circular Progress component with animated gradient ring
 * Creates a stunning visual feedback for file processing
 */
export function CircularProgress({
  value,
  size = 80,
  strokeWidth = 6,
  className = '',
  showValue = true,
  color = '211 100% 50%',
  children,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Glow effect behind */}
      <div
        className="absolute inset-0 rounded-full animate-pulse-soft"
        style={{
          background: `radial-gradient(circle, hsl(${color} / 0.25) 0%, transparent 70%)`,
          filter: 'blur(8px)',
        }}
      />

      {/* SVG Ring */}
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
        aria-hidden="true"
      >
        {/* Background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-[hsl(var(--color-border)/0.5)]"
        />

        {/* Progress with gradient */}
        <defs>
          <linearGradient id={`progress-gradient-${color.replace(/\s/g, '')}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={`hsl(${color})`} />
            <stop offset="100%" stopColor={`hsl(195 100% 58%)`} />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`url(#progress-gradient-${color.replace(/\s/g, '')})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-500 ease-out"
          style={{
            filter: `drop-shadow(0 0 6px hsl(${color} / 0.5))`,
          }}
        />
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center">
        {children || (showValue && (
          <span className="text-lg font-bold text-[hsl(var(--color-foreground))]">
            {Math.round(value)}%
          </span>
        ))}
      </div>
    </div>
  );
}

export default CircularProgress;