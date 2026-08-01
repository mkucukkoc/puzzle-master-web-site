import React from 'react';

const GameArtwork = ({ game, compact = false, className = '' }) => {
  const outerRadius = compact ? 'rounded-[1.5rem]' : 'rounded-[2rem]';
  const innerRadius = compact ? 'rounded-[1.15rem]' : 'rounded-[1.6rem]';

  return (
    <div
      className={`relative overflow-hidden border shadow-[0_24px_80px_rgba(0,0,0,0.14)] ${outerRadius} ${className}`}
      style={{
        background: game.surface,
        borderColor: `${game.accent}22`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 18% 12%, ${game.accent}26, transparent 33%), radial-gradient(circle at 82% 18%, ${game.accent}14, transparent 30%), linear-gradient(135deg, rgba(255,255,255,0.06), transparent 60%)`,
        }}
      />
      <img
        src={game.feature}
        alt={`${game.title} feature artwork`}
        className={`relative w-full object-cover ${innerRadius} ${compact ? 'aspect-[1024/500]' : 'aspect-[1024/500]'}`}
      />
      <div className="absolute left-4 top-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/32 px-3 py-2 backdrop-blur-md">
        <img
          src={game.icon}
          alt={`${game.title} icon`}
          className={compact ? 'h-10 w-10 rounded-2xl object-cover' : 'h-12 w-12 rounded-2xl object-cover'}
        />
        <div className="text-left">
          <div className="text-[11px] font-bold tracking-[0.22em] text-white/75">{game.shortTitle.toUpperCase()}</div>
          <div className={compact ? 'text-xs font-black text-white' : 'text-sm font-black text-white'}>{game.title}</div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />
    </div>
  );
};

export default GameArtwork;
