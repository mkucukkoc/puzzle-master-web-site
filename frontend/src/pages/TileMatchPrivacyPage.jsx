import React from 'react';
import { Link } from 'react-router-dom';
import TileMatchNav from '@/components/TileMatchNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-white border border-[#bbf7d0] p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-[#052e16]">{title}</h3>
    <div className="text-[#365314] leading-7 space-y-3">{children}</div>
  </section>
);

const TileMatchPrivacyPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const collected = isTR
    ? [
        'Oyun ilerlemesi, seviye durumu, yıldızlar, açılan temalar ve uygulama tercihleri (cihazınızda yerel saklanır)',
        'Cihaz modeli, işletim sistemi, uygulama sürümü, hata kayıtları ve performans verileri',
        'Google Mobile Ads aracılığıyla reklam gösterimi, etkileşimler ve Android Reklam Kimliği gibi teknik tanımlayıcılar',
        'Destek talebi gönderirseniz e-posta adresi ve mesaj içeriği',
      ]
    : [
        'Game progress, level state, stars, unlocked themes, and app preferences (stored locally on your device)',
        'Device model, operating system, app version, crash logs, and performance data',
        'Ad delivery, interaction metrics, and technical identifiers such as Android Advertising ID via Google Mobile Ads',
        'Email address and message content if you contact support',
      ];

  const purposes = isTR
    ? [
        'Oyunu çalıştırmak, seviye ilerlemesini ve yıldızları aynı cihazda korumak',
        'Kullanıcı tercihlerine göre reklamları ve ödüllü reklam özelliklerini sunmak',
        'Hataları gidermek, performansı artırmak ve haksız kullanımı önlemek',
        'Destek taleplerini yanıtlamak ve yasal yükümlülükleri yerine getirmek',
      ]
    : [
        'Run the game, save level progress and stars on your device',
        'Deliver ads and rewarded ad features based on user preferences',
        'Debug issues, improve performance, and prevent fraud or misuse',
        'Respond to support requests and meet legal compliance',
      ];

  return (
    <div className="min-h-screen bg-[#f0fdf4] text-[#052e16]">
      <TileMatchNav active="privacy" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#052e16] via-[#14532d] to-[#16a34a] p-8 sm:p-10 shadow-[0_24px_60px_rgba(5,46,22,0.28)]">
            <div className="flex items-center gap-4">
              <img
                src="/games/tile-match/icon.png"
                alt="Triple Grove: Tile Match"
                className="h-12 w-12 rounded-2xl border border-white/20 object-cover"
              />
              <p className="text-[11px] font-black tracking-[0.28em] text-[#bbf7d0]">TRIPLE GROVE</p>
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl font-black text-white">
              {isTR ? 'Gizlilik Politikası' : 'Privacy Policy'}
            </h1>
            <p className="mt-3 text-white/70">
              {isTR ? 'Son güncelleme: 28 Temmuz 2026' : 'Last updated: July 28, 2026'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? '1. Kapsam' : '1. Scope'}>
              <p>
                {isTR
                  ? 'Bu Gizlilik Politikası, Triple Grove: Tile Match mobil oyunu ve ilgili web sayfalarında hangi verilerin işlenebileceğini, neden işlendiğini ve kullanıcı seçeneklerini açıklar.'
                  : 'This Privacy Policy explains what data may be processed in connection with the Triple Grove: Tile Match mobile game and related web pages, why it is processed, and user rights.'}
              </p>
            </Section>

            <Section title={isTR ? '2. İşlenen Veriler' : '2. Data We Process'}>
              <ul className="list-disc list-inside space-y-2">
                {collected.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section title={isTR ? '3. Veri İşleme Amaçları' : '3. Purposes of Processing'}>
              <ul className="list-disc list-inside space-y-2">
                {purposes.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section title={isTR ? '4. İzinler' : '4. Permissions'}>
              <p>
                {isTR
                  ? 'Triple Grove konum, kamera, mikrofon, kişiler veya medya dosyalarınıza erişim istemez. İnternet ve ağ durumu izinleri reklam hizmetleri için, titreşim izni ise dokunsal geri bildirim için kullanılır.'
                  : 'Triple Grove does not request access to location, camera, microphone, contacts, or media files. Internet and network state permissions are used for ad delivery, and vibration permission is used for optional haptic feedback.'}
              </p>
            </Section>

            <Section title={isTR ? '5. Reklamlar ve Üçüncü Taraf SDK’lar' : '5. Ads and Third-Party SDKs'}>
              <p>
                {isTR
                  ? 'Uygulama, reklam gösterimi için Google Mobile Ads kullanabilir. Reklam sağlayıcıları reklam kimliği, cihaz bilgisi, IP adresi ve reklam etkileşim verilerini işleyebilir.'
                  : 'The app may use Google Mobile Ads to deliver advertisements. Advertising providers may process advertising IDs, device specifications, IP address, and interaction metrics.'}
              </p>
            </Section>

            <Section title={isTR ? '6. Saklama ve Silme' : '6. Retention and Deletion'}>
              <p>
                {isTR
                  ? 'Yerel oyun verileri cihazınızda saklanır ve uygulama kaldırıldığında veya uygulama verisi temizlendiğinde silinir. Destek talepleri ve iletişim kayıtları yalnızca yanıt vermek için tutulur.'
                  : 'Local game data is stored on your device and deleted when the app is uninstalled or app storage cleared. Support records are kept only as needed to fulfill your inquiry.'}
              </p>
            </Section>

            <Section title={isTR ? '7. Çocukların Gizliliği' : "7. Children's Privacy"}>
              <p>
                {isTR
                  ? 'Oyun genel kitleye yöneliktir ve 13 yaş altındaki çocuklardan bilerek kişisel veri toplamayı amaçlamaz.'
                  : 'The game is intended for a general audience and does not knowingly collect personal data from children under 13.'}
              </p>
            </Section>

            <Section title={isTR ? '8. İletişim ve Veri Silme' : '8. Contact & Data Requests'}>
              <p>
                {isTR
                  ? 'Gizlilik sorularınız ve veri silme talepleriniz için: iammustafakucukkoc@gmail.com'
                  : 'For privacy questions or data deletion requests: iammustafakucukkoc@gmail.com'}
              </p>
              <div className="mt-3">
                <Link to="/tile-match/data-deletion" className="text-[#16a34a] font-bold hover:text-[#052e16] transition-colors">
                  {isTR ? 'Triple Grove Veri Silme Talebi Sayfası' : 'Triple Grove Data Deletion Request Page'}
                </Link>
              </div>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TileMatchPrivacyPage;
