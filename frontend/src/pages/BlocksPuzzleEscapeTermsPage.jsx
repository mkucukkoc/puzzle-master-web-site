import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import LegalPageLayout, { LegalSection } from '@/components/LegalPageLayout';

const SUPPORT_EMAIL = 'support@aveniaichat.com';

const content = {
  en: {
    title: 'Terms of Service',
    updated: 'Last updated: August 2, 2026',
    sections: [
      {
        title: '1. Agreement to Terms',
        paragraphs: [
          'By downloading, installing, accessing, or using Blocks - Puzzle Escape, you agree to be bound by these Terms of Service. If you do not agree to all terms, do not download or use the application.',
          'Additional store terms from Apple App Store or Google Play Store apply to your acquisition and use of the application.',
        ],
      },
      {
        title: '2. Service Overview',
        paragraphs: [
          'Blocks - Puzzle Escape is a mobile logic puzzle game. The service includes offline stages, daily puzzle challenges, hint mechanics, star achievements, and optional rewarded ad options.',
          'Features may be updated, modified, or adjusted over time to improve performance, balance level progression, or fulfill platform requirements.',
        ],
      },
      {
        title: '3. Eligibility and Parental Control',
        paragraphs: [
          'You represent that you have the legal capacity to enter into these Terms or have obtained parental/guardian consent where required by local law.',
        ],
      },
      {
        title: '4. License & Usage Rights',
        paragraphs: [
          'We grant you a limited, non-exclusive, non-transferable, revocable license to download and use Blocks - Puzzle Escape for personal, non-commercial entertainment.',
        ],
      },
      {
        title: '5. Acceptable Use & Conduct',
        paragraphs: [
          'You agree to use the app fairly and legally. The following actions are strictly prohibited:',
        ],
        bullets: [
          'Using unauthorized third-party software, automation, bots, or cheats',
          'Modifying, decompiling, disassembling, or reverse engineering game software or level assets',
          'Exploiting bugs, glitches, or design flaws for unfair advantage',
          'Disrupting ad delivery, reward systems, or network communications',
        ],
      },
      {
        title: '6. In-App Virtual Items and Hints',
        paragraphs: [
          'Virtual items, hints, stars, and boosters earned or purchased within the game are licensed to you on a limited basis. They have no real-world monetary value and cannot be transferred or redeemed for cash.',
        ],
      },
      {
        title: '7. Subscriptions and Payments',
        paragraphs: [
          'All financial transactions for optional in-app items are processed exclusively through Google Play Store or Apple App Store. Subscription management, cancellations, and refund requests are subject to the respective store rules.',
        ],
      },
      {
        title: '8. User Feedback',
        paragraphs: [
          'If you submit feedback, suggestions, or support requests, you grant us a royalty-free, perpetual license to use that feedback to improve the application without compensation.',
        ],
      },
      {
        title: '9. Advertising & Third-Party Services',
        paragraphs: [
          'The application may feature advertisements served by third-party ad networks. We do not endorse or assume liability for third-party products, services, or websites linked within ads.',
        ],
      },
      {
        title: '10. Intellectual Property Rights',
        paragraphs: [
          'All logos, trademarks, artwork, sound effects, level design patterns, source code, and game assets remain the exclusive property of the developer. Unauthorized copying or redistribution is strictly prohibited.',
        ],
      },
      {
        title: '11. Service Availability & Maintenance',
        paragraphs: [
          'We do not guarantee uninterrupted or error-free service availability. Maintenance, server adjustments, or platform updates may temporarily impact access.',
        ],
      },
      {
        title: '12. Privacy Policy Integration',
        paragraphs: [
          'Our data collection and processing practices are detailed in our Privacy Policy, which is incorporated into these Terms by reference.',
        ],
        internalLink: { label: 'Read Privacy Policy', to: '/blocks-puzzle-escape/privacy' },
      },
      {
        title: '13. Disclaimer of Warranties',
        paragraphs: [
          'To the maximum extent permitted by applicable law, the application is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, express or implied.',
        ],
      },
      {
        title: '14. Limitation of Liability',
        paragraphs: [
          'To the fullest extent permitted by law, we shall not be liable for indirect, incidental, special, punitive, or consequential damages, or loss of local data/progress arising from your use of the application.',
        ],
      },
      {
        title: '15. Indemnification',
        paragraphs: [
          'You agree to defend, indemnify, and hold harmless the developer from any claims, damages, liabilities, or expenses arising from your violation of these Terms.',
        ],
      },
      {
        title: '16. Suspension and Termination',
        paragraphs: [
          'We reserve the right to restrict, suspend, or terminate access to the app for users who violate these Terms or engage in fraudulent activities.',
        ],
      },
      {
        title: '17. Governing Law & Jurisdiction',
        paragraphs: [
          'These Terms shall be governed by and construed in accordance with applicable laws without giving effect to conflict of law principles.',
        ],
      },
      {
        title: '18. Dispute Resolution',
        paragraphs: [
          'Before initiating formal legal claims, you agree to contact us directly to seek an informal resolution of any dispute.',
        ],
      },
      {
        title: '19. Changes to Terms',
        paragraphs: [
          'We reserve the right to modify these Terms at any time. Updated terms will be posted on this page with an updated effective date. Continued use constitutes acceptance.',
        ],
      },
      {
        title: '20. Severability & Entire Agreement',
        paragraphs: [
          'If any provision is held unenforceable, the remaining terms shall remain in full force. These Terms constitute the entire agreement regarding the use of Blocks - Puzzle Escape.',
        ],
      },
      {
        title: '21. Contact Information',
        paragraphs: [
          'For support, legal notices, or inquiries regarding these Terms, contact us at support@aveniaichat.com.',
        ],
      },
    ],
  },
  tr: {
    title: 'Kullanım Koşulları',
    updated: 'Son güncelleme: 2 Ağustos 2026',
    sections: [
      {
        title: '1. Koşulların Kabulü',
        paragraphs: [
          'Blocks - Puzzle Escape uygulamasını indirerek, kurarak veya kullanarak bu Kullanım Koşullarını kabul etmiş olursunuz. Tüm koşulları kabul etmiyorsanız lütfen oyunu indirmeyin veya kullanmayın.',
          'Apple App Store veya Google Play Store mağaza koşulları da uygulamanın edinimi ve kullanımı için geçerlidir.',
        ],
      },
      {
        title: '2. Hizmetin Tanımı',
        paragraphs: [
          'Blocks - Puzzle Escape mobil zeka ve bulmaca oyunudur. Hizmet çevrimdışı seviyeleri, günlük bulmacaları, ipucu mekaniklerini, yıldız başarımlarını ve isteğe bağlı ödüllü reklamları kapsar.',
          'Performansı artırmak, seviye dengesini sağlamak veya mağaza kurallarına uymak amacıyla özellikler zaman zaman güncellenebilir.',
        ],
      },
      {
        title: '3. Uygunluk ve Ebeveyn Denetimi',
        paragraphs: [
          'Bu şartları kabul etme ehliyetine sahip olduğunuzu veya geçerli mevzuat kapsamında ebeveyn/vasi izni aldığınızı beyan edersiniz.',
        ],
      },
      {
        title: '4. Lisans ve Kullanım Hakları',
        paragraphs: [
          'Size oyunu kişisel, ticari olmayan eğlence amacıyla indirmek ve kullanmak için sınırlı, devredilemez ve geri alınabilir bir lisans tanınır.',
        ],
      },
      {
        title: '5. Uygun Kullanım ve Kurallar',
        paragraphs: [
          'Uygulamayı dürüst ve hukuka uygun şekilde kullanmayı kabul edersiniz. Aşağıdaki eylemler kesinlikle yasaktır:',
        ],
        bullets: [
          'Yetkisiz üçüncü taraf yazılımları, otomasyon, botlar veya hileler kullanmak',
          'Oyun yazılımını veya seviye varlıklarını değiştirmek, tersine mühendislikle çözmek veya kopyalamak',
          'Hataları veya tasarım açıklarını haksız avantaj sağlamak için kötüye kullanmak',
          'Reklam sunumunu, ödül sistemini veya ağ iletişimini engellemek veya manipüle etmek',
        ],
      },
      {
        title: '6. Sanal Ögeler ve İpuçları',
        paragraphs: [
          'Oyun içinde kazanılan veya satın alınan ipuçları, yıldızlar ve güçlendiriciler sınırlı lisans kapsamındadır. Gerçek para karşılığına sahip değildir ve devredilemez.',
        ],
      },
      {
        title: '7. Satın Alımlar ve Ödemeler',
        paragraphs: [
          'İsteğe bağlı uygulama içi satın alım işlemleri doğrudan Google Play Store veya Apple App Store aracılığıyla gerçekleştirilir. İadeler ve abonelik iptalleri mağaza kurallarına tabidir.',
        ],
      },
      {
        title: '8. Kullanıcı Geri Bildirimleri',
        paragraphs: [
          'Gönderdiğiniz geri bildirim, öneri veya destek taleplerini uygulamayı geliştirmek amacıyla ücretsiz ve süresiz kullanabileceğimizi kabul edersiniz.',
        ],
      },
      {
        title: '9. Reklamlar ve Üçüncü Taraf İçerikler',
        paragraphs: [
          'Uygulama üçüncü taraf reklam ağları tarafından sunulan reklamlar içerebilir. Reklamı yapılan ürün veya hizmetlerden geliştirici sorumlu tutulamaz.',
        ],
      },
      {
        title: '10. Fikri Mülkiyet Hakları',
        paragraphs: [
          'Tüm logolar, ticari markalar, görseller, ses efektleri, seviye tasarımları, kaynak kodları ve oyun varlıkları geliştiricinin özel mülkiyetindedir.',
        ],
      },
      {
        title: '11. Hizmetin Kullanılabilirliği ve Bakım',
        paragraphs: [
          'Kesintisiz veya hatasız hizmet garantisi verilmez. Bakım, sunucu ayarlamaları veya platform güncellemeleri erişimi geçici olarak etkileyebilir.',
        ],
      },
      {
        title: '12. Gizlilik Politikası Entegrasyonu',
        paragraphs: [
          'Veri işleme uygulamalarımız Gizlilik Politikamızda açıklanmıştır ve bu Koşulların ayrılmaz bir parçasıdır.',
        ],
        internalLink: { label: 'Gizlilik Politikasını Okuyun', to: '/blocks-puzzle-escape/privacy' },
      },
      {
        title: '13. Garantilerin Reddi',
        paragraphs: [
          'Uygulama, geçerli yasaların izin verdiği en geniş ölçüde herhangi bir açık veya zımni garanti verilmeksizin "olduğu gibi" ve "mevcut olduğu şekliyle" sunulmaktadır.',
        ],
      },
      {
        title: '14. Sorumluluğun Sınırlandırılması',
        paragraphs: [
          'Yasanın izin verdiği azami ölçüde, uygulamanın kullanımından veya yerel veri kaybından doğan dolaylı, cezai veya sonuçsal zararlardan sorumlu değiliz.',
        ],
      },
      {
        title: '15. Tazminat',
        paragraphs: [
          'Bu Koşulları ihlal etmenizden doğan hak taleplerine, zararlara ve masraflara karşı geliştiriciyi tazmin etmeyi kabul edersiniz.',
        ],
      },
      {
        title: '16. Askıya Alma ve Sonlandırma',
        paragraphs: [
          'Koşulları ihlal eden veya hileli faaliyetlerde bulunan kullanıcıların uygulamaya erişimini askıya alma veya sonlandırma hakkımız saklıdır.',
        ],
      },
      {
        title: '17. Uygulanacak Hukuk ve Yetki',
        paragraphs: [
          'Bu Koşullar kanunlar ihtilafı ilkeleri dikkate alınmaksızın geçerli yerel mevzuata tabidir.',
        ],
      },
      {
        title: '18. Uyuşmazlıkların Çözümü',
        paragraphs: [
          'Resmî hukuki yollara başvurmadan önce sorunu gayriresmî biçimde çözebilmemiz için doğrudan bizimle iletişime geçmeyi kabul edersiniz.',
        ],
      },
      {
        title: '19. Koşullardaki Değişiklikler',
        paragraphs: [
          'Bu Koşulları zaman zaman güncelleme hakkımız saklıdır. Güncel sürüm bu sayfada yayımlanır. Kullanıma devam etmeniz kabul anlamına gelir.',
        ],
      },
      {
        title: '20. Bölünebilirlik ve Anlaşmanın Tamamı',
        paragraphs: [
          'Koşulların bir hükmü geçersiz bulunursa kalan hükümler yürürlükte kalır. Bu Koşullar kullanımı düzenleyen anlaşmanın tamamıdır.',
        ],
      },
      {
        title: '21. İletişim Bilgileri',
        paragraphs: [
          'Destek, hukuki bildirim veya bu Koşullara ilişkin sorularınız için support@aveniaichat.com adresinden bizimle iletişime geçebilirsiniz.',
        ],
      },
    ],
  },
};

