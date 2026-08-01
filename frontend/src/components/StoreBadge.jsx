import React from 'react';

const StoreBadge = ({ href, variant = 'apple', compact = false, className = '' }) => {
  const isApple = variant === 'apple';
  const imgSrc = isApple
    ? '/brand-badges/app-store-black-en-us.svg'
    : '/brand-badges/google-play-badge-en-us.png';

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center overflow-hidden rounded-[13px] border border-black/10 bg-black shadow-[0_12px_28px_rgba(0,0,0,0.16)] transition-transform hover:-translate-y-0.5 ${compact ? 'w-[154px]' : 'w-[194px]'} ${className}`}
    >
      <img
        src={imgSrc}
        alt={isApple ? 'Download on the App Store' : 'Get it on Google Play'}
        className="block h-auto w-full"
        loading="eager"
      />
    </a>
  );
};

export default StoreBadge;
