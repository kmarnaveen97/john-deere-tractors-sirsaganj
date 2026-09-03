import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, IndianRupee, MapPin, MessageCircle, Wrench } from "lucide-react";
import { DealerCta, SiteFooter, SiteHeader } from "@/components/site-shell";
import { WhatsAppQueryLink } from "@/components/whatsapp-query-link";
import { seriesItems } from "@/lib/catalog";
import {
  blockCount,
  districtName,
  getNearbyAreas,
  getServiceArea,
  serviceAreas,
  shortType,
  stateName,
  stateNameEn,
  districtNameEn,
  tehsilCount,
  type ServiceArea,
} from "@/lib/service-area";
import styles from "@/app/section-page.module.css";

type AreaPageProps = {
  params: Promise<{ area: string }>;
};

// Only the Firozabad district areas below resolve; every other top-level path 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ area: area.slug }));
}

function fullName(area: ServiceArea) {
  return area.hindiAltName ? `${area.hindiName} (${area.hindiAltName})` : area.hindiName;
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { area: slug } = await params;
  const area = getServiceArea(slug);

  if (!area) return { title: "क्षेत्र उपलब्ध नहीं | S.B. Auto Sirsaganj" };

  const title = `${area.hindiName} में John Deere ट्रैक्टर डीलर | S.B. Auto Sales & Services`;
  const description = `${fullName(area)}, ${districtName} के किसानों के लिए John Deere ट्रैक्टर, GreenSystem इम्प्लीमेंट, जेन्युइन पार्ट्स, सर्विस और फाइनेंस सहायता। S.B. Auto Sales & Services, Etawah Road, Sirsaganj — 70885 01000.`;

  return {
    title,
    description,
    keywords: [
      `${area.name} tractor dealer`,
      `John Deere ${area.name}`,
      `${area.hindiName} ट्रैक्टर डीलर`,
      `John Deere tractor showroom ${area.name}`,
      `tractor dealer ${districtName}`,
      "S.B. Auto Sales & Services Sirsaganj",
    ],
    alternates: { canonical: `/${area.slug}` },
    openGraph: { title, description, type: "website", locale: "hi_IN" },
  };
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { area: slug } = await params;
  // dynamicParams = false guarantees a match, so this is a type narrowing only.
  const area = getServiceArea(slug) as ServiceArea;
  const nearby = getNearbyAreas(area);

  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: "S.B. Auto Sales & Services",
    description: `${fullName(area)}, ${districtName} के लिए John Deere ट्रैक्टर बिक्री, सर्विस और पार्ट्स सहायता।`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Etawah Road",
      addressLocality: "Sirsaganj",
      addressRegion: "Uttar Pradesh",
      postalCode: "283151",
      addressCountry: "IN",
    },
    telephone: "+917088501000",
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${area.name}, ${districtNameEn} district, ${stateNameEn}`,
    },
    brand: { "@type": "Brand", name: "John Deere" },
  };

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader active="area" />

      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.kicker}>{area.name.toUpperCase()} · {districtName} ज़िला</p>
              <h1>{area.hindiName} में<br />ट्रैक्टर मतलब<br />John Deere</h1>
            </div>
            <p className={styles.heroLead}>{area.intro}</p>
          </div>
          <div className={styles.heroStats}>
            <span><strong>{shortType(area)}</strong><small>प्रशासनिक स्थिति</small></span>
            <span><strong>70885 01000</strong><small>WhatsApp पर पूछें</small></span>
            <span><strong>Sirsaganj</strong><small>नजदीकी शोरूम</small></span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.heading}>
            <div>
              <p className={styles.kicker}>{area.hindiName} के किसानों के लिए</p>
              <h2>एक ही जगह<br />पूरी सहायता</h2>
            </div>
            <p>{area.focus}</p>
          </div>
          <div className={styles.contentGrid}>
            <article className={styles.infoCard}>
              <BadgeCheck size={30} />
              <h2>ट्रैक्टर एवं मशीन बिक्री</h2>
              <p>खेत, फसल, HP और इम्प्लीमेंट के अनुसार सही John Deere मॉडल चुनने में मदद, स्थानीय स्टॉक और कीमत की पुष्टि के साथ।</p>
            </article>
            <article className={styles.infoCard}>
              <Wrench size={30} />
              <h2>सर्विस और जेन्युइन पार्ट्स</h2>
              <p>नियमित रखरखाव, तकनीकी सहायता और असली John Deere पार्ट्स की उपलब्धता — ताकि सीजन के बीच काम न रुके।</p>
            </article>
            <article className={styles.infoCard}>
              <IndianRupee size={30} />
              <h2>फाइनेंस सहायता</h2>
              <p>Quotation, दस्तावेज की तैयारी और उपलब्ध lender scheme समझने में शोरूम स्तर पर coordination सहायता।</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.shell}>
          <div className={styles.heading}>
            <div>
              <p className={styles.kicker}>{area.hindiName} में खेती</p>
              <h2>फसल के हिसाब से<br />सही मशीन</h2>
            </div>
            <p>{area.farming}</p>
          </div>
          <div className={styles.seriesGrid}>
            {seriesItems.map((series) => (
              <a className={styles.seriesCard} href={`/products/${series.slug}`} key={series.slug}>
                <small>John Deere series</small>
                <strong>{series.name}</strong>
                <span>{series.category}<ArrowRight size={15} /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.heading}>
            <div>
              <p className={styles.kicker}>शोरूम और संपर्क</p>
              <h2>{area.hindiName} से<br />सीधे हम तक</h2>
            </div>
            <p>आने से पहले WhatsApp पर मॉडल की उपलब्धता और कीमत पूछ लेना बेहतर रहता है — एक ही चक्कर में काम हो जाता है।</p>
          </div>
          <div className={styles.dealerDetails}>
            <div>
              <small>शोरूम</small>
              <strong><MapPin size={15} /> Etawah Road, Sirsaganj<br />{districtName}, {stateName} 283151</strong>
            </div>
            <div>
              <small>WhatsApp</small>
              <strong>
                <MessageCircle size={15} />{" "}
                <WhatsAppQueryLink subject={`${area.hindiName} से ट्रैक्टर enquiry`}>+91 70885 01000</WhatsAppQueryLink>
              </strong>
            </div>
            <div>
              <small>अधिकृत सेवा क्षेत्र</small>
              <strong><BadgeCheck size={15} /> {districtName} ज़िला<br />{tehsilCount} तहसील · {blockCount} विकासखंड</strong>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.shell}>
          <div className={styles.heading}>
            <div>
              <p className={styles.kicker}>आसपास के क्षेत्र</p>
              <h2>{districtName} ज़िले के<br />अन्य इलाके</h2>
            </div>
            <p>हमारा अधिकृत क्षेत्र पूरा {districtName} ज़िला है। नीचे से अपना क्षेत्र चुनकर वहाँ की जानकारी देखें।</p>
          </div>
          <div className={styles.seriesGrid}>
            {nearby.map((item) => (
              <a className={styles.seriesCard} href={`/${item.slug}`} key={item.slug}>
                <small>{item.standing}</small>
                <strong>{item.hindiName}</strong>
                <span>जानकारी देखें<ArrowRight size={15} /></span>
              </a>
            ))}
          </div>
          <p className={styles.formNote}>
            <a href="/service-area">पूरे {districtName} ज़िले का सेवा क्षेत्र देखें <ArrowRight size={14} /></a>
          </p>
        </div>
      </section>

      <DealerCta
        title={`${area.hindiName} में सही John Deere ट्रैक्टर चुनें`}
        subject={`${area.hindiName}, ${districtName} — ट्रैक्टर मॉडल और कीमत`}
      />
      <SiteFooter />
    </main>
  );
}
