import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { DealerCta, SiteFooter, SiteHeader } from "@/components/site-shell";
import { seriesItems, tractorItems } from "@/lib/catalog";
import { TractorAdvisor } from "@/components/tractor-advisor";
import styles from "@/app/section-page.module.css";

export const metadata: Metadata = {
  title: "सभी John Deere ट्रैक्टर | S.B. Auto Sirsaganj",
  description: "S.B. Auto Sirsaganj पर उपलब्ध John Deere D Series, E Series, Speciality और 5M Series के सभी ट्रैक्टर मॉडल हिंदी में देखें।",
};

export default function TractorsPage() {
  return (
    <main className={styles.page}>
      <SiteHeader active="tractors" />
      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div><p className={styles.kicker}>S.B. AUTO · JOHN DEERE TRACTORS</p><h1>हर खेत के लिए<br />सही ट्रैक्टर</h1></div>
            <p className={styles.heroLead}>D Series से 130 HP 5M Series तक पूरी रेंज। मॉडल की तस्वीर, पावर, ड्राइव, उपयोग और official product video के साथ विस्तृत हिंदी जानकारी पाएँ।</p>
          </div>
          <div className={styles.heroStats}><span><strong>{seriesItems.length}</strong><small>ट्रैक्टर सीरीज़</small></span><span><strong>{tractorItems.length}</strong><small>मौजूदा मॉडल</small></span><span><strong>28–130 HP</strong><small>पावर रेंज</small></span></div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.heading}>
            <div><p className={styles.kicker}>दो सवाल, सीधा जवाब</p><h2>कौन सा ट्रैक्टर<br />आपके लिए सही है?</h2></div>
            <p>पूरी सूची देखने से पहले दो सवालों के जवाब दीजिए — हम आपके खेत और काम के हिसाब से तीन मॉडल छाँट देंगे।</p>
          </div>
          <TractorAdvisor />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.heading}><div><p className={styles.kicker}>सीरीज़ के अनुसार चुनें</p><h2>चार अलग कामों के लिए<br />चार product families</h2></div><p>छोटे और संकरे खेतों से लेकर भारी commercial farming तक—हर series की अपनी शक्ति, आकार और उपयोग है।</p></div>
          <div className={styles.seriesGrid}>
            {seriesItems.map((series) => <a className={styles.seriesCard} href={`/products/${series.slug}`} key={series.slug}><small>John Deere series</small><strong>{series.name}</strong><span>{series.category}<ArrowRight size={15} /></span></a>)}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.shell}>
          <div className={styles.heading}><div><p className={styles.kicker}>पूरी मॉडल रेंज</p><h2>सभी {tractorItems.length} ट्रैक्टर</h2></div><p>किसी card पर क्लिक करके उस मॉडल के specifications, उपयोग, खूबियाँ, official image और video देखें।</p></div>
          <div className={styles.productGrid}>
            {tractorItems.map((model) => <a className={styles.productCard} href={`/products/${model.slug}`} key={model.slug}><span className={styles.productImage}><img src={model.image} alt={`${model.name} John Deere ट्रैक्टर`} loading="lazy" /><span>{model.category}</span></span><div className={styles.productBody}><small>JOHN DEERE TRACTOR</small><h2>{model.name}</h2><p>{model.specs[0][1]} · {model.specs[1][1]}</p><span className={styles.productLink}>पूरी जानकारी <ArrowRight size={15} /></span></div></a>)}
          </div>
        </div>
      </section>
      <DealerCta title="अपने खेत के लिए सही HP और मॉडल चुनें" subject="John Deere ट्रैक्टर मॉडल, कीमत और उपलब्धता" />
      <SiteFooter />
    </main>
  );
}
