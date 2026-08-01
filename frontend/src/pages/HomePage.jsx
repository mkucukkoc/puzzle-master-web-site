import React from 'react';
import BrandNav from '@/components/BrandNav';
import { useLanguage } from '@/context/LanguageContext';

const ArrowTile = ({ direction = 'R', active = false, className = '' }) => {
  const rotation = { R: 0, D: 90, L: 180, U: 270 }[direction];
  return (
    <div className={`relative h-12 rounded-xl bg-white border border-[#d6e8e4] shadow-sm ${className}`}>
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className={`h-1.5 w-7 rounded-full ${active ? 'bg-[#0ea394]' : 'bg-[#111111]'}`} />
        <div
          className={`-ml-1 h-0 w-0 border-y-[7px] border-y-transparent border-l-[12px] ${
            active ? 'border-l-[#0ea394]' : 'border-l-[#111111]'
          }`}
        />
      </div>
    </div>
  );
};

const PuzzlePreview = () => (
  <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] border border-[#d6e8e4] bg-white shadow-[0_24px_80px_rgba(31,61,58,0.16)]">
    <img src="/games/arrows-puzzle-master/feature-v9.png" alt="Arrows Puzzle Master gameplay artwork" className="aspect-[1024/500] w-full object-cover" />
    <div className="absolute left-5 top-5 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/80 px-3 py-2 backdrop-blur-md">
      <img src="/games/arrows-puzzle-master/icon.png" alt="Arrows Puzzle Master" className="h-12 w-12 rounded-xl object-cover" />
      <div>
        <div className="text-xs font-bold tracking-[0.2em] text-[#0ea394]">ARROWS</div>
        <div className="text-sm font-black text-[#1f3d3a]">Puzzle Master</div>
      </div>
    </div>
  </div>
);

const BoomPreview = () => (
  <div className="relative mx-auto w-full max-w-sm rounded-[2rem] bg-[#251b52] p-5 shadow-[0_24px_80px_rgba(37, 27, 82, 0.22)] border border-[#d8d2f4]">
    <div className="absolute -top-5 -right-5 h-20 w-20 rounded-full bg-[#8f74ff]/15" />
    <div className="absolute -bottom-6 -left-5 h-24 w-24 rounded-full bg-[#ffb800]/10" />
    <div className="relative grid grid-cols-4 gap-3">
      {[
        '#ff5252', '#ff5252', '#ffb800', '#ffb800',
        '#ff5252', '#ff5252', '#ffb800', '#ffb800',
        '#59d56b', '#59d56b', '#4e7eff', '#4e7eff',
        '#59d56b', '#59d56b', '#4e7eff', '#4e7eff',
      ].map((color, index) => (
        <div
          key={`${color}-${index}`}
          className="relative h-16 rounded-2xl border border-white/10 shadow-[inset_0_2px_0_rgba(255,255,255,0.25),inset_0_-5px_10px_rgba(0,0,0,0.25)]"
          style={{ background: `linear-gradient(135deg, ${color}, ${color}cc 60%, rgba(255,255,255,0.15))` }}
        >
          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
        </div>
      ))}
    </div>
    <div className="relative mt-5 rounded-2xl bg-white/8 p-4 border border-white/10">
      <div className="flex items-center justify-between text-xs font-semibold text-[#d9d1ff]">
        <span>BOOSTED PUZZLE</span>
        <span className="text-[#ffb800]">BOOM MODE</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#ff5252] via-[#ffb800] to-[#59d56b]" />
      </div>
    </div>
  </div>
);

const CarPreview = () => (
  <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] bg-[#082f51] p-4 shadow-[0_24px_80px_rgba(8,47,81,0.18)] border border-[#bed6ea]">
    <div className="absolute -top-5 -right-5 h-20 w-20 rounded-full bg-[#3fc9ff]/15" />
    <div className="absolute -bottom-6 -left-5 h-24 w-24 rounded-full bg-[#ffb454]/10" />
    <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0b365f]">
      <img
        src="/games/cars-puzzle-escape/feature.png"
        alt="Cars -Puzzle Escape feature graphic"
        className="h-auto w-full object-cover"
      />
      <div className="absolute left-4 top-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-md">
        <img
          src="/games/cars-puzzle-escape/icon.png"
          alt="Cars -Puzzle Escape icon"
          className="h-11 w-11 rounded-2xl object-cover"
        />
        <div className="text-left">
          <div className="text-[11px] font-bold tracking-[0.22em] text-[#cfe0ec]">CARS</div>
          <div className="text-sm font-black text-white">-Puzzle Escape</div>
        </div>
      </div>
    </div>
    <div className="relative mt-4 rounded-2xl bg-white/8 p-4 border border-white/10">
      <div className="flex items-center justify-between text-xs font-semibold text-[#cfe0ec]">
        <span>PARKING LOT</span>
        <span className="text-[#ffb454]">TRAFFIC MODE</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#3fc9ff] via-[#0f5cab] to-[#ffb454]" />
      </div>
    </div>
  </div>
);

