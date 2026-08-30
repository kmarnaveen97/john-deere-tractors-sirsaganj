import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { DealerCta, SiteFooter, SiteHeader } from "@/components/site-shell";
import { implementGroups } from "@/lib/catalog";
import styles from "@/app/section-page.module.css";

export const metadata: Metadata = {
  title: "John Deere कृषि मशीनें | S.B. Auto Sirsaganj",
  description: "भूमि तैयारी, बुवाई, फसल देखभाल, कटाई और अवशेष प्रबंधन के 32 John Deere GreenSystem implements हिंदी में देखें।",
};

export default function ImplementsPage() {
  return (
    <main className={styles.page}>
      <SiteHeader active="implements" />
      <section className={styles.hero}><div className={styles.shell}><div className={styles.heroGrid}><div><p className={styles.kicker}>S.B. AUTO · GREENSYSTEM™</p><h1>सभी कृषि मशीनें</h1></div><p className={styles.heroLead}>खेत तैयार करने से फसल और residue संभालने तक, हर implement का हिंदी नाम, official image, मुख्य उपयोग और detail page एक जगह।</p></div></div></section>
      <section className={styles.section}>
        <div className={styles.shell}>
          {implementGroups.map((group) => (
            <section className={styles.category} key={group.category}>
              <div className={styles.categoryHead}><div><h2>{group.category}</h2><p>{group.english}</p></div></div>
              <div className={styles.productGrid}>
                {group.items.map((item) => <a className={styles.productCard} href={`/products/${item.slug}`} key={item.slug}><span className={styles.productImage}><img src={item.image} alt={`${item.hindiName ?? item.name} कृषि मशीन`} loading="lazy" /><span>GREENSYSTEM™</span></span><div className={styles.productBody}><small>{group.category}</small><h2>{item.hindiName ?? item.name}</h2><p>{item.name}</p><span className={styles.productLink}>पूरी जानकारी <ArrowRight size={15} /></span></div></a>)}
              </div>
            </section>
          ))}
        </div>
      </section>
      <DealerCta title="ट्रैक्टर HP के अनुसार सही implement चुनें" subject="कृषि मशीन या इम्प्लीमेंट की कीमत और compatibility" />
      <SiteFooter />
    </main>
  );
}
