import React from 'react';
import { Link } from 'react-router-dom';
import MinesweeperNav from '@/components/MinesweeperNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-white border border-[#d7e3f4] p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-[#12305f]">{title}</h3>
    <div className="text-[#5a7196] leading-7 space-y-3">{children}</div>
  </section>
);

const MinesweeperPrivacyPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const collected = isTR
    ? [
        'Oyun ilerlemesi, bölüm durumu, bayrak/hamle istatistikleri ve uygulama tercihleri',
        'Cihaz modeli, işletim sistemi, uygulama sürümü, hata günlükleri ve performans sinyalleri',
        'Reklam sunumu, ödüllü reklam tamamlama bilgileri ve reklam kimliği gibi teknik veriler',
        'Giriş yaparsanız hesap veya oturum verileri',
        'Destek için iletişime geçerseniz e-posta adresi ve mesaj içeriği',
      ]
    : [
        'Game progress, level state, flag/move statistics, and app preferences',
        'Device model, operating system, app version, crash logs, and performance signals',
        'Ad delivery, rewarded-ad completion data, and technical data such as advertising identifiers',
        'Account or session data if you sign in',
        'Email address and message content if you contact support',
      ];

  const purposes = isTR
    ? [
        'Oyunu çalıştırmak, ilerlemeyi kaydetmek ve bulmaca akışını sunmak',
        'Reklamları, ödüllü içerikleri ve varsa premium özellikleri sağlamak',
        'Hataları ayıklamak, performansı iyileştirmek ve kötüye kullanımı önlemek',
        'Destek taleplerine yanıt vermek ve yasal yükümlülükleri yerine getirmek',
      ]
    : [
        'Run the game, save progress, and deliver the puzzle flow',
        'Provide ads, rewarded content, and any premium features where available',
        'Debug issues, improve performance, and prevent misuse',
        'Respond to support requests and comply with legal obligations',
      ];

  return (
    <div className="min-h-screen bg-[#f7fbff] text-[#12305f]">
      <MinesweeperNav active="privacy" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#0b2558] via-[#143a85] to-[#2d63db] p-8 sm:p-10 shadow-[0_24px_60px_rgba(18,48,95,0.28)]">
            <div className="flex items-center gap-4">
              <div className="grid grid-cols-2 gap-1.5">
                <span className="h-6 w-6 rounded-md bg-[#4bb2ff] shadow-[inset_0_2px_0_rgba(255,255,255,0.45)]" />
                <span className="h-6 w-6 rounded-md bg-[#ff8d5a] shadow-[inset_0_2px_0_rgba(255,255,255,0.45)]" />
                <span className="h-6 w-6 rounded-md bg-[#dfe9ff] shadow-[inset_0_2px_0_rgba(255,255,255,0.65)]" />
                <span className="h-6 w-6 rounded-md bg-[#ffffff] shadow-[inset_0_2px_0_rgba(255,255,255,0.65)]" />
              </div>
              <p className="text-[11px] font-black tracking-[0.28em] text-[#cae0ff]">MINESWEEPER</p>
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl font-black text-white">
              {isTR ? 'Gizlilik Politikası' : 'Privacy Policy'}
            </h1>
            <p className="mt-3 text-white/70">
              {isTR ? 'Son güncelleme: 25 Temmuz 2026' : 'Last updated: July 25, 2026'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? '1. Kapsam' : '1. Scope'}>
              <p>
                {isTR
                  ? 'Bu Gizlilik Politikası, Minesweeper: Mine Quest mobil oyunu ve ilişkili web sayfaları kapsamında hangi verilerin işlenebileceğini, bunların neden işlenebileceğini ve kullanıcıların hangi haklara sahip olabileceğini açıklar.'
                  : 'This Privacy Policy explains what data may be processed in connection with the Minesweeper: Mine Quest mobile game and related web pages, why it may be processed, and what rights users may have.'}
              </p>
            </Section>

            <Section title={isTR ? '2. İşleyebileceğimiz Veriler' : '2. Data We May Process'}>
              <ul className="list-disc list-inside space-y-2">
                {collected.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section title={isTR ? '3. Verileri Nasıl Kullanırız' : '3. How We Use Data'}>
              <ul className="list-disc list-inside space-y-2">
                {purposes.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section title={isTR ? '4. Üçüncü Taraf Hizmetleri' : '4. Third-Party Services'}>
              <p>
                {isTR
                  ? 'Uygulama; reklam sunumu, ödüllü reklamlar, hata raporlama, analiz, mağaza doğrulaması, puan tablosu veya giriş işlevleri için üçüncü taraf hizmetleri kullanabilir. Bu hizmetler, kendi politikalarına tabi olarak sınırlı teknik verileri işleyebilir.'
                  : 'The app may use third-party services for ad delivery, rewarded ads, crash reporting, analytics, store validation, leaderboards, or sign-in features. These services may process limited technical data under their own policies.'}
              </p>
            </Section>

            <Section title={isTR ? '5. Reklamlar ve Reklam Kimliği' : '5. Ads and Advertising ID'}>
              <p>
                {isTR
                  ? 'Minesweeper: Mine Quest reklamlar ve ödüllü reklamlar gösterebilir. Reklam ortakları, reklam sunumu, ölçüm, dolandırıcılığı önleme ve uyumluluk için Android Reklam Kimliği gibi cihaz tanımlayıcılarını kullanabilir.'
                  : 'Minesweeper: Mine Quest may show ads and rewarded ads. Advertising partners may use device identifiers, including the Android Advertising ID, for ad delivery, measurement, fraud prevention, and compliance.'}
              </p>
            </Section>

            <Section title={isTR ? '6. Saklama ve Silme' : '6. Retention and Deletion'}>
              <p>
                {isTR
                  ? 'Yerel oyun ilerlemesi cihazınızda saklanabilir. Sunucu tarafında işlenen destek, reklam, giriş veya teknik kayıtlar yalnızca gerekli olduğu süre boyunca tutulur. Doğrulanmış veri silme talepleri genellikle 30 gün içinde işlenir; yedek kopyalar rutin döngülerle en geç 90 gün içinde kaldırılabilir.'
                  : 'Local game progress may be stored on your device. Server-side support, ad, sign-in, or technical records are kept only as long as needed. Verified data deletion requests are usually processed within 30 days; residual backup copies may be removed within 90 days through routine cycles.'}
              </p>
            </Section>

            <Section title={isTR ? '7. Çocukların Gizliliği' : "7. Children's Privacy"}>
              <p>
                {isTR
                  ? 'Oyun genel kitleye yöneliktir ve 13 yaş altındaki çocuklardan bilerek kişisel veri toplamayı amaçlamaz. Böyle bir veri işlendiğini öğrenirsek silmek için makul adımları atarız.'
                  : 'The game is intended for a general audience and does not knowingly seek to collect personal data from children under 13. If we learn such data has been processed, we will take reasonable steps to delete it.'}
              </p>
            </Section>

            <Section title={isTR ? '8. Haklarınız' : '8. Your Rights'}>
              <p>
                {isTR
                  ? 'Geçerli mevzuata göre verilerinize erişme, düzeltme, silme veya işleme itiraz etme haklarınız olabilir. Veri silme bağlantısını kullanabilir veya destek e-postası üzerinden bize ulaşabilirsiniz.'
                  : 'Depending on applicable law, you may have rights to access, correct, delete, or object to the processing of your data. You can use the data deletion link or contact us by support email.'}
              </p>
            </Section>

            <Section title={isTR ? '9. İletişim' : '9. Contact'}>
              <p>
                {isTR
                  ? 'Gizlilik ile ilgili sorular için: iammustafakucukkoc@gmail.com'
                  : 'Questions about privacy: iammustafakucukkoc@gmail.com'}
              </p>
              <Link to="/minesweeper/data-deletion" className="text-[#2d63db] font-bold hover:text-[#12305f] transition-colors">
                {isTR ? 'Veri Silme Talebi' : 'Data Deletion Request'}
              </Link>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MinesweeperPrivacyPage;
