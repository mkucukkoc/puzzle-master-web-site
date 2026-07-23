import React from 'react';
import { Link } from 'react-router-dom';
import BlocksPuzzleEscapeNav from '@/components/BlocksPuzzleEscapeNav';
import { useLanguage } from '@/context/LanguageContext';

const SUPPORT_EMAIL = 'iammustafakucukkoc@gmail.com';

const content = {
  en: {
    title: 'Terms of Use',
    updated: 'Last updated: July 23, 2026',
    sections: [
      {
        title: '1. Acceptance of These Terms',
        paragraphs: [
          'These Terms of Use form an agreement between you and the developer and operator of Blocks - Puzzle Escape (“we,” “us,” or “our”). By downloading, installing, accessing, or using the game, you confirm that you have read and agree to these Terms and our Privacy Policy.',
          'If you do not agree, do not use the app. Additional terms from Apple, Google, your device provider, or an app marketplace may also apply.',
        ],
      },
      {
        title: '2. Eligibility and Use by Minors',
        paragraphs: [
          'You must be legally able to accept these Terms in your country. If you are below the age of legal majority, a parent or legal guardian must review and accept these Terms on your behalf and supervise your use of the app.',
          'The game is intended for a general audience and does not require an account.',
        ],
      },
      {
        title: '3. The Service',
        paragraphs: [
          'Blocks - Puzzle Escape is a mobile puzzle game that may include grid-based levels, daily puzzles, lives, hints, stars, coins, themes, streaks, visual and sound effects, local progress saving, and advertising-supported features.',
          'Game rules, level availability, difficulty, rewards, visual themes, and features may change as the app evolves. We do not promise that every feature will be available on every device, platform, country, or app version.',
        ],
      },
      {
        title: '4. Limited License',
        paragraphs: [
          'Subject to these Terms, we grant you a limited, personal, revocable, non-exclusive, non-transferable, and non-sublicensable license to install and use the app on devices you own or control solely for private, non-commercial entertainment.',
          'The app is licensed, not sold. No ownership rights in the app or its content are transferred to you.',
        ],
      },
      {
        title: '5. Progress, Virtual Items, and Device Storage',
        paragraphs: [
          'Progress, lives, hints, stars, coins, themes, streaks, and similar items are gameplay features only. They have no cash value, are not property, cannot be exchanged for real money, and may not be sold or transferred.',
          'The current version stores most progress locally. Clearing app data, uninstalling, changing devices, using unsupported software, or a technical failure may reset or remove progress. Unless mandatory law requires otherwise, we are not responsible for restoring lost local progress or virtual items.',
          'We may balance, limit, correct, replace, or remove virtual items or progress affected by an error, exploit, or service change.',
        ],
      },
      {
        title: '6. Advertising and Rewarded Features',
        paragraphs: [
          'The game may display banner, interstitial, or optional rewarded advertising provided by third parties. If you choose a rewarded ad, you generally must complete it and satisfy the displayed conditions before the reward is granted.',
          'Ad availability is not guaranteed. A network interruption, ad-provider error, eligibility rule, or early exit may prevent delivery of an ad or reward. You may not manipulate ad delivery, automate views, generate fraudulent interactions, or exploit reward systems.',
          'Third-party ads are controlled by their providers. An advertisement does not mean we endorse the advertised product or service.',
        ],
      },
      {
        title: '7. Purchases and Platform Billing',
        paragraphs: [
          'The current version does not require an in-app purchase. If paid content, subscriptions, or an ad-free option are introduced later, the price and key conditions will be shown before purchase.',
          'Payments, billing, taxes, cancellations, and refunds are processed under the rules of Apple App Store, Google Play, or the marketplace used for the transaction. We do not receive your complete payment-card or bank-account details.',
          'Except where required by law or marketplace policy, purchases are final and virtual benefits cannot be redeemed for cash.',
        ],
      },
      {
        title: '8. Fair Play and Prohibited Conduct',
        paragraphs: ['You agree not to do, attempt, enable, or encourage any of the following:'],
        bullets: [
          'Use cheats, bots, scripts, automation, modified clients, emulators for abuse, or unauthorized third-party tools',
          'Exploit bugs, manipulate ads or rewards, falsify progress, or interfere with game balance',
          'Copy, scrape, modify, translate, sell, rent, distribute, or create derivative works from the app except where law expressly permits',
          'Reverse engineer, decompile, bypass security, probe systems, introduce malware, overload infrastructure, or disrupt another person’s use',
          'Use the app for unlawful, deceptive, harmful, harassing, infringing, or commercial purposes',
          'Remove copyright, trademark, attribution, or other proprietary notices',
        ],
      },
      {
        title: '9. Intellectual Property',
        paragraphs: [
          'The app and all associated software, code, designs, interfaces, artwork, graphics, animations, sounds, text, level arrangements, logos, names, and other content are owned by us or our licensors and are protected by intellectual-property laws.',
          '“Blocks - Puzzle Escape” and related branding may not be used in a way that suggests sponsorship, affiliation, or endorsement without prior written permission.',
        ],
      },
      {
        title: '10. Third-Party Services and Store Terms',
        paragraphs: [
          'The app may rely on advertising networks, operating-system services, app stores, hosting, or external links. We do not control third-party services and are not responsible for their separate content, availability, security, or practices.',
          'If you downloaded the app from Apple, you acknowledge that these Terms are between you and us, not Apple; Apple has no obligation to provide maintenance or support beyond its applicable marketplace terms. Equivalent marketplace terms apply to Google Play and other stores.',
        ],
      },
      {
        title: '11. Feedback',
        paragraphs: [
          'If you voluntarily send suggestions, ideas, or feedback, you allow us to use, adapt, and incorporate them without restriction or compensation, while you retain ownership of any rights you already hold. Do not send confidential information as feedback.',
        ],
      },
      {
        title: '12. Updates, Availability, and Changes',
        paragraphs: [
          'We may add, modify, rebalance, suspend, or discontinue levels, features, ads, rewards, themes, technical requirements, or the app itself. Updates may be required for continued use, security, compatibility, or legal compliance.',
          'We do not guarantee uninterrupted, error-free, or permanent availability. Maintenance, network conditions, device limitations, third-party outages, and events outside our reasonable control may affect the service.',
        ],
      },
      {
        title: '13. Privacy',
        paragraphs: [
          'Our Privacy Policy explains how information is handled when you use the app, visit the website, or contact support. It forms part of these Terms.',
        ],
        internalLink: { label: 'Read the Privacy Policy', to: '/blocks-puzzle-escape/privacy' },
      },
      {
        title: '14. Disclaimers',
        paragraphs: [
          'To the fullest extent permitted by applicable law, the app is provided “as is” and “as available.” We disclaim express and implied warranties, including merchantability, fitness for a particular purpose, non-infringement, accuracy, security, and uninterrupted operation.',
          'Nothing in these Terms excludes warranties or consumer protections that cannot legally be excluded.',
        ],
      },
      {
        title: '15. Limitation of Liability',
        paragraphs: [
          'To the fullest extent permitted by law, we and our licensors or service providers will not be liable for indirect, incidental, special, exemplary, punitive, or consequential loss; lost data, progress, profits, or opportunities; or damage arising from third-party services, ads, device failure, or inability to use the app.',
          'Where liability cannot be excluded, it will be limited to the greater of the amount you paid directly for the app during the six months before the event giving rise to the claim or the minimum amount required by law. These limits do not apply where prohibited, including liability that cannot be limited under mandatory consumer law.',
        ],
      },
      {
        title: '16. Suspension and Termination',
        paragraphs: [
          'You may stop using the app at any time by uninstalling it. We may restrict or terminate access, remove affected progress, or take protective measures if we reasonably believe you violated these Terms, abused advertising or reward systems, created security risk, or if continued service is no longer practical or lawful.',
          'Terms that by their nature should survive termination—including intellectual property, disclaimers, liability limits, and dispute provisions—will remain effective.',
        ],
      },
      {
        title: '17. Governing Law and Consumer Rights',
        paragraphs: [
          'These Terms are governed by the laws of the Republic of Türkiye, without regard to conflict-of-law rules. Courts and enforcement offices with jurisdiction under applicable law may hear disputes.',
          'If you are a consumer, mandatory rights and the jurisdiction protections of your country or region remain unaffected. Nothing here limits a right that cannot legally be waived.',
        ],
      },
      {
        title: '18. Resolving Concerns',
        paragraphs: [
          'Before starting a formal claim, please contact us with a clear description of the issue so we can try to resolve it informally. This does not prevent you from using a regulator, consumer authority, court, or other remedy available under mandatory law.',
        ],
      },
      {
        title: '19. Changes to These Terms',
        paragraphs: [
          'We may revise these Terms to reflect changes to the app, business practices, or law. The revised version and effective date will be posted on this page. Where appropriate, material changes may also be announced in the app.',
          'Your continued use after revised Terms take effect means you accept them to the extent permitted by law. If you do not agree, stop using and uninstall the app.',
        ],
      },
      {
        title: '20. General Provisions',
        paragraphs: [
          'If part of these Terms is found unenforceable, the remaining provisions remain effective. Failure to enforce a provision is not a waiver. You may not transfer your rights or obligations without our consent; we may transfer ours as part of a business or service reorganization, subject to applicable law.',
          'These Terms and the Privacy Policy are the entire agreement regarding your use of the app, except for mandatory platform terms or a separate written agreement.',
        ],
      },
      {
        title: '21. Contact',
        paragraphs: [
          'For support, legal notices, or questions about these Terms, contact the developer of Blocks - Puzzle Escape at the email address below.',
        ],
      },
    ],
  },
  tr: {
    title: 'Kullanım Koşulları',
    updated: 'Son güncelleme: 23 Temmuz 2026',
    sections: [
      {
        title: '1. Koşulların Kabulü',
        paragraphs: [
          'Bu Kullanım Koşulları, sizinle Blocks - Puzzle Escape geliştiricisi ve işletmecisi (“biz”, “bize” veya “bizim”) arasında bir sözleşme oluşturur. Oyunu indirerek, yükleyerek, oyuna erişerek veya oyunu kullanarak bu Koşulları ve Gizlilik Politikamızı okuyup kabul ettiğinizi onaylarsınız.',
          'Kabul etmiyorsanız uygulamayı kullanmayın. Apple, Google, cihaz sağlayıcınız veya uygulama mağazası tarafından sunulan ek koşullar da geçerli olabilir.',
        ],
      },
      {
        title: '2. Uygunluk ve Küçüklerin Kullanımı',
        paragraphs: [
          'Ülkenizde bu Koşulları kabul etmeye hukuken yetkin olmalısınız. Yasal erginlik yaşının altındaysanız ebeveyniniz veya yasal vasiniz Koşulları sizin adınıza inceleyip kabul etmeli ve uygulama kullanımınızı gözetmelidir.',
          'Oyun genel kitleye yöneliktir ve hesap oluşturulmasını gerektirmez.',
        ],
      },
      {
        title: '3. Hizmet',
        paragraphs: [
          'Blocks - Puzzle Escape; ızgara tabanlı seviyeler, günlük bulmacalar, can, ipucu, yıldız, jeton, tema, seri, görsel ve ses efektleri, yerel ilerleme kaydı ve reklam destekli özellikler içerebilen bir mobil bulmaca oyunudur.',
          'Oyun kuralları, seviye erişimi, zorluk, ödüller, görsel temalar ve özellikler uygulama geliştikçe değişebilir. Her özelliğin her cihazda, platformda, ülkede veya uygulama sürümünde bulunacağını taahhüt etmeyiz.',
        ],
      },
      {
        title: '4. Sınırlı Lisans',
        paragraphs: [
          'Bu Koşullara uymanız şartıyla, yalnızca kişisel ve ticari olmayan eğlence amacıyla sahip olduğunuz veya kontrol ettiğiniz cihazlara uygulamayı yükleyip kullanmanız için sınırlı, kişisel, geri alınabilir, münhasır olmayan, devredilemez ve alt lisans verilemez bir lisans tanırız.',
          'Uygulama satılmaz, lisanslanır. Uygulama veya içeriği üzerindeki hiçbir mülkiyet hakkı size devredilmez.',
        ],
      },
      {
        title: '5. İlerleme, Sanal Öğeler ve Cihaz Depolaması',
        paragraphs: [
          'İlerleme, can, ipucu, yıldız, jeton, tema, seri ve benzeri öğeler yalnızca oyun özellikleridir. Nakit değerleri yoktur, mülkiyet sayılmazlar, gerçek paraya çevrilemezler, satılamaz veya devredilemezler.',
          'Mevcut sürüm ilerlemenin çoğunu yerel olarak saklar. Uygulama verilerini temizlemek, uygulamayı kaldırmak, cihaz değiştirmek, desteklenmeyen yazılım kullanmak veya teknik arıza ilerlemeyi sıfırlayabilir ya da silebilir. Emredici hukuk aksini gerektirmedikçe kaybolan yerel ilerlemeyi veya sanal öğeleri geri yüklemekten sorumlu değiliz.',
          'Hata, açık veya hizmet değişikliğinden etkilenen sanal öğeleri ya da ilerlemeyi dengeleyebilir, sınırlandırabilir, düzeltebilir, değiştirebilir veya kaldırabiliriz.',
        ],
      },
      {
        title: '6. Reklamlar ve Ödüllü Özellikler',
        paragraphs: [
          'Oyun, üçüncü tarafların sağladığı banner, geçiş veya isteğe bağlı ödüllü reklamları gösterebilir. Ödüllü reklamı seçerseniz ödül verilmeden önce genellikle reklamı tamamlamanız ve gösterilen koşulları karşılamanız gerekir.',
          'Reklam erişimi garanti edilmez. Ağ kesintisi, reklam sağlayıcı hatası, uygunluk kuralı veya erken çıkış, reklamın ya da ödülün sunulmasını engelleyebilir. Reklam sunumunu manipüle edemez, görüntülemeleri otomatikleştiremez, sahte etkileşim oluşturamaz veya ödül sistemini istismar edemezsiniz.',
          'Üçüncü taraf reklamları sağlayıcıları tarafından kontrol edilir. Bir reklamın gösterilmesi, reklamı yapılan ürün veya hizmeti onayladığımız anlamına gelmez.',
        ],
      },
      {
        title: '7. Satın Almalar ve Platform Ödemeleri',
        paragraphs: [
          'Mevcut sürüm uygulama içi satın alma gerektirmez. Gelecekte ücretli içerik, abonelik veya reklamsız seçenek sunulursa fiyat ve temel koşullar satın alma öncesinde gösterilir.',
          'Ödeme, faturalandırma, vergi, iptal ve iade işlemleri Apple App Store, Google Play veya işlemin yapıldığı mağazanın kurallarına göre yürütülür. Ödeme kartı veya banka hesabı bilgilerinizin tamamını almayız.',
          'Yasa veya mağaza politikası gerektirmedikçe satın almalar kesindir ve sanal faydalar nakde çevrilemez.',
        ],
      },
      {
        title: '8. Adil Oyun ve Yasaklı Davranışlar',
        paragraphs: ['Aşağıdakileri yapmamayı, yapmaya çalışmamayı, mümkün kılmamayı veya teşvik etmemeyi kabul edersiniz:'],
        bullets: [
          'Hile, bot, betik, otomasyon, değiştirilmiş istemci, kötüye kullanım amacıyla emülatör veya yetkisiz üçüncü taraf aracı kullanmak',
          'Hatalardan yararlanmak, reklam veya ödülleri manipüle etmek, ilerlemeyi sahteleştirmek ya da oyun dengesine müdahale etmek',
          'Yasanın açıkça izin verdiği durumlar dışında uygulamayı kopyalamak, kazımak, değiştirmek, çevirmek, satmak, kiralamak, dağıtmak veya türev eser oluşturmak',
          'Tersine mühendislik yapmak, kaynak koda dönüştürmek, güvenliği aşmak, sistemleri yoklamak, kötü amaçlı yazılım eklemek, altyapıyı aşırı yüklemek veya başkasının kullanımını bozmak',
          'Uygulamayı yasa dışı, aldatıcı, zararlı, taciz edici, hak ihlal eden veya ticari amaçla kullanmak',
          'Telif hakkı, marka, atıf veya diğer mülkiyet bildirimlerini kaldırmak',
        ],
      },
      {
        title: '9. Fikri Mülkiyet',
        paragraphs: [
          'Uygulama ve ilişkili yazılım, kod, tasarım, arayüz, görsel, grafik, animasyon, ses, metin, seviye düzeni, logo, ad ve diğer içerik bize veya lisans verenlerimize aittir ve fikri mülkiyet mevzuatıyla korunur.',
          '“Blocks - Puzzle Escape” ve ilgili marka unsurları önceden yazılı izin olmadan sponsorluk, bağlantı veya onay izlenimi verecek biçimde kullanılamaz.',
        ],
      },
      {
        title: '10. Üçüncü Taraf Hizmetleri ve Mağaza Koşulları',
        paragraphs: [
          'Uygulama reklam ağlarına, işletim sistemi hizmetlerine, uygulama mağazalarına, barındırma altyapısına veya harici bağlantılara dayanabilir. Üçüncü taraf hizmetlerini kontrol etmeyiz ve bunların ayrı içeriğinden, erişilebilirliğinden, güvenliğinden veya uygulamalarından sorumlu değiliz.',
          'Uygulamayı Apple üzerinden indirdiyseniz bu Koşulların Apple ile değil sizinle bizim aramızda olduğunu; Apple’ın kendi mağaza koşullarının ötesinde bakım veya destek yükümlülüğü bulunmadığını kabul edersiniz. Google Play ve diğer mağazalar için eşdeğer mağaza koşulları geçerlidir.',
        ],
      },
      {
        title: '11. Geri Bildirim',
        paragraphs: [
          'Gönüllü olarak öneri, fikir veya geri bildirim gönderirseniz mevcut haklarınızın mülkiyeti sizde kalmak üzere bunları herhangi bir kısıtlama veya ücret olmadan kullanmamıza, uyarlamamıza ve uygulamaya dâhil etmemize izin verirsiniz. Gizli bilgileri geri bildirim olarak göndermeyin.',
        ],
      },
      {
        title: '12. Güncellemeler, Erişilebilirlik ve Değişiklikler',
        paragraphs: [
          'Seviyeleri, özellikleri, reklamları, ödülleri, temaları, teknik gereksinimleri veya uygulamanın kendisini ekleyebilir, değiştirebilir, yeniden dengeleyebilir, askıya alabilir veya sonlandırabiliriz. Kullanıma devam, güvenlik, uyumluluk veya yasal gereklilikler için güncelleme zorunlu olabilir.',
          'Kesintisiz, hatasız veya kalıcı erişilebilirlik garantisi vermeyiz. Bakım, ağ koşulları, cihaz sınırlamaları, üçüncü taraf kesintileri ve makul kontrolümüz dışındaki olaylar hizmeti etkileyebilir.',
        ],
      },
      {
        title: '13. Gizlilik',
        paragraphs: [
          'Gizlilik Politikamız uygulamayı kullandığınızda, web sitesini ziyaret ettiğinizde veya desteğe ulaştığınızda bilgilerin nasıl işlendiğini açıklar ve bu Koşulların bir parçasıdır.',
        ],
        internalLink: { label: 'Gizlilik Politikasını Okuyun', to: '/blocks-puzzle-escape/privacy' },
      },
      {
        title: '14. Garantilerin Reddi',
        paragraphs: [
          'Uygulanabilir hukukun izin verdiği en geniş ölçüde uygulama “olduğu gibi” ve “mevcut olduğu şekliyle” sunulur. Satılabilirlik, belirli amaca uygunluk, ihlal etmeme, doğruluk, güvenlik ve kesintisiz çalışma dâhil açık veya zımni garantileri reddederiz.',
          'Bu Koşulların hiçbir hükmü, hukuken hariç bırakılamayan garanti veya tüketici korumalarını ortadan kaldırmaz.',
        ],
      },
      {
        title: '15. Sorumluluğun Sınırlandırılması',
        paragraphs: [
          'Yasanın izin verdiği en geniş ölçüde biz, lisans verenlerimiz veya hizmet sağlayıcılarımız; dolaylı, arızi, özel, örnek niteliğinde, cezai veya sonuç olarak doğan kayıplardan; veri, ilerleme, kâr veya fırsat kaybından; üçüncü taraf hizmetleri, reklamlar, cihaz arızası veya uygulamayı kullanamamaktan doğan zararlardan sorumlu olmaz.',
          'Sorumluluğun hariç bırakılamadığı durumlarda sorumluluk, talebe yol açan olaydan önceki altı ay içinde uygulama için doğrudan ödediğiniz tutar ile kanunun zorunlu kıldığı asgari tutardan yüksek olanıyla sınırlıdır. Bu sınırlar, emredici tüketici hukuku kapsamındaki sınırlandırılamayan sorumluluklar dâhil, yasaklandıkları yerde uygulanmaz.',
        ],
      },
      {
        title: '16. Askıya Alma ve Sonlandırma',
        paragraphs: [
          'Uygulamayı kaldırarak kullanımı istediğiniz zaman bırakabilirsiniz. Bu Koşulları ihlal ettiğinizi, reklam veya ödül sistemini kötüye kullandığınızı, güvenlik riski oluşturduğunuzu makul olarak düşünürsek ya da hizmete devam etmek artık pratik veya hukuka uygun değilse erişimi sınırlandırabilir, sona erdirebilir, etkilenen ilerlemeyi kaldırabilir veya koruyucu önlem alabiliriz.',
          'Fikri mülkiyet, garanti reddi, sorumluluk sınırı ve uyuşmazlık hükümleri dâhil niteliği gereği sonlandırma sonrasında da geçerli olması gereken hükümler yürürlükte kalır.',
        ],
      },
      {
        title: '17. Uygulanacak Hukuk ve Tüketici Hakları',
        paragraphs: [
          'Bu Koşullar, kanunlar ihtilafı kuralları dikkate alınmaksızın Türkiye Cumhuriyeti hukukuna tabidir. Uygulanabilir hukuka göre yetkili mahkeme ve icra daireleri uyuşmazlıkları görebilir.',
          'Tüketiciyseniz ülkenizdeki veya bölgenizdeki emredici haklar ve yetki güvenceleri etkilenmez. Buradaki hiçbir hüküm hukuken vazgeçilemeyen bir hakkı sınırlandırmaz.',
        ],
      },
      {
        title: '18. Sorunların Çözümü',
        paragraphs: [
          'Resmî bir talep başlatmadan önce sorunu gayriresmî biçimde çözmeye çalışabilmemiz için açık bir açıklamayla bize ulaşın. Bu, emredici hukuk kapsamında düzenleyici kuruma, tüketici makamına, mahkemeye veya başka bir yola başvurmanızı engellemez.',
        ],
      },
      {
        title: '19. Koşullardaki Değişiklikler',
        paragraphs: [
          'Uygulamadaki, iş uygulamalarındaki veya mevzuattaki değişiklikleri yansıtmak için bu Koşulları yenileyebiliriz. Güncel sürüm ve yürürlük tarihi bu sayfada yayımlanır. Önemli değişiklikler uygun olduğunda uygulama içinde de duyurulabilir.',
          'Yeni Koşullar yürürlüğe girdikten sonra kullanıma devam etmeniz, kanunun izin verdiği ölçüde bunları kabul ettiğiniz anlamına gelir. Kabul etmiyorsanız uygulamayı kullanmayı bırakın ve kaldırın.',
        ],
      },
      {
        title: '20. Genel Hükümler',
        paragraphs: [
          'Koşulların bir bölümü uygulanamaz bulunursa kalan hükümler yürürlükte kalır. Bir hükmün uygulanmaması haktan feragat değildir. Hak ve yükümlülüklerinizi iznimiz olmadan devredemezsiniz; biz ise uygulanabilir hukuka tabi olarak bir iş veya hizmet yeniden yapılandırması kapsamında kendi hak ve yükümlülüklerimizi devredebiliriz.',
          'Bu Koşullar ve Gizlilik Politikası, emredici platform koşulları veya ayrıca yazılı sözleşme dışında uygulama kullanımınıza ilişkin anlaşmanın tamamını oluşturur.',
        ],
      },
      {
        title: '21. İletişim',
        paragraphs: [
          'Destek, hukuki bildirim veya bu Koşullara ilişkin sorular için aşağıdaki e-posta adresinden Blocks - Puzzle Escape geliştiricisine ulaşın.',
        ],
      },
    ],
  },
};

