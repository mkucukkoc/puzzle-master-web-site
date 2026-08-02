import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import LegalPageLayout, { LegalSection } from '@/components/LegalPageLayout';

const CarPuzzleDataDeletionPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  return (
    <LegalPageLayout
      title={isTR ? 'Cars -Puzzle Escape Veri Silme Talebi' : 'Cars -Puzzle Escape Data Deletion Request'}
      gameName="Cars - Puzzle Escape"
      lastUpdated={isTR ? 'Son güncelleme: 13 Temmuz 2026' : 'Last updated: July 13, 2026'}
      gameRoute="/car-puzzle"
      activeTab="data-deletion"
    >
      <LegalSection title={isTR ? 'Uygulama ve Geliştirici' : 'App and Developer'}>
        <p>
          {isTR
            ? 'Bu sayfa yalnızca Cars -Puzzle Escape mobil oyunu için geçerlidir. Talebiniz destek ekibi tarafından incelenir.'
            : 'This page applies only to the Cars -Puzzle Escape mobile game. Requests are reviewed by the support team.'}
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
              ? 'Konu satırına "Cars -Puzzle Escape Data Deletion Request" yazın.'
              : 'Use the subject line "Cars -Puzzle Escape Data Deletion Request".'}
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
              ? 'Bulutta tutuluyorsa oyun ilerlemesi, seviye durumu, ipucu verileri ve uygulama tercihleri'
              : 'Cloud-stored game progress, level state, hint data, and app preferences, if any'}
          </li>
          <li>
            {isTR
              ? 'Destek talepleriyle ilişkili e-posta adresi ve mesaj içerikleri'
              : 'Email address and message content related to support requests'}
          </li>
          <li>
            {isTR
              ? 'Hesabınız veya cihazınızla ilişkilendirilebilen teknik kayıtlar ve bildirim belirteçleri'
              : 'Technical records and notification tokens that can be associated with your account or device'}
          </li>
          <li>
            {isTR
              ? 'Varsa uygulama içi profil veya kullanıcı tanımlayıcıları'
              : 'In-app profile data or user identifiers, if any'}
          </li>
        </ul>
      </LegalSection>

      <LegalSection title={isTR ? 'Saklanabilecek Veriler ve Süreler' : 'Data That May Be Retained and Retention Periods'}>
        <ul className="list-disc list-inside space-y-2">
          <li>
            {isTR
              ? 'Yasal yükümlülük, güvenlik, dolandırıcılık önleme, ödeme uyuşmazlığı veya muhasebe gereklilikleri için bazı kayıtlar gerekli süre boyunca saklanabilir.'
              : 'Some records may be retained as required for legal obligations, security, fraud prevention, payment disputes, or accounting requirements.'}
          </li>
          <li>
            {isTR
              ? 'Google Play veya ilgili ödeme sağlayıcısı ödeme, abonelik veya satın alma kayıtlarını ayrıca tutabilir.'
              : 'Google Play or the relevant payment provider may retain payment, subscription, or purchase records separately.'}
          </li>
          <li>
            {isTR
              ? 'Anonimleştirilmiş ve kullanıcıyla ilişkilendirilemeyen istatistikler silme talebinden sonra saklanabilir.'
              : 'Aggregated or anonymized statistics that cannot identify a user may be retained after a deletion request.'}
          </li>
          <li>
            {isTR
              ? 'Yedek sistemlerde kalan kopyalar en geç 90 gün içinde rutin döngülerle silinir.'
              : 'Residual backup copies are removed through routine cycles within 90 days.'}
          </li>
        </ul>
      </LegalSection>

      <LegalSection title={isTR ? 'Cihazdaki Yerel Veriler' : 'Local Data on Your Device'}>
        <p>
          {isTR
            ? 'Cars -Puzzle Escape bazı oyun ilerlemesi veya tercihleri cihazınızda yerel olarak saklayabilir. Uygulamayı kaldırmak veya cihaz ayarlarından uygulama verilerini temizlemek bu yerel verileri silebilir.'
            : 'Cars -Puzzle Escape may store some game progress or preferences locally on your device. Uninstalling the app or clearing app data from device settings may remove this local data.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? 'İletişim' : 'Contact'}>
        <p>
          {isTR
            ? 'Veri silme talebiyle ilgili sorularınız için iammustafakucukkoc@gmail.com adresine yazabilirsiniz.'
            : 'For questions about data deletion requests, contact iammustafakucukkoc@gmail.com.'}
        </p>
        <div className="mt-3">
          <Link to="/car-puzzle/privacy" className="text-[#0f5cab] font-bold hover:text-white transition-colors underline">
            {isTR ? 'Cars -Puzzle Escape Gizlilik Politikası' : 'Cars -Puzzle Escape Privacy Policy'}
          </Link>
        </div>
      </LegalSection>
    </LegalPageLayout>
  );
};

export default CarPuzzleDataDeletionPage;
