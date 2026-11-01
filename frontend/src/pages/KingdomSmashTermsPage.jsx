import React from 'react';
import { Link } from 'react-router-dom';
import KingdomSmashNav from '@/components/KingdomSmashNav';
import { useLanguage } from '@/context/LanguageContext';

const SUPPORT_EMAIL = 'iammustafakucukkoc@gmail.com';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-[#22091a] border border-[#f5b52c]/15 p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-white">{title}</h3>
    <div className="text-white/80 leading-7 space-y-3">{children}</div>
  </section>
);

const List = ({ items }) => (
  <ul className="list-disc list-inside space-y-2">
    {items.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const KingdomSmashTermsPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';
  const t = (tr, en) => (isTR ? tr : en);

  return (
    <div className="min-h-screen bg-[#14050c] text-white">
      <KingdomSmashNav active="terms" />

      <main className="pt-28 sm:pt-32 pb-12 px-4 sm:px-6 break-words">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#4e0418] via-[#a50e2e] to-[#f5b52c] p-8 sm:p-10 shadow-[0_24px_60px_rgba(245,181,44,0.25)]">
            <div className="flex items-center gap-4">
              <img
                src="/games/kingdom-smash/icon.png"
                alt="Kingdom Smash"
                className="h-12 w-12 rounded-2xl border border-white/20 object-cover"
              />
              <p className="text-[11px] font-black tracking-[0.28em] text-[#fff1cc]">KINGDOM SMASH</p>
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl font-black text-white">{t('Kullanım Koşulları', 'Terms of Use')}</h1>
            <p className="mt-3 text-white/80">{t('Yürürlük tarihi: 1 Kasım 2026', 'Effective date: November 1, 2026')}</p>
          </div>

          <div className="space-y-5">
            <Section title={t('1. Kabul', '1. Acceptance')}>
              <p>
                {t(
                  'Kingdom Smash’i indirerek, açarak veya oynayarak bu Kullanım Koşulları’nı ve bunun bir parçası olan Gizlilik Politikası’nı kabul etmiş olursunuz. Kabul etmiyorsanız lütfen oyunu kullanmayın. Oyunu Google Play veya App Store’dan indirdiyseniz o mağazanın kuralları da geçerlidir.',
                  'By downloading, opening or playing Kingdom Smash you accept these Terms of Use and the Privacy Policy, which forms part of them. If you do not agree, please do not use the game. If you downloaded the game from Google Play or the App Store, that store’s rules also apply.'
                )}
              </p>
            </Section>

            <Section title={t('2. Uygunluk', '2. Eligibility')}>
              <p>
                {t(
                  'Oyunu oynamak için en az 13 yaşında olmalısınız. Bulunduğunuz yerde reşit değilseniz, oyunu ve özellikle uygulama içi satın almaları bir ebeveynin veya yasal vasinin izniyle kullanmalısınız.',
                  'You must be at least 13 years old to play. If you are a minor where you live, you should use the game, and in particular in-app purchases, with the permission of a parent or legal guardian.'
                )}
              </p>
            </Section>

            <Section title={t('3. Kullanım Lisansı', '3. Licence to Use')}>
              <p>
                {t(
                  'Size, Kingdom Smash’i kişisel ve ticari olmayan amaçlarla kendi cihazınızda oynamanız için sınırlı, münhasır olmayan, devredilemez ve geri alınabilir bir lisans veriyoruz. Oyunu kopyalayamaz, değiştiremez, kaynak koduna dönüştüremez, tersine mühendislik yapamaz, satamaz, kiralayamaz veya başka biçimde dağıtamazsınız.',
                  'We grant you a limited, non-exclusive, non-transferable and revocable licence to play Kingdom Smash on your own device for personal, non-commercial purposes. You may not copy, modify, decompile, reverse engineer, sell, rent or otherwise distribute the game.'
                )}
              </p>
            </Section>

            <Section title={t('4. Oyuncu Profili ve Hesap', '4. Player Profile and Account')}>
              <p>
                {t(
                  'İlerlemeniz cihazınızda ve sunucumuzda saklanır. İsteğe bağlı olarak bir kullanıcı adı ve şifreyle hesap oluşturup ilerlemenizi başka bir cihaza taşıyabilirsiniz. Şifrenizi gizli tutmak sizin sorumluluğunuzdadır. Profil adınız dünya sıralamasında diğer oyunculara görünür; hakaret, nefret, müstehcenlik veya başkasının kimliğine bürünme içeren adlar kullanılamaz. Bu kurallara uymayan adları değiştirebilir veya kaldırabiliriz.',
                  'Your progress is stored on your device and on our server. You may optionally create an account with a username and password to move your progress to another device. You are responsible for keeping your password secret. Your profile name is visible to other players on the world leaderboard; names that are insulting, hateful, obscene or impersonate others are not allowed, and we may change or remove names that break these rules.'
                )}
              </p>
            </Section>

            <Section title={t('5. Sanal Ürünler ve Satın Almalar', '5. Virtual Items and Purchases')}>
              <List
                items={t(
                  [
                    'Altın, can, güçlendiriciler, Büyücü güçleri, paketler ve “Reklamları Kaldır” gibi sanal ürünler size yalnızca oyun içinde kullanmanız için lisanslanır; mülkiyetiniz değildir, gerçek para değeri yoktur, nakde çevrilemez ve devredilemez.',
                    'Satın almalar Google Play veya App Store üzerinden yapılır ve o mağazanın ödeme ve iade kurallarına tabidir. İade talepleri mağaza üzerinden yapılır. Tüketici olarak yasal haklarınız saklıdır.',
                    'Süreli ürünler (ör. 1 saatlik reklamsızlık veya sınırsız can) belirtilen süre sonunda biter.',
                    'Satın alınan ürünler, satın alma doğrulandıktan sonra hesabınıza eklenir. Bir sorun olursa destek ekibimize yazın.',
                    'Sanal ürünlerin fiyatlarını, içeriklerini ve oyundaki dengeyi değiştirebiliriz.',
                  ],
                  [
                    'Virtual items such as coins, lives, boosters, Wizard powers, packs and “Remove Ads” are licensed to you only for use in the game; they are not your property, have no real-world money value, cannot be exchanged for cash and cannot be transferred.',
                    'Purchases are made through Google Play or the App Store and are subject to that store’s payment and refund rules. Refund requests are made through the store. Your statutory rights as a consumer are not affected.',
                    'Time-limited items (for example one hour without ads or unlimited lives) end when their time is up.',
                    'Purchased items are added to your account once the purchase has been verified. If something goes wrong, write to our support.',
                    'We may change the prices and contents of virtual items and the balance of the game.',
                  ]
                )}
              />
            </Section>

            <Section title={t('6. Reklamlar ve Ödüller', '6. Ads and Rewards')}>
              <p>
                {t(
                  'Oyun, bölümler arasında reklam ve isteğe bağlı ödüllü reklamlar içerir. Ödüllü bir reklamın ödülü, reklam sonuna kadar izlendiğinde verilir. Reklamların her zaman mevcut olacağını garanti etmeyiz. Reklamlarla etkileşimleriniz reklamverenle aranızdadır.',
                  'The game contains ads between levels and optional rewarded ads. A rewarded ad’s reward is given once the ad has been watched to the end. We do not guarantee that ads will always be available. Your dealings with advertisers are between you and them.'
                )}
              </p>
            </Section>

            <Section title={t('7. Adil Oyun', '7. Fair Play')}>
              <p>{t('Aşağıdakiler yasaktır:', 'The following are not allowed:')}</p>
              <List
                items={t(
                  [
                    'Hile, bot, değiştirilmiş uygulama veya kayıt dosyası kullanmak',
                    'Hataları kendi çıkarınız için kullanmak veya sıralamayı manipüle etmek',
                    'Sahte davetlerle ödül toplamak',
                    'Sunucularımıza zarar vermeye, aşırı yük bindirmeye veya izinsiz erişmeye çalışmak',
                  ],
                  [
                    'Using cheats, bots, modified apps or save files',
                    'Exploiting bugs for your own benefit or manipulating the leaderboard',
                    'Collecting rewards through fake invites',
                    'Trying to harm, overload or gain unauthorised access to our servers',
                  ]
                )}
              />
              <p>
                {t(
                  'Bu kuralları ihlal eden oyuncuların ilerlemesini sıfırlayabilir, sıralamadan çıkarabilir veya hizmete erişimini sonlandırabiliriz.',
                  'We may reset the progress of, remove from the leaderboard or end access for players who break these rules.'
                )}
              </p>
            </Section>

            <Section title={t('8. Arkadaş Davetleri', '8. Inviting Friends')}>
              <p>
                {t(
                  'Davet ödülleri yalnızca davet bağlantınızla oyunu gerçekten yükleyip oynayan yeni oyuncular için verilir. Davet bağlantınızı yalnızca tanıdığınız kişilerle paylaşın ve istenmeyen mesaj (spam) olarak göndermeyin.',
                  'Invite rewards are given only for new players who actually install and play the game through your invite link. Share your link only with people you know and do not send it as spam.'
                )}
              </p>
            </Section>

            <Section title={t('9. Fikri Mülkiyet', '9. Intellectual Property')}>
              <p>
                {t(
                  'Kingdom Smash, karakterleri (Leo, Bruno, Max, Bella, Jax, Goldie, Büyücü, Prenses ve diğerleri), görselleri, müzikleri, sesleri, kodu ve adı dahil tüm içeriğiyle bize veya lisans verenlerimize aittir ve fikri mülkiyet yasalarıyla korunur.',
                  'Kingdom Smash and all of its content, including its characters (Leo, Bruno, Max, Bella, Jax, Goldie, the Wizard, the Princess and others), artwork, music, sounds, code and name, belong to us or our licensors and are protected by intellectual property laws.'
                )}
              </p>
            </Section>

            <Section title={t('10. Hizmetin Sunulması ve Güncellemeler', '10. Availability and Updates')}>
              <p>
                {t(
                  'Oyunu güncelleyebilir, özellik ekleyebilir veya kaldırabilir ve bazı özellikler için internet bağlantısı gerektirebiliriz. Hizmetin kesintisiz veya hatasız olacağını garanti etmeyiz ve makul bir bildirimle oyunu sonlandırabiliriz.',
                  'We may update the game, add or remove features and require an internet connection for some of them. We do not guarantee that the service will be uninterrupted or error-free, and we may discontinue the game with reasonable notice.'
                )}
              </p>
            </Section>

            <Section title={t('11. Sorumluluğun Reddi ve Sınırlandırılması', '11. Disclaimer and Limitation of Liability')}>
              <p>
                {t(
                  'Oyun “olduğu gibi” ve “mevcut olduğu şekilde” sunulur. Yasanın izin verdiği en geniş ölçüde; dolaylı, arızi veya sonuç olarak ortaya çıkan zararlardan ve sanal ürünlerin veya verilerin kaybından sorumlu değiliz. Toplam sorumluluğumuz, son 12 ayda oyun için ödediğiniz tutarla sınırlıdır. Bu sınırlamalar, yasanın sınırlandırılmasına izin vermediği sorumlulukları ve tüketici haklarınızı etkilemez.',
                  'The game is provided “as is” and “as available”. To the fullest extent the law allows, we are not liable for indirect, incidental or consequential damages or for the loss of virtual items or data. Our total liability is limited to the amount you paid for the game in the last 12 months. These limits do not affect liabilities that cannot be limited by law or your rights as a consumer.'
                )}
              </p>
            </Section>

            <Section title={t('12. Fesih', '12. Termination')}>
              <p>
                {t(
                  'Oyunu silerek bu koşulları istediğiniz zaman sonlandırabilirsiniz. Koşulları ihlal etmeniz halinde erişiminizi askıya alabilir veya sonlandırabiliriz. Fesih halinde kullanılmamış sanal ürünler, yasanın aksini gerektirdiği durumlar dışında iade edilmez.',
                  'You may end these terms at any time by deleting the game. If you break these terms, we may suspend or end your access. On termination, unused virtual items are not refunded except where the law requires otherwise.'
                )}
              </p>
            </Section>

            <Section title={t('13. Uygulanacak Hukuk', '13. Governing Law')}>
              <p>
                {t(
                  'Bu koşullar Türkiye Cumhuriyeti yasalarına tabidir. Uyuşmazlıklarda Türkiye mahkemeleri ve icra daireleri yetkilidir; tüketicilerin kendi ülkelerindeki zorunlu tüketici koruma hükümleri ve tüketici hakem heyetlerine başvurma hakları saklıdır.',
                  'These terms are governed by the laws of the Republic of Turkey, and the courts of Turkey have jurisdiction over disputes. Mandatory consumer protection rules of your own country and your right to use consumer dispute bodies are not affected.'
                )}
              </p>
            </Section>

            <Section title={t('14. Değişiklikler', '14. Changes')}>
              <p>
                {t(
                  'Bu koşulları güncelleyebiliriz. Güncel sürüm her zaman bu sayfada yürürlük tarihiyle yayımlanır; önemli değişiklikleri oyun içinde duyururuz. Değişikliklerden sonra oynamaya devam etmeniz güncel koşulları kabul ettiğiniz anlamına gelir.',
                  'We may update these terms. The current version is always published on this page with its effective date, and we will announce important changes in the game. Continuing to play after a change means you accept the updated terms.'
                )}
              </p>
            </Section>

            <Section title={t('15. İletişim', '15. Contact')}>
              <p>{t(`Sorularınız için: ${SUPPORT_EMAIL}`, `For questions: ${SUPPORT_EMAIL}`)}</p>
              <div className="mt-3">
                <Link to="/kingdom-smash/privacy" className="text-[#f5b52c] font-bold hover:text-white transition-colors">
                  {t('Kingdom Smash Gizlilik Politikası', 'Kingdom Smash Privacy Policy')}
                </Link>
              </div>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default KingdomSmashTermsPage;
