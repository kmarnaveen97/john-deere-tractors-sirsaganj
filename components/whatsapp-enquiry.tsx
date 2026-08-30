"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";
import { LocateFixed, MessageCircle } from "lucide-react";
import { allCatalogItems } from "@/lib/catalog";
import { getCurrentLocationLink, whatsappUrl } from "@/lib/whatsapp";
import styles from "@/app/section-page.module.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";

export function WhatsAppEnquiry() {
  const [locationLink, setLocationLink] = useState("");
  const [locationStatus, setLocationStatus] = useState("Location permission मांगी जा रही है…");

  const captureLocation = useCallback(async () => {
    if (!navigator.geolocation) {
      setLocationStatus("इस browser में location उपलब्ध नहीं है—गाँव/स्थान लिखें।");
      return;
    }

    setLocationStatus("Location प्राप्त की जा रही है…");
    const link = await getCurrentLocationLink();
    if (link) {
      setLocationLink(link);
      setLocationStatus("Current location अपने-आप जुड़ गई है");
    } else {
      setLocationStatus("Location permission नहीं मिली—गाँव/स्थान लिखें या फिर से प्रयास करें।");
    }
  }, []);

  useEffect(() => {
    void captureLocation();
  }, [captureLocation]);

  async function submitToWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const selectedSlug = String(data.get("interestedItem") || "");
    const selectedItem = allCatalogItems.find((item) => item.slug === selectedSlug);
    const displayName = selectedItem
      ? selectedItem.hindiName
        ? `${selectedItem.hindiName} (${selectedItem.name})`
        : selectedItem.name
      : "";
    const queryType = String(data.get("queryType") || "सामान्य enquiry");
    const subject = selectedItem ? `${displayName} के बारे में enquiry` : queryType;
    const pendingTab = window.open("about:blank", "_blank");
    if (pendingTab) pendingTab.opener = null;
    const finalLocation = locationLink || (await getCurrentLocationLink()) || "";
    const url = whatsappUrl(subject, {
      interestDetails: selectedItem
        ? [
            `मॉडल / उत्पाद: ${displayName}`,
            `श्रेणी: ${selectedItem.category}`,
            ...selectedItem.specs.map(([label, value]) => `${label}: ${value}`),
          ]
        : [],
      customerDetails: [
        `नाम: ${data.get("name")}`,
        `गाँव / स्थान: ${data.get("village")}`,
        `Query type: ${queryType}`,
        `विवरण: ${data.get("details")}`,
      ],
      locationLink: finalLocation || undefined,
      pageUrl: window.location.href,
    });

    if (pendingTab) pendingTab.location.href = url;
    else window.location.href = url;
  }

  return (
    <form className={styles.enquiryForm} onSubmit={submitToWhatsApp}>
      <div className={styles.formGrid}>
        <label><span>आपका नाम *</span><Input name="name" required placeholder="पूरा नाम" /></label>
        <label><span>गाँव / स्थान *</span><Input name="village" required placeholder="गाँव, कस्बा या जिला" /></label>
        <label><span>किस बारे में पूछना है? *</span><NativeSelect name="queryType" required defaultValue="सामान्य enquiry"><NativeSelectOption>सामान्य enquiry</NativeSelectOption><NativeSelectOption>ट्रैक्टर मॉडल व कीमत</NativeSelectOption><NativeSelectOption>कृषि मशीन / इम्प्लीमेंट</NativeSelectOption><NativeSelectOption>फाइनेंस</NativeSelectOption><NativeSelectOption>सर्विस व पार्ट्स</NativeSelectOption><NativeSelectOption>Precision Agriculture</NativeSelectOption><NativeSelectOption>अन्य जानकारी</NativeSelectOption></NativeSelect></label>
        <label><span>रुचि वाला मॉडल / मशीन</span><NativeSelect name="interestedItem" defaultValue=""><NativeSelectOption value="">कोई मॉडल नहीं — सामान्य enquiry</NativeSelectOption><NativeSelectOptGroup label="John Deere ट्रैक्टर व सीरीज़">{allCatalogItems.filter((item) => item.kind === "series" || item.kind === "tractor").map((item) => <NativeSelectOption value={item.slug} key={item.slug}>{item.hindiName ?? item.name}</NativeSelectOption>)}</NativeSelectOptGroup><NativeSelectOptGroup label="कृषि मशीनें">{allCatalogItems.filter((item) => item.kind === "implement").map((item) => <NativeSelectOption value={item.slug} key={item.slug}>{item.hindiName ?? item.name}</NativeSelectOption>)}</NativeSelectOptGroup><NativeSelectOptGroup label="Precision Agriculture">{allCatalogItems.filter((item) => item.kind === "precision").map((item) => <NativeSelectOption value={item.slug} key={item.slug}>{item.hindiName ?? item.name}</NativeSelectOption>)}</NativeSelectOptGroup></NativeSelect></label>
      </div>
      <label className={styles.formDetails}><span>पूरी आवश्यकता *</span><Textarea name="details" required rows={4} placeholder="मॉडल, HP, फसल, बजट या service समस्या लिखें…" /></label>
      <div className={styles.locationRow}>
        <Button type="button" variant="outline" onClick={captureLocation}><LocateFixed size={17} /> Location फिर से लें</Button>
        <span>{locationStatus}</span>
      </div>
      <Button className={styles.whatsappSubmit} type="submit"><MessageCircle size={19} /> WhatsApp पर enquiry भेजें</Button>
      <p className={styles.formNote}>Button दबाने पर WhatsApp खुलेगा। संदेश जाँचने के बाद वहाँ Send दबाएँ।</p>
    </form>
  );
}
