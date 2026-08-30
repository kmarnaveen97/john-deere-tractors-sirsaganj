import type { Metadata } from "next";
import { BadgeCheck, LocateFixed, MessageCircle } from "lucide-react";
import { DealerCta, SiteFooter, SiteHeader } from "@/components/site-shell";
import { ServicePartsEnquiry } from "@/components/service-parts-enquiry";
import styles from "@/app/section-page.module.css";

export const metadata: Metadata = {
  title: "ट्रैक्टर सर्विस बुकिंग और John Deere पार्ट्स | S.B. Auto Sirsaganj",
  description: "S.B. Auto Sales & Services, Sirsaganj पर John Deere ट्रैक्टर की सर्विस बुक करें या genuine parts की availability WhatsApp पर पूछें।",
};

export default function ServicePage() {
  return (
    <main className={styles.page}>
      <SiteHeader active="service" />
      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div><p className={styles.kicker}>S.B. AUTO · AFTER-SALES SUPPORT</p><h1>सर्विस बुक करें<br />या पार्ट्स पूछें</h1></div>
            <p className={styles.heroLead}>John Deere ट्रैक्टर की service request और parts enquiry सीधे S.B. Auto Sirsaganj को WhatsApp पर भेजें।</p>
          </div>
          <div className={styles.heroStats}>
            <span><strong><MessageCircle size={22} /></strong><small>सीधी WhatsApp request</small></span>
            <span><strong><LocateFixed size={22} /></strong><small>Permission पर auto location</small></span>
            <span><strong><BadgeCheck size={22} /></strong><small>मॉडल के अनुसार details</small></span>
          </div>
        </div>
      </section>
      <section className={styles.sectionAlt}>
        <div className={styles.shell}>
          <div className={styles.heading}><div><p className={styles.kicker}>SERVICE &amp; PARTS REQUEST</p><h2>अपनी जरूरत चुनें</h2></div><p>मोबाइल नंबर भरने की जरूरत नहीं है। सही tractor model और समस्या या part details देकर request भेजें।</p></div>
          <ServicePartsEnquiry />
        </div>
      </section>
      <DealerCta title="तुरंत सहायता चाहिए? S.B. Auto को query भेजें" subject="सर्विस और पार्ट्स सहायता" />
      <SiteFooter />
    </main>
  );
}
