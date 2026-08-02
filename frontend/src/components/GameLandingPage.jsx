import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronDown,
  Sparkles,
  Gamepad2,
  Trophy,
  Lightbulb,
  HelpCircle,
  ShieldCheck,
  Zap,
  Globe,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import GameArtwork from '@/components/GameArtwork';
import StoreBadge from '@/components/StoreBadge';
import ScreenshotGallery from '@/components/ScreenshotGallery';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const GameLandingPage = ({ game }) => {
  const { language } = useLanguage();
  const isTR = language === 'tr';
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  if (!game) return null;

  const description = isTR ? game.descriptionTR : game.descriptionEN;
  const highlights = isTR ? game.highlightsTR : game.highlightsEN;
  const howToPlay = isTR ? game.howToPlayTR : game.howToPlayEN;
  const features = isTR ? game.featuresTR : game.featuresEN;
  const tips = isTR ? game.tipsTR : game.tipsEN;
  const faq = isTR ? game.faqTR : game.faqEN;

  const toggleFaq = index => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div
      className="min-h-screen text-white selection:bg-white/20"
      style={{
        background: `radial-gradient(ellipse at top, ${game.surface} 0%, #080c18 60%, #03060d 100%)`,
      }}
    >
      {/* Sticky Header Navigation */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur-xl transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white/90 transition-all hover:bg-white/15 hover:border-white/20 active:scale-95"
            >
              <ChevronLeft size={18} />
              {isTR ? 'Ana Sayfa' : 'Home'}
            </Link>
            <div className="hidden items-center gap-2 sm:flex">
              <span className="text-white/20">|</span>
              <img src={game.icon} alt={game.title} className="h-7 w-7 rounded-lg object-cover" />
              <span className="text-sm font-bold text-white/90">{game.title}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <StoreBadge href={game.appStoreUrl} variant="apple" compact />
              <StoreBadge href={game.playStoreUrl} variant="google" compact />
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className="overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative px-4 pt-10 pb-16 sm:px-6 lg:pt-16 lg:pb-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10">
              {/* Game Badge */}
              <div
                className="inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-xs font-black tracking-[0.22em] uppercase shadow-lg backdrop-blur-md"
                style={{
                  backgroundColor: `${game.accent}20`,
                  borderColor: `${game.accent}55`,
                  color: game.accent,
                }}
              >
                <span className="h-2 w-2 rounded-full animate-ping" style={{ backgroundColor: game.accent }} />
                {isTR ? 'RESMİ OYUN SAYFASI' : 'OFFICIAL GAME PAGE'}
              </div>

              {/* Title & Description */}
              <h1 className="mt-6 text-4xl font-black tracking-tight leading-[0.96] text-white sm:text-6xl lg:text-7xl">
                {game.title}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
                {description}
              </p>

              {/* Action Store Badges */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <StoreBadge href={game.appStoreUrl} variant="apple" />
                <StoreBadge href={game.playStoreUrl} variant="google" />
                <Link
                  to="/games"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/15 hover:border-white/30"
                >
                  {isTR ? 'Tüm Oyunlar' : 'All Games'}
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Highlights Chips */}
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {highlights.map((item, index) => (
                  <div
                    key={item}
                    className="group relative overflow-hidden rounded-[1.5rem] border p-4 backdrop-blur-md transition-all duration-300 hover:border-white/30"
                    style={{
                      backgroundColor: `${game.accent}12`,
                      borderColor: `${game.accent}25`,
                    }}
                  >
                    <div className="text-xs font-bold tracking-[0.2em] text-white/40">
                      0{index + 1}
                    </div>
                    <p className="mt-2 text-xs font-semibold leading-5 text-white/90 sm:text-sm">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Graphic & Glowing Backdrop */}
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-40 animate-pulse"
                style={{
                  background: `radial-gradient(circle at 50% 30%, ${game.accent}, transparent 70%)`,
                }}
              />
              <div className="relative rounded-[2.5rem] border border-white/15 bg-black/40 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                <GameArtwork game={game} className="rounded-[2rem] shadow-2xl" />
                <div className="mt-3 flex items-center justify-between px-4 py-2">
                  <div className="flex items-center gap-3">
                    <img src={game.icon} alt={game.title} className="h-10 w-10 rounded-xl object-cover" />
                    <div>
                      <div className="text-xs font-bold tracking-wider text-white/50">{game.shortTitle}</div>
                      <div className="text-sm font-black text-white">{isTR ? 'Mobil Bulmaca' : 'Mobile Puzzle'}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
                    ★ 4.9 {isTR ? '(Yüksek Puan)' : '(Top Rated)'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SCREENSHOT GALLERY ("EKRAN KAYMALI") SECTION */}
        {game.screenshots && game.screenshots.length > 0 && (
          <section className="border-t border-white/10 bg-black/20 px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <ScreenshotGallery
                screenshots={game.screenshots}
                gameTitle={game.title}
                accentColor={game.accent}
              />
            </div>
          </section>
        )}

        {/* HOW TO PLAY SECTION */}
        {howToPlay && howToPlay.length > 0 && (
          <section className="border-t border-white/10 px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="text-center">
                <div
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold tracking-[0.2em]"
                  style={{ backgroundColor: `${game.accent}18`, borderColor: `${game.accent}44`, color: game.accent }}
                >
                  <Gamepad2 size={14} />
                  {isTR ? 'OYUN REHBERİ' : 'HOW TO PLAY'}
                </div>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
                  {isTR ? 'Nasıl Oynanır?' : 'Gameplay Rules'}
                </h2>
                <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-white/70">
                  {isTR
                    ? 'Kolay öğrenilen mekanikler ve adım adım ilerleyen zeka dolu hamleler'
                    : 'Easy to learn mechanics with rewarding tactical puzzle steps'}
                </p>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {howToPlay.map((step, idx) => {
                  const [stepTitle, ...stepDescParts] = step.split(': ');
                  const stepDesc = stepDescParts.join(': ') || stepTitle;

                  return (
                    <div
                      key={idx}
                      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/25"
                    >
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-black text-white shadow-lg"
                        style={{ backgroundColor: game.accent }}
                      >
                        0{idx + 1}
                      </div>
                      <h3 className="mt-5 text-xl font-bold text-white">
                        {stepDescParts.length > 0 ? stepTitle : `${isTR ? 'Adım' : 'Step'} ${idx + 1}`}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/75">
                        {stepDesc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* KEY FEATURES SECTION */}
        {features && features.length > 0 && (
          <section className="border-t border-white/10 bg-black/30 px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="text-center">
                <div
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold tracking-[0.2em]"
                  style={{ backgroundColor: `${game.accent}18`, borderColor: `${game.accent}44`, color: game.accent }}
                >
                  <Sparkles size={14} />
                  {isTR ? 'ÖNE ÇIKAN ÖZELLİKLER' : 'KEY FEATURES'}
                </div>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
                  {isTR ? 'Oyun Özellikleri' : 'Why You Will Love It'}
                </h2>
              </div>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-white/30 hover:scale-[1.02]"
                  >
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-md"
                      style={{ backgroundColor: `${game.accent}44`, border: `1px solid ${game.accent}` }}
                    >
                      {idx === 0 && <Trophy size={20} />}
                      {idx === 1 && <Sparkles size={20} />}
                      {idx === 2 && <Globe size={20} />}
                      {idx === 3 && <Zap size={20} />}
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-white">{feat.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-white/70">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* TIPS & STRATEGY SECTION */}
        {tips && tips.length > 0 && (
          <section className="border-t border-white/10 px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-5xl">
              <div className="rounded-[2.5rem] border border-white/15 bg-gradient-to-r from-white/5 via-white/10 to-white/5 p-8 backdrop-blur-xl sm:p-12">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl text-amber-300 shadow-lg"
                    style={{ backgroundColor: `${game.accent}33`, border: `1px solid ${game.accent}` }}
                  >
                    <Lightbulb size={26} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">
                      {isTR ? 'Strateji ve İpuçları' : 'Pro Strategy Tips'}
                    </h3>
                    <p className="text-xs text-white/60">
                      {isTR ? 'Daha yüksek skor ve hızlı çözümler için ipuçları' : 'Master your gameplay with these expert tips'}
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {tips.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/30 p-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs font-bold text-white">
                        {idx + 1}
                      </span>
                      <p className="text-sm leading-6 text-white/85">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ ACCORDION SECTION */}
        {faq && faq.length > 0 && (
          <section className="border-t border-white/10 bg-black/20 px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <div
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold tracking-[0.2em]"
                  style={{ backgroundColor: `${game.accent}18`, borderColor: `${game.accent}44`, color: game.accent }}
                >
                  <HelpCircle size={14} />
                  {isTR ? 'SORA SORULAR' : 'FAQ'}
                </div>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  {isTR ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'}
                </h2>
              </div>

              <div className="mt-10 space-y-4">
                {faq.map((item, idx) => (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="flex w-full items-center justify-between p-5 text-left text-base font-bold text-white hover:bg-white/5"
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openFaqIndex === idx && (
                      <div className="border-t border-white/10 p-5 text-sm leading-6 text-white/75 bg-black/20">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* BOTTOM STORE CTA BANNER */}
        <section className="border-t border-white/10 px-4 py-16 sm:px-6 text-center">
          <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-white/15 bg-black/40 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
            <img src={game.icon} alt={game.title} className="mx-auto h-20 w-20 rounded-2xl shadow-xl object-cover" />
            <h2 className="mt-6 text-3xl font-black text-white sm:text-5xl">{game.title}</h2>
            <p className="mt-4 max-w-xl mx-auto text-base text-white/80">
              {isTR
                ? 'Hemen mağazadan ücretsiz indirin ve zekanızı zorlayan eğlenceli bulmacaların tadını çıkarın!'
                : 'Download now for free from the app store and dive into relaxing, brain-boosting puzzle fun!'}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <StoreBadge href={game.appStoreUrl} variant="apple" />
              <StoreBadge href={game.playStoreUrl} variant="google" />
            </div>
          </div>
        </section>
      </main>

      {/* LEGAL & FOOTER LINKS */}
      <footer className="border-t border-white/10 bg-black/60 px-4 py-8 text-center text-xs text-white/50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white/80">{game.title}</span>
            <span>© 2026</span>
          </div>
          <div className="flex flex-wrap gap-4 font-semibold text-white/70">
            <Link to={`${game.route}/privacy`} className="hover:text-white transition-colors">
              {isTR ? 'Gizlilik Politikası' : 'Privacy Policy'}
            </Link>
            <Link to={`${game.route}/terms`} className="hover:text-white transition-colors">
              {isTR ? 'Kullanım Şartları' : 'Terms of Use'}
            </Link>
            <Link to={`${game.route}/data-deletion`} className="hover:text-white transition-colors">
              {isTR ? 'Veri Silme' : 'Data Deletion'}
            </Link>
            <Link to="/games" className="hover:text-white transition-colors">
              {isTR ? 'Tüm Oyunlar' : 'All Games'}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GameLandingPage;
