import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import LegalPageLayout, { LegalSection } from '@/components/LegalPageLayout';

const NonogramPrivacyPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const collected = isTR
    ? [
        'Oyun ilerlemesi, seviye durumu, günlük bulmaca sonuçları, yıldız/seri verileri ve uygulama tercihleri',
        'Cihaz modeli, işletim sistemi, uygulama sürümü, çökme raporları ve performans sinyalleri',
        'Reklam gösterimi, ödüllü reklam tamamlama bilgileri ve reklam kimliği gibi teknik veriler',
        'Giriş yaparsanız hesap kimliği veya oturum verileri',
        'Destek için bizimle iletişime geçerseniz e-posta adresi ve mesaj içeriği',
      ]
    : [
        'Game progress, level state, daily puzzle results, star/streak data, and app preferences',
        'Device model, operating system, app version, crash logs, and performance signals',
        'Ad delivery, rewarded-ad completion data, and technical data such as advertising identifiers',
        'Account or session data if you sign in',
        'Email address and message content if you contact support',
      ];

  const purposes = isTR
    ? [
        'Oyunu çalıştırmak, ilerlemeyi kaydetmek ve günlük bulmacayı göstermek',
        'Reklamları, ödüllü içerikleri ve varsa premium özellikleri sunmak',
        'Hata ayıklamak, performansı iyileştirmek ve kötüye kullanımı önlemek',
        'Destek taleplerine yanıt vermek ve yasal yükümlülükleri yerine getirmek',
      ]
    : [
        'Run the game, save progress, and show the daily puzzle',
        'Deliver ads, rewarded content, and any premium features where available',
        'Debug issues, improve performance, and prevent abuse',
        'Respond to support requests and comply with legal obligations',
      ];

  return (
    <LegalPageLayout
      title={isTR ? 'Gizlilik Politikası' : 'Privacy Policy'}
      gameName="Nonogram"
      lastUpdated={isTR ? 'Son güncelleme: 24 Temmuz 2026' : 'Last updated: July 24, 2026'}
      gameRoute="/nonogram"
      activeTab="privacy"
    >
      <LegalSection title={isTR ? '1. Kapsam' : '1. Scope'}>
        <p>
          {isTR
            ? 'Bu Gizlilik Politikası, Nonogram - Pixel Puzzle mobil oyunu ve ilgili web sayfaları kapsamında hangi verilerin işlenebileceğini, bunların neden işlendiğini ve kullanıcıların hangi haklara sahip olabileceğini açıklar.'
            : 'This Privacy Policy explains what data may be processed in connection with the Nonogram - Pixel Puzzle mobile game and related web pages, why it is processed, and what rights users may have.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? '2. Toplayabileceğimiz Veriler' : '2. Data We May Process'}>
        <ul className="list-disc list-inside space-y-2">
          {collected.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection title={isTR ? '3. Verileri Nasıl Kullanırız' : '3. How We Use Data'}>
        <ul className="list-disc list-inside space-y-2">
          {purposes.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection title={isTR ? '4. Paylaşım ve Üçüncü Taraf Hizmetler' : '4. Sharing and Third-Party Services'}>
        <p>
          {isTR
            ? 'Uygulama; reklam sunumu, ödüllü reklamlar, çökme raporlama, analitik, mağaza doğrulaması veya giriş işlevleri için üçüncü taraf hizmetleri kullanabilir. Bu hizmetler, kendi gizlilik politikalarına tabi olarak sınırlı teknik verileri işleyebilir.'
            : 'The app may use third-party services for ad delivery, rewarded ads, crash reporting, analytics, store validation, or sign-in features. Those services may process limited technical data under their own privacy policies.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? '5. Reklamlar ve Reklam Kimliği' : '5. Ads and Advertising ID'}>
        <p>
          {isTR
            ? 'Nonogram - Pixel Puzzle reklamlar ve ödüllü reklamlar gösterebilir. Reklam ortakları, reklam sunumu, ölçüm, dolandırıcılığın önlenmesi ve uyumluluk için Android Reklam Kimliği gibi cihaz tanımlayıcılarını kullanabilir.'
            : 'Nonogram - Pixel Puzzle may show ads and rewarded ads. Advertising partners may use device identifiers, including the Android Advertising ID, for ad delivery, measurement, fraud prevention, and compliance.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? '6. Saklama ve Silme' : '6. Retention and Deletion'}>
        <p>
          {isTR
            ? 'Yerel oyun ilerlemesi cihazınızda saklanabilir. Sunucu tarafında işlenen destek, reklam, giriş veya teknik kayıtlar yalnızca gerekli olduğu süre boyunca tutulur. Doğrulanmış veri silme talepleri genellikle 30 gün içinde işlenir; yedek kopyalar rutin döngülerle en geç 90 gün içinde kaldırılabilir.'
            : 'Local game progress may be stored on your device. Server-side support, ad, sign-in, or technical records are kept only as long as needed. Verified data deletion requests are usually processed within 30 days; residual backup copies may be removed within 90 days through routine cycles.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? '7. Çocukların Gizliliği' : "7. Children's Privacy"}>
        <p>
          {isTR
            ? 'Oyun genel kitleye yöneliktir ve 13 yaş altındaki çocuklardan bilerek kişisel veri toplamayı amaçlamaz. Böyle bir veri işlendiğini öğrenirsek silmek için makul adımları atarız.'
            : 'The game is intended for a general audience and does not knowingly seek to collect personal data from children under 13. If we learn such data has been processed, we will take reasonable steps to delete it.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? '8. Haklarınız' : '8. Your Rights'}>
        <p>
          {isTR
            ? 'Geçerli mevzuata göre verilerinize erişme, düzeltme, silme veya işleme itiraz etme haklarınız olabilir. Veri silme bağlantısını kullanabilir veya destek e-postası üzerinden bize ulaşabilirsiniz.'
            : 'Depending on applicable law, you may have rights to access, correct, delete, or object to the processing of your data. You can use the data deletion link or contact us by support email.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? '9. İletişim' : '9. Contact'}>
        <p>
          {isTR
            ? 'Gizlilik ile ilgili sorular için: support@aveniaichat.com'
            : 'Questions about privacy: support@aveniaichat.com'}
        </p>
        <div className="mt-3">
          <Link to="/nonogram/data-deletion" className="text-[#0f8c90] font-bold hover:text-white transition-colors underline">
            {isTR ? 'Veri Silme Talebi' : 'Data Deletion Request'}
          </Link>
        </div>
      </LegalSection>
    </LegalPageLayout>
  );
};

export default NonogramPrivacyPage;
