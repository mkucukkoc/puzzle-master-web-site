import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import LegalPageLayout, { LegalSection } from '@/components/LegalPageLayout';

const MinesweeperDataDeletionPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  return (
    <LegalPageLayout
      title={isTR ? 'Minesweeper Veri Silme Talebi' : 'Minesweeper Data Deletion Request'}
      gameName="Minesweeper: Mine Quest"
      lastUpdated={isTR ? 'Son güncelleme: 25 Temmuz 2026' : 'Last updated: July 25, 2026'}
      gameRoute="/minesweeper"
      activeTab="data-deletion"
    >
      <LegalSection title={isTR ? 'Uygulama ve Geliştirici' : 'App and Developer'}>
        <p>
          {isTR
            ? 'Bu sayfa yalnızca Minesweeper: Mine Quest mobil oyunu için geçerlidir. Talebiniz destek ekibi tarafından incelenir.'
            : 'This page applies only to the Minesweeper: Mine Quest mobile game. Requests are reviewed by the support team.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? 'Veri Silme Talebi Nasıl Gönderilir?' : 'How to Request Data Deletion'}>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            {isTR
              ? 'iammustafakucukkoc@gmail.com adresine e-posta gönderin.'
              : 'Send an email to iammustafakucukkoc@gmail.com.'}
          </li>
          <li>
            {isTR
              ? 'Konu satırına "Minesweeper Data Deletion Request" yazın.'
              : 'Use the subject line "Minesweeper Data Deletion Request".'}
          </li>
          <li>
            {isTR
              ? 'Uygulamada kullandığınız e-posta adresini, cihaz/platform bilgisini ve silinmesini istediğiniz veri türlerini belirtin.'
              : 'Include the email address you used in the app, your device/platform, and the data types you want deleted.'}
          </li>
          <li>
            {isTR
              ? 'Talebi doğrulamak için gerekirse sizden ek bilgi isteyebiliriz.'
              : 'We may ask for additional information if needed to verify the request.'}
          </li>
        </ol>
        <p className="mt-3">
          {isTR
            ? 'Doğrulanmış talepler genellikle 30 gün içinde işlenir.'
            : 'Verified requests are usually processed within 30 days.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? 'Silinebilecek Veri Türleri' : 'Data Types That Can Be Deleted'}>
        <ul className="list-disc list-inside space-y-2">
          <li>
            {isTR
              ? 'Bulutta tutuluyorsa oyun ilerlemesi, seviye durumu, hamle verileri ve uygulama tercihleri'
              : 'Cloud-stored game progress, level state, move data, and app preferences, if any'}
          </li>
          <li>
            {isTR
              ? 'Destek talepleriyle ilişkili e-posta adresi ve mesaj içerikleri'
              : 'Email address and message content related to support requests'}
          </li>
          <li>
            {isTR
              ? 'Hesabınız veya cihazınızla ilişkilendirilebilen teknik kayıtlar'
              : 'Technical records that can be associated with your account or device'}
          </li>
          <li>
            {isTR
              ? 'Varsa uygulama içi profil veya kullanıcı tanımlayıcıları'
              : 'In-app profile data or user identifiers, if any'}
          </li>
        </ul>
      </LegalSection>

      <LegalSection title={isTR ? 'Cihazdaki Yerel Veriler' : 'Local Data on Your Device'}>
        <p>
          {isTR
            ? 'Minesweeper: Mine Quest bazı oyun ilerlemesi veya tercihleri cihazınızda yerel olarak saklayabilir. Uygulamayı kaldırmak veya cihaz ayarlarından uygulama verilerini temizlemek bu yerel verileri silebilir.'
            : 'Minesweeper: Mine Quest may store some game progress or preferences locally on your device. Uninstalling the app or clearing app data from device settings may remove this local data.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? 'İletişim' : 'Contact'}>
        <p>
          {isTR
            ? 'Veri silme talebiyle ilgili sorularınız için iammustafakucukkoc@gmail.com adresine yazabilirsiniz.'
            : 'For questions about data deletion requests, contact iammustafakucukkoc@gmail.com.'}
        </p>
        <div className="mt-3">
          <Link to="/minesweeper/privacy" className="text-[#4bb2ff] font-bold hover:text-white transition-colors underline">
            {isTR ? 'Minesweeper Gizlilik Politikası' : 'Minesweeper Privacy Policy'}
          </Link>
        </div>
      </LegalSection>
    </LegalPageLayout>
  );
};

export default MinesweeperDataDeletionPage;
