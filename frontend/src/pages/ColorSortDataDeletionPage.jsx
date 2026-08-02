import React, { useState } from 'react';
import ColorSortNav from '@/components/ColorSortNav';
import { useLanguage } from '@/context/LanguageContext';

const ColorSortDataDeletionPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#070b16] text-white">
      <ColorSortNav active="dataDeletion" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#082f49] via-[#0e7490] to-[#06b6d4] p-8 sm:p-10 shadow-[0_24px_60px_rgba(6,182,212,0.25)]">
            <div className="flex items-center gap-4">
              <img
                src="/games/color-sort/icon.png"
                alt="Color Sort: Water Puzzle"
                className="h-12 w-12 rounded-2xl border border-white/20 object-cover"
              />
              <p className="text-[11px] font-black tracking-[0.28em] text-[#e0f2fe]">COLOR SORT</p>
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl font-black text-white">
              {isTR ? 'Veri Silme Talebi' : 'Data Deletion Request'}
            </h1>
            <p className="mt-3 text-white/80">
              {isTR
                ? 'Color Sort: Water Puzzle uygulamasıyla ilgili veri silme talebinizi iletin.'
                : 'Submit your data deletion request for Color Sort: Water Puzzle.'}
            </p>
          </div>

          <div className="rounded-[1.5rem] bg-[#0c162d] border border-white/10 p-6 sm:p-8 shadow-lg">
            {submitted ? (
              <div className="text-center py-6">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#06b6d4]/20 text-[#06b6d4] mb-4">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-white">
                  {isTR ? 'Talebiniz Alındı' : 'Request Submitted'}
                </h3>
                <p className="mt-2 text-white/70">
                  {isTR
                    ? 'Veri silme talebiniz başarıyla iletilmiştir. En kısa sürede işleme konulacaktır.'
                    : 'Your data deletion request has been submitted and will be processed shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                    {isTR ? 'E-posta Adresiniz' : 'Your Email Address'}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="example@domain.com"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-[#06b6d4] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                    {isTR ? 'Not / Açıklama (İsteğe Bağlı)' : 'Notes / Description (Optional)'}
                  </label>
                  <textarea
                    rows={4}
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    placeholder={isTR ? 'Eklemek istediğiniz notlar...' : 'Any details to specify...'}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-[#06b6d4] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#06b6d4] py-3.5 font-bold text-white shadow-lg transition-all hover:bg-[#0891b2]"
                >
                  {isTR ? 'Talebi Gönder' : 'Submit Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ColorSortDataDeletionPage;
