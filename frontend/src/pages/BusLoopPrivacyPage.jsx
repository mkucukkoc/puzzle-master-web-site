import React from 'react';
import { Link } from 'react-router-dom';
import BusLoopNav from '@/components/BusLoopNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-[#0c162d] border border-white/10 p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-white">{title}</h3>
    <div className="text-white/80 leading-7 space-y-3">{children}</div>
  </section>
);

const BusLoopPrivacyPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const stored = isTR
    ? [
        'Oyun ilerlemesi: ulaştığınız bölüm ve son kazandığınız bölüm',
        'Altın ve güçlendirici (Karıştır, Mıknatıs, VIP) sayıları',
        'Şanslı Çark’ı en son çevirdiğiniz gün',
        'Ses, müzik, titreşim ve dil tercihleri',
      ]
    : [
        'Game progress: the level you have reached and the last level you won',
        'Coin and booster (Shuffle, Magnet, VIP) counts',
        'The day you last spun the Lucky Wheel',
        'Sound, music, vibration and language preferences',
      ];

  const purposes = isTR
    ? [
        'Oyunu çalıştırmak ve ilerlemenizi cihazınızda saklamak',
        'Ödüllü reklamlarla kazanılan altın, güçlendirici ve çark çevirmelerini vermek',
        'Destek taleplerini yanıtlamak ve yasal yükümlülükleri yerine getirmek',
      ]
    : [
        'Run the game and keep your progress on your device',
        'Grant coins, boosters and wheel spins earned through rewarded ads',
        'Answer support requests and meet legal obligations',
      ];

  return (
    <div className="min-h-screen bg-[#070b16] text-white">
      <BusLoopNav active="privacy" />

      <main className="pt-28 sm:pt-32 pb-12 px-4 sm:px-6 break-words">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#2b2208] via-[#b97a06] to-[#f5a524] p-8 sm:p-10 shadow-[0_24px_60px_rgba(245,165,36,0.25)]">
            <div className="flex items-center gap-4">
              <img
                src="/games/bus-loop/icon.png"
                alt="Bus Loop"
                className="h-12 w-12 rounded-2xl border border-white/20 object-cover"
              />
              <p className="text-[11px] font-black tracking-[0.28em] text-[#fff1cc]">BUS LOOP</p>
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl font-black text-white">
              {isTR ? 'Gizlilik Politikası' : 'Privacy Policy'}
            </h1>
            <p className="mt-3 text-white/80">
              {isTR ? 'Son güncelleme: 10 Ekim 2026' : 'Last updated: October 10, 2026'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? '1. Kapsam' : '1. Scope'}>
              <p>
                {isTR
                  ? 'Bu Gizlilik Politikası, Bus Loop mobil oyununda (otobüs, Tramvay Durağı, Meyve, Sebze ve Hayvan bölümleri, Günlük İkmal ve Şanslı Çark dahil) hangi verilerin işlendiğini, neden işlendiğini ve haklarınızı açıklar.'
                  : 'This Privacy Policy explains what data the Bus Loop mobile game processes (including the bus, Tram Stop, Fruit, Vegetable and Animal levels, the Daily Fuel-Up and the Lucky Wheel), why, and the rights available to you.'}
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
                  ? 'Uygulama reklamlar için Google Mobile Ads (AdMob) hizmetini kullanır. Bu hizmet kendi gizlilik politikasına göre sınırlı teknik veriler işleyebilir. Uygulamada analiz aracı veya uygulama içi satın alma bulunmaz.'
                  : 'The app uses Google Mobile Ads (AdMob) for advertising. This service may process limited technical data under its own privacy policy. The app contains no analytics tools and no in-app purchases.'}
              </p>
            </Section>

            <Section title={isTR ? '5. Reklamlar ve Reklam Kimliği' : '5. Ads and Advertising ID'}>
              <p>
                {isTR
                  ? 'Bus Loop geçiş reklamları ve ödüllü reklamlar gösterebilir. Reklam ortakları; reklam sunumu, ölçüm ve dolandırıcılığı önleme için Android Reklam Kimliği veya iOS reklam tanımlayıcısı gibi cihaz tanımlayıcılarını kullanabilir. Cihaz ayarlarınızdan kişiselleştirilmiş reklamları sınırlandırabilirsiniz.'
                  : 'Bus Loop may show interstitial and rewarded ads. Advertising partners may use device identifiers such as the Android Advertising ID or the iOS advertising identifier for ad delivery, measurement and fraud prevention. You can limit personalized ads in your device settings.'}
              </p>
            </Section>

            <Section title={isTR ? '6. İzinler' : '6. Permissions'}>
              <p>
                {isTR
                  ? 'Bus Loop konum, kamera, mikrofon, kişiler veya medya dosyalarınıza erişim istemez ve bildirim göndermez. İnternet izni reklamlar için, titreşim dokunsal geri bildirim için kullanılır.'
                  : 'Bus Loop does not request access to your location, camera, microphone, contacts or media files, and does not send notifications. Internet access is used for ads, and vibration for haptic feedback.'}
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
                <Link to="/bus-loop/data-deletion" className="text-[#f5a524] font-bold hover:text-white transition-colors">
                  {isTR ? 'Bus Loop Veri Silme Talebi Sayfası' : 'Bus Loop Data Deletion Request Page'}
                </Link>
              </div>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BusLoopPrivacyPage;
