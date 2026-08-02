import React from 'react';
import { Link } from 'react-router-dom';
import FlowConnectsNav from '@/components/FlowConnectsNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-white border border-[#bbf7d0] p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-[#052e16]">{title}</h3>
    <div className="text-[#365314] leading-7 space-y-3">{children}</div>
  </section>
);

const FlowConnectsDataDeletionPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  return (
    <div className="min-h-screen bg-[#f0fdf4] text-[#052e16]">
      <FlowConnectsNav active="dataDeletion" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#072421] via-[#0b4d45] to-[#0ea394] p-8 sm:p-10 shadow-[0_24px_60px_rgba(14,163,148,0.28)]">
            <div className="flex items-center gap-4">
              <img
                src="/games/flow-connects/icon.png"
                alt="Flow Connects"
                className="h-12 w-12 rounded-2xl border border-white/20 object-cover"
              />
              <p className="text-[11px] font-black tracking-[0.28em] text-[#bbf7d0]">FLOW CONNECTS</p>
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl font-black text-white">
              {isTR ? 'Veri Silme Talebi' : 'Data Deletion Request'}
            </h1>
            <p className="mt-3 text-white/70">
              {isTR ? 'Flow Connects kullanıcı veri silme talimatları' : 'Instructions for requesting data deletion in Flow Connects'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? '1. Yerel Oyun Verileri' : '1. Local Game Data'}>
              <p>
                {isTR
                  ? 'Flow Connects oyununda seviye ilerlemeniz, kazandığınız yıldızlar ve tercihleriniz cihazınızda yerel olarak saklanır. Cihazınızdaki uygulama verilerini temizleyerek veya uygulamayı kaldırarak bu verileri anında tamamen silebilirsiniz.'
                  : 'In Flow Connects, your level progress, stars, and preferences are stored locally on your device. You can immediately delete all local data by clearing app storage or uninstalling the game.'}
              </p>
            </Section>

            <Section title={isTR ? '2. Destek ve E-posta Verileri' : '2. Support & Email Data'}>
              <p>
                {isTR
                  ? 'Destek talebi için bizimle e-posta yoluyla iletişime geçtiyseniz, e-posta adresiniz ve mesaj içeriğiniz tarafımızda saklanmış olabilir.'
                  : 'If you contacted support via email, your email address and message contents may be retained in support logs.'}
              </p>
              <p>
                {isTR
                  ? 'Bu verilerin silinmesini talep etmek için iammustafakucukkoc@gmail.com adresine "Flow Connects Data Deletion Request" konu başlığıyla e-posta gönderebilirsiniz. Talebiniz 30 gün içerisinde işleme alınacaktır.'
                  : 'To request deletion of support data, send an email to iammustafakucukkoc@gmail.com with the subject "Flow Connects Data Deletion Request". Your request will be processed within 30 days.'}
              </p>
            </Section>

            <Section title={isTR ? '3. Reklam Sağlayıcı Verileri' : '3. Advertising Provider Data'}>
              <p>
                {isTR
                  ? 'Reklam kimliği ve reklam etkileşim verileri Google Mobile Ads tarafından yönetilir. Bu verileri sıfırlamak veya kişiselleştirilmiş reklamları kapatmak için cihazınızın Gizlilik / Reklamlar ayarlarını kullanabilirsiniz.'
                  : 'Advertising ID and ad interaction data are managed by Google Mobile Ads. You can reset your Advertising ID or opt out of personalized ads via your device Privacy / Ads settings.'}
              </p>
            </Section>

            <Section title={isTR ? '4. İletişim' : '4. Contact'}>
              <p>
                {isTR
                  ? 'Veri silme ile ilgili her türlü soru için: iammustafakucukkoc@gmail.com'
                  : 'For any questions about data deletion: iammustafakucukkoc@gmail.com'}
              </p>
              <div className="mt-3">
                <Link to="/flow-connects/privacy" className="text-[#0ea394] font-bold hover:text-[#052e16] transition-colors underline">
                  {isTR ? 'Flow Connects Gizlilik Politikasını Görüntüle' : 'View Flow Connects Privacy Policy'}
                </Link>
              </div>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FlowConnectsDataDeletionPage;
