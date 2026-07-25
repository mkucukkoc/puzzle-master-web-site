import React from 'react';
import MinesweeperNav from '@/components/MinesweeperNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-white border border-[#d7e3f4] p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-[#12305f]">{title}</h3>
    <div className="text-[#5a7196] leading-7 space-y-3">{children}</div>
  </section>
);

const MinesweeperDataDeletionPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  return (
    <div className="min-h-screen bg-[#f7fbff] text-[#12305f]">
      <MinesweeperNav active="delete" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#0b2558] via-[#143a85] to-[#2d63db] p-8 sm:p-10 shadow-[0_24px_60px_rgba(18,48,95,0.28)]">
            <div className="flex items-center gap-4">
              <div className="grid grid-cols-2 gap-1.5">
                <span className="h-6 w-6 rounded-md bg-[#4bb2ff] shadow-[inset_0_2px_0_rgba(255,255,255,0.45)]" />
                <span className="h-6 w-6 rounded-md bg-[#ff8d5a] shadow-[inset_0_2px_0_rgba(255,255,255,0.45)]" />
                <span className="h-6 w-6 rounded-md bg-[#dfe9ff] shadow-[inset_0_2px_0_rgba(255,255,255,0.65)]" />
                <span className="h-6 w-6 rounded-md bg-[#ffffff] shadow-[inset_0_2px_0_rgba(255,255,255,0.65)]" />
              </div>
              <p className="text-[11px] font-black tracking-[0.28em] text-[#cae0ff]">MINESWEEPER</p>
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl font-black text-white">
              {isTR ? 'Veri Silme Talebi' : 'Data Deletion Request'}
            </h1>
            <p className="mt-3 text-white/70">
              {isTR
                ? 'Minesweeper: Mine Quest ile ilişkili verilerin silinmesini talep etmek için aşağıdaki adımları kullanabilirsiniz.'
                : 'Use the steps below to request deletion of data associated with Minesweeper: Mine Quest.'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? '1. Uygulama ve Geliştirici' : '1. App and Developer'}>
              <p>
                {isTR
                  ? 'Bu sayfa yalnızca Minesweeper: Mine Quest mobil oyunu için geçerlidir. Talepler destek ekibi tarafından değerlendirilir. Oyun hesap gerektirmese bile, e-posta veya cihaz ile ilişkilendirilebilen kayıtların silinmesini isteyebilirsiniz.'
                  : 'This page applies only to the Minesweeper: Mine Quest mobile game. Requests are reviewed by the support team. Even if the game does not require an account, you can still request deletion of any email- or device-linked records.'}
              </p>
            </Section>

            <Section title={isTR ? '2. Nasıl Talep Gönderilir' : '2. How to Request Data Deletion'}>
              <ol className="list-decimal list-inside space-y-2">
                <li>{isTR ? 'iammustafakucukkoc@gmail.com adresine e-posta gönderin.' : 'Send an email to iammustafakucukkoc@gmail.com.'}</li>
                <li>{isTR ? 'Konu satırına “Minesweeper Data Deletion Request” yazın.' : 'Use the subject line “Minesweeper Data Deletion Request”.'}</li>
                <li>{isTR ? 'Uygulamada kullandığınız e-posta adresini, cihaz/platform bilgilerini ve silinmesini istediğiniz veri türlerini ekleyin.' : 'Include the email address you used in the app, your device/platform, and the data types you want deleted.'}</li>
                <li>{isTR ? 'Gerekirse doğrulama amacıyla ek bilgi isteyebiliriz.' : 'We may ask for additional information if needed to verify the request.'}</li>
              </ol>
              <p>{isTR ? 'Doğrulanan talepler genellikle 30 gün içinde işlenir.' : 'Verified requests are usually processed within 30 days.'}</p>
            </Section>

            <Section title={isTR ? '3. Silinebilecek Veri Türleri' : '3. Data Types That Can Be Deleted'}>
              <ul className="list-disc list-inside space-y-2">
                <li>{isTR ? 'Buluta kayıtlı oyun ilerlemesi, bölüm durumu, bayrak/hamle verileri ve uygulama tercihleri, varsa' : 'Cloud-stored game progress, level state, flag/move data, and app preferences, if any'}</li>
                <li>{isTR ? 'Destek talepleriyle ilişkili e-posta adresi ve mesaj içeriği' : 'Email address and message content related to support requests'}</li>
                <li>{isTR ? 'Hesabınıza veya cihazınıza bağlanabilen teknik kayıtlar ve bildirim belirteçleri' : 'Technical records and notification tokens that can be associated with your account or device'}</li>
                <li>{isTR ? 'Varsa uygulama içi profil verileri veya kullanıcı tanımlayıcıları' : 'In-app profile data or user identifiers, if any'}</li>
              </ul>
            </Section>

            <Section title={isTR ? '4. Saklanabilecek Veriler ve Süreler' : '4. Data That May Be Retained and Retention Periods'}>
              <ul className="list-disc list-inside space-y-2">
                <li>{isTR ? 'Yasal yükümlülükler, güvenlik, dolandırıcılık önleme, ödeme itirazları veya muhasebe gerekleri için bazı kayıtlar tutulabilir.' : 'Some records may be retained as required for legal obligations, security, fraud prevention, payment disputes, or accounting requirements.'}</li>
                <li>{isTR ? 'Google Play veya ilgili ödeme sağlayıcısı ödeme, abonelik veya satın alma kayıtlarını ayrı olarak saklayabilir.' : 'Google Play or the relevant payment provider may retain payment, subscription, or purchase records separately.'}</li>
                <li>{isTR ? 'Kullanıcıyı tanımlamayan toplu veya anonim istatistikler silme talebinden sonra da saklanabilir.' : 'Aggregated or anonymized statistics that cannot identify a user may be retained after a deletion request.'}</li>
                <li>{isTR ? 'Yedek kopyalar rutin döngülerle en geç 90 gün içinde kaldırılır.' : 'Residual backup copies are removed through routine cycles within 90 days.'}</li>
              </ul>
            </Section>

            <Section title={isTR ? '5. Cihazınızdaki Yerel Veriler' : '5. Local Data on Your Device'}>
              <p>
                {isTR
                  ? 'Minesweeper: Mine Quest bazı oyun ilerlemelerini veya tercihleri cihazınızda yerel olarak saklayabilir. Uygulamayı kaldırmak veya cihaz ayarlarından uygulama verilerini temizlemek bu yerel verileri silebilir.'
                  : 'Minesweeper: Mine Quest may store some game progress or preferences locally on your device. Uninstalling the app or clearing app data from device settings may remove this local data.'}
              </p>
            </Section>

            <Section title={isTR ? '6. İletişim' : '6. Contact'}>
              <p>
                {isTR
                  ? 'Veri silme talepleriyle ilgili sorular için: iammustafakucukkoc@gmail.com'
                  : 'For questions about data deletion requests: iammustafakucukkoc@gmail.com'}
              </p>
              <p>
                <a className="text-[#2d63db] font-bold hover:text-[#12305f] transition-colors" href="/minesweeper/privacy">
                  {isTR ? 'Minesweeper Gizlilik Politikası' : 'Minesweeper Privacy Policy'}
                </a>
              </p>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MinesweeperDataDeletionPage;
