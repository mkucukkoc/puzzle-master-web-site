import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LegalPageLayout, { LegalSection } from '@/components/LegalPageLayout';

const TileMatchDataDeletionPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  return (
    <LegalPageLayout
      title={isTR ? 'Veri Silme Talebi' : 'Data Deletion Request'}
      gameName="Triple Grove: Tile Match"
      lastUpdated={isTR ? 'Son güncelleme: 28 Temmuz 2026' : 'Last updated: July 28, 2026'}
      gameRoute="/tile-match"
      activeTab="data-deletion"
    >
      <LegalSection title={isTR ? '1. Yerel Oyun Verileri' : '1. Local Game Data'}>
        <p>
          {isTR
            ? 'Triple Grove: Tile Match oyununda seviye ilerlemeniz, kazandığınız yıldızlar ve tercihleriniz cihazınızda yerel olarak saklanır. Cihazınızdaki uygulama verilerini temizleyerek veya uygulamayı kaldırarak bu verileri anında tamamen silebilirsiniz.'
            : 'In Triple Grove: Tile Match, your level progress, stars, and preferences are stored locally on your device. You can immediately delete all local data by clearing app storage or uninstalling the game.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? '2. Destek ve E-posta Verileri' : '2. Support & Email Data'}>
        <p>
          {isTR
            ? 'Destek talebi için bizimle e-posta yoluyla iletişime geçtiyseniz, e-posta adresiniz ve mesaj içeriğiniz tarafımızda saklanmış olabilir.'
            : 'If you contacted support via email, your email address and message contents may be retained in support logs.'}
        </p>
        <p className="mt-3">
          {isTR
            ? 'Bu verilerin silinmesini talep etmek için iammustafakucukkoc@gmail.com adresine "Triple Grove Veri Silme Talebi" konu başlığıyla e-posta gönderebilirsiniz. Talebiniz 30 gün içerisinde işleme alınacaktır.'
            : 'To request deletion of support data, send an email to iammustafakucukkoc@gmail.com with the subject "Triple Grove Data Deletion Request". Your request will be processed within 30 days.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? '3. Reklam Sağlayıcı Verileri' : '3. Advertising Provider Data'}>
        <p>
          {isTR
            ? 'Reklam kimliği ve reklam etkileşim verileri Google Mobile Ads tarafından yönetilir. Bu verileri sıfırlamak veya kişiselleştirilmiş reklamları kapatmak için cihazınızın Gizlilik / Reklamlar ayarlarını kullanabilirsiniz.'
            : 'Advertising ID and ad interaction data are managed by Google Mobile Ads. You can reset your Advertising ID or opt out of personalized ads via your device Privacy / Ads settings.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? '4. İletişim' : '4. Contact'}>
        <p>
          {isTR
            ? 'Veri silme ile ilgili her türlü soru için: iammustafakucukkoc@gmail.com'
            : 'For any questions about data deletion: iammustafakucukkoc@gmail.com'}
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
};

export default TileMatchDataDeletionPage;
