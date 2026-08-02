import React from 'react';
import { Link } from 'react-router-dom';
import ColorSortNav from '@/components/ColorSortNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-[#0c162d] border border-white/10 p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-white">{title}</h3>
    <div className="text-white/80 leading-7 space-y-3">{children}</div>
  </section>
);

const ColorSortPrivacyPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const collected = isTR
    ? [
        'Oyun ilerlemesi, tüp durumları, yıldızlar ve uygulama tercihleri (cihazınızda yerel saklanır)',
        'Cihaz modeli, işletim sistemi, uygulama sürümü, hata kayıtları ve performans verileri',
        'Google Mobile Ads aracılığıyla reklam gösterimi, etkileşimler ve Reklam Kimliği gibi teknik tanımlayıcılar',
        'Destek talebi gönderirseniz e-posta adresi ve mesaj içeriği',
      ]
    : [
        'Game progress, tube states, stars, and app preferences (stored locally on your device)',
        'Device model, operating system, app version, crash logs, and performance data',
        'Ad delivery, interaction metrics, and technical identifiers such as Advertising ID via Google Mobile Ads',
        'Email address and message content if you contact support',
      ];

  const purposes = isTR
    ? [
        'Oyunu çalıştırmak ve renk sıralama seviye ilerlemesini aynı cihazda korumak',
        'Kullanıcı tercihlerine göre reklamları ve ödüllü reklam özelliklerini sunmak',
        'Hataları gidermek, performansı artırmak ve haksız kullanımı önlemek',
        'Destek taleplerini yanıtlamak ve yasal yükümlülükleri yerine getirmek',
      ]
    : [
        'Run the game and save color sorting level progress on your device',
        'Deliver ads and rewarded ad features based on user preferences',
        'Debug issues, improve performance, and prevent fraud or misuse',
        'Respond to support requests and meet legal compliance',
      ];

  return (
    <div className="min-h-screen bg-[#070b16] text-white">
      <ColorSortNav active="privacy" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
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
              {isTR ? 'Gizlilik Politikası' : 'Privacy Policy'}
            </h1>
            <p className="mt-3 text-white/80">
              {isTR ? 'Son güncelleme: 2 Ağustos 2026' : 'Last updated: August 2, 2026'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? '1. Kapsam' : '1. Scope'}>
              <p>
                {isTR
                  ? 'Bu Gizlilik Politikası, Color Sort: Water Puzzle mobil oyunu ve ilgili web sayfalarında hangi verilerin işlenebileceğini, neden işlendiğini ve kullanıcı seçeneklerini açıklar.'
                  : 'This Privacy Policy explains what data may be processed in connection with the Color Sort: Water Puzzle mobile game and related web pages, why it is processed, and user rights.'}
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
                  ? 'Color Sort konum, kamera, mikrofon, kişiler veya medya dosyalarınıza erişim istemez. İnternet ve ağ durumu izinleri reklam hizmetleri için, titreşim izni ise dokunsal geri bildirim için kullanılır.'
                  : 'Color Sort does not request access to location, camera, microphone, contacts, or media files. Internet and network state permissions are used for ad delivery, and vibration permission is used for optional haptic feedback.'}
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
                  ? 'Yerel oyun verileri cihazınızda saklanır ve uygulama kaldırıldığında veya uygulama verisi temizlendiğinde silinir.'
                  : 'Local game data is stored on your device and deleted when the app is uninstalled or app storage cleared.'}
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
                <Link to="/color-sort/data-deletion" className="text-[#06b6d4] font-bold hover:text-white transition-colors">
                  {isTR ? 'Color Sort Veri Silme Talebi Sayfası' : 'Color Sort Data Deletion Request Page'}
                </Link>
              </div>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ColorSortPrivacyPage;