const Section = ({ section }) => (
  <section className="rounded-[1.5rem] bg-white border border-[#cfe1ff] p-6 shadow-sm">
    <h2 className="text-xl font-black mb-3 text-[#17345f]">{section.title}</h2>
    <div className="text-[#6b86af] leading-7 space-y-3">
      {section.paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      {section.bullets && (
        <ul className="list-disc pl-6 space-y-2">
          {section.bullets.map(item => <li key={item}>{item}</li>)}
        </ul>
      )}
      {section.internalLink && (
        <Link to={section.internalLink.to} className="inline-flex font-bold text-[#1f7cff] hover:text-[#17345f] transition-colors">
          {section.internalLink.label}
        </Link>
      )}
    </div>
  </section>
);

const BlocksPuzzleEscapeTermsPage = () => {
  const { language } = useLanguage();
  const copy = language === 'tr' ? content.tr : content.en;
  const isTR = language === 'tr';

  return (
    <div className="min-h-screen bg-[#f7fbff] text-[#17345f]">
      <BlocksPuzzleEscapeNav active="terms" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#0f5aa7] via-[#1f7cff] to-[#2f89ff] p-8 sm:p-10 shadow-[0_24px_60px_rgba(31,124,255,0.26)]">
            <div className="flex items-center gap-4">
              <div className="grid grid-cols-2 gap-1.5" aria-hidden="true">
                <span className="h-6 w-6 rounded-md bg-[#1f7cff] shadow-[inset_0_2px_0_rgba(255,255,255,0.5)]" />
                <span className="h-6 w-6 rounded-md bg-[#17c3b2] shadow-[inset_0_2px_0_rgba(255,255,255,0.5)]" />
                <span className="h-6 w-6 rounded-md bg-[#0ea394] shadow-[inset_0_2px_0_rgba(255,255,255,0.5)]" />
                <span className="h-6 w-6 rounded-md bg-[#ffb800] shadow-[inset_0_2px_0_rgba(255,255,255,0.5)]" />
              </div>
              <p className="text-[11px] font-black tracking-[0.28em] text-[#d9ecff]">BLOCKS - PUZZLE ESCAPE</p>
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl font-black text-white">{copy.title}</h1>
            <p className="mt-3 text-white/70">{copy.updated}</p>
          </div>

          <div className="space-y-5">
            {copy.sections.map(section => <Section key={section.title} section={section} />)}

            <section className="rounded-[1.5rem] bg-[#17345f] p-6 text-white shadow-sm">
              <h2 className="text-xl font-black mb-3">{isTR ? 'Bize Ulaşın' : 'Contact Us'}</h2>
              <a className="font-bold text-white hover:text-[#b8dcff] transition-colors" href={`mailto:${SUPPORT_EMAIL}`}>
                {SUPPORT_EMAIL}
              </a>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlocksPuzzleEscapeTermsPage;
