import type { Metadata } from "next";
import { ArrowRight, ExternalLink, MessageCircle, ScaleIcon } from "lucide-react";
import { DealerCta, SiteFooter, SiteHeader } from "@/components/site-shell";
import { WhatsAppQueryLink } from "@/components/whatsapp-query-link";
import { comparisons, getComparison, type Comparison } from "@/lib/comparisons";
import { districtName } from "@/lib/service-area";
import styles from "@/app/section-page.module.css";

type ComparePageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return comparisons.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: ComparePageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getComparison(slug);
  if (!item) return { title: "तुलना उपलब्ध नहीं | S.B. Auto Sirsaganj" };

  const title = `${item.johnDeereName} vs ${item.rivalName} — तुलना | S.B. Auto Sirsaganj`;
  const description = `${item.johnDeereName} और ${item.rivalName} के आधिकारिक आँकड़ों की तुलना हिंदी में — पावर, सिलेंडर, लिफ्ट क्षमता, गियर और PTO। ${districtName} ज़िले के किसानों के लिए S.B. Auto Sales & Service, Sirsaganj से सलाह लें।`;

  return {
    title,
    description,
    keywords: [
      `${item.johnDeereName} vs ${item.rivalName}`,
      `${item.rivalName} तुलना`, `${item.rivalName} vs John Deere`,
      `${item.johnDeereName} कीमत`, `${item.rivalBrand} vs John Deere`,
      "45 HP ट्रैक्टर तुलना",
    ],
    alternates: { canonical: `/compare/${item.slug}` },
  };
}

export default async function ComparePage({ params }: ComparePageProps) {
  const { slug } = await params;
  const item = getComparison(slug) as Comparison;

  return (
    <main className={styles.page}>
      <SiteHeader active="tractors" />

      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.kicker}>ट्रैक्टर तुलना</p>
              <h1>{item.johnDeereName}<br />बनाम<br />{item.rivalName}</h1>
            </div>
            <p className={styles.heroLead}>{item.intro}</p>
          </div>
          <div className={styles.heroStats}>
            <span><strong>आधिकारिक</strong><small>निर्माता आँकड़े</small></span>
            <span><strong>{item.rows.length}</strong><small>बिंदुओं पर तुलना</small></span>
            <span><strong>70885 01000</strong><small>WhatsApp पर पूछें</small></span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.heading}>
            <div><p className={styles.kicker}>आँकड़े</p><h2>आमने-सामने</h2></div>
            <p>नीचे हर आँकड़ा दोनों कंपनियों की अपनी वेबसाइट से लिया गया है। जहाँ निर्माता ने कोई जानकारी नहीं दी, वहाँ अनुमान नहीं लगाया गया है।</p>
          </div>
          <div className={styles.compareTable}>
            <table>
              <thead>
                <tr>
                  <th scope="col">विवरण</th>
                  <th scope="col">{item.johnDeereName}</th>
                  <th scope="col">{item.rivalName}</th>
                </tr>
              </thead>
              <tbody>
                {item.rows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>{row.johnDeere}</td>
                    <td>{row.rival}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.formNote}>
            स्रोत: {item.sources.map((source, index) => (
              <span key={source.url}>
                {index > 0 ? " · " : ""}
                <a href={source.url} target="_blank" rel="noreferrer nofollow">{source.label} <ExternalLink size={11} /></a>
              </span>
            ))}
            . आँकड़े वेरिएंट और समय के साथ बदल सकते हैं — खरीद से पहले शोरूम पर पुष्टि करें।
          </p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.shell}>
          <div className={styles.heading}>
            <div><p className={styles.kicker}>निष्कर्ष</p><h2>आँकड़े क्या<br />कहते हैं</h2></div>
            <p>हम John Deere डीलर हैं, इसलिए तुलना सिर्फ आँकड़ों पर रखी गई है — फैसला आपका है।</p>
          </div>
          <p className={styles.notice}><ScaleIcon size={16} /> {item.verdict}</p>
          <p className={styles.formNote}>
            <WhatsAppQueryLink subject={`${item.johnDeereName} बनाम ${item.rivalName} — सलाह चाहिए`}>
              <MessageCircle size={14} /> अपने खेत के हिसाब से कौन सा सही रहेगा, WhatsApp पर पूछिए
            </WhatsAppQueryLink>
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.heading}>
            <div><p className={styles.kicker}>आगे देखें</p><h2>और जानकारी</h2></div>
            <p>पूरी जानकारी, फाइनेंस का हिसाब और दूसरी तुलनाएँ।</p>
          </div>
          <div className={styles.seriesGrid}>
            <a className={styles.seriesCard} href={`/products/${item.johnDeereSlug}`}>
              <small>पूरी जानकारी</small><strong>{item.johnDeereName}</strong>
              <span>देखें<ArrowRight size={15} /></span>
            </a>
            <a className={styles.seriesCard} href="/tractor-emi-calculator">
              <small>फाइनेंस</small><strong>EMI कैलकुलेटर</strong>
              <span>हिसाब लगाएँ<ArrowRight size={15} /></span>
            </a>
            <a className={styles.seriesCard} href="/purana-tractor-exchange">
              <small>एक्सचेंज</small><strong>पुराना ट्रैक्टर</strong>
              <span>कीमत पूछें<ArrowRight size={15} /></span>
            </a>
            {comparisons
              .filter((other) => other.slug !== item.slug)
              .map((other) => (
                <a className={styles.seriesCard} href={`/compare/${other.slug}`} key={other.slug}>
                  <small>तुलना</small><strong>{other.rivalName}</strong>
                  <span>देखें<ArrowRight size={15} /></span>
                </a>
              ))}
          </div>
        </div>
      </section>

      <DealerCta title="कौन सा ट्रैक्टर आपके खेत के लिए सही है?" subject={`${item.johnDeereName} बनाम ${item.rivalName}`} />
      <SiteFooter />
    </main>
  );
}
