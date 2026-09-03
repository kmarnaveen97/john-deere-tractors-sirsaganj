import type { Metadata } from "next";
import { BadgeCheck, ExternalLink, IndianRupee, MapPin, MessageCircle, Wrench } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { WhatsAppEnquiry } from "@/components/whatsapp-enquiry";
import { WhatsAppQueryLink } from "@/components/whatsapp-query-link";
import { SocialProof } from "@/components/social-proof";
import styles from "@/app/section-page.module.css";

export const metadata: Metadata = {
  title: "S.B. Auto Sales & Services Sirsaganj | पता और संपर्क",
  description: "S.B. Auto Sales & Services, Etawah Road, Sirsaganj का पता, फोन, map, sales, service, parts और finance सहायता की जानकारी।",
};

export default function DealerPage() {
  return (
    <main className={styles.page}>
      <SiteHeader active="dealer" />
      <section className={styles.hero}><div className={styles.shell}><div className={styles.heroGrid}><div><p className={styles.kicker}>SIRSAGANJ · FIROZABAD</p><h1>S.B. Auto<br />Sales &amp; Services</h1></div><p className={styles.heroLead}>John Deere ट्रैक्टर, कृषि मशीनें, product guidance, finance coordination, genuine parts और service support के लिए आपका स्थानीय संपर्क केंद्र।</p></div><div className={styles.heroStats}><span><strong>Etawah Road</strong><small>Sirsaganj showroom</small></span><span><strong>70885 01000</strong><small>WhatsApp enquiries</small></span><span><strong>283151</strong><small>Postal code</small></span></div></div></section>
      <section className={styles.section}><div className={styles.shell}><div className={styles.heading}><div><p className={styles.kicker}>हम कैसे मदद करते हैं</p><h2>खरीद से रखरखाव तक</h2></div><p>सही product selection से लेकर स्थानीय सहायता तक, S.B. Auto एक ही जगह जरूरी जानकारी और coordination देता है।</p></div><div className={styles.contentGrid}><article className={styles.infoCard}><BadgeCheck size={30} /><h2>ट्रैक्टर व मशीन बिक्री</h2><p>खेत, फसल, HP और implement के अनुसार model समझने तथा local stock और price confirm करने में सहायता।</p></article><article className={styles.infoCard}><Wrench size={30} /><h2>सर्विस व जेन्युइन पार्ट्स</h2><p>नियमित maintenance, technical support और genuine parts availability के लिए dealership से संपर्क करें।</p></article><article className={styles.infoCard}><IndianRupee size={30} /><h2>फाइनेंस सहायता</h2><p>Quotation, सामान्य document preparation और available lender scheme समझने के लिए internal finance guide और showroom support।</p></article></div></div></section>
      <section className={styles.sectionAlt}><div className={styles.shell}><div className={styles.heading}><div><p className={styles.kicker}>WHATSAPP ENQUIRY</p><h2>अपनी जरूरत और location भेजें</h2></div><p>नाम और गाँव भरें। Permission देते ही current location अपने-आप जुड़ जाएगी; चुने हुए मॉडल की पूरी details भी संदेश में आएँगी।</p></div><WhatsAppEnquiry /></div></section>
      <section className={styles.section}><div className={styles.shell}><div className={styles.heading}><div><p className={styles.kicker}>पता और नक्शा</p><h2>सीधे शोरूम पहुँचें</h2></div><p>आने से पहले WhatsApp पर product availability और संबंधित staff की उपलब्धता confirm करना बेहतर रहेगा।</p></div><div className={styles.map}><iframe title="S.B. Auto Sales & Services, Sirsaganj का नक्शा" src="https://www.google.com/maps?q=S.B.%20Auto%20Sales%20%26%20Services%2C%20Etawah%20Road%2C%20Sirsaganj%2C%20Firozabad%2C%20Uttar%20Pradesh%20283151&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><div className={styles.dealerDetails}><div><small>शोरूम</small><strong><MapPin size={15} /> Etawah Road, Sirsaganj<br />Firozabad, Uttar Pradesh 283151</strong></div><div><small>WhatsApp</small><strong><MessageCircle size={15} /> <WhatsAppQueryLink subject="सामान्य enquiry">+91 70885 01000</WhatsAppQueryLink></strong></div><div><small>आधिकारिक Facebook</small><strong><ExternalLink size={15} /> <a href="https://www.facebook.com/sbautosirsaganj/" target="_blank" rel="noreferrer">S.B. Auto Sirsaganj</a><br /><a href="https://www.facebook.com/johnsbautotrac/" target="_blank" rel="noreferrer">John S.B. Auto Trac</a></strong></div></div></div></section>
      <SocialProof />
      <SiteFooter />
    </main>
  );
}
