"use client";

import { useState, type FormEvent } from "react";
import { LocateFixed, MessageCircle } from "lucide-react";
import { getCurrentLocationLink, whatsappUrl } from "@/lib/whatsapp";
import styles from "@/app/section-page.module.css";

const currentYear = new Date().getFullYear();

export function ExchangeEnquiry() {
  const [locationLink, setLocationLink] = useState("");
  const [locationStatus, setLocationStatus] = useState("चाहें तो अपनी location जोड़ दीजिए।");

  async function captureLocation() {
    setLocationStatus("Location ली जा रही है…");
    const link = await getCurrentLocationLink();
    if (link) {
      setLocationLink(link);
      setLocationStatus("Location जुड़ गई।");
    } else {
      setLocationStatus("Location नहीं मिली — गाँव/स्थान लिख दीजिए।");
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const details = [
      `पुराने ट्रैक्टर का ब्रांड: ${data.get("brand")}`,
      `मॉडल: ${data.get("model")}`,
      `खरीद का वर्ष: ${data.get("year")}`,
      `चले हुए घंटे (अनुमानित): ${data.get("hours") || "बताया नहीं"}`,
      `हालत: ${data.get("condition")}`,
      `क्या करना है: ${data.get("intent")}`,
    ];
    const customer = [
      `नाम: ${data.get("name")}`,
      `मोबाइल: ${data.get("phone")}`,
      `गाँव / स्थान: ${data.get("village")}`,
      `अतिरिक्त जानकारी: ${data.get("notes") || "—"}`,
    ];

    const url = whatsappUrl("पुराना ट्रैक्टर — एक्सचेंज / मूल्यांकन", {
      interestDetails: details,
      customerDetails: customer,
      locationLink: locationLink || undefined,
      pageUrl: typeof window === "undefined" ? undefined : window.location.href,
    });
    window.open(url, "_blank", "noreferrer");
  }

  return (
    <form className={styles.enquiryForm} onSubmit={submit}>
      <div className={styles.formGrid}>
        <label><span>आपका नाम *</span><input name="name" required placeholder="पूरा नाम" /></label>
        <label><span>मोबाइल नंबर *</span><input name="phone" required inputMode="tel" placeholder="10 अंकों का नंबर" /></label>
        <label><span>गाँव / स्थान *</span><input name="village" required placeholder="गाँव, कस्बा या तहसील" /></label>
        <label>
          <span>क्या करना चाहते हैं? *</span>
          <select name="intent" required defaultValue="एक्सचेंज में नया ट्रैक्टर लेना है">
            <option>एक्सचेंज में नया ट्रैक्टर लेना है</option>
            <option>पुराना ट्रैक्टर बेचना है</option>
            <option>सिर्फ कीमत का अंदाजा चाहिए</option>
          </select>
        </label>
        <label><span>पुराने ट्रैक्टर का ब्रांड *</span><input name="brand" required placeholder="जैसे John Deere, Mahindra, Swaraj" /></label>
        <label><span>मॉडल *</span><input name="model" required placeholder="जैसे 5045D, 575 DI, 744 FE" /></label>
        <label>
          <span>खरीद का वर्ष *</span>
          <input name="year" required type="number" min={1985} max={currentYear} placeholder={String(currentYear - 6)} />
        </label>
        <label><span>चले हुए घंटे (अनुमानित)</span><input name="hours" inputMode="numeric" placeholder="जैसे 3500" /></label>
        <label className={styles.formWide}>
          <span>ट्रैक्टर की हालत *</span>
          <select name="condition" required defaultValue="चालू हालत में, सामान्य टूट-फूट">
            <option>बहुत अच्छी — नियमित सर्विस हुई है</option>
            <option>चालू हालत में, सामान्य टूट-फूट</option>
            <option>काम चलाऊ — कुछ मरम्मत बाकी है</option>
            <option>बंद पड़ा है / बड़ी मरम्मत चाहिए</option>
          </select>
        </label>
        <label className={`${styles.formDetails} ${styles.formWide}`}>
          <span>अतिरिक्त जानकारी</span>
          <textarea name="notes" rows={4} placeholder="टायर की हालत, इंजन की स्थिति, साथ में इम्प्लीमेंट, या कोई और बात…" />
        </label>
      </div>

      <div className={styles.locationRow}>
        <button type="button" onClick={captureLocation}><LocateFixed size={16} /> Location जोड़ें</button>
        <span>{locationStatus}</span>
      </div>

      <button className={styles.whatsappSubmit} type="submit">
        <MessageCircle size={18} /> WhatsApp पर जानकारी भेजें
      </button>
      <p className={styles.formNote}>
        कीमत का अंतिम आकलन ट्रैक्टर देखने के बाद ही होता है। यह फॉर्म बातचीत शुरू करने के लिए है।
      </p>
    </form>
  );
}
