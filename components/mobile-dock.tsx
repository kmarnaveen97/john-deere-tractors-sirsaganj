import { MapPin, MessageCircle, Sprout, Tractor, Wrench } from "lucide-react";
import { WhatsAppQueryLink } from "@/components/whatsapp-query-link";

type MobileDockProps = {
  active?: "tractors" | "implements" | "service" | "dealer";
  subject?: string;
  interestDetails?: string[];
};

export function MobileDock({
  active,
  subject = "सामान्य enquiry",
  interestDetails = [],
}: MobileDockProps) {
  return (
    <nav className="mobile-dock" aria-label="मोबाइल quick actions">
      <a className={active === "tractors" ? "mobile-dock-active" : undefined} href="/tractors" aria-current={active === "tractors" ? "page" : undefined}>
        <Tractor size={20} /><span>ट्रैक्टर</span>
      </a>
      <a className={active === "implements" ? "mobile-dock-active" : undefined} href="/implements" aria-current={active === "implements" ? "page" : undefined}>
        <Sprout size={20} /><span>मशीनें</span>
      </a>
      <a className={active === "service" ? "mobile-dock-active" : undefined} href="/service" aria-current={active === "service" ? "page" : undefined}>
        <Wrench size={20} /><span>सर्विस</span>
      </a>
      <a className={active === "dealer" ? "mobile-dock-active" : undefined} href="https://www.google.com/maps/search/?api=1&query=S%20B%20Auto%20Sales%20%26%20Services%20Etawah%20Road%20Sirsaganj%20Firozabad%20283151" target="_blank" rel="noreferrer" aria-current={active === "dealer" ? "page" : undefined}>
        <MapPin size={20} /><span>नक्शा</span>
      </a>
      <WhatsAppQueryLink className="mobile-dock-whatsapp" subject={subject} interestDetails={interestDetails}>
        <MessageCircle size={20} /><span>WhatsApp</span>
      </WhatsAppQueryLink>
    </nav>
  );
}
