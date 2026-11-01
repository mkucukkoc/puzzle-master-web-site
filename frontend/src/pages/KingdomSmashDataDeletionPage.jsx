import React, { useState } from 'react';
import KingdomSmashNav from '@/components/KingdomSmashNav';
import { useLanguage } from '@/context/LanguageContext';

const SUPPORT_EMAIL = 'iammustafakucukkoc@gmail.com';

const KingdomSmashDataDeletionPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [player, setPlayer] = useState('');

  // The request goes out as an email from the user's own mail app, so it
  // reaches support; nothing is stored on this site.
  const handleSubmit = e => {
    e.preventDefault();
    const subject = 'Kingdom Smash - Data Deletion Request';
    const body = `Email: ${email}\nPlayer name / username: ${player}\n\n${notes}`;
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#14050c] text-white">
      <KingdomSmashNav active="dataDeletion" />

      <main className="pt-28 sm:pt-32 pb-12 px-4 sm:px-6 break-words">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#4e0418] via-[#a50e2e] to-[#f5b52c] p-8 sm:p-10 shadow-[0_24px_60px_rgba(245,181,44,0.25)]">
            <div className="flex items-center gap-4">
              <img
                src="/games/kingdom-smash/icon.png"
                alt="Kingdom Smash"
                className="h-12 w-12 rounded-2xl border border-white/20 object-cover"
              />
              <p className="text-[11px] font-black tracking-[0.28em] text-[#fff1cc]">KINGDOM SMASH</p>
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl font-black text-white">
              {isTR ? 'Veri Silme Talebi' : 'Data Deletion Request'}
            </h1>
            <p className="mt-3 text-white/80">
              {isTR
                ? 'Kingdom Smash hesabınızın, bulut kaydınızın ve sıralama kaydınızın silinmesini isteyin. Talebiniz doğrulandıktan sonra 30 gün içinde silinir.'
                : 'Ask for your Kingdom Smash account, cloud save and leaderboard entry to be deleted. They are deleted within 30 days of your verified request.'}
            </p>
          </div>

          <div className="rounded-[1.5rem] bg-[#22091a] border border-white/10 p-6 sm:p-8 shadow-lg">
            {submitted ? (
              <div className="text-center py-6">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#f5b52c]/20 text-[#f5b52c] mb-4">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-white">
                  {isTR ? 'Talebiniz Hazır' : 'Request Ready'}
                </h3>
                <p className="mt-2 text-white/70">
                  {isTR
                    ? `E-posta uygulamanızda talebiniz hazırlandı; göndermeniz yeterli. Açılmadıysa ${SUPPORT_EMAIL} adresine yazabilirsiniz.`
                    : `Your request has been prepared in your email app; just send it. If it did not open, write to ${SUPPORT_EMAIL}.`}
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
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-[#f5b52c] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                    {isTR ? 'Oyundaki Profil Adınız / Kullanıcı Adınız' : 'Your In-Game Profile Name / Username'}
                  </label>
                  <input
                    type="text"
                    required
                    value={player}
                    onChange={e => setPlayer(e.target.value)}
                    placeholder={isTR ? 'Ör. Player4821' : 'e.g. Player4821'}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-[#f5b52c] focus:outline-none"
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
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-[#f5b52c] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#f5b52c] py-3.5 font-bold text-white shadow-lg transition-all hover:bg-[#d9961a]"
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

export default KingdomSmashDataDeletionPage;
