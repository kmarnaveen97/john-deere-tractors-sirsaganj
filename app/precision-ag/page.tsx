import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { DealerCta, SiteFooter, SiteHeader } from "@/components/site-shell";
import { precisionItems } from "@/lib/catalog";
import styles from "@/app/section-page.module.css";

export const metadata: Metadata = {
  title: "John Deere Precision Agriculture | S.B. Auto Sirsaganj",
  description: "John Deere Precision Ag displays, guidance, connectivity और farm-data products की जानकारी हिंदी में पढ़ें।",
};

export default function PrecisionPage() {
  return (
    <main className={styles.page}>
      <SiteHeader active="precision" />
      <section className={styles.hero}><div className={styles.shell}><div className={styles.heroGrid}><div><p className={styles.kicker}>S.B. AUTO · PRECISION AGRICULTURE</p><h1>सटीक खेती की<br />स्मार्ट तकनीक</h1></div><p className={styles.heroLead}>Guidance, display, connected machine और farm data tools को समझें—किस काम में कौन-सा समाधान उपयोगी हो सकता है, यह हिंदी में जानें।</p></div><div className={styles.heroStats}><span><strong>{precisionItems.length}</strong><small>डिजिटल समाधान</small></span><span><strong>Guidance</strong><small>सीधी और consistent rows</small></span><span><strong>Connected</strong><small>Machine एवं farm data</small></span></div></div></section>
      <section className={styles.sectionAlt}><div className={styles.shell}><div className={styles.heading}><div><p className={styles.kicker}>पूरी PRECISION AG रेंज</p><h2>Technology products</h2></div><p>हर product card के detail page पर उपयोग, मुख्य खूबियाँ, official image और संबंधित John Deere India video देखें।</p></div><div className={styles.productGrid}>{precisionItems.map((item) => <a className={styles.productCard} href={`/products/${item.slug}`} key={item.slug}><span className={styles.productImage}><img src={item.image} alt={`${item.name} Precision Agriculture product`} loading="lazy" /><span>{item.category}</span></span><div className={styles.productBody}><small>JOHN DEERE PRECISION AG</small><h2>{item.name}</h2><p>{item.category}</p><span className={styles.productLink}>हिंदी में समझें <ArrowRight size={15} /></span></div></a>)}</div></div></section>
      <DealerCta title="अपने tractor और operation के लिए compatible technology पूछें" subject="Precision Agriculture product और compatibility" />
      <SiteFooter />
    </main>
  );
}
