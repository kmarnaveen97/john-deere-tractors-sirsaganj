import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, MapPin } from "lucide-react";
import { DealerCta, SiteFooter, SiteHeader } from "@/components/site-shell";
import styles from "@/app/section-page.module.css";
import {
  blockAreas,
  blockCount,
  districtName,
  divisionName,
  serviceAreas,
  stateName,
  stateNameEn,
  districtNameEn,
  tehsilAreas,
  tehsilCount,
  townAreas,
} from "@/lib/service-area";

export const metadata: Metadata = {
  title: `${districtName} ज़िले में John Deere ट्रैक्टर डीलर | अधिकृत सेवा क्षेत्र`,
  description: `S.B. Auto Sales & Service, Sirsaganj का अधिकृत सेवा क्षेत्र पूरा ${districtName} ज़िला है — ${tehsilCount} तहसील और ${blockCount} विकासखंड। अपने क्षेत्र की जानकारी देखें।`,
  alternates: { canonical: "/service-area" },
};

export default function ServiceAreaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: "S.B. Auto Sales & Service",
    telephone: "+917088501000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Etawah Road",
      addressLocality: "Sirsaganj",
      addressRegion: "Uttar Pradesh",
      postalCode: "283151",
      addressCountry: "IN",
    },
    brand: { "@type": "Brand", name: "John Deere" },
    areaServed: serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: `${area.name}, ${districtNameEn} district, ${stateNameEn}`,
    })),
  };

  const groups = [
    { kicker: "तहसील", title: "ज़िले की पाँच तहसीलें", areas: tehsilAreas },
    { kicker: "विकासखंड", title: "ज़िले के नौ ब्लॉक", areas: blockAreas },
    { kicker: "कस्बे", title: "नगर पंचायत एवं जनगणना नगर", areas: townAreas },
  ];

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader active="area" />

      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.kicker}>अधिकृत सेवा क्षेत्र</p>
              <h1>पूरा {districtName}<br />ज़िला</h1>
            </div>
            <p className={styles.heroLead}>
              S.B. Auto Sales &amp; Service, Sirsaganj का John Deere सेवा क्षेत्र {districtName} ज़िला ({divisionName}, {stateName}) है।
              ज़िले की सभी {tehsilCount} तहसीलें और {blockCount} विकासखंड इसमें शामिल हैं। नीचे अपना क्षेत्र चुनकर वहाँ की जानकारी देखें।
            </p>
          </div>
          <div className={styles.heroStats}>
            <span><strong>{tehsilCount}</strong><small>तहसील</small></span>
            <span><strong>{blockCount}</strong><small>विकासखंड</small></span>
            <span><strong>{serviceAreas.length}</strong><small>क्षेत्र पेज</small></span>
          </div>
        </div>
      </section>

      {groups.map((group, index) => (
        <section className={index % 2 === 0 ? styles.section : styles.sectionAlt} key={group.kicker}>
          <div className={styles.shell}>
            <div className={styles.heading}>
              <div>
                <p className={styles.kicker}>{group.kicker}</p>
                <h2>{group.title}</h2>
              </div>
              <p>हर क्षेत्र के पेज पर वहाँ की प्रशासनिक स्थिति, खेती का संदर्भ और शोरूम से संपर्क का तरीका दिया गया है।</p>
            </div>
            <div className={styles.seriesGrid}>
              {group.areas.map((area) => (
                <a className={styles.seriesCard} href={`/${area.slug}`} key={area.slug}>
                  <small>{area.standing}</small>
                  <strong>{area.hindiName}{area.hindiAltName ? ` / ${area.hindiAltName}` : ""}</strong>
                  <span>जानकारी देखें<ArrowRight size={15} /></span>
                </a>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.heading}>
            <div>
              <p className={styles.kicker}>स्पष्टीकरण</p>
              <h2>हम कहाँ सेवा देते हैं</h2>
            </div>
            <p>अपने क्षेत्र को लेकर कोई संदेह हो तो WhatsApp पर गाँव का नाम भेज दीजिए — हम पुष्टि कर देंगे।</p>
          </div>
          <div className={styles.dealerDetails}>
            <div>
              <small>अधिकृत ज़िला</small>
              <strong><BadgeCheck size={15} /> {districtName} ज़िला, {stateName}<br />{divisionName}</strong>
            </div>
            <div>
              <small>शोरूम</small>
              <strong><MapPin size={15} /> Etawah Road, Sirsaganj<br />{districtName}, {stateName} 283151</strong>
            </div>
          </div>
        </div>
      </section>

      <DealerCta title="अपने क्षेत्र के लिए सही ट्रैक्टर चुनें" subject={`${districtName} ज़िला — क्षेत्र और मॉडल enquiry`} />
      <SiteFooter />
    </main>
  );
}
