"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";
import { LocateFixed, MessageCircle, PackageSearch, Wrench } from "lucide-react";
import { tractorItems } from "@/lib/catalog";
import { getCurrentLocationLink, whatsappUrl } from "@/lib/whatsapp";
import styles from "@/app/section-page.module.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

type RequestKind = "service" | "parts";

function modelName(slug: FormDataEntryValue | null) {
  const item = tractorItems.find((tractor) => tractor.slug === String(slug || ""));
  if (!item) return "मॉडल की जानकारी ग्राहक से लें";
  return item.hindiName ? `${item.hindiName} (${item.name})` : item.name;
}

export function ServicePartsEnquiry() {
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

  async function sendRequest(event: FormEvent<HTMLFormElement>, kind: RequestKind) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const tractor = modelName(data.get("tractorModel"));
    const pendingTab = window.open("about:blank", "_blank");
    if (pendingTab) pendingTab.opener = null;
    const finalLocation = locationLink || (await getCurrentLocationLink()) || "";

    const serviceDetails = [
      `ट्रैक्टर मॉडल: ${tractor}`,
      `Service type: ${data.get("serviceType")}`,
      `Tractor hours: ${data.get("tractorHours") || "नहीं बताए"}`,
      `Preferred date: ${data.get("preferredDate") || "S.B. Auto से तय करें"}`,
      `Registration / engine / chassis reference: ${data.get("machineReference") || "नहीं बताया"}`,
    ];
    const partDetails = [
      `ट्रैक्टर मॉडल: ${tractor}`,
      `Part name: ${data.get("partName")}`,
      `Part number: ${data.get("partNumber") || "पता नहीं"}`,
      `Quantity: ${data.get("quantity") || "1"}`,
    ];
    const subject = kind === "service" ? `सर्विस बुकिंग — ${tractor}` : `पार्ट्स enquiry — ${data.get("partName")}`;
    const url = whatsappUrl(subject, {
      interestDetails: kind === "service" ? serviceDetails : partDetails,
      customerDetails: [
        `नाम: ${data.get("name")}`,
        `गाँव / स्थान: ${data.get("village")}`,
        kind === "service"
          ? `समस्या / काम का विवरण: ${data.get("issue")}`
          : `पार्ट की पहचान / अतिरिक्त विवरण: ${data.get("notes")}`,
      ],
      locationLink: finalLocation || undefined,
      pageUrl: window.location.href,
    });

    if (pendingTab) pendingTab.location.href = url;
    else window.location.href = url;
  }

  const locationControl = (
    <div className={styles.locationRow}>
      <Button type="button" variant="outline" onClick={captureLocation}><LocateFixed size={17} /> Location फिर से लें</Button>
      <span>{locationStatus}</span>
    </div>
  );

  const tractorOptions = tractorItems.map((tractor) => (
    <NativeSelectOption value={tractor.slug} key={tractor.slug}>{tractor.hindiName ?? tractor.name}</NativeSelectOption>
  ));

  return (
    <Tabs defaultValue="service" className={styles.serviceTabs}>
      <TabsList className={styles.serviceTabList}>
        <TabsTrigger className={styles.serviceTabTrigger} value="service"><Wrench /> सर्विस बुक करें</TabsTrigger>
        <TabsTrigger className={styles.serviceTabTrigger} value="parts"><PackageSearch /> पार्ट्स की जानकारी लें</TabsTrigger>
      </TabsList>

      <TabsContent className={styles.serviceTabContent} value="service">
        <form className={styles.enquiryForm} onSubmit={(event) => sendRequest(event, "service")}>
          <div className={styles.serviceFormIntro}><Wrench size={25} /><div><strong>John Deere ट्रैक्टर सर्विस बुकिंग</strong><span>नियमित service, repair या breakdown assistance के लिए विवरण भेजें।</span></div></div>
          <div className={styles.formGrid}>
            <label><span>आपका नाम *</span><Input name="name" required placeholder="पूरा नाम" /></label>
            <label><span>गाँव / स्थान *</span><Input name="village" required placeholder="गाँव, कस्बा या जिला" /></label>
            <label><span>ट्रैक्टर मॉडल *</span><NativeSelect name="tractorModel" required defaultValue=""><NativeSelectOption value="" disabled>मॉडल चुनें</NativeSelectOption>{tractorOptions}</NativeSelect></label>
            <label><span>Service का प्रकार *</span><NativeSelect name="serviceType" required defaultValue="नियमित सर्विस"><NativeSelectOption>नियमित सर्विस</NativeSelectOption><NativeSelectOption>Repair / खराबी</NativeSelectOption><NativeSelectOption>Breakdown assistance</NativeSelectOption><NativeSelectOption>पहली सर्विस</NativeSelectOption><NativeSelectOption>Inspection / जांच</NativeSelectOption></NativeSelect></label>
            <label><span>ट्रैक्टर के घंटे</span><Input name="tractorHours" type="number" min="0" inputMode="numeric" placeholder="जैसे 850" /></label>
            <label><span>Preferred service date</span><Input name="preferredDate" type="date" /></label>
            <label className={styles.formWide}><span>Registration / engine / chassis reference</span><Input name="machineReference" placeholder="Registration number या आखिरी 4 अंक" /></label>
          </div>
          <label className={styles.formDetails}><span>समस्या या जरूरी काम का विवरण *</span><Textarea name="issue" required rows={4} placeholder="आवाज़, leakage, starting issue, service due या अन्य समस्या लिखें…" /></label>
          {locationControl}
          <Button className={styles.whatsappSubmit} type="submit"><MessageCircle size={19} /> WhatsApp पर सर्विस बुक करें</Button>
          <p className={styles.formNote}>WhatsApp खुलने पर तैयार विवरण जाँचें और Send दबाएँ। Booking time की पुष्टि S.B. Auto करेगा।</p>
        </form>
      </TabsContent>

      <TabsContent className={styles.serviceTabContent} value="parts">
        <form className={styles.enquiryForm} onSubmit={(event) => sendRequest(event, "parts")}>
          <div className={styles.serviceFormIntro}><PackageSearch size={25} /><div><strong>John Deere पार्ट्स enquiry</strong><span>सही part पहचानने और availability पूछने के लिए जितनी जानकारी हो उतनी भेजें।</span></div></div>
          <div className={styles.formGrid}>
            <label><span>आपका नाम *</span><Input name="name" required placeholder="पूरा नाम" /></label>
            <label><span>गाँव / स्थान *</span><Input name="village" required placeholder="गाँव, कस्बा या जिला" /></label>
            <label><span>ट्रैक्टर मॉडल *</span><NativeSelect name="tractorModel" required defaultValue=""><NativeSelectOption value="" disabled>मॉडल चुनें</NativeSelectOption>{tractorOptions}</NativeSelect></label>
            <label><span>Part का नाम *</span><Input name="partName" required placeholder="जैसे oil filter, clutch plate" /></label>
            <label><span>Part number</span><Input name="partNumber" placeholder="यदि part पर लिखा हो" /></label>
            <label><span>Quantity</span><Input name="quantity" type="number" min="1" inputMode="numeric" defaultValue="1" /></label>
          </div>
          <label className={styles.formDetails}><span>Part की पहचान / अतिरिक्त विवरण *</span><Textarea name="notes" required rows={4} placeholder="पुराने part का आकार, मशीन का variant या पहचान से जुड़ी जानकारी लिखें…" /></label>
          {locationControl}
          <Button className={styles.whatsappSubmit} type="submit"><MessageCircle size={19} /> WhatsApp पर पार्ट पूछें</Button>
          <p className={styles.formNote}>पुराने part या tractor plate की फोटो WhatsApp खुलने के बाद attach कर सकते हैं। कीमत और availability की पुष्टि dealership करेगी।</p>
        </form>
      </TabsContent>
    </Tabs>
  );
}
