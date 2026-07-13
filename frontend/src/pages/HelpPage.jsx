import React from 'react';
import { Link } from 'react-router-dom';
import BrandNav from '@/components/BrandNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-white border border-[#d6e8e4] p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-[#1f3d3a]">{title}</h3>
    <div className="text-[#8a9d9a] leading-7 space-y-3">{children}</div>
  </section>
);

const HelpPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const quickStartItems = isTR
    ? [
        'Seviyeyi açın ve okların yönlerini inceleyin.',
        'Önünde başka ok olmayan, dışarı çıkabilecek oku seçin.',
        'Yanlış seçim can kaybettirir; doğru sırayla tüm tahtayı temizleyin.',
        'Takılırsanız ipucu veya ödüllü reklam seçeneklerini kullanın.',
      ]
    : [
        'Open a level and study the arrow directions.',
        'Select an arrow that can exit without another arrow blocking it.',
        'Wrong moves cost hearts; clear the board in the right order.',
        'Use hints or rewarded ad options if you get stuck.',
      ];

  const googlePlaySteps = isTR
    ? [
        'Google Play Store uygulamasını açın',
        'Profil simgenize dokunun',
        'Ödemeler ve Abonelikler bölümüne girin',
        'Abonelikler altında Arrows Puzzle Master seçeneğini bulun',
        'Aboneliği İptal Et seçeneğini takip edin',
      ]
    : [
        'Open the Google Play Store app',
        'Tap your profile icon',
        'Go to Payments & Subscriptions',
        'Find Arrows Puzzle Master under Subscriptions',
        'Follow Cancel Subscription',
      ];

  const appStoreSteps = isTR
    ? [
        'Ayarlar uygulamasını açın',
        'Apple Kimliğinize dokunun',
        'Abonelikler bölümüne girin',
        'Arrows Puzzle Master aboneliğini seçin',
        'Aboneliği İptal Et seçeneğini onaylayın',
      ]
    : [
        'Open Settings',
        'Tap your Apple ID',
        'Go to Subscriptions',
        'Select the Arrows Puzzle Master subscription',
        'Confirm Cancel Subscription',
      ];

  const faqItems = isTR
    ? [
        {
          question: 'Ok neden hareket etmiyor?',
          answer: 'Okun çıkış yönünde başka bir ok veya tahta sınırı içinde engel varsa o hamle yapılamaz.',
        },
        {
          question: 'Canlarım biterse ne olur?',
          answer: 'Seviyeyi yeniden başlatabilir veya sunuluyorsa ödüllü reklamla devam edebilirsiniz.',
        },
        {
          question: 'İlerlemem kayboldu, neden?',
          answer: 'Uygulama verisini silmek, cihaz değiştirmek veya yerel kayıtların temizlenmesi ilerlemeyi etkileyebilir.',
        },
      ]
    : [
        {
          question: 'Why does an arrow not move?',
          answer: 'If another arrow blocks its exit direction, that move is not available.',
        },
        {
          question: 'What happens when I run out of hearts?',
          answer: 'You can restart the level or continue through a rewarded ad when available.',
        },
        {
          question: 'Why did my progress disappear?',
          answer: 'Clearing app data, changing devices, or removing local storage may affect progress.',
        },
      ];

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#1f3d3a]">
      <BrandNav active="help" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.22em] text-[#0ea394]">
              {isTR ? 'OYUN YARDIMI' : 'GAME HELP'}
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black">
              {isTR ? 'Yardım Merkezi' : 'Help Center'}
            </h1>
            <p className="mt-3 text-[#8a9d9a]">
              {isTR
                ? 'Arrows Puzzle Master oynanışı, ipuçları, canlar, reklamlar ve abonelikler hakkında yardım.'
                : 'Help for Arrows Puzzle Master gameplay, hints, hearts, ads, and subscriptions.'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? 'Hızlı Başlangıç' : 'Quick Start'}>
              <ol className="list-decimal list-inside space-y-2">
                {quickStartItems.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </Section>

            <Section title={isTR ? 'Oyun Mantığı' : 'Game Logic'}>
              <p>
                {isTR
                  ? 'Her ok yalnızca üzerinde gösterilen yönde ilerler. Amaç, okların birbirini engellemediği doğru sırayı bulmaktır. Seviye temizlendiğinde bir sonraki seviyeye geçebilirsiniz.'
                  : 'Each arrow moves only in the direction shown on it. The goal is to find the order where arrows do not block each other. Once the board is clear, you can advance to the next level.'}
              </p>
            </Section>

            <Section title={isTR ? 'İpuçları ve Canlar' : 'Hints and Hearts'}>
              <p>
                {isTR
                  ? 'Yanlış hamleler can azaltabilir. İpucu özelliği, o an oynanabilir bir oku göstermek için kullanılabilir. Bazı ödüller reklam izleme şartına bağlı olabilir.'
                  : 'Wrong moves may reduce hearts. Hints can reveal a currently playable arrow. Some rewards may require watching an ad.'}
              </p>
            </Section>

            <Section title={isTR ? 'Yaygın Sorunlar' : 'Common Issues'}>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[#1f3d3a]">{isTR ? 'Reklam ödülü gelmedi' : 'Ad reward did not arrive'}</h4>
                  <p>{isTR ? 'Bağlantı veya reklam sağlayıcı yanıtı başarısız olmuş olabilir. Kısa süre sonra tekrar deneyin.' : 'Connection or ad provider response may have failed. Try again shortly.'}</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#1f3d3a]">{isTR ? 'Seviye çok zor' : 'A level feels too hard'}</h4>
                  <p>{isTR ? 'Önce dışarı çıkışa en yakın ve yolu tamamen açık okları arayın. Kırmızı/hint geri bildirimi güvenli hamle bulmanıza yardım eder.' : 'Look first for arrows closest to the edge with a fully clear path. Red/hint feedback helps you identify safe moves.'}</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#1f3d3a]">{isTR ? 'Ses veya titreşim istemiyorum' : 'I do not want sound or vibration'}</h4>
                  <p>{isTR ? 'Uygulama ayarlarından ses ve titreşim tercihlerinizi değiştirebilirsiniz.' : 'You can adjust sound and vibration preferences from app settings.'}</p>
                </div>
              </div>
            </Section>

            <Section title={isTR ? 'Premium Abonelik İptali' : 'Cancel Premium Subscription'}>
              <p>
                {isTR
                  ? 'Abonelikler satın alma yaptığınız mağaza üzerinden yönetilir. İptal sonrası aboneliğiniz mevcut dönem sonuna kadar aktif kalabilir.'
                  : 'Subscriptions are managed by the store where you purchased them. After cancellation, access may remain active until the end of the current period.'}
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <h4 className="font-bold text-[#1f3d3a] mb-2">Google Play</h4>
                  <ol className="list-decimal list-inside space-y-2">
                    {googlePlaySteps.map(step => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h4 className="font-bold text-[#1f3d3a] mb-2">Apple App Store</h4>
                  <ol className="list-decimal list-inside space-y-2">
                    {appStoreSteps.map(step => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </Section>

            <Section title={isTR ? 'Sık Sorulan Sorular' : 'Frequently Asked Questions'}>
              <div className="space-y-4">
                {faqItems.map(item => (
                  <div key={item.question}>
                    <h4 className="font-bold text-[#1f3d3a]">{item.question}</h4>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title={isTR ? 'Destek' : 'Support'}>
              <p>
                {isTR
                  ? 'Yardım için bize yazın: support@aveniaichat.com'
                  : 'For help, contact: support@aveniaichat.com'}
              </p>
              <p>
                <Link to="/account-deletion" className="text-[#0ea394] font-bold hover:text-[#1f3d3a] transition-colors">
                  {isTR ? 'Hesap Silme Talebi' : 'Account Deletion Request'}
                </Link>
              </p>
              <p>
                <Link to="/data-deletion" className="text-[#0ea394] font-bold hover:text-[#1f3d3a] transition-colors">
                  {isTR ? 'Veri Silme Talebi' : 'Data Deletion Request'}
                </Link>
              </p>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HelpPage;
