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

const SubTitle = ({ children }) => <h4 className="pt-2 text-base font-black text-[#f5b52c]">{children}</h4>;

const List = ({ items }) => (
  <ul className="list-disc list-inside space-y-2">
    {items.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const KingdomSmashPrivacyPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';
  const t = (tr, en) => (isTR ? tr : en);

  const onDevice = t(
    [
      'Oyun ilerlemesi: ulaştığınız bölüm, kazanılan yıldızlar ve Krallık Yolu’ndaki yeriniz',
      'Altın, can, güçlendirici (Sihirli Değnek, Dev Top, Kara Bomba, Sınırsız Top) ve Büyücü güçleri sayıları',
      'Kraliyet Mühürleri görevleri, Günlük Hediye, Krallık Partisi, Kumbara ve etkinlik ilerlemeleri',
      'Profil adınız, seçtiğiniz avatar ve çerçeve',
      'Ses, müzik ve titreşim tercihleri; reklamsız süre bilgisi',
    ],
    [
      'Game progress: the level you have reached, stars earned and your place on the Kingdom Road',
      'Coin, life, booster (Magic Wand, Giant Ball, Black Bomb, Unlimited Balls) and Wizard power counts',
      'Royal Seals tasks, Daily Gift, Kingdom Party, Piggy Bank and event progress',
      'Your profile name and the avatar and frame you chose',
      'Sound, music and vibration preferences; any ad-free time you own',
    ]
  );

  const cloud = t(
    [
      'Oyunu ilk açtığınızda oluşturulan rastgele bir oyuncu kimliği ve cihaz anahtarı (adınız veya e-postanız değildir)',
      'Yukarıdaki oyun verilerinin bir yedeği (bulut kayıt), böylece ilerlemeniz kaybolmaz',
      'Dünya sıralamasında gösterilen profil adınız, avatarınız, çerçeveniz ve bölümünüz',
      'İsteğe bağlı hesap: seçtiğiniz kullanıcı adı ve şifreniz. Şifreniz yalnızca geri döndürülemez biçimde tuzlanmış özet (scrypt hash) olarak saklanır; hiçbir zaman düz metin olarak tutulmaz',
      'Arkadaş davetleri: davet kodunuz, kodunuzla katılan oyuncu sayısı ve kazanılan ödüller. Android’de davet bağlantısıyla yüklenen oyun, Google Play Yükleme Yönlendiricisi (Install Referrer) üzerinden yalnızca davet kodunu okur',
      'Teknik kayıtlar: IP adresi, istek zamanı, uygulama sürümü, platform ve hata kayıtları (güvenlik, kötüye kullanımı önleme ve hata ayıklama için)',
    ],
    [
      'A random player ID and device key created the first time you open the game (not your name or email)',
      'A backup of the game data above (cloud save), so your progress is not lost',
      'The profile name, avatar, frame and level shown on the world leaderboard',
      'Optional account: the username you choose and your password. Your password is stored only as an irreversible salted hash (scrypt) and never in plain text',
      'Friend invites: your invite code, how many players joined with it and the rewards earned. On Android, a game installed from an invite link reads only the invite code through the Google Play Install Referrer',
      'Technical logs: IP address, request time, app version, platform and error reports (for security, abuse prevention and debugging)',
    ]
  );

  const purposes = t(
    [
      'Oyunu çalıştırmak, ilerlemenizi saklamak ve yeni bir cihazda geri yüklemek',
      'Dünya sıralamasını ve arkadaş davetlerini sunmak',
      'Satın aldığınız ürünleri doğrulamak ve teslim etmek, her satın almanın bir kez verilmesini sağlamak',
      'Ödüllü reklamlarla kazanılan altın, can, güçlendirici ve parti turlarını vermek',
      'Reklam göstermek ve (izninizle) kişiselleştirmek',
      'Çökmeleri ve hataları bulup düzeltmek, oyunun performansını iyileştirmek',
      'Hile, dolandırıcılık ve kötüye kullanımı önlemek; hizmetin güvenliğini sağlamak',
      'Destek taleplerini yanıtlamak ve yasal yükümlülükleri yerine getirmek',
    ],
    [
      'Run the game, keep your progress and restore it on a new device',
      'Provide the world leaderboard and friend invites',
      'Verify and deliver your purchases, making sure each one is granted only once',
      'Grant the coins, lives, boosters and party spins earned through rewarded ads',
      'Show ads and, with your consent, personalise them',
      'Find and fix crashes and bugs and improve the game’s performance',
      'Prevent cheating, fraud and abuse and keep the service secure',
      'Answer support requests and meet our legal obligations',
    ]
  );

  const bases = t(
    [
      'Sözleşmenin ifası: oyunu, bulut kaydı, sıralamayı ve satın aldıklarınızı sunmak',
      'Meşru menfaat: güvenlik, hile ve dolandırıcılığın önlenmesi, çökme raporlarıyla oyunun düzeltilmesi',
      'Açık rıza: kişiselleştirilmiş reklamlar (AB, AEA, İngiltere ve İsviçre’de izin formu ile alınır; istediğiniz zaman geri çekebilirsiniz)',
      'Hukuki yükümlülük: satın alma ve muhasebe kayıtlarının saklanması',
    ],
    [
      'Performance of a contract: providing the game, cloud save, leaderboard and what you buy',
      'Legitimate interests: security, preventing cheating and fraud, fixing the game through crash reports',
      'Consent: personalised ads (asked through the consent form in the EU, EEA, UK and Switzerland; you can withdraw it at any time)',
      'Legal obligation: keeping purchase and accounting records',
    ]
  );

  const providers = t(
    [
      'Google AdMob (reklamlar) ve Google Kullanıcı Mesajlaşma Platformu (izin formu)',
      'Google Firebase Crashlytics (çökme raporları)',
      'Google Firebase / Google Cloud Firestore (oyuncu hesabı, bulut kayıt ve sıralama verisinin saklanması)',
      'Render (oyun sunucumuzun barındırılması, Frankfurt, Avrupa Birliği)',
      'Google Play Faturalandırma ve Apple App Store (ödemeler)',
    ],
    [
      'Google AdMob (ads) and Google User Messaging Platform (consent form)',
      'Google Firebase Crashlytics (crash reports)',
      'Google Firebase / Google Cloud Firestore (storage of player accounts, cloud saves and leaderboard data)',
      'Render (hosting of our game server, Frankfurt, European Union)',
      'Google Play Billing and the Apple App Store (payments)',
    ]
  );

  const rights = t(
    [
      'Verilerinize erişme ve bir kopyasını alma',
      'Yanlış verilerin düzeltilmesini isteme',
      'Verilerinizin silinmesini isteme (hesap ve bulut kayıt dahil)',
      'İşlemenin kısıtlanmasını isteme ve işlemeye itiraz etme',
      'Veri taşınabilirliği',
      'Verdiğiniz rızayı istediğiniz zaman geri çekme',
      'Bir veri koruma otoritesine şikâyette bulunma (Türkiye’de Kişisel Verileri Koruma Kurumu)',
    ],
    [
      'Access your data and get a copy of it',
      'Ask for inaccurate data to be corrected',
      'Ask for your data to be deleted (including your account and cloud save)',
      'Ask for processing to be restricted and object to processing',
      'Data portability',
      'Withdraw any consent you have given at any time',
      'Lodge a complaint with a data protection authority (in Turkey, the Personal Data Protection Authority, KVKK)',
    ]
  );

  return (
    <div className="min-h-screen bg-[#14050c] text-white">
      <KingdomSmashNav active="privacy" />

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
            <h1 className="mt-6 text-3xl sm:text-4xl font-black text-white">{t('Gizlilik Politikası', 'Privacy Policy')}</h1>
            <p className="mt-3 text-white/80">{t('Yürürlük tarihi: 1 Kasım 2026', 'Effective date: November 1, 2026')}</p>
          </div>

          <div className="space-y-5">
            <Section title={t('1. Amaç', '1. Purpose')}>
              <p>
                {t(
                  'Bu Gizlilik Politikası, Kingdom Smash Kullanım Koşulları’nın bir parçasıdır. “Kingdom Smash”, “biz” ve “bizim” ifadeleri oyunun geliştiricisini ifade eder. Bu politika, hangi bilgileri topladığımızı, nasıl kullandığımızı, sakladığımızı, koruduğumuzu ve paylaştığımızı ve bu konudaki seçeneklerinizi ve haklarınızı açıklar.',
                  'This Privacy Policy forms part of the Kingdom Smash Terms of Use. “Kingdom Smash”, “we” and “us” refer to the developer of the game. It explains what information we collect, how we use, store, protect and share it, and the choices and rights you have.'
                )}
              </p>
            </Section>

            <Section title={t('2. Kapsam', '2. Scope')}>
              <p>
                {t(
                  'Bu politika, Kingdom Smash mobil oyununu (Google Play ve App Store sürümleri), oyunun sunucularını, bu web sayfalarını ve destek iletişimlerimizi (birlikte “Hizmetler”) kapsar. Hizmetler’i yükleyerek veya kullanarak bu politikayı okuduğunuzu kabul edersiniz. Kabul etmiyorsanız lütfen Hizmetler’i kullanmayın. Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR), Türkiye’deki 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK), Kaliforniya Tüketici Gizliliği Yasası (CCPA/CPRA) ve diğer geçerli mevzuatın gereklerini karşılamayı amaçlar.',
                  'This policy covers the Kingdom Smash mobile game (its Google Play and App Store versions), the game’s servers, these web pages and our support communications (together, the “Services”). By installing or using the Services you acknowledge that you have read this policy. If you do not agree, please do not use the Services. It is intended to meet the requirements of the EU General Data Protection Regulation (GDPR), Turkey’s Law No. 6698 on the Protection of Personal Data (KVKK), the California Consumer Privacy Act (CCPA/CPRA) and other applicable laws.'
                )}
              </p>
            </Section>

            <Section title={t('3. Topladığımız Bilgiler', '3. Information We Collect')}>
              <SubTitle>{t('3.1 Cihazınızda saklananlar', '3.1 Stored on your device')}</SubTitle>
              <List items={onDevice} />

              <SubTitle>{t('3.2 Oyun hizmeti (bulut kayıt, sıralama ve hesap)', '3.2 Game service (cloud save, leaderboard and account)')}</SubTitle>
              <p>
                {t(
                  'Oyun, ilerlemenizi korumak ve dünya sıralamasını sunmak için kendi sunucumuzla konuşur. Bunun için şunları işleriz:',
                  'The game talks to our own server to protect your progress and run the world leaderboard. For this we process:'
                )}
              </p>
              <List items={cloud} />

              <SubTitle>{t('3.3 Satın almalar', '3.3 Purchases')}</SubTitle>
              <p>
                {t(
                  'Uygulama içi satın almalar Google Play veya Apple App Store üzerinden yapılır. Biz yalnızca satın alınan ürünü, sipariş ve satın alma belirtecini (token) alır, satın almanın gerçek olduğunu Google ile doğrularız. Kart numaranızı, banka bilgilerinizi, adresinizi veya fatura bilgilerinizi hiçbir zaman görmeyiz; bunlar mağaza tarafından işlenir.',
                  'In-app purchases are made through Google Play or the Apple App Store. We receive only the product bought and its order and purchase token, and we verify with Google that the purchase is genuine. We never see your card number, bank details, address or billing information; these are handled by the store.'
                )}
              </p>

              <SubTitle>{t('3.4 Reklamlar (Google AdMob)', '3.4 Advertising (Google AdMob)')}</SubTitle>
              <p>
                {t(
                  'Kingdom Smash, bölümler arasında geçiş reklamları ve isteğe bağlı ödüllü reklamlar gösterir. Reklam ortağımız Google AdMob; reklam sunmak, ölçmek, sıklığı sınırlamak ve dolandırıcılığı önlemek için Android Reklam Kimliği (veya iOS’ta IDFA), IP adresi, cihaz modeli, işletim sistemi, dil ve reklamlarla etkileşimleriniz gibi bilgileri işleyebilir. Kişiselleştirilmiş reklamlar yalnızca izin verdiğinizde veya yasanın izin verdiği yerlerde gösterilir. “Reklamları Kaldır” veya reklamsız süre içeren bir paket satın aldığınızda geçiş reklamları gösterilmez; ödüllü reklamlar her zaman isteğe bağlıdır.',
                  'Kingdom Smash shows interstitial ads between levels and optional rewarded ads. Our advertising partner Google AdMob may process information such as the Android Advertising ID (or the IDFA on iOS), IP address, device model, operating system, language and your interactions with ads in order to serve and measure ads, cap their frequency and prevent fraud. Personalised ads are shown only with your consent or where the law allows it. When you buy “Remove Ads” or a pack with ad-free time, interstitial ads are not shown; rewarded ads are always optional.'
                )}
              </p>

              <SubTitle>{t('3.5 Çökme raporları (Firebase Crashlytics)', '3.5 Crash reports (Firebase Crashlytics)')}</SubTitle>
              <p>
                {t(
                  'Oyun çöktüğünde veya bir hata oluştuğunda Firebase Crashlytics şunları gönderir: hatanın teknik ayrıntıları ve kod konumu, cihaz modeli, işletim sistemi ve uygulama sürümü, bellek ve disk durumu, bir yükleme kimliği, oyuncu kimliğiniz ve o anda bulunduğunuz bölüm ve ekran. Bu bilgiler yalnızca hataları bulup düzeltmek için kullanılır; reklam veya pazarlama için kullanılmaz.',
                  'When the game crashes or an error occurs, Firebase Crashlytics sends: technical details of the error and where it happened in the code, device model, operating system and app version, memory and disk state, an installation identifier, your player ID and the level and screen you were on. This is used only to find and fix bugs, never for advertising or marketing.'
                )}
              </p>

              <SubTitle>{t('3.6 Bizimle iletişim', '3.6 Contacting us')}</SubTitle>
              <p>
                {t(
                  'Destek için bize yazdığınızda e-posta adresinizi, mesajınızı ve paylaştığınız bilgileri (örneğin oyuncu adınız) yalnızca talebinizi yanıtlamak için işleriz.',
                  'When you write to support, we process your email address, your message and anything you share (such as your player name) only to answer your request.'
                )}
              </p>

              <SubTitle>{t('3.7 Toplamadıklarımız', '3.7 What we do not collect')}</SubTitle>
              <p>
                {t(
                  'Oynamak için gerçek adınızı veya e-postanızı istemeyiz. Konumunuza, kişilerinize, kameranıza, mikrofonunuza, fotoğraflarınıza veya dosyalarınıza erişmeyiz. Oyun bildirim göndermez ve sosyal ağ ile giriş kullanmaz. Yukarıda sayılanlar dışında analiz veya pazarlama aracı bulunmaz.',
                  'We do not ask for your real name or email to play. We do not access your location, contacts, camera, microphone, photos or files. The game sends no notifications and uses no social network login. There are no analytics or marketing tools other than those listed above.'
                )}
              </p>
            </Section>

            <Section title={t('4. Bilgileri Nasıl Kullanırız', '4. How We Use Information')}>
              <List items={purposes} />
              <SubTitle>{t('Hukuki dayanaklar', 'Legal bases')}</SubTitle>
              <List items={bases} />
            </Section>

            <Section title={t('5. Bilgileri Kimlerle Paylaşırız', '5. How We Share Information')}>
              <p>
                {t(
                  'Kişisel verilerinizi satmayız. Bilgilerinizi yalnızca aşağıdaki durumlarda paylaşırız:',
                  'We do not sell your personal information. We share it only as follows:'
                )}
              </p>
              <SubTitle>{t('Diğer oyuncular', 'Other players')}</SubTitle>
              <p>
                {t(
                  'Dünya sıralamasında profil adınız, avatarınız, çerçeveniz ve bölümünüz diğer oyunculara görünür. Lütfen profil adı olarak gerçek adınızı veya kişisel bilgi içeren bir ad kullanmayın.',
                  'Your profile name, avatar, frame and level are visible to other players on the world leaderboard. Please do not use your real name or anything personal as your profile name.'
                )}
              </p>
              <SubTitle>{t('Hizmet sağlayıcılar', 'Service providers')}</SubTitle>
              <p>
                {t(
                  'Hizmetler’i sunmak için bizim adımıza çalışan ve verileri yalnızca bu amaçla işleyen sağlayıcılarla:',
                  'With providers who work on our behalf and process data only for that purpose:'
                )}
              </p>
              <List items={providers} />
              <p>
                {t(
                  'Bu sağlayıcıların kendi gizlilik politikaları da geçerlidir; örneğin Google: policies.google.com/privacy ve Google’ın iş ortaklarının verileri nasıl kullandığı: policies.google.com/technologies/partner-sites.',
                  'Their own privacy policies also apply; for example Google: policies.google.com/privacy, and how Google uses data from partner apps: policies.google.com/technologies/partner-sites.'
                )}
              </p>
              <SubTitle>{t('Yasal zorunluluklar ve korunma', 'Legal requirements and protection')}</SubTitle>
              <p>
                {t(
                  'Yasa, mahkeme kararı veya yetkili makam talebi gerektirdiğinde; haklarımızı, oyuncularımızı veya başkalarını korumak, hile ve dolandırıcılığı önlemek ve koşullarımızı uygulamak için gerektiğinde bilgileri açıklayabiliriz.',
                  'We may disclose information when required by law, a court order or a competent authority, and where necessary to protect our rights, our players or others, to prevent cheating and fraud, and to enforce our terms.'
                )}
              </p>
              <SubTitle>{t('İşletme devri', 'Business transfers')}</SubTitle>
              <p>
                {t(
                  'Oyunun birleşme, satın alma veya varlık devri yoluyla el değiştirmesi halinde bilgiler, bu politikaya uygun kullanılmak şartıyla yeni sahibe devredilebilir.',
                  'If the game changes hands through a merger, acquisition or transfer of assets, information may be transferred to the new owner on the condition that it is used in line with this policy.'
                )}
              </p>
            </Section>

            <Section title={t('6. Uluslararası Aktarım', '6. International Transfers')}>
              <p>
                {t(
                  'Oyun sunucumuz Avrupa Birliği’nde (Frankfurt) çalışır. Verileriniz ayrıca Google’ın Avrupa Birliği, Amerika Birleşik Devletleri ve diğer ülkelerdeki altyapısında işlenebilir. Bu aktarımlarda sağlayıcılarımızın Standart Sözleşme Maddeleri gibi uygun güvenceleri uygulanır. Hizmetler’i kullanarak bilgilerinizin Türkiye dışına aktarılabileceğini kabul edersiniz.',
                  'Our game server runs in the European Union (Frankfurt). Your data may also be processed on Google’s infrastructure in the European Union, the United States and other countries. Appropriate safeguards, such as our providers’ Standard Contractual Clauses, apply to these transfers. By using the Services you acknowledge that your information may be transferred outside Turkey.'
                )}
              </p>
            </Section>

            <Section title={t('7. Seçenekleriniz', '7. Your Choices')}>
              <List
                items={t(
                  [
                    'Reklam izni: AB, AEA, İngiltere ve İsviçre’de oyun ilk açılışta izninizi sorar. Seçiminizi Ayarlar → Terms & Privacy → Privacy Choices bölümünden istediğiniz zaman değiştirebilirsiniz.',
                    'Reklam Kimliği: Android’de Ayarlar → Gizlilik → Reklamlar bölümünden Reklam Kimliğinizi sıfırlayabilir veya silebilirsiniz; iOS’ta İzleme ayarlarını kapatabilirsiniz.',
                    'Reklamsız oyun: “Reklamları Kaldır” satın alındığında geçiş reklamları kapanır.',
                    'Ses, müzik ve titreşim oyunun Ayarlar ekranından kapatılabilir.',
                    'Uygulamayı silmek cihazınızdaki tüm oyun verilerini siler; sunucudaki verilerinizin silinmesi için aşağıdaki Veri Silme sayfasını kullanın.',
                  ],
                  [
                    'Ad consent: in the EU, EEA, UK and Switzerland the game asks for your consent on first launch. You can change your choice at any time in Settings → Terms & Privacy → Privacy Choices.',
                    'Advertising ID: on Android you can reset or delete it in Settings → Privacy → Ads; on iOS you can turn off tracking in Settings.',
                    'Ad-free play: buying “Remove Ads” turns off interstitial ads.',
                    'Sound, music and vibration can be turned off in the game’s Settings.',
                    'Deleting the app deletes all game data on your device; to delete your data on our server, use the Data Deletion page below.',
                  ]
                )}
              />
            </Section>

            <Section title={t('8. Haklarınız', '8. Your Rights')}>
              <p>{t('Bulunduğunuz yerin mevzuatına bağlı olarak şu haklara sahip olabilirsiniz:', 'Depending on where you live, you may have the right to:')}</p>
              <List items={rights} />
              <p>
                {t(
                  `Kaliforniya sakinleri ayrıca hangi kişisel bilgilerin toplandığını bilme, silinmesini ve düzeltilmesini isteme ve kişisel bilgilerin satışından veya hedefli reklam için paylaşımından çıkma haklarına sahiptir. Kişisel bilgilerinizi satmayız; reklam kişiselleştirmesini yukarıdaki reklam ve cihaz ayarlarıyla sınırlayabilirsiniz. Haklarınızı kullandığınız için size farklı davranılmaz.`,
                  `California residents also have the right to know what personal information is collected, to request its deletion and correction, and to opt out of the sale or sharing of personal information for targeted advertising. We do not sell personal information; you can limit ad personalisation with the ad and device settings above. You will not be treated differently for using your rights.`
                )}
              </p>
              <p>
                {t(
                  `Haklarınızı kullanmak için ${SUPPORT_EMAIL} adresine oyundaki profil adınızla (ve varsa hesap kullanıcı adınızla) yazın. Kimliğinizi doğrulamak için makul adımlar atar ve talebinizi yasal süreler içinde (en geç 30 gün) yanıtlarız.`,
                  `To use your rights, write to ${SUPPORT_EMAIL} with your in-game profile name (and your account username, if you have one). We take reasonable steps to verify your identity and answer within the legal time limits (at most 30 days).`
                )}
              </p>
            </Section>

            <Section title={t('9. Saklama Süresi', '9. Data Retention')}>
              <List
                items={t(
                  [
                    'Cihazınızdaki veriler: uygulamayı silene kadar.',
                    'Hesap, bulut kayıt ve sıralama kaydı: oynadığınız sürece; doğrulanmış bir silme talebinden sonra 30 gün içinde silinir.',
                    'Satın alma kayıtları: vergi ve ticaret mevzuatının gerektirdiği süre boyunca (Türkiye’de 10 yıla kadar).',
                    'Sunucu ve hata kayıtları: güvenlik ve hata ayıklama için sınırlı bir süre, ardından silinir.',
                    'Çökme raporları: Firebase Crashlytics tarafından en fazla 90 gün.',
                  ],
                  [
                    'Data on your device: until you delete the app.',
                    'Account, cloud save and leaderboard entry: for as long as you play; deleted within 30 days of a verified deletion request.',
                    'Purchase records: for as long as tax and commercial law requires (up to 10 years in Turkey).',
                    'Server and error logs: for a limited period for security and debugging, then deleted.',
                    'Crash reports: up to 90 days by Firebase Crashlytics.',
                  ]
                )}
              />
            </Section>

            <Section title={t('10. Güvenlik', '10. Security')}>
              <p>
                {t(
                  'Oyun ile sunucu arasındaki tüm iletişim şifrelidir (HTTPS). Şifreler yalnızca tuzlanmış özet olarak saklanır, erişim yetkili kişilerle sınırlıdır ve satın almalar sunucuda doğrulanır. Yine de internet üzerinden hiçbir aktarım veya sistem %100 güvenli değildir; bir güvenlik ihlalini öğrenirsek mevzuatın gerektirdiği şekilde bildirimde bulunuruz.',
                  'All communication between the game and our server is encrypted (HTTPS). Passwords are stored only as salted hashes, access is limited to authorised people, and purchases are verified on the server. Still, no transmission over the internet or system is 100% secure; if we learn of a security breach, we will give notice as the law requires.'
                )}
              </p>
            </Section>

            <Section title={t('11. Çocukların Gizliliği', "11. Children's Privacy")}>
              <p>
                {t(
                  `Kingdom Smash genel kitleye yöneliktir ve 13 yaş altındaki çocuklara yönelik değildir; 13 yaş altındaki (AB’nin bazı ülkelerinde 16 yaş altındaki) çocuklardan bilerek kişisel veri toplamayız. Çocuğunuzun bize veri verdiğini düşünüyorsanız ${SUPPORT_EMAIL} adresine yazın; verileri sileriz.`,
                  `Kingdom Smash is intended for a general audience and is not directed at children under 13; we do not knowingly collect personal data from children under 13 (under 16 in some EU countries). If you believe your child has given us data, write to ${SUPPORT_EMAIL} and we will delete it.`
                )}
              </p>
            </Section>

            <Section title={t('12. Bu Politikadaki Değişiklikler', '12. Changes to This Policy')}>
              <p>
                {t(
                  'Bu politikayı zaman zaman güncelleyebiliriz. Güncel sürüm her zaman bu sayfada yürürlük tarihiyle yayımlanır. Önemli değişiklikleri oyun içinde veya mevzuatın gerektirdiği başka bir yolla duyururuz. Bilgilerinizi daha önce bildirmediğimiz yeni bir amaçla kullanmadan önce sizi bilgilendirir ve gerektiğinde izninizi alırız.',
                  'We may update this policy from time to time. The current version is always published on this page with its effective date. We will announce important changes in the game or in another way the law requires. Before using your information for a new purpose we have not told you about, we will inform you and ask for your consent where needed.'
                )}
              </p>
            </Section>

            <Section title={t('13. İletişim ve Veri Sorumlusu', '13. Contact and Data Controller')}>
              <p>
                {t(
                  `Gizlilikle ilgili tüm sorularınız, talepleriniz ve şikâyetleriniz için veri sorumlusu olarak bize ${SUPPORT_EMAIL} adresinden ulaşabilirsiniz.`,
                  `For any question, request or complaint about privacy, contact us as the data controller at ${SUPPORT_EMAIL}.`
                )}
              </p>
              <div className="mt-3 flex flex-wrap gap-4">
                <Link to="/kingdom-smash/data-deletion" className="text-[#f5b52c] font-bold hover:text-white transition-colors">
                  {t('Kingdom Smash Veri Silme Talebi', 'Kingdom Smash Data Deletion Request')}
                </Link>
                <Link to="/kingdom-smash/terms" className="text-[#f5b52c] font-bold hover:text-white transition-colors">
                  {t('Kullanım Koşulları', 'Terms of Use')}
                </Link>
              </div>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default KingdomSmashPrivacyPage;
