import React from 'react';

const StoreBadge = ({ href, variant = 'apple', compact = false, className = '' }) => {
  const isApple = variant === 'apple';
  const imgSrc = isApple
    ? '/brand-badges/app-store-black-en-us.svg'
    : '/brand-badges/google-play-badge-en-us.png';
  const sizeClass = compact
    ? 'h-[46px] w-[168px] sm:w-[176px]'
    : 'h-[54px] w-[198px] sm:w-[206px]';
  const imageScaleClass = isApple
    ? compact
      ? 'scale-[1.01]'
      : 'scale-[1.02]'
    : compact
      ? 'scale-[1.40]'
      : 'scale-[1.38]';

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center overflow-hidden align-middle transition-transform hover:-translate-y-0.5 ${sizeClass} ${className}`}
    >
      <img
        src={imgSrc}
        alt={isApple ? 'Download on the App Store' : 'Get it on Google Play'}
        className={`block h-full w-full object-contain ${imageScaleClass}`}
        loading="eager"
      />
    </a>
  );
};

export default StoreBadge;
