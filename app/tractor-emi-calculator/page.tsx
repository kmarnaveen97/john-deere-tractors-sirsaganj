import type { Metadata } from "next";
import { BadgeCheck, MessageCircle } from "lucide-react";
import { DealerCta, SiteFooter, SiteHeader } from "@/components/site-shell";
import { EmiCalculator } from "@/components/emi-calculator";
import { districtName } from "@/lib/service-area";
import styles from "@/app/section-page.module.css";

export const metadata: Metadata = {
  title: "ट्रैक्टर EMI कैलकुलेटर | लोन और किस्त का हिसाब | S.B. Auto Sirsaganj",
  description:
    "ट्रैक्टर पर कितनी EMI बनेगी? कीमत, डाउन पेमेंट, ब्याज दर और अवधि डालकर मासिक किस्त, कुल ब्याज और कुल भुगतान का अनुमान हिंदी में लगाएँ। S.B. Auto Sales & Service, Sirsaganj — 70885 01000.",
  keywords: [
    "ट्रैक्टर EMI कैलकुलेटर", "tractor EMI calculator", "ट्रैक्टर लोन", "tractor loan India",
    "ट्रैक्टर की किस्त", "John Deere tractor finance", `tractor loan ${districtName}`,
  ],
  alternates: { canonical: "/tractor-emi-calculator" },
};

const faqs = [
  {
    q: "ट्रैक्टर पर कितना लोन मिल जाता है?",
    a: "आमतौर पर बैंक और फाइनेंस कंपनियाँ ट्रैक्टर की कीमत का एक बड़ा हिस्सा लोन के रूप में देती हैं और बाकी डाउन पेमेंट के रूप में लिया जाता है। सही अनुपात आपकी जमीन, आय के प्रमाण और लेनदार की नीति पर निर्भर करता है — इसकी पुष्टि शोरूम पर करें।",
  },
  {
    q: "EMI किन बातों पर घटती-बढ़ती है?",
    a: "तीन बातों पर — लोन की राशि, ब्याज दर और अवधि। डाउन पेमेंट बढ़ाने से लोन राशि घटती है और EMI कम हो जाती है। अवधि बढ़ाने से मासिक EMI घटती है, पर कुल ब्याज बढ़ जाता है।",
  },
  {
    q: "क्या इस कैलकुलेटर का नतीजा अंतिम होता है?",
    a: "नहीं। यह केवल अनुमान है, जो reducing balance तरीके से निकाला गया है। प्रोसेसिंग फीस, बीमा, दस्तावेज शुल्क और लेनदार की शर्तें इसमें शामिल नहीं हैं। अंतिम EMI बैंक या फाइनेंस कंपनी तय करती है।",
  },
  {
    q: "ट्रैक्टर लोन के लिए कौन से कागज लगते हैं?",
    a: "सामान्य तौर पर पहचान प्रमाण, पते का प्रमाण, जमीन के कागज (खतौनी) और बैंक खाते का विवरण माँगा जाता है। हर लेनदार की सूची थोड़ी अलग होती है — शोरूम पर आकर या WhatsApp पर पूछकर पूरी सूची ले लीजिए।",
  },
];

export default function EmiCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader active="finance" />

      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.kicker}>ट्रैक्टर फाइनेंस</p>
              <h1>EMI कितनी<br />बनेगी?</h1>
            </div>
            <p className={styles.heroLead}>
              कीमत, डाउन पेमेंट, ब्याज दर और अवधि भरिए — मासिक किस्त, कुल ब्याज और कुल भुगतान
              तुरंत सामने आ जाएगा। हिसाब पसंद आए तो एक क्लिक में वही WhatsApp पर हमें भेज दीजिए।
            </p>
          </div>
          <div className={styles.heroStats}>
            <span><strong>तुरंत</strong><small>अनुमान</small></span>
            <span><strong>WhatsApp</strong><small>सीधे भेजें</small></span>
            <span><strong>70885 01000</strong><small>फाइनेंस सहायता</small></span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.heading}>
            <div><p className={styles.kicker}>कैलकुलेटर</p><h2>अपना हिसाब<br />खुद लगाइए</h2></div>
            <p>नीचे दिए आँकड़े बदलकर देखिए कि डाउन पेमेंट और अवधि बदलने से आपकी किस्त पर कितना फर्क पड़ता है।</p>
          </div>
          <EmiCalculator />
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.shell}>
          <div className={styles.heading}>
            <div><p className={styles.kicker}>ध्यान रखने योग्य बातें</p><h2>फाइनेंस से पहले</h2></div>
            <p>सही फैसला सिर्फ EMI देखकर नहीं, कुल लागत देखकर होता है।</p>
          </div>
          <ul className={styles.checkList}>
            <li>अवधि बढ़ाने से EMI घटती है, पर कुल ब्याज बढ़ जाता है।</li>
            <li>डाउन पेमेंट जितना ज्यादा, उतना कम ब्याज देना पड़ता है।</li>
            <li>प्रोसेसिंग फीस और बीमा अलग से जुड़ते हैं।</li>
            <li>फसल के मौसम के हिसाब से किस्त की तारीख तय करवाइए।</li>
            <li>कागज पूरे हों तो लोन जल्दी पास होता है।</li>
            <li>सरकारी सब्सिडी लागू हो तो अलग से पूछिए।</li>
          </ul>
          <p className={styles.notice}>
            <BadgeCheck size={16} /> S.B. Auto Sales &amp; Service केवल quotation, दस्तावेज तैयारी और
            उपलब्ध scheme समझने में सहायता करता है। लोन स्वीकृति और ब्याज दर पूरी तरह बैंक या
            फाइनेंस कंपनी के अधिकार में है।
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.heading}>
            <div><p className={styles.kicker}>अक्सर पूछे जाने वाले सवाल</p><h2>फाइनेंस से जुड़े सवाल</h2></div>
            <p>और कुछ पूछना हो तो सीधे WhatsApp कीजिए — <MessageCircle size={14} /> 70885 01000।</p>
          </div>
          <div className={styles.faq}>
            {faqs.map((item) => (
              <article key={item.q}><h3>{item.q}</h3><p>{item.a}</p></article>
            ))}
          </div>
        </div>
      </section>

      <DealerCta title="अपने बजट के हिसाब से ट्रैक्टर चुनें" subject="ट्रैक्टर फाइनेंस और EMI" />
      <SiteFooter />
    </main>
  );
}
