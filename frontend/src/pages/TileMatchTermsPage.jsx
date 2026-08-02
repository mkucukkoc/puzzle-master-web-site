import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LegalPageLayout, { LegalSection } from '@/components/LegalPageLayout';

const TileMatchTermsPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const features = isTR
    ? [
        '3.000 çözülebilir katmanlı taş bulmaca seviyesi',
        'Geri Al (Undo) ve Karıştır (Shuffle) güçlendiricileri',
        'Seçilebilir oyun arka planları ve temalar',
        'İnternet gerektirmeyen çevrimdışı oynanış',
      ]
    : [
        '3,000 solvable layered tile puzzle levels',
        'Undo and Shuffle boosters',
        'Selectable game backgrounds and visual themes',
        'Offline core gameplay experience',
      ];

  const prohibited = isTR
    ? [
        'Yazılımı tersine mühendislikle çözmeye veya kopyalamaya çalışmak',
        'Reklam veya oyun içi mekanizmaları yanıltıcı şekilde manipüle etmek',
        'Marka görsellerini veya seviye kütüphanelerini izinsiz dağıtmak',
      ]
    : [
        'Attempting to reverse engineer or duplicate the software',
        'Manipulating ad delivery or in-game reward systems',
        'Distributing game assets or level libraries without permission',
      ];

  return (
    <LegalPageLayout
      title={isTR ? 'Kullanım Koşulları' : 'Terms of Use'}
      gameName="Triple Grove: Tile Match"
      lastUpdated={isTR ? 'Son güncelleme: 28 Temmuz 2026' : 'Last updated: July 28, 2026'}
      gameRoute="/tile-match"
      activeTab="terms"
    >
      <LegalSection title={isTR ? '1. Kullanım Kabulü' : '1. Acceptance of Terms'}>
        <p>
          {isTR
            ? 'Triple Grove: Tile Match uygulamasını indirerek veya kullanarak bu koşulları kabul etmiş olursunuz. Koşulları kabul etmiyorsanız lütfen oyunu kullanmayın.'
            : 'By downloading or using Triple Grove: Tile Match, you agree to be bound by these terms. If you do not agree, please do not use the application.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? '2. Hizmet Kapsamı' : '2. Service Description'}>
        <p>
          {isTR
            ? 'Triple Grove: Tile Match, taş eşleştirme mekaniklerine dayalı mobil bulmaca oyunudur. Hizmet şunları kapsar:'
            : 'Triple Grove: Tile Match is a mobile puzzle game based on tile matching mechanics. The service includes:'}
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          {features.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection title={isTR ? '3. Kullanım Kuralları ve Yasaklar' : '3. User Conduct and Restrictions'}>
        <ul className="list-disc list-inside space-y-2">
          {prohibited.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection title={isTR ? '4. Fikri Mülkiyet' : '4. Intellectual Property'}>
        <p>
          {isTR
            ? 'Triple Grove markası, grafik tasarımları, seviye şablonları, kod yapısı ve oyuna ait tüm varlıklar hak sahiplerine aittir. Kullanıcıya kişisel ve devredilemez bir kullanım hakkı verilir.'
            : 'The Triple Grove brand, graphic assets, level templates, source code, and game components belong to the rights holder. Users are granted a personal, non-exclusive license for entertainment.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? '5. Garanti Reddi ve Sorumluluk Sınırı' : '5. Disclaimer of Warranties'}>
        <p>
          {isTR
            ? 'Uygulama olduğu gibi sunulur. Kesintisiz veya hatasız çalışma taahhüdü verilmez. Olası yerel veri kayıplarından sorumluluk doğmaz.'
            : 'The application is provided "as is" without warranties of uninterrupted service. We are not responsible for any local data loss on user devices.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? '6. İletişim' : '6. Contact'}>
        <p>
          {isTR
            ? 'Kullanım koşullarıyla ilgili sorularınız için: iammustafakucukkoc@gmail.com'
            : 'For questions regarding terms of use: iammustafakucukkoc@gmail.com'}
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
};

export default TileMatchTermsPage;
