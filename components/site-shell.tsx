import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import styles from "@/app/section-page.module.css";
import { MobileDock } from "@/components/mobile-dock";
import { WhatsAppQueryLink } from "@/components/whatsapp-query-link";
import { districtName, serviceAreas } from "@/lib/service-area";

type NavKey = "home" | "tractors" | "implements" | "precision" | "finance" | "service" | "dealer" | "area";

const navItems: Array<{ key: NavKey; href: string; label: string }> = [
  { key: "tractors", href: "/tractors", label: "ट्रैक्टर" },
  { key: "implements", href: "/implements", label: "कृषि मशीनें" },
  { key: "precision", href: "/precision-ag", label: "Precision Ag" },
  { key: "finance", href: "/finance", label: "फाइनेंस" },
  { key: "service", href: "/service", label: "सर्विस/पार्ट्स" },
  { key: "area", href: "/service-area", label: "सेवा क्षेत्र" },
  { key: "dealer", href: "/dealer", label: "S.B. Auto" },
];

type DockKey = "tractors" | "implements" | "service" | "dealer";

function dockKey(active: NavKey): DockKey | undefined {
  if (active === "tractors" || active === "implements" || active === "service" || active === "dealer") return active;
  // Area pages are location-led, so light up the map action.
  if (active === "area") return "dealer";
  return undefined;
}

export function SiteHeader({ active }: { active: NavKey }) {
  return (
    <>
      <header className={styles.header}>
        <a className={styles.brand} href="/" aria-label="S.B. Auto Sales and Services होम">
          <img className="dealer-wordmark" src="/sb-auto-wordmark.svg" alt="" width="296" height="64" />
        </a>
        <nav className={styles.nav} aria-label="मुख्य नेविगेशन">
          {navItems.map((item) => (
            <a className={active === item.key ? styles.activeNav : undefined} href={item.href} key={item.key}>
              {item.label}
            </a>
          ))}
        </nav>
        <WhatsAppQueryLink className={styles.headerCall} subject="सामान्य enquiry">
          <MessageCircle size={16} /><span>WhatsApp Query</span>
        </WhatsAppQueryLink>
      </header>
      <WhatsAppQueryLink className="whatsapp-float" subject="सामान्य enquiry" aria-label="WhatsApp पर S.B. Auto को सामान्य enquiry भेजें"><MessageCircle size={21} /><span>WhatsApp Query</span></WhatsAppQueryLink>
      <MobileDock active={dockKey(active)} />
    </>
  );
}

export function DealerCta({ title = "सही विकल्प के लिए S.B. Auto से बात करें", subject = "वेबसाइट enquiry" }: { title?: string; subject?: string }) {
  return (
    <section className={styles.dealerCta}>
      <div>
        <p>S.B. AUTO · SIRSAGANJ</p>
        <h2>{title}</h2>
        <span>मॉडल, कीमत, फाइनेंस, स्थानीय स्टॉक और सर्विस की पुष्टि सीधे Etawah Road शोरूम से करें।</span>
      </div>
      <div className={styles.dealerCtaActions}>
        <WhatsAppQueryLink subject={subject === "वेबसाइट enquiry" ? "सामान्य enquiry" : subject}><MessageCircle size={18} /> WhatsApp Query भेजें</WhatsAppQueryLink>
        <a href="/dealer"><MapPin size={18} /> पता और नक्शा <ArrowRight size={16} /></a>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <a className={styles.brand} href="/">
          <img className="dealer-wordmark" src="/sb-auto-wordmark.svg" alt="S.B. Auto Sales and Services Sirsaganj" width="296" height="64" />
        </a>
        <p>Etawah Road, Sirsaganj, Firozabad, Uttar Pradesh 283151<br />Phone: +91 70885 01000</p>
        <div className={styles.footerLinks}>
          <a href="/tractors">ट्रैक्टर</a><a href="/implements">कृषि मशीनें</a><a href="/finance">फाइनेंस</a><a href="/service">सर्विस/पार्ट्स</a><a href="/dealer">संपर्क</a><a href="/service-area">सेवा क्षेत्र</a><a href="/tractor-emi-calculator">EMI कैलकुलेटर</a><a href="/purana-tractor-exchange">पुराना ट्रैक्टर</a><a href="/tractors">तुलना</a>
        </div>
        <p className={styles.footerAreaLabel}>{districtName} ज़िले में हमारा सेवा क्षेत्र</p>
        <div className={styles.footerLinks}>
          {serviceAreas.map((area) => (
            <a href={`/${area.slug}`} key={area.slug}>{area.hindiName}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
