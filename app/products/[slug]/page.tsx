import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  ExternalLink,
  MapPin,
  MessageCircle,
  Play,
} from "lucide-react";
import {
  allCatalogItems,
  getCatalogItem,
  getOfficialVideo,
  getRelatedItems,
  type CatalogItem,
} from "@/lib/catalog";
import { WhatsAppQueryLink } from "@/components/whatsapp-query-link";
import { MobileDock } from "@/components/mobile-dock";
import styles from "./page.module.css";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

const kindLabel: Record<CatalogItem["kind"], string> = {
  series: "ट्रैक्टर सीरीज़",
  tractor: "ट्रैक्टर",
  implement: "कृषि इम्प्लीमेंट",
  precision: "प्रिसीजन एग्रीकल्चर",
};

const kindHref: Record<CatalogItem["kind"], string> = {
  series: "/tractors",
  tractor: "/tractors",
  implement: "/implements",
  precision: "/precision-ag",
};

export function generateStaticParams() {
  return allCatalogItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getCatalogItem(slug);

  if (!item) return { title: "उत्पाद उपलब्ध नहीं | S.B. Auto Sirsaganj" };
  const displayName = item.hindiName ? `${item.hindiName} (${item.name})` : item.name;

  return {
    title: `${displayName} की जानकारी | S.B. Auto Sirsaganj`,
    description: `${displayName} के उपयोग, मुख्य खूबियाँ और जरूरी जानकारी हिंदी में पढ़ें। S.B. Auto Sales & Services, Sirsaganj से कीमत और उपलब्धता पूछें।`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const item = getCatalogItem(slug);
  if (!item) notFound();

  const related = getRelatedItems(item);
  const officialVideo = getOfficialVideo(item);
  const displayName = item.hindiName ? `${item.hindiName} (${item.name})` : item.name;
  const enquirySubject = `${displayName} की कीमत, उपलब्धता और finance`;
  const interestDetails = [
    `मॉडल / उत्पाद: ${displayName}`,
    `प्रकार: ${kindLabel[item.kind]}`,
    `श्रेणी: ${item.category}`,
    ...item.specs.map(([label, value]) => `${label}: ${value}`),
  ];

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="/" aria-label="S.B. Auto Sales and Services होम">
          <img className="dealer-wordmark" src="/sb-auto-wordmark.svg" alt="" width="296" height="64" />
        </a>
        <div className={styles.headerActions}>
          <a className={styles.backLink} href={kindHref[item.kind]}><ArrowLeft size={16} /> पूरा कैटलॉग</a>
          <WhatsAppQueryLink className={styles.callLink} subject={enquirySubject} interestDetails={interestDetails}><MessageCircle size={16} /> <span>WhatsApp Query</span></WhatsAppQueryLink>
        </div>
      </header>
      <WhatsAppQueryLink className="whatsapp-float" subject={enquirySubject} interestDetails={interestDetails} aria-label={`${item.name} के बारे में WhatsApp enquiry भेजें`}><MessageCircle size={21} /><span>WhatsApp Query</span></WhatsAppQueryLink>
      <MobileDock
        active={item.kind === "tractor" || item.kind === "series" ? "tractors" : item.kind === "implement" ? "implements" : undefined}
        subject={enquirySubject}
        interestDetails={interestDetails}
      />

      <section className={styles.hero}>
        <div className={styles.shell}>
          <nav className={styles.breadcrumbs} aria-label="ब्रेडक्रंब">
            <a href="/">होम</a><span>/</span><a href={kindHref[item.kind]}>{kindLabel[item.kind]}</a><span>/</span><strong>{item.hindiName ?? item.name}</strong>
          </nav>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>S.B. AUTO · {item.eyebrow}</p>
              <h1>{item.hindiName ?? item.name}</h1>
              {item.hindiName && <p className={styles.englishName}>{item.name}</p>}
              <p className={styles.category}>{item.category}</p>
              <p className={styles.lead}>{item.description}</p>
              <div className={styles.heroActions}>
                <WhatsAppQueryLink className={styles.primaryButton} subject={enquirySubject} interestDetails={interestDetails}><MessageCircle size={18} /> WhatsApp पर कीमत पूछें</WhatsAppQueryLink>
                <a className={styles.sourceButton} href={item.officialUrl} target="_blank" rel="noreferrer">
                  आधिकारिक पेज <ExternalLink size={16} />
                </a>
                <a className={styles.sourceButton} href="/finance">
                  फाइनेंस गाइड <ArrowRight size={16} />
                </a>
                <a className={styles.sourceButton} href="/service">
                  सर्विस/पार्ट्स <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <figure className={styles.productVisual}>
              <div className={styles.imageStage}>
                <img src={item.image} alt={`${item.name} की आधिकारिक John Deere तस्वीर`} referrerPolicy="no-referrer-when-downgrade" />
              </div>
              <figcaption>
                तस्वीर: John Deere India की आधिकारिक वेबसाइट · <a href={item.officialUrl} target="_blank" rel="noreferrer">स्रोत देखें <ExternalLink size={12} /></a>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={`${styles.shell} ${styles.details}`}>
        <div className={styles.specGrid}>
          {item.specs.map(([label, value]) => (
            <article key={label}>
              <small>{label}</small>
              <strong>{value}</strong>
            </article>
          ))}
        </div>

        <div className={styles.infoGrid}>
          <article className={styles.infoCard}>
            <p className={styles.sectionKicker}>व्यावहारिक उपयोग</p>
            <h2>यह किस काम के लिए है?</h2>
            <ul>
              {item.applications.map((application) => <li key={application}><BadgeCheck size={18} />{application}</li>)}
            </ul>
          </article>
          <article className={`${styles.infoCard} ${styles.darkCard}`}>
            <p className={styles.sectionKicker}>जरूरी बातें</p>
            <h2>चुनने से पहले जानें</h2>
            <ol>
              {item.highlights.map((highlight, index) => (
                <li key={highlight}><span>{String(index + 1).padStart(2, "0")}</span><p>{highlight}</p></li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      <section className={styles.videoSection}>
        <div className={`${styles.shell} ${styles.videoGrid}`}>
          <div className={styles.videoCopy}>
            <div className={styles.videoBadge}><Play size={13} fill="currentColor" /> OFFICIAL PRODUCT VIDEO</div>
            <p className={styles.sectionKicker}>John Deere India का आधिकारिक वीडियो</p>
            <h2>वीडियो में समझें</h2>
            <h3>{officialVideo.title}</h3>
            <p>{officialVideo.description}</p>
            <div className={styles.videoSource}>
              <BadgeCheck size={19} />
              <span><strong>John Deere India</strong><small>Verified official YouTube channel</small></span>
            </div>
          </div>
          <div className={styles.videoFrame}>
            <div className={styles.videoTopbar}>
              <span><i /> OFFICIAL VIDEO</span>
              <strong>JOHN DEERE INDIA</strong>
            </div>
            <div className={styles.videoViewport}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${officialVideo.id}?rel=0&modestbranding=1&playsinline=1`}
                title={`${item.name}: ${officialVideo.title}`}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className={styles.videoToolbar}>
              <span><small>वीडियो विषय</small><strong>{item.name}</strong></span>
              <a href={`https://www.youtube.com/watch?v=${officialVideo.id}`} target="_blank" rel="noreferrer">
                <Play size={14} fill="currentColor" /> YouTube में खोलें <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.shell}>
            <div className={styles.relatedHeading}>
              <div><p className={styles.sectionKicker}>और विकल्प देखें</p><h2>संबंधित उत्पाद</h2></div>
              <a href="/#models">सभी उत्पाद <ArrowRight size={16} /></a>
            </div>
            <div className={styles.relatedGrid}>
              {related.map((relatedItem) => (
                <a className={styles.relatedCard} href={`/products/${relatedItem.slug}`} key={relatedItem.slug}>
                  <div><img src={relatedItem.image} alt={relatedItem.name} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
                  <small>{kindLabel[relatedItem.kind]} · {relatedItem.category}</small>
                  <strong>{relatedItem.name}</strong>
                  <span>पूरी जानकारी <ArrowRight size={14} /></span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.dealerCta}>
        <div className={styles.shell}>
          <div className={styles.dealerGrid}>
            <div>
              <p className={styles.sectionKicker}>स्थानीय सेल्स एवं सर्विस</p>
              <h2>S.B. Auto Sales &amp; Services से बात करें</h2>
              <p>सही मॉडल, ट्रैक्टर–इम्प्लीमेंट matching, कीमत, फाइनेंस और स्थानीय स्टॉक की पुष्टि सीधे Sirsaganj शोरूम से करें।</p>
            </div>
            <div className={styles.dealerActions}>
              <WhatsAppQueryLink subject={enquirySubject} interestDetails={interestDetails}><MessageCircle size={20} /><span><small>WhatsApp Query</small><strong>+91 70885 01000</strong></span></WhatsAppQueryLink>
              <a href="https://www.google.com/maps/search/?api=1&query=S%20B%20Auto%20Sales%20%26%20Services%20Etawah%20Road%20Sirsaganj%20Firozabad%20283151" target="_blank" rel="noreferrer">
                <MapPin size={20} /><span><small>शोरूम</small><strong>Etawah Road, Sirsaganj</strong></span>
              </a>
            </div>
          </div>
          <div className={styles.dealerMap}>
            <iframe
              title="S.B. Auto Sales & Services, Sirsaganj का नक्शा"
              src="https://www.google.com/maps?q=S.B.%20Auto%20Sales%20%26%20Services%2C%20Etawah%20Road%2C%20Sirsaganj%2C%20Firozabad%2C%20Uttar%20Pradesh%20283151&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div>
              <span><MapPin size={17} /><strong>Etawah Road, Sirsaganj</strong>Firozabad, Uttar Pradesh 283151</span>
              <a href="https://www.google.com/maps/search/?api=1&query=S%20B%20Auto%20Sales%20%26%20Services%20Etawah%20Road%20Sirsaganj%20Firozabad%20283151" target="_blank" rel="noreferrer">
                Google Maps पर दिशा देखें <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.shell}>
          <p>© S.B. Auto Sales &amp; Services · Sirsaganj, Firozabad 283151</p>
          <p>स्पेसिफिकेशन, वेरिएंट, कीमत और उपलब्धता बदल सकती है। खरीद से पहले शोरूम और आधिकारिक John Deere पेज से पुष्टि करें।</p>
        </div>
      </footer>
    </main>
  );
}
