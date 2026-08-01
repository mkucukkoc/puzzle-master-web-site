import React from 'react';
import NonogramNav from '@/components/NonogramNav';
import { useLanguage } from '@/context/LanguageContext';

const NonogramPreview = () => (
  <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] bg-[#061f35] p-4 sm:p-5 shadow-[0_24px_80px_rgba(6,31,53,0.22)] border border-[#16455a]">
    <div className="absolute -top-8 -right-8 h-28 w-28 rounded-full bg-[#1fdbc9]/12" />
    <div className="absolute -bottom-10 -left-8 h-32 w-32 rounded-full bg-[#ff6f61]/10" />
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

const FeatureCard = ({ title, desc, index }) => (
  <div className="rounded-[1.75rem] bg-white border border-[#d6e8e8] p-6 shadow-[0_18px_50px_rgba(6,31,53,0.06)]">
    <div className="h-12 w-12 rounded-2xl bg-[#06213a] text-white flex items-center justify-center font-black">
      {index}
    </div>
    <h3 className="mt-5 text-xl font-black text-[#06213a]">{title}</h3>
    <p className="mt-3 text-sm leading-6 text-[#4d6976]">{desc}</p>
  </div>
);

const NonogramHomePage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';
  const storeUrl = 'https://play.google.com/store/apps/details?id=com.nonogram.pixelpuzzle';

  const features = isTR
    ? [
        ['Günlük bulmaca', 'Her gün yeni bir nonogram ile geri dönüş nedeni oluşturan akış.'],
        ['Streak ve yıldız sistemi', 'İlerleme hissini güçlendiren ödül ve seri yapısı.'],
        ['14 dil desteği', 'Türkçe dahil geniş yerelleştirme ile mağazaya uygun deneyim.'],
      ]
    : [
        ['Daily puzzle', 'A fresh nonogram every day to keep players coming back.'],
        ['Streaks and stars', 'A rewarding progression loop that feels good to finish.'],
        ['14-language support', 'A store-ready experience with broad localization, including Turkish.'],
      ];

  const stats = isTR
    ? [
        ['1.000+', 'seviye'],
        ['14', 'dil'],
        ['1', 'günlük bulmaca'],
      ]
    : [
        ['1,000+', 'levels'],
        ['14', 'languages'],
        ['1', 'daily puzzle'],
      ];

  return (
    <div className="min-h-screen bg-[#f7fbfb] text-[#06213a]">
      <NonogramNav />

      <main className="pt-24 sm:pt-28 overflow-hidden">
        <section className="px-6 pb-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#b9dfdf] bg-white px-4 py-2 text-xs font-bold tracking-[0.22em] text-[#0f8c90]">
                <span className="h-2 w-2 rounded-full bg-[#1fdbc9]" />
                {isTR ? 'NONOGRAM YENİ OYUN' : 'NEW NONOGRAM GAME'}
              </div>
              <h1 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                Nonogram
                <span className="block text-[#0f8c90]">Pixel Puzzle</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-[#4d6976] leading-8">
                {isTR
                  ? 'Sayı ipuçlarıyla piksel resmi ortaya çıkar, günlük bulmacaları çöz ve ödüllerle ilerle. Nonogram için ayrı, temiz ve mağaza uyumlu bir web alanı.'
                  : 'Reveal pixel art from number clues, solve daily puzzles, and move forward with rewards. A separate, clean, store-ready web home for Nonogram.'}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={storeUrl}
                  className="rounded-full bg-[#06213a] px-7 py-4 font-bold text-white shadow-[0_18px_40px_rgba(6,33,58,0.22)] hover:bg-[#0a3655] transition-colors"
                >
                  {isTR ? 'Google Play\'de Aç' : 'Open on Google Play'}
                </a>
                <a
                  href="/nonogram/privacy"
                  className="rounded-full bg-[#1fdbc9] px-7 py-4 font-bold text-[#06213a] shadow-[0_18px_40px_rgba(31,219,201,0.24)] hover:bg-[#18c2b2] transition-colors"
                >
                  {isTR ? 'Gizlilik Politikası' : 'Privacy Policy'}
                </a>
                <a
                  href="/nonogram/terms"
                  className="rounded-full bg-white px-7 py-4 font-bold text-[#06213a] border border-[#d6e8e8] hover:border-[#1fdbc9]/50 transition-colors"
                >
                  {isTR ? 'Kullanım Şartları' : 'Terms of Use'}
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
                {stats.map(([value, label]) => (
                  <div key={value} className="rounded-2xl bg-white border border-[#d6e8e8] p-4">
                    <div className="text-2xl font-black text-[#06213a]">{value}</div>
                    <div className="mt-1 text-xs text-[#4d6976]">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(31,219,201,0.2),transparent_50%)] blur-2xl" />
              <NonogramPreview />
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-white border-y border-[#e6f2f2]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <p className="text-xs font-bold tracking-[0.22em] text-[#0f8c90]">
                {isTR ? 'KISA VE NET' : 'SHORT AND CLEAR'}
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black text-[#06213a]">
                {isTR ? 'Piksel mantığı, rahat çözüm akışı' : 'Pixel logic with a relaxed solving flow'}
              </h2>
              <p className="mt-4 text-[#4d6976] max-w-2xl mx-auto">
                {isTR
                  ? 'Nonogram, rakam ipuçlarıyla şekil çıkarma üzerine kurulu; legal sayfalar ve mağaza akışı da ayrı tutuluyor.'
                  : 'Nonogram is built around drawing shapes from number clues, with separate legal pages and a clean store flow.'}
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-5">
              {features.map(([title, desc], index) => (
                <FeatureCard key={title} title={title} desc={desc} index={index + 1} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NonogramHomePage;
