"use client";

import { useMemo, useState } from "react";
import { IndianRupee, MessageCircle } from "lucide-react";
import { calculateEmi, formatRupees } from "@/lib/finance";
import { getCurrentLocationLink, whatsappUrl } from "@/lib/whatsapp";
import styles from "@/app/section-page.module.css";

const DEFAULTS = { price: 800000, downPayment: 200000, rate: 12, years: 5 };

export function EmiCalculator() {
  const [price, setPrice] = useState(DEFAULTS.price);
  const [downPayment, setDownPayment] = useState(DEFAULTS.downPayment);
  const [rate, setRate] = useState(DEFAULTS.rate);
  const [years, setYears] = useState(DEFAULTS.years);

  const loanAmount = Math.max(price - downPayment, 0);
  const result = useMemo(
    () => calculateEmi(loanAmount, rate, years * 12),
    [loanAmount, rate, years],
  );

  async function sendToWhatsApp() {
    const details = [
      `ट्रैक्टर की अनुमानित कीमत: ₹${formatRupees(price)}`,
      `डाउन पेमेंट: ₹${formatRupees(downPayment)}`,
      `लोन राशि: ₹${formatRupees(loanAmount)}`,
      `ब्याज दर: ${rate}% प्रति वर्ष`,
      `अवधि: ${years} वर्ष (${years * 12} महीने)`,
      `अनुमानित EMI: ₹${formatRupees(result.emi)} प्रति माह`,
    ];

    const pendingTab = window.open("about:blank", "_blank");
    if (pendingTab) pendingTab.opener = null;
    const locationLink = await getCurrentLocationLink();
    const url = whatsappUrl("ट्रैक्टर फाइनेंस / EMI enquiry", {
      interestDetails: details,
      locationLink: locationLink ?? undefined,
      pageUrl: window.location.href,
    });
    if (pendingTab) pendingTab.location.href = url;
    else window.location.href = url;
  }

  return (
    <div className={styles.enquiryForm}>
      <div className={styles.formGrid}>
        <label>
          <span>ट्रैक्टर की कीमत (₹) *</span>
          <input
            type="number" min={50000} max={5000000} step={10000} value={price}
            onChange={(event) => setPrice(Number(event.target.value))}
          />
        </label>
        <label>
          <span>डाउन पेमेंट (₹) *</span>
          <input
            type="number" min={0} max={price} step={10000} value={downPayment}
            onChange={(event) => setDownPayment(Number(event.target.value))}
          />
        </label>
        <label>
          <span>ब्याज दर (% प्रति वर्ष) *</span>
          <input
            type="number" min={0} max={30} step={0.25} value={rate}
            onChange={(event) => setRate(Number(event.target.value))}
          />
        </label>
        <label>
          <span>अवधि (वर्ष) *</span>
          <input
            type="number" min={1} max={9} step={1} value={years}
            onChange={(event) => setYears(Number(event.target.value))}
          />
        </label>
      </div>

      <div className={styles.emiResult}>
        <div className={styles.emiHeadline}>
          <small>अनुमानित मासिक EMI</small>
          <strong><IndianRupee size={26} />{formatRupees(result.emi)}</strong>
        </div>
        <dl className={styles.emiBreakdown}>
          <div><dt>लोन राशि</dt><dd>₹{formatRupees(loanAmount)}</dd></div>
          <div><dt>कुल ब्याज</dt><dd>₹{formatRupees(result.totalInterest)}</dd></div>
          <div><dt>कुल भुगतान</dt><dd>₹{formatRupees(result.totalPayable)}</dd></div>
        </dl>
      </div>

      <button className={styles.whatsappSubmit} type="button" onClick={sendToWhatsApp}>
        <MessageCircle size={18} /> यही हिसाब WhatsApp पर भेजें
      </button>
      <p className={styles.formNote}>
        यह केवल अनुमान है। असली ब्याज दर, प्रोसेसिंग फीस और शर्तें बैंक या फाइनेंस कंपनी तय करती है।
        सही quotation के लिए शोरूम से संपर्क करें।
      </p>
    </div>
  );
}
