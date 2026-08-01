import React, { useId } from 'react';
import { Apple } from 'lucide-react';

const GooglePlayMark = () => {
  const gradientId = useId();

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00d2ff" />
        <stop offset="36%" stopColor="#34a853" />
        <stop offset="68%" stopColor="#fbbc05" />
        <stop offset="100%" stopColor="#ea4335" />
        </linearGradient>
      </defs>
      <path
        d="M4.2 3.6v16.8l9.3-8.4L4.2 3.6zm1.8 3.1 5.5 4.9-5.5 4.9V6.7zm8.6 3.8 3.3 1.9c.5.3.8.8.8 1.4s-.3 1.1-.8 1.4l-3.3 1.9-2.3-2.6 2.3-4z"
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
};

const StoreBadge = ({ href, variant = 'apple', compact = false, className = '' }) => {
  const isApple = variant === 'apple';
  const headline = isApple ? 'Download on the' : 'GET IT ON';
  const title = isApple ? 'App Store' : 'Google Play';

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center gap-3 rounded-[1.15rem] border border-white/10 bg-[#0b0f18] px-4 py-3 text-white shadow-[0_12px_28px_rgba(0,0,0,0.16)] transition-transform hover:-translate-y-0.5 ${compact ? 'min-w-[150px]' : 'min-w-[190px]'} ${className}`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-[0.9rem] bg-white text-black shadow-[0_8px_18px_rgba(255,255,255,0.08)]">
        {isApple ? <Apple size={19} strokeWidth={2.4} /> : <GooglePlayMark />}
      </span>
      <span className="flex flex-col text-left leading-none">
        <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">{headline}</span>
        <span className={`${compact ? 'text-sm' : 'text-[15px]'} font-bold tracking-[-0.01em] text-white`}>
          {title}
        </span>
      </span>
    </a>
  );
};

export default StoreBadge;
