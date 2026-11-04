import React, { useState } from 'react';
import KingdomSmashNav from '@/components/KingdomSmashNav';
import { useLanguage } from '@/context/LanguageContext';

const SUPPORT_EMAIL = 'iammustafakucukkoc@gmail.com';
// The game server's own deletion page: an account is deleted at once with its username and password.
const DELETE_NOW_URL = 'https://smash-backend-3056.onrender.com/account/delete';

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
              {isTR ? 'Hesap ve Veri Silme' : 'Account and Data Deletion'}
            </h1>
            <p className="mt-3 text-white/80">
              {isTR
                ? 'Kingdom Smash hesabınızı ve oyun verilerinizi aşağıdaki yollardan biriyle silebilirsiniz.'
                : 'Delete your Kingdom Smash account and game data in one of the ways below.'}
            </p>
          </div>

          <div className="mb-6 rounded-[1.5rem] bg-[#22091a] border border-white/10 p-6 sm:p-8 shadow-lg space-y-4">
            <h2 className="text-xl font-black text-[#f5b52c]">{isTR ? '1. Hemen silin' : '1. Delete it now'}</h2>
            <p className="text-white/80">
              {isTR ? 'Oyunun içinden, hesabınız olsun ya da olmasın:' : 'In the game, with or without an account:'}
            </p>
            <ol className="list-decimal pl-6 space-y-1 text-white/80">
              <li>{isTR ? 'Kingdom Smash’i açın.' : 'Open Kingdom Smash.'}</li>
              <li>{isTR ? 'Ana sayfada sağ üstteki dişliye dokunun (Ayarlar).' : 'Tap the gear at the top right of the home page (Settings).'}</li>
              <li>{isTR ? '“Delete Account”a dokunun ve “Delete for good” ile onaylayın.' : 'Tap “Delete Account” and confirm with “Delete for good”.'}</li>
            </ol>
            <p className="text-white/80">
              {isTR
                ? 'Kullanıcı adı ve şifreyle bir hesap oluşturduysanız, oyun olmadan da buradan silebilirsiniz:'
                : 'If you made an account with a username and password, you can also delete it here without the game:'}
            </p>
            <a
              href={DELETE_NOW_URL}
              className="block w-full rounded-xl bg-[#d6283a] py-3.5 text-center font-bold text-white shadow-lg transition-all hover:bg-[#b51e2f]"
            >
              {isTR ? 'Hesabımı şimdi sil' : 'Delete my account now'}
            </a>
            <p className="text-white/60 text-sm">
              {isTR ? 'Bu iki yoldan biriyle silme anında gerçekleşir.' : 'Either way, the deletion happens at once.'}
            </p>
          </div>

          <div className="mb-6 rounded-[1.5rem] bg-[#22091a] border border-white/10 p-6 sm:p-8 shadow-lg space-y-3">
            <h2 className="text-xl font-black text-[#f5b52c]">{isTR ? 'Neler silinir, neler saklanır' : 'What is deleted and what is kept'}</h2>
            <p className="font-bold text-white">{isTR ? 'Kalıcı olarak silinenler:' : 'Deleted for good:'}</p>
            <ul className="list-disc pl-6 space-y-1 text-white/80">
              <li>{isTR ? 'Oyuncu kimliğiniz, kullanıcı adınız ve şifreniz' : 'Your player ID, username and password'}</li>
              <li>{isTR ? 'Bulut kaydınız (bölümler, altınlar, güçlendiriciler ve tüm oyun ilerlemesi)' : 'Your cloud save (levels, coins, boosters and all game progress)'}</li>
              <li>{isTR ? 'Profil adınız, avatarınız ve dünya sıralamasındaki yeriniz' : 'Your profile name, avatar and place on the world leaderboard'}</li>
              <li>{isTR ? 'Davet kodunuz ve davet bilgileriniz' : 'Your invite code and invite details'}</li>
            </ul>
            <p className="font-bold text-white">{isTR ? 'Saklananlar ve süreleri:' : 'Kept, and for how long:'}</p>
            <ul className="list-disc pl-6 space-y-1 text-white/80">
              <li>{isTR ? 'Satın alma kayıtları (ürün, sipariş numarası, tarih): iadeler, dolandırıcılık kontrolü ve vergi mevzuatı için 10 yıla kadar; artık hesabınıza bağlı değildir.' : 'Purchase records (product, order number, date): up to 10 years for refunds, fraud checks and tax law; no longer tied to your account.'}</li>
              <li>{isTR ? 'Sunucu kayıtları (loglar): 30 gün sonra kendiliğinden silinir.' : 'Server logs: deleted by themselves after 30 days.'}</li>
              <li>{isTR ? 'Çökme raporları (Firebase Crashlytics): en fazla 90 gün.' : 'Crash reports (Firebase Crashlytics): up to 90 days.'}</li>
            </ul>
          </div>

          <h2 className="mb-3 text-xl font-black text-[#f5b52c]">{isTR ? '2. E-postayla talep edin' : '2. Ask by email'}</h2>
          <p className="mb-4 text-white/70">
            {isTR
              ? 'Oyuna giremiyorsanız veya bir sorun yaşıyorsanız talebinizi bize gönderin; doğruladıktan sonra 30 gün içinde sileriz.'
              : 'If you cannot open the game or something goes wrong, send us your request; we delete your data within 30 days of verifying it.'}
          </p>

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
