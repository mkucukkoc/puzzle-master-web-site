import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ScreenshotGallery = ({ screenshots = [], gameTitle = 'Game', accentColor = '#3b82f6' }) => {
  const { language } = useLanguage();
  const isTR = language === 'tr';
  const scrollRef = useRef(null);
  const [activeModalIndex, setActiveModalIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!screenshots || screenshots.length === 0) return null;

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.clientWidth / (window.innerWidth < 640 ? 1.2 : window.innerWidth < 1024 ? 2.3 : 3.2);
    const index = Math.round(scrollPosition / itemWidth);
    setCurrentIndex(Math.min(Math.max(index, 0), screenshots.length - 1));
  };

  const scrollTo = index => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const item = container.children[index];
    if (item) {
      item.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setCurrentIndex(index);
    }
  };

  const scrollByDirection = direction => {
    const nextIndex = direction === 'next'
      ? Math.min(currentIndex + 1, screenshots.length - 1)
      : Math.max(currentIndex - 1, 0);
    scrollTo(nextIndex);
  };

  return (
    <div className="relative my-10 w-full">
      {/* Header title for screenshots */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div
            className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-bold tracking-[0.2em]"
            style={{ backgroundColor: `${accentColor}18`, borderColor: `${accentColor}44`, color: accentColor }}
          >
            <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
            {isTR ? 'EKRAN GÖRÜNTÜLERİ' : 'GAMEPLAY SCREENSHOTS'}
          </div>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            {isTR ? 'Oyundan Görseller' : 'In-Game Showcase'}
          </h2>
          <p className="mt-2 text-sm text-white/70">
            {isTR ? 'Ekranı yana kaydırarak oyun içi mekanikleri ve arayüzü inceleyin' : 'Swipe horizontally to explore gameplay and UI details'}
          </p>
        </div>

        {/* Carousel controls */}
        {screenshots.length > 1 && (
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollByDirection('prev')}
              disabled={currentIndex === 0}
              aria-label="Previous screenshot"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white shadow-lg backdrop-blur-md transition-all hover:bg-white/20 active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => scrollByDirection('next')}
              disabled={currentIndex === screenshots.length - 1}
              aria-label="Next screenshot"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white shadow-lg backdrop-blur-md transition-all hover:bg-white/20 active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        )}
      </div>

      {/* Horizontal Sliding Carousel Container */}
      <div className="relative group">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-5 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {screenshots.map((src, index) => (
            <div
              key={src + index}
              onClick={() => setActiveModalIndex(index)}
              className="relative shrink-0 snap-center cursor-pointer transition-all duration-300 transform hover:-translate-y-2 focus:outline-none"
              style={{
                width: 'clamp(240px, 65vw, 320px)',
              }}
            >
              <div
                className="group/card relative overflow-hidden rounded-[2rem] border border-white/15 bg-black/40 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
                style={{
                  boxShadow: currentIndex === index ? `0 15px 40px ${accentColor}33` : undefined,
                }}
              >
                <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[1.5rem] bg-black/60">
                  <img
                    src={src}
                    alt={`${gameTitle} screenshot ${index + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                  />
                  {/* Overlay Gradient & Zoom Icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 flex items-end justify-between p-4">
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                      #{index + 1}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-md">
                      <Maximize2 size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination indicators */}
      {screenshots.length > 1 && (
        <div className="mt-2 flex items-center justify-center gap-2">
          {screenshots.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: currentIndex === idx ? '28px' : '8px',
                backgroundColor: currentIndex === idx ? accentColor : 'rgba(255, 255, 255, 0.25)',
              }}
            />
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {activeModalIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl animate-fadeIn">
          <button
            onClick={() => setActiveModalIndex(null)}
            className="absolute top-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-colors hover:bg-white/20"
            aria-label="Close preview"
          >
            <X size={24} />
          </button>

          {activeModalIndex > 0 && (
            <button
              onClick={() => setActiveModalIndex(prev => prev - 1)}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-colors hover:bg-white/20"
              aria-label="Previous"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {activeModalIndex < screenshots.length - 1 && (
            <button
              onClick={() => setActiveModalIndex(prev => prev + 1)}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-colors hover:bg-white/20"
              aria-label="Next"
            >
              <ChevronRight size={28} />
            </button>
          )}

          <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl">
            <img
              src={screenshots[activeModalIndex]}
              alt={`${gameTitle} screenshot full view`}
              className="max-h-[85vh] w-auto object-contain rounded-[1.8rem]"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-black/60 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              {activeModalIndex + 1} / {screenshots.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScreenshotGallery;