const BlocksPuzzleEscapeTermsPage = () => {
  const { language } = useLanguage();
  const copy = language === 'tr' ? content.tr : content.en;
  const isTR = language === 'tr';

  return (
    <LegalPageLayout
      title={copy.title}
      gameName="Blocks - Puzzle Escape"
      lastUpdated={copy.updated}
      gameRoute="/blocks-puzzle-escape"
      activeTab="terms"
    >
      {copy.sections.map((section, idx) => (
        <LegalSection key={section.title || idx} title={section.title}>
          {section.paragraphs?.map((paragraph, pIdx) => (
            <p key={pIdx}>{paragraph}</p>
          ))}
          {section.bullets && (
            <ul className="list-disc list-inside space-y-2 mt-2">
              {section.bullets.map((item, bIdx) => (
                <li key={bIdx}>{item}</li>
              ))}
            </ul>
          )}
          {section.internalLink && (
            <div className="mt-3">
              <Link
                to={section.internalLink.to}
                className="inline-flex font-bold text-[#0ea394] hover:text-white transition-colors underline"
              >
                {section.internalLink.label}
              </Link>
            </div>
          )}
        </LegalSection>
      ))}

      <LegalSection title={isTR ? 'Bize Ulaşın' : 'Contact Us'}>
        <a className="font-bold text-[#1f7cff] hover:text-white transition-colors" href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>
      </LegalSection>
    </LegalPageLayout>
  );
};

export default BlocksPuzzleEscapeTermsPage;
