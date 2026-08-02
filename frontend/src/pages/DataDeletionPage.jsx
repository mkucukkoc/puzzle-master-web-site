import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import LegalPageLayout, { LegalSection } from '@/components/LegalPageLayout';

const DataDeletionPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  return (
    <LegalPageLayout
      title={isTR ? 'Veri Silme Talebi' : 'Data Deletion Request'}
      gameName="Arrows Puzzle Master"
      lastUpdated={isTR ? 'Son güncelleme: 4 Temmuz 2026' : 'Last updated: July 4, 2026'}
      gameRoute="/arrows-puzzle-master"
      activeTab="data-deletion"
    >
      <LegalSection title={isTR ? 'Uygulama ve Geliştirici' : 'App and Developer'}>
        <p>
          {isTR
            ? 'Bu sayfa Arrows Puzzle Master mobil oyunu için veri silme talebi sürecini açıklar. Talebiniz Arrows Puzzle Master destek ekibi tarafından incelenir.'
            : 'This page explains the data deletion request process for the Arrows Puzzle Master mobile game. Requests are reviewed by the Arrows Puzzle Master support team.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? 'Veri Silme Talebi Nasıl Gönderilir?' : 'How to Request Data Deletion'}>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            {isTR
              ? 'support@aveniaichat.com adresine e-posta gönderin.'
              : 'Send an email to support@aveniaichat.com.'}
          </li>
          <li>
            {isTR
              ? 'Konu satırına "Arrows Puzzle Master Data Deletion Request" yazın.'
              : 'Use the subject line "Arrows Puzzle Master Data Deletion Request".'}
          </li>
          <li>
            {isTR
              ? 'Talebinizde kullandığınız e-posta adresini, cihaz/platform bilgisini ve silinmesini istediğiniz veri türlerini belirtin.'
              : 'Include your email address, device/platform information, and the data types you want deleted.'}
          </li>
          <li>
            {isTR
              ? 'Talebi doğrulamak için gerekirse sizden ek bilgi isteyebiliriz.'
              : 'We may request additional information if needed to verify the request.'}
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
          <li>{isTR ? 'Bulutta tutuluyorsa oyun ilerlemesi, seviye durumu ve uygulama tercihleri' : 'Cloud-stored game progress, level state, and app preferences, if any'}</li>
          <li>{isTR ? 'Destek talepleriyle ilişkili e-posta adresi ve mesaj içerikleri' : 'Email address and message content related to support requests'}</li>
          <li>{isTR ? 'Hesabınız veya cihazınızla ilişkilendirilebilen teknik destek kayıtları' : 'Technical support records that can be associated with your account or device'}</li>
          <li>{isTR ? 'Varsa uygulama içi profil veya kullanıcı tanımlayıcıları' : 'In-app profile data or user identifiers, if any'}</li>
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
              ? 'Uygulama mağazası ödeme, abonelik veya satın alma kayıtları Google Play ya da ilgili ödeme sağlayıcısı tarafından ayrıca yönetilebilir.'
              : 'App store payment, subscription, or purchase records may also be managed separately by Google Play or the relevant payment provider.'}
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
            ? 'Arrows Puzzle Master bazı oyun ilerlemesi veya tercihleri cihazınızda yerel olarak saklayabilir. Uygulamayı kaldırmak veya cihaz ayarlarından uygulama verilerini temizlemek bu yerel verileri silebilir.'
            : 'Arrows Puzzle Master may store some game progress or preferences locally on your device. Uninstalling the app or clearing app data from device settings may remove this local data.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? 'Hesap Silme' : 'Account Deletion'}>
        <p>
          {isTR
            ? 'Hesap tabanlı özellikler kullanıyorsanız hesabınızın ve ilişkili verilerin tamamen silinmesini de talep edebilirsiniz.'
            : 'If you use account-based features, you may also request full deletion of your account and related data.'}
        </p>
        <div className="mt-3">
          <Link to="/account-deletion" className="text-[#0ea394] font-bold hover:text-white transition-colors underline">
            {isTR ? 'Hesap Silme Talebi' : 'Account Deletion Request'}
          </Link>
        </div>
      </LegalSection>
    </LegalPageLayout>
  );
};

export default DataDeletionPage;
