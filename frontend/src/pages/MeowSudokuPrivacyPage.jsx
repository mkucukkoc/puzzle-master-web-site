import React from 'react';
import { Link } from 'react-router-dom';
import MeowSudokuNav from '@/components/MeowSudokuNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-[#0c162d] border border-white/10 p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-white">{title}</h3>
    <div className="text-white/80 leading-7 space-y-3">{children}</div>
  </section>
);

const MeowSudokuPrivacyPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const stored = isTR
    ? [
        'Oyun ilerlemesi: açılan bölümler, yıldızlar, en iyi süre ve puanlar, kartpostal galerisi',
        'Klasik Sudoku bölümleri ve günlük görev takvimindeki tamamlanan günler',
        'Can ve ipucu sayıları, seri bilgisi',
        'Ses, müzik, titreşim, dil ve tema tercihleri',
      ]
    : [
        'Game progress: unlocked levels, stars, best times and scores, the postcard gallery',
        'Classic Sudoku levels and the completed days of the Daily Challenges calendar',
        'Heart and hint counts, and your streak',
        'Sound, music, vibration, language and theme preferences',
      ];

  const purposes = isTR
    ? [
        'Oyunu çalıştırmak ve ilerlemenizi cihazınızda saklamak',
        'Ödüllü reklamlarla kazanılan ipucu ve canları vermek',
        'İsteğe bağlı günlük hatırlatma bildirimlerini göndermek',
        'Destek taleplerini yanıtlamak ve yasal yükümlülükleri yerine getirmek',
      ]
    : [
        'Run the game and keep your progress on your device',
        'Grant hints and hearts earned through rewarded ads',
        'Send optional daily reminder notifications',
        'Answer support requests and meet legal obligations',
      ];

  return (
    <div className="min-h-screen bg-[#070b16] text-white">
      <MeowSudokuNav active="privacy" />

      <main className="pt-28 sm:pt-32 pb-12 px-4 sm:px-6 break-words">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#1f1336] via-[#5b21b6] to-[#8b5cf6] p-8 sm:p-10 shadow-[0_24px_60px_rgba(139,92,246,0.25)]">
            <div className="flex items-center gap-4">
              <img
                src="/games/meow-sudoku/icon.png"
                alt="Meow Sudoku"
                className="h-12 w-12 rounded-2xl border border-white/20 object-cover"
              />
              <p className="text-[11px] font-black tracking-[0.28em] text-[#ede4ff]">MEOW SUDOKU</p>
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl font-black text-white">
              {isTR ? 'Gizlilik Politikası' : 'Privacy Policy'}
            </h1>
            <p className="mt-3 text-white/80">
              {isTR ? 'Son güncelleme: 30 Eylül 2026' : 'Last updated: September 30, 2026'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? '1. Kapsam' : '1. Scope'}>
              <p>
                {isTR
                  ? 'Bu Gizlilik Politikası, Meow Sudoku mobil oyununda (Meow bulmacaları, klasik Sudoku bölümleri ve günlük görevler dahil) hangi verilerin işlendiğini, neden işlendiğini ve haklarınızı açıklar.'
                  : 'This Privacy Policy explains what data the Meow Sudoku mobile game processes (including the Meow puzzles, the classic Sudoku levels and the Daily Challenges), why, and the rights available to you.'}
              </p>
            </Section>

            <Section title={isTR ? '2. Hangi Veriler İşlenir' : '2. Data We Process'}>
              <p>
                {isTR
                  ? 'Aşağıdakiler yalnızca cihazınızda saklanır; sunucularımıza gönderilmez:'
                  : 'The following is stored only on your device and is not sent to our servers:'}
              </p>
              <ul className="list-disc list-inside space-y-2">
                {stored.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                {isTR
                  ? 'Hesap açmanız gerekmez; adınızı, e-postanızı veya konumunuzu istemeyiz. Reklam gösterimi için reklam ortağımız cihaz ve reklam kimliği gibi sınırlı teknik veriler işleyebilir. Destek için bize yazarsanız e-posta adresiniz ve mesajınız işlenir.'
                  : 'No account is needed, and we do not ask for your name, email or location. To show ads, our advertising partner may process limited technical data such as device and advertising identifiers. If you email support, we process your email address and message.'}
              </p>
            </Section>

            <Section title={isTR ? '3. Verileri Neden Kullanırız' : '3. How We Use Data'}>
              <ul className="list-disc list-inside space-y-2">
                {purposes.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section title={isTR ? '4. Üçüncü Taraf Hizmetler' : '4. Third-Party Services'}>
              <p>
                {isTR
                  ? 'Uygulama reklamlar için Google Mobile Ads (AdMob) hizmetini, değerlendirme penceresi için App Store ve Google Play hizmetlerini kullanır. Bu hizmetler kendi gizlilik politikalarına göre sınırlı teknik veriler işleyebilir. Uygulamada analiz aracı veya uygulama içi satın alma bulunmaz.'
                  : 'The app uses Google Mobile Ads (AdMob) for advertising, and App Store / Google Play services for the rating prompt. These services may process limited technical data under their own privacy policies. The app contains no analytics tools and no in-app purchases.'}
              </p>
            </Section>

            <Section title={isTR ? '5. Reklamlar ve Reklam Kimliği' : '5. Ads and Advertising ID'}>
              <p>
                {isTR
                  ? 'Meow Sudoku geçiş reklamları ve ödüllü reklamlar gösterebilir. Reklam ortakları; reklam sunumu, ölçüm ve dolandırıcılığı önleme için Android Reklam Kimliği veya iOS reklam tanımlayıcısı gibi cihaz tanımlayıcılarını kullanabilir. Cihaz ayarlarınızdan kişiselleştirilmiş reklamları sınırlandırabilirsiniz.'
                  : 'Meow Sudoku may show interstitial and rewarded ads. Advertising partners may use device identifiers such as the Android Advertising ID or the iOS advertising identifier for ad delivery, measurement and fraud prevention. You can limit personalized ads in your device settings.'}
              </p>
            </Section>

            <Section title={isTR ? '6. İzinler ve Bildirimler' : '6. Permissions and Notifications'}>
              <p>
                {isTR
                  ? 'Meow Sudoku konum, kamera, mikrofon, kişiler veya medya dosyalarınıza erişim istemez. İnternet izni reklamlar için, titreşim dokunsal geri bildirim için kullanılır. İzin verirseniz seri hatırlatmaları gibi yerel bildirimler gösteririz; bu bildirimler cihazınızda oluşturulur ve izni istediğiniz zaman cihaz ayarlarından kapatabilirsiniz.'
                  : 'Meow Sudoku does not request access to your location, camera, microphone, contacts or media files. Internet access is used for ads, and vibration for haptic feedback. If you allow it, we show local notifications such as streak reminders; they are created on your device, and you can turn the permission off at any time in your device settings.'}
              </p>
            </Section>

            <Section title={isTR ? '7. Çocukların Gizliliği' : "7. Children's Privacy"}>
              <p>
                {isTR
                  ? 'Oyun genel kitleye yöneliktir ve 13 yaş altındaki çocuklardan bilerek kişisel veri toplamaz. Böyle bir verinin işlendiğini öğrenirsek silmek için makul adımları atarız.'
                  : 'The game is intended for a general audience and does not knowingly collect personal data from children under 13. If we learn such data has been processed, we will take reasonable steps to delete it.'}
              </p>
            </Section>

            <Section title={isTR ? '8. Saklama, Silme ve Haklarınız' : '8. Retention, Deletion and Your Rights'}>
              <p>
                {isTR
                  ? 'Oyun verileriniz cihazınızda durur; uygulamayı silmek bu verileri de siler. Geçerli mevzuata göre verilerinize erişme, düzeltme, silme veya işlemeye itiraz etme haklarınız olabilir.'
                  : 'Your game data stays on your device; deleting the app deletes it too. Depending on applicable law, you may have rights to access, correct, delete, or object to the processing of your data.'}
              </p>
            </Section>

            <Section title={isTR ? '9. İletişim ve Veri Silme' : '9. Contact & Data Requests'}>
              <p>
                {isTR
                  ? 'Gizlilik sorularınız ve veri silme talepleriniz için: iammustafakucukkoc@gmail.com'
                  : 'For privacy questions or data deletion requests: iammustafakucukkoc@gmail.com'}
              </p>
              <div className="mt-3">
                <Link to="/meow-sudoku/data-deletion" className="text-[#8b5cf6] font-bold hover:text-white transition-colors">
                  {isTR ? 'Meow Sudoku Veri Silme Talebi Sayfası' : 'Meow Sudoku Data Deletion Request Page'}
                </Link>
              </div>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MeowSudokuPrivacyPage;
