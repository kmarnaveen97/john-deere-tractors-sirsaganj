import type { Metadata } from "next";
import { BadgeCheck, HandCoins, Repeat, Search } from "lucide-react";
import { DealerCta, SiteFooter, SiteHeader } from "@/components/site-shell";
import { ExchangeEnquiry } from "@/components/exchange-enquiry";
import { districtName } from "@/lib/service-area";
import styles from "@/app/section-page.module.css";

export const metadata: Metadata = {
  title: "पुराना ट्रैक्टर एक्सचेंज और मूल्यांकन | S.B. Auto Sirsaganj",
  description:
    "पुराना ट्रैक्टर बेचना है या एक्सचेंज में नया John Deere लेना है? ब्रांड, मॉडल, वर्ष और हालत भेजिए — S.B. Auto Sales & Services, Sirsaganj से कीमत का अंदाजा और आगे की प्रक्रिया समझिए। 70885 01000.",
  keywords: [
    "पुराना ट्रैक्टर", "second hand tractor", "used tractor exchange", "ट्रैक्टर एक्सचेंज",
    "पुराना ट्रैक्टर बेचें", `used tractor ${districtName}`, "second hand tractor Sirsaganj",
    "ट्रैक्टर की कीमत का अंदाजा",
  ],
  alternates: { canonical: "/purana-tractor-exchange" },
};

const faqs = [
  {
    q: "पुराने ट्रैक्टर की कीमत कैसे तय होती है?",
    a: "मुख्य रूप से पाँच बातों से — ब्रांड और मॉडल, खरीद का वर्ष, कुल चले हुए घंटे, इंजन तथा हाइड्रोलिक की हालत, और टायर की स्थिति। कागज पूरे और साफ होने पर भी कीमत बेहतर मिलती है। अंतिम आकलन ट्रैक्टर देखने के बाद ही होता है।",
  },
  {
    q: "क्या पुराने ट्रैक्टर को नए John Deere में एक्सचेंज किया जा सकता है?",
    a: "हाँ, बातचीत की जा सकती है। आप अपना पुराना ट्रैक्टर देकर उसकी कीमत नए ट्रैक्टर की रकम में समायोजित करवा सकते हैं। बाकी राशि नकद या फाइनेंस के जरिए दी जा सकती है।",
  },
  {
    q: "क्या दूसरे ब्रांड का पुराना ट्रैक्टर भी चलेगा?",
    a: "आप किसी भी ब्रांड का पुराना ट्रैक्टर लेकर बात कर सकते हैं — Mahindra, Swaraj, Sonalika, Massey, Eicher, Farmtrac या कोई और। जरूरी यह है कि कागज सही हों।",
  },
  {
    q: "कौन से कागज चाहिए होते हैं?",
    a: "आमतौर पर RC (पंजीयन प्रमाणपत्र), बीमा और मालिक का पहचान प्रमाण। अगर ट्रैक्टर पर लोन चल रहा है तो उससे जुड़े कागज भी लगते हैं। पूरी सूची WhatsApp पर पूछ लीजिए।",
  },
];

export default function ExchangePage() {
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
      <SiteHeader active="dealer" />

      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.kicker}>पुराना ट्रैक्टर</p>
              <h1>एक्सचेंज<br />और मूल्यांकन</h1>
            </div>
            <p className={styles.heroLead}>
              पुराना ट्रैक्टर खड़ा है और नया लेने की सोच रहे हैं? ब्रांड, मॉडल, वर्ष और हालत भेजिए —
              हम कीमत के अंदाजे और आगे की प्रक्रिया पर सीधे WhatsApp पर बात करेंगे।
            </p>
          </div>
          <div className={styles.heroStats}>
            <span><strong>हर ब्रांड</strong><small>का पुराना ट्रैक्टर</small></span>
            <span><strong>WhatsApp</strong><small>पर तुरंत बात</small></span>
            <span><strong>Sirsaganj</strong><small>शोरूम पर जाँच</small></span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.heading}>
            <div><p className={styles.kicker}>प्रक्रिया</p><h2>तीन आसान<br />कदम</h2></div>
            <p>पूरी बात WhatsApp पर होती है, इसलिए बार-बार चक्कर लगाने की जरूरत नहीं पड़ती।</p>
          </div>
          <div className={styles.contentGrid}>
            <article className={styles.infoCard}>
              <Search size={30} /><h2>1. जानकारी भेजिए</h2>
              <p>नीचे फॉर्म में अपने पुराने ट्रैक्टर का ब्रांड, मॉडल, वर्ष, चले हुए घंटे और हालत भर दीजिए।</p>
            </article>
            <article className={styles.infoCard}>
              <HandCoins size={30} /><h2>2. अंदाजा लीजिए</h2>
              <p>हम शुरुआती कीमत का अंदाजा बताएँगे और बताएँगे कि किन बातों से कीमत घट या बढ़ सकती है।</p>
            </article>
            <article className={styles.infoCard}>
              <Repeat size={30} /><h2>3. एक्सचेंज कीजिए</h2>
              <p>ट्रैक्टर देखने के बाद अंतिम कीमत तय होती है, जिसे नए John Deere की रकम में समायोजित किया जा सकता है।</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.shell}>
          <div className={styles.heading}>
            <div><p className={styles.kicker}>जानकारी भेजें</p><h2>अपने पुराने ट्रैक्टर<br />का विवरण</h2></div>
            <p>जितनी सही जानकारी देंगे, कीमत का अंदाजा उतना ही सटीक मिलेगा।</p>
          </div>
          <ExchangeEnquiry />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.heading}>
            <div><p className={styles.kicker}>अक्सर पूछे जाने वाले सवाल</p><h2>एक्सचेंज से जुड़े सवाल</h2></div>
            <p>कीमत, कागज और प्रक्रिया को लेकर सबसे ज्यादा पूछे जाने वाले सवाल।</p>
          </div>
          <div className={styles.faq}>
            {faqs.map((item) => (
              <article key={item.q}><h3>{item.q}</h3><p>{item.a}</p></article>
            ))}
          </div>
          <p className={styles.notice}>
            <BadgeCheck size={16} /> कीमत का अंतिम आकलन ट्रैक्टर की भौतिक जाँच के बाद ही होता है।
            इस पेज पर दी गई बातें केवल सामान्य मार्गदर्शन हैं।
          </p>
        </div>
      </section>

      <DealerCta title="पुराने के बदले नया John Deere" subject="पुराना ट्रैक्टर एक्सचेंज" />
      <SiteFooter />
    </main>
  );
}