const BlocksPreview = () => (
  <div className="relative mx-auto w-full max-w-sm rounded-[2rem] bg-[#17345f] p-5 shadow-[0_24px_80px_rgba(23,52,95,0.2)] border border-[#cfe1ff]">
    <div className="absolute -top-5 -right-5 h-20 w-20 rounded-full bg-[#1f7cff]/15" />
    <div className="absolute -bottom-6 -left-5 h-24 w-24 rounded-full bg-[#17c3b2]/12" />
    <div className="relative grid grid-cols-4 gap-3">
      {[
        '#1f7cff', '#1f7cff', '#17c3b2', '#17c3b2',
        '#1f7cff', '#1f7cff', '#17c3b2', '#17c3b2',
        '#0ea394', '#0ea394', '#ffb800', '#ffb800',
        '#0ea394', '#0ea394', '#ffb800', '#ffb800',
      ].map((color, index) => (
        <div
          key={`${color}-${index}`}
          className="relative h-16 rounded-2xl border border-white/10 shadow-[inset_0_2px_0_rgba(255,255,255,0.25),inset_0_-5px_10px_rgba(0,0,0,0.25)]"
          style={{ background: `linear-gradient(135deg, ${color}, ${color}cc 60%, rgba(255,255,255,0.15))` }}
        >
          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
        </div>
      ))}
    </div>
    <div className="relative mt-5 rounded-2xl bg-white/8 p-4 border border-white/10">
      <div className="flex items-center justify-between text-xs font-semibold text-[#d9ecff]">
        <span>PUZZLE ESCAPE</span>
        <span className="text-[#17c3b2]">CLEAR PATHS</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-[#1f7cff] via-[#17c3b2] to-[#ffb800]" />
      </div>
    </div>
  </div>
);

const NonogramPreview = () => (
  <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] bg-[#061f35] p-4 shadow-[0_24px_80px_rgba(6,31,53,0.18)] border border-[#16455a]">
    <div className="absolute -top-5 -right-5 h-20 w-20 rounded-full bg-[#1fdbc9]/12" />
    <div className="absolute -bottom-6 -left-5 h-24 w-24 rounded-full bg-[#ff6f61]/10" />
    <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#06213a]">
      <img
        src="/games/nonogram/feature.png"
        alt="Nonogram Pixel Puzzle feature graphic"
        className="h-auto w-full object-cover"
      />
      <div className="absolute left-4 top-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-md">
        <img
          src="/games/nonogram/icon.png"
          alt="Nonogram Pixel Puzzle icon"
          className="h-11 w-11 rounded-2xl object-cover"
        />
        <div className="text-left">
          <div className="text-[11px] font-bold tracking-[0.22em] text-[#8feceb]">NONOGRAM</div>
          <div className="text-sm font-black text-white">Pixel Puzzle</div>
        </div>
      </div>
    </div>
    <div className="relative mt-4 rounded-2xl bg-white/8 p-4 border border-white/10">
      <div className="flex items-center justify-between text-xs font-semibold text-[#cfe7ea]">
        <span>DAILY GRID</span>
        <span className="text-[#1fdbc9]">PIXEL CLUES</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-[#1fdbc9] via-[#ff6f61] to-[#ffb86b]" />
      </div>
    </div>
  </div>
);

const MinesweeperPreview = () => (
  <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] bg-[#0a1f4f] p-4 shadow-[0_24px_80px_rgba(10,31,79,0.2)] border border-[#253f86]">
    <div className="absolute -top-5 -right-5 h-20 w-20 rounded-full bg-[#4bb2ff]/12" />
    <div className="absolute -bottom-6 -left-5 h-24 w-24 rounded-full bg-[#ff8d5a]/10" />
    <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#102b67]">
      <img
        src="/games/minesweeper/feature.png"
        alt="Minesweeper: Mine Quest feature graphic"
        className="h-auto w-full object-cover"
      />
      <div className="absolute left-4 top-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-md">
        <img
          src="/games/minesweeper/icon.png"
          alt="Minesweeper: Mine Quest icon"
          className="h-11 w-11 rounded-2xl object-cover"
        />
        <div className="text-left">
          <div className="text-[11px] font-bold tracking-[0.22em] text-[#9ed7ff]">MINESWEEPER</div>
          <div className="text-sm font-black text-white">Mine Quest</div>
        </div>
      </div>
    </div>
    <div className="relative mt-4 rounded-2xl bg-white/8 p-4 border border-white/10">
      <div className="flex items-center justify-between text-xs font-semibold text-[#d8e7ff]">
        <span>SAFE TILES</span>
        <span className="text-[#ff8d5a]">FLAG MODE</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-[#4bb2ff] via-[#3370ff] to-[#ff8d5a]" />
      </div>
    </div>
  </div>
);

const WordSearchPreview = () => (
  <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] bg-[#0f3b2d] p-4 shadow-[0_24px_80px_rgba(15,59,45,0.2)] border border-[#bfe6cf]">
    <div className="absolute -top-5 -right-5 h-20 w-20 rounded-full bg-[#5fd08a]/12" />
    <div className="absolute -bottom-6 -left-5 h-24 w-24 rounded-full bg-[#f4c95d]/10" />
    <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#113e30]">
      <img
        src="/word-search/word-search-feature-1024x500.png"
        alt="Word Search feature graphic"
        className="h-auto w-full object-cover"
      />
      <div className="absolute left-4 top-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-md">
        <img
          src="/word-search/word-search-play-icon-512.png"
          alt="Word Search icon"
          className="h-11 w-11 rounded-2xl object-cover"
        />
        <div className="text-left">
          <div className="text-[11px] font-bold tracking-[0.22em] text-[#c6f0d7]">WORD SEARCH</div>
          <div className="text-sm font-black text-white">Hidden Words</div>
        </div>
      </div>
    </div>
    <div className="relative mt-4 rounded-2xl bg-white/8 p-4 border border-white/10">
      <div className="flex items-center justify-between text-xs font-semibold text-[#d4f1df]">
        <span>LETTER GRID</span>
        <span className="text-[#f4c95d]">DAILY WORDS</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-[#5fd08a] via-[#2ea66b] to-[#f4c95d]" />
      </div>
    </div>
  </div>
);

const FlowConnectsPreview = () => (
  <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] bg-[#0b1533] p-4 shadow-[0_24px_80px_rgba(11,21,51,0.2)] border border-[#7cccf0]">
    <div className="absolute -top-5 -right-5 h-20 w-20 rounded-full bg-[#20c6e8]/12" />
    <div className="absolute -bottom-6 -left-5 h-24 w-24 rounded-full bg-[#47d6c6]/10" />
    <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#102149]">
      <img
        src="/flow-connects/flow-connects-feature-1024x500.png"
        alt="Flow Connects: Pipe Puzzle feature graphic"
        className="h-auto w-full object-cover"
      />
      <div className="absolute left-4 top-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-md">
        <img
          src="/flow-connects/flow-connects-play-icon-512.png"
          alt="Flow Connects: Pipe Puzzle icon"
          className="h-11 w-11 rounded-2xl object-cover"
        />
        <div className="text-left">
          <div className="text-[11px] font-bold tracking-[0.22em] text-[#a7f0ff]">FLOW CONNECTS</div>
          <div className="text-sm font-black text-white">Pipe Puzzle</div>
        </div>
      </div>
    </div>
    <div className="relative mt-4 rounded-2xl bg-white/8 p-4 border border-white/10">
      <div className="flex items-center justify-between text-xs font-semibold text-[#d5eef8]">
        <span>PIPE FLOW</span>
        <span className="text-[#47d6c6]">DAILY CONNECTS</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-[#20c6e8] via-[#0f8cdb] to-[#47d6c6]" />
      </div>
    </div>
  </div>
);

const SudokuPreview = () => (
  <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] bg-[#17113d] p-4 shadow-[0_24px_80px_rgba(23,17,61,0.2)] border border-[#c6bcff]">
    <div className="absolute -top-5 -right-5 h-20 w-20 rounded-full bg-[#7556ef]/12" />
    <div className="absolute -bottom-6 -left-5 h-24 w-24 rounded-full bg-[#3f83f8]/10" />
    <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#1d1650]">
      <img
        src="/sudoku-quest/sudoku-quest-feature-1024x500.png"
        alt="Sudoku Quest feature graphic"
        className="h-auto w-full object-cover"
      />
      <div className="absolute left-4 top-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-md">
        <img
          src="/sudoku-quest/sudoku-quest-play-icon-512.png"
          alt="Sudoku Quest icon"
          className="h-11 w-11 rounded-2xl object-cover"
        />
        <div className="text-left">
          <div className="text-[11px] font-bold tracking-[0.22em] text-[#d8d3ff]">SUDOKU QUEST</div>
          <div className="text-sm font-black text-white">Number Logic</div>
        </div>
      </div>
    </div>
    <div className="relative mt-4 rounded-2xl bg-white/8 p-4 border border-white/10">
      <div className="flex items-center justify-between text-xs font-semibold text-[#dcd8ff]">
        <span>9×9 GRID</span>
        <span className="text-[#7dd3fc]">DAILY SUDOKU</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-[#7556ef] via-[#3f83f8] to-[#7dd3fc]" />
      </div>
    </div>
  </div>
);

const TileMatchPreview = () => (
  <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] bg-[#052e16] p-4 shadow-[0_24px_80px_rgba(5,46,22,0.2)] border border-[#bbf7d0]">
    <div className="absolute -top-5 -right-5 h-20 w-20 rounded-full bg-[#16a34a]/15" />
    <div className="absolute -bottom-6 -left-5 h-24 w-24 rounded-full bg-[#eab308]/10" />
    <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0a4722]">
      <img
        src="/games/tile-match/feature.png"
        alt="Triple Grove: Tile Match feature graphic"
        className="h-auto w-full object-cover"
      />
      <div className="absolute left-4 top-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-md">
        <img
          src="/games/tile-match/icon.png"
          alt="Triple Grove: Tile Match icon"
          className="h-11 w-11 rounded-2xl object-cover"
        />
        <div className="text-left">
          <div className="text-[11px] font-bold tracking-[0.22em] text-[#bbf7d0]">TRIPLE GROVE</div>
          <div className="text-sm font-black text-white">Tile Match</div>
        </div>
      </div>
    </div>
    <div className="relative mt-4 rounded-2xl bg-white/8 p-4 border border-white/10">
      <div className="flex items-center justify-between text-xs font-semibold text-[#bbf7d0]">
        <span>7-SLOT TRAY</span>
        <span className="text-[#facc15]">TRIPLE MATCH</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-[#16a34a] via-[#eab308] to-[#22c55e]" />
      </div>
    </div>
  </div>
);

const AppCard = ({
  title,
  subtitle,
  description,
  preview,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  accentClass,
}) => (
  <div className="rounded-[2rem] border border-[#d6e8e4] bg-white p-5 sm:p-6 shadow-[0_24px_80px_rgba(31,61,58,0.12)]">
    <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 items-center">
      <div>
        <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold tracking-[0.18em] ${accentClass}`}>
          {subtitle}
        </div>
        <h3 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-[#1f3d3a]">{title}</h3>
        <p className="mt-4 text-[#8a9d9a] leading-7">{description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={primaryHref}
            className="rounded-full bg-[#0ea394] px-5 py-3 font-bold text-white hover:bg-[#0b7f74] transition-colors"
          >
            {primaryLabel}
          </a>
          <a
            href={secondaryHref}
            className="rounded-full bg-white px-5 py-3 font-bold text-[#1f3d3a] border border-[#d6e8e4] hover:border-[#0ea394]/40 transition-colors"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
      <div>{preview}</div>
    </div>
  </div>
);

const STORE = {
  arrows: 'https://play.google.com/store/apps/details?id=com.puzzle.masters',
  boom: 'https://play.google.com/store/apps/details?id=com.blocks.boom',
  cars: 'https://play.google.com/store/apps/details?id=com.puzzle.trafficescape',
  nonogram: 'https://play.google.com/store/apps/details?id=com.nonogram.pixelpuzzle',
  minesweeper: 'https://play.google.com/store/apps/details?id=com.minequest.minesweeper',
  wordSearch: 'https://play.google.com/store/apps/details?id=com.mkucukkoc.wordsearch',
  flowConnects: 'https://play.google.com/store/apps/details?id=com.flowconnects.pipepuzzle',
  sudoku: 'https://play.google.com/store/apps/details?id=com.mkucukkoc.sudokuquest',
  tileMatch: 'https://play.google.com/store/apps/details?id=com.mkucukkoc.triplegrove',
};

const HomePage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const hero = {
    eyebrow: isTR ? 'MINIMAL OK PUZZLE OYUNU' : 'MINIMAL ARROW PUZZLE GAME',
    desc: isTR
      ? 'Okları doğru sırayla serbest bırak, çarpışmaları çöz ve her seviyeyi tertemiz bir grid üzerinde tamamla.'
      : 'Release arrows in the right order, solve collisions, and clear every level on a clean grid.',
    cta: isTR ? 'Oyunu Keşfet' : 'Explore the Game',
    secondary: isTR ? 'Gizlilik Politikası' : 'Privacy Policy',
  };

  const features = isTR
    ? [
        ['Grid tabanlı zeka', 'Her ok yatay veya dikey eksende ilerler; doğru sırayı bulmak oyunun kalbidir.'],
        ['Hayvan seviye setleri', 'Aslan, zürafa, at ve daha fazlası için silüet benzeri puzzle düzenleri.'],
        ['Kısa ve temiz oynanış', 'Hızlı denemeler, can sistemi, ipuçları ve sade görsel dil.'],
      ]
    : [
        ['Grid-based logic', 'Every arrow moves horizontally or vertically; finding the right order is the core challenge.'],
        ['Animal level sets', 'Silhouette-like puzzle layouts for lion, giraffe, horse, and more.'],
        ['Clean quick sessions', 'Fast attempts, hearts, hints, and a minimal visual language.'],
      ];

  const stats = isTR
    ? [
        ['60+', 'tasarlanmış seviye'],
        ['90°', 'net grid hareketi'],
        ['3', 'can ile strateji'],
      ]
    : [
        ['60+', 'authored levels'],
        ['90°', 'strict grid motion'],
        ['3', 'hearts for strategy'],
      ];

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#1f3d3a]">
      <BrandNav />

      <main className="pt-24 sm:pt-28 overflow-hidden">
        <section className="px-6 pb-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c8e7e1] bg-white px-4 py-2 text-xs font-bold tracking-[0.22em] text-[#0ea394]">
                <span className="h-2 w-2 rounded-full bg-[#0ea394]" />
                {hero.eyebrow}
              </div>
              <h1 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                Arrows
                <span className="block text-[#0ea394]">Puzzle</span>
                Master
              </h1>
              <p className="mt-6 max-w-xl text-lg text-[#8a9d9a] leading-8">
                {hero.desc}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={STORE.arrows}
                  className="rounded-full bg-[#0ea394] px-7 py-4 font-bold text-white shadow-[0_18px_40px_rgba(14,163,148,0.26)] hover:bg-[#0b7f74] transition-colors"
                >
                  {isTR ? "▶ Google Play'de Oyna" : '▶ Play on Google Play'}
                </a>
                <a
                  href="/privacy"
                  className="rounded-full bg-white px-7 py-4 font-bold text-[#1f3d3a] border border-[#d6e8e4] hover:border-[#0ea394]/40 transition-colors"
                >
                  {hero.secondary}
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
                {stats.map(([value, label]) => (
                  <div key={value} className="rounded-2xl bg-white border border-[#d6e8e4] p-4">
                    <div className="text-2xl font-black text-[#1f3d3a]">{value}</div>
                    <div className="mt-1 text-xs text-[#8a9d9a]">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(14,163,148,0.22),transparent_50%)] blur-2xl" />
              <PuzzlePreview />
            </div>
          </div>
        </section>

        <section id="try-app" className="px-6 py-16 bg-white scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-black">
                {isTR ? 'Basit görünür, akıllıca çözülür.' : 'Looks simple, solves smart.'}
              </h2>
              <p className="mt-4 text-[#8a9d9a] max-w-2xl mx-auto">
                {isTR
                  ? 'Her seviye veriyle tanımlanan ok parçalarından oluşur. Amaç, yolu açık olan okları seçerek tahtayı temizlemek.'
                  : 'Each level is built from data-defined arrow pieces. Your goal is to pick clear arrows and empty the board.'}
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-5">
              {features.map(([title, desc], index) => (
                <div key={title} className="rounded-[1.75rem] bg-[#ffffff] border border-[#d6e8e4] p-6">
                  <div className="h-12 w-12 rounded-2xl bg-[#1f3d3a] text-white flex items-center justify-center font-black">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#8a9d9a]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="px-6 py-10 text-center text-sm text-[#8a9d9a]">
          <img
            src="/games/arrows-puzzle-master/icon.png"
            alt="Arrows Puzzle Master"
            className="mx-auto mb-4 h-14 w-14 rounded-2xl object-cover shadow-md"
          />
          <p>© 2026 Arrows Puzzle Master</p>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;
