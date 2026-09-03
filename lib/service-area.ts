// Authorised service territory: Firozabad district, Uttar Pradesh (Agra division).
//
// Administrative facts below are taken from the district administration's own
// listings (firozabad.nic.in): 5 tehsils/sub-divisions and 9 development blocks.
// Two blocks are commonly written under a second name — Narkhi is also listed as
// Kotla, and Hathwant as Kheragarh — so both spellings are carried here and are
// searchable on the area pages.
//
// Nothing outside Firozabad district belongs in this file.

export type AreaKind = "tehsil" | "block" | "town";

export type ServiceArea = {
  /** Top-level, keyword-first URL segment. */
  slug: string;
  /** Short key used in copy and WhatsApp subjects. */
  key: string;
  name: string;
  hindiName: string;
  /** Alternate official name, where the district lists two. */
  altName?: string;
  hindiAltName?: string;
  isTehsil: boolean;
  isBlock: boolean;
  /** Urban local body, where the area has one. */
  urbanBody?: string;
  /** Headline descriptor shown in the hero. */
  standing: string;
  /** Unique opening paragraph — no two areas share this. */
  intro: string;
  /** Area-specific reason to come to the Sirsaganj showroom. */
  focus: string;
  /** District-level farming context, distributed so each page reads differently. */
  farming: string;
};

export const districtName = "फ़िरोज़ाबाद";
export const districtNameEn = "Firozabad";
export const stateName = "उत्तर प्रदेश";
export const stateNameEn = "Uttar Pradesh";
export const divisionName = "आगरा मंडल";

/** 5 tehsils, 9 blocks — the whole authorised district, nothing beyond it. */
export const tehsilCount = 5;
export const blockCount = 9;

const areaSlug = (key: string) => `john-deere-tractor-dealer-${key}`;

export const serviceAreas: ServiceArea[] = [
  {
    slug: areaSlug("sirsaganj"),
    key: "sirsaganj",
    name: "Sirsaganj",
    hindiName: "सिरसागंज",
    isTehsil: true,
    isBlock: false,
    urbanBody: "नगर पालिका परिषद",
    standing: "तहसील मुख्यालय एवं नगर पालिका परिषद",
    intro:
      "सिरसागंज हमारा अपना शहर है। S.B. Auto Sales & Service का शोरूम Etawah Road पर, सिरसागंज तहसील मुख्यालय के पास ही स्थित है — यानी सिरसागंज के किसानों के लिए John Deere ट्रैक्टर, GreenSystem इम्प्लीमेंट, जेन्युइन पार्ट्स और सर्विस, सब कुछ अपने ही कस्बे में।",
    focus:
      "ट्रैक्टर देखने, चलाकर परखने, कीमत और फाइनेंस समझने के लिए किसी दूसरे शहर जाने की जरूरत नहीं। सीधे शोरूम आइए या WhatsApp पर मॉडल और उपलब्धता पूछ लीजिए।",
    farming:
      "फ़िरोज़ाबाद जिले की लगभग 70% खेती बाजरा और गेहूँ पर टिकी है, और सिरसागंज क्षेत्र इसी पट्टी में आता है। रबी में गेहूँ, सरसों और आलू के लिए सही HP का ट्रैक्टर चुनना सबसे जरूरी फैसला होता है।",
  },
  {
    slug: areaSlug("firozabad"),
    key: "firozabad",
    name: "Firozabad",
    hindiName: "फ़िरोज़ाबाद",
    isTehsil: true,
    isBlock: true,
    urbanBody: "नगर पालिका परिषद",
    standing: "जिला मुख्यालय, तहसील एवं विकासखंड",
    intro:
      "फ़िरोज़ाबाद जिले का मुख्यालय है और तहसील तथा विकासखंड, दोनों के रूप में दर्ज है। शहर अपने काँच उद्योग के लिए जाना जाता है, लेकिन इसके चारों ओर का ग्रामीण क्षेत्र पूरी तरह खेती पर आधारित है — और वही हमारा अधिकृत सेवा क्षेत्र है।",
    focus:
      "फ़िरोज़ाबाद तहसील और विकासखंड के किसान अपने खेत के आकार और फसल-चक्र के अनुसार D Series से लेकर 5M Series तक कोई भी मॉडल सिरसागंज शोरूम पर देख और समझ सकते हैं।",
    farming:
      "जिले में सिंचाई की स्थिति मजबूत है — ऊपरी गंगा नहर और निचली गंगा नहर के साथ हजारों निजी नलकूप मिलकर कृषि योग्य भूमि के लगभग 80% हिस्से तक पानी पहुँचाते हैं। भरोसेमंद सिंचाई का मतलब है साल में एक से ज्यादा फसल, और उतना ही ज्यादा ट्रैक्टर का काम।",
  },
  {
    slug: areaSlug("shikohabad"),
    key: "shikohabad",
    name: "Shikohabad",
    hindiName: "शिकोहाबाद",
    isTehsil: true,
    isBlock: true,
    urbanBody: "नगर पालिका परिषद",
    standing: "तहसील, विकासखंड एवं नगर पालिका परिषद",
    intro:
      "शिकोहाबाद जिले की बड़ी तहसीलों में है और साथ ही एक विकासखंड तथा नगर पालिका परिषद भी। यह क्षेत्र सिरसागंज से सटा हुआ है, इसलिए शिकोहाबाद के बहुत से किसान पहले से ही हमारे नियमित ग्राहक हैं।",
    focus:
      "शिकोहाबाद क्षेत्र में गन्ना, गेहूँ और आलू के काम के लिए ज्यादा HP और मजबूत हाइड्रोलिक लिफ्ट वाले ट्रैक्टर की माँग रहती है। कौन सा मॉडल आपके इम्प्लीमेंट के साथ सही बैठेगा, यह शोरूम पर मिलाकर तय कर लीजिए।",
    farming:
      "खरीफ में बाजरा, धान, अरहर, तिल, उड़द और मूँग तथा रबी में गेहूँ, सरसों, जौ, आलू और लहसुन — जिले का यही मुख्य फसल-चक्र है। हर चक्र के लिए अलग इम्प्लीमेंट चाहिए, और ट्रैक्टर उन सबका आधार है।",
  },
  {
    slug: areaSlug("tundla"),
    key: "tundla",
    name: "Tundla",
    hindiName: "टूंडला",
    isTehsil: true,
    isBlock: true,
    urbanBody: "नगर पालिका परिषद",
    standing: "तहसील, विकासखंड एवं नगर पालिका परिषद",
    intro:
      "टूंडला तहसील और विकासखंड, दोनों है, और अपने रेलवे जंक्शन के कारण पूरे इलाके में जाना जाता है। जंक्शन के आसपास की आवाजाही जितनी व्यस्त है, उसके पीछे फैले गाँव उतने ही खेती-प्रधान हैं।",
    focus:
      "ढुलाई और खेती, दोनों काम एक ही ट्रैक्टर से लेने वाले किसानों के लिए टूंडला क्षेत्र में D Series और E Series सबसे व्यावहारिक विकल्प रहते हैं। ट्रॉली के साथ संतुलन और माइलेज पर शोरूम पर खुलकर बात कीजिए।",
    farming:
      "फ़िरोज़ाबाद जिला आलू की खेती के क्षेत्रफल में प्रदेश में अग्रणी रहा है। आलू की बुवाई, मिट्टी चढ़ाई और खुदाई — तीनों में सही ट्रैक्टर-इम्प्लीमेंट जोड़ी सीधे लागत और मुनाफे पर असर डालती है।",
  },
  {
    slug: areaSlug("jasrana"),
    key: "jasrana",
    name: "Jasrana",
    hindiName: "जसराना",
    isTehsil: true,
    isBlock: true,
    urbanBody: "नगर पंचायत",
    standing: "तहसील, विकासखंड एवं नगर पंचायत",
    intro:
      "जसराना जिले की पाँच तहसीलों में से एक है और साथ ही एक विकासखंड तथा नगर पंचायत भी। यह पूरी तरह ग्रामीण और कृषि पर निर्भर क्षेत्र है, जहाँ ट्रैक्टर परिवार की सबसे बड़ी पूँजी होती है।",
    focus:
      "जसराना के किसानों के लिए सबसे बड़ा सवाल यही होता है कि बजट में कौन सा ट्रैक्टर सबसे ज्यादा काम देगा। मॉडल, EMI और डाउन पेमेंट का पूरा हिसाब सिरसागंज शोरूम पर समझिए।",
    farming:
      "जिले में लगभग 32,000 से ज्यादा निजी नलकूप हैं, जिनसे खेती को भरोसेमंद पानी मिलता है। पंप, थ्रेशर और अन्य PTO उपकरण चलाने के लिए ट्रैक्टर की स्थिर पावर टेक-ऑफ बेहद काम आती है।",
  },
  {
    slug: areaSlug("eka"),
    key: "eka",
    name: "Eka",
    hindiName: "एका",
    isTehsil: false,
    isBlock: true,
    standing: "विकासखंड (ब्लॉक)",
    intro:
      "एका फ़िरोज़ाबाद जिले के नौ विकासखंडों में से एक है। ब्लॉक क्षेत्र के गाँव मुख्य रूप से खेती पर निर्भर हैं, जहाँ छोटे और मध्यम जोत वाले किसानों की संख्या अधिक है।",
    focus:
      "छोटी जोत के लिए कम HP का सही ट्रैक्टर अक्सर बड़े ट्रैक्टर से ज्यादा फायदेमंद होता है। एका ब्लॉक के किसान D Series और E Series के छोटे मॉडल शोरूम पर देखकर तुलना कर सकते हैं।",
    farming:
      "बाजरा जिले की प्रमुख खरीफ फसल है और गेहूँ प्रमुख रबी फसल। दोनों की जुताई, बुवाई और मड़ाई में ट्रैक्टर और उससे जुड़े इम्प्लीमेंट का सीधा उपयोग होता है।",
  },
  {
    slug: areaSlug("narkhi"),
    key: "narkhi",
    name: "Narkhi",
    hindiName: "नारखी",
    altName: "Kotla",
    hindiAltName: "कोटला",
    isTehsil: false,
    isBlock: true,
    standing: "विकासखंड (ब्लॉक)",
    intro:
      "नारखी जिले का एक विकासखंड है, जिसे कई सरकारी सूचियों में कोटला नाम से भी दर्ज किया जाता है। दोनों नाम एक ही ब्लॉक क्षेत्र के लिए प्रयोग होते हैं।",
    focus:
      "नारखी (कोटला) ब्लॉक के गाँवों से आने वाले किसानों के लिए हम मॉडल चुनाव के साथ-साथ जेन्युइन पार्ट्स की उपलब्धता और सर्विस शेड्यूल की जानकारी भी देते हैं।",
    farming:
      "रबी में गेहूँ के साथ सरसों और जौ की खेती इस पूरे इलाके में सामान्य है। समय पर जुताई और बुवाई के लिए ट्रैक्टर का चालू हालत में रहना सबसे जरूरी है — इसीलिए नियमित सर्विस पर ध्यान दीजिए।",
  },
  {
    slug: areaSlug("madanpur"),
    key: "madanpur",
    name: "Madanpur",
    hindiName: "मदनपुर",
    isTehsil: false,
    isBlock: true,
    standing: "विकासखंड (ब्लॉक)",
    intro:
      "मदनपुर फ़िरोज़ाबाद जिले का एक विकासखंड है। ब्लॉक के अंतर्गत आने वाले गाँवों में खेती ही मुख्य आजीविका है, और यहाँ ट्रैक्टर साल भर किसी न किसी काम में लगा रहता है।",
    focus:
      "मदनपुर ब्लॉक के किसान ट्रैक्टर के साथ रोटावेटर, कल्टीवेटर और सीड ड्रिल जैसे GreenSystem इम्प्लीमेंट की सही जोड़ी शोरूम पर समझ सकते हैं।",
    farming:
      "जिले में खेती योग्य क्षेत्र लगभग 2,874 वर्ग किलोमीटर है। इतने बड़े क्षेत्र में समय पर काम निपटाने के लिए भरोसेमंद मशीन और नजदीकी सर्विस सहायता, दोनों जरूरी हैं।",
  },
  {
    slug: areaSlug("araon"),
    key: "araon",
    name: "Araon",
    hindiName: "अरांव",
    isTehsil: false,
    isBlock: true,
    standing: "विकासखंड (ब्लॉक)",
    intro:
      "अरांव जिले के नौ विकासखंडों में शामिल है। यह क्षेत्र शिकोहाबाद की ओर पड़ता है और यहाँ की खेती जिले के सामान्य फसल-चक्र के अनुरूप ही है।",
    focus:
      "अरांव ब्लॉक के किसानों के लिए हम खेत के आकार, मुख्य फसल और उपलब्ध बजट — तीनों को देखकर मॉडल सुझाते हैं, ताकि ट्रैक्टर जरूरत से न छोटा पड़े और न बेवजह बड़ा हो।",
    farming:
      "तिल, उड़द और मूँग जैसी खरीफ फसलों के बाद रबी की तैयारी में खेत की जल्दी और सही जुताई सबसे अहम होती है। इसमें ट्रैक्टर की लिफ्ट क्षमता और हाइड्रोलिक्स की भूमिका बड़ी है।",
  },
  {
    slug: areaSlug("hathwant"),
    key: "hathwant",
    name: "Hathwant",
    hindiName: "हाथवंत",
    altName: "Kheragarh",
    hindiAltName: "खेरागढ़",
    isTehsil: false,
    isBlock: true,
    standing: "विकासखंड (ब्लॉक)",
    intro:
      "हाथवंत फ़िरोज़ाबाद जिले का विकासखंड है, जिसे कुछ अभिलेखों में खेरागढ़ नाम से भी सूचीबद्ध किया गया है। यह पूरी तरह जिले की सीमा के भीतर आता है।",
    focus:
      "हाथवंत (खेरागढ़) ब्लॉक के किसान ट्रैक्टर खरीद से पहले फाइनेंस, दस्तावेज और डिलीवरी की पूरी प्रक्रिया सिरसागंज शोरूम पर समझ सकते हैं।",
    farming:
      "लहसुन और आलू जैसी नकदी फसलें इस जिले में अच्छी मात्रा में होती हैं। इनकी खेती में समय की पाबंदी सबसे बड़ी शर्त है, इसलिए मशीन का बीच काम में न रुकना सीधे कमाई से जुड़ा है।",
  },
  {
    slug: areaSlug("fariha"),
    key: "fariha",
    name: "Fariha",
    hindiName: "फरिहा",
    isTehsil: false,
    isBlock: false,
    urbanBody: "नगर पंचायत",
    standing: "नगर पंचायत",
    intro:
      "फरिहा फ़िरोज़ाबाद जिले की नगर पंचायतों में से एक है। कस्बे के चारों ओर फैले गाँवों के लिए यह नजदीकी बाजार और आवाजाही का केंद्र है।",
    focus:
      "फरिहा और आसपास के गाँवों के किसान WhatsApp पर मॉडल, कीमत और स्टॉक पूछकर एक ही बार में शोरूम आ सकते हैं — समय और आने-जाने का खर्च, दोनों बचते हैं।",
    farming:
      "जिले के कस्बाई बाजारों से जुड़े गाँवों में सब्जी और चारा फसलों की खेती भी होती है। छोटे और संकरे खेतों के लिए Speciality Series जैसे विकल्प खास तौर पर उपयोगी हैं।",
  },
  {
    slug: areaSlug("makhanpur"),
    key: "makhanpur",
    name: "Makhanpur",
    hindiName: "मक्खनपुर",
    isTehsil: false,
    isBlock: false,
    urbanBody: "जनगणना नगर",
    standing: "जनगणना नगर (सेंसस टाउन)",
    intro:
      "मक्खनपुर फ़िरोज़ाबाद जिले के जनगणना नगरों में गिना जाता है। कस्बे का स्वरूप अर्ध-शहरी है, पर इसके चारों ओर की जमीन पूरी तरह खेती में है।",
    focus:
      "मक्खनपुर क्षेत्र के किसान ट्रैक्टर के साथ-साथ Precision Ag तकनीक — जैसे मशीन की निगरानी और सही जुताई — के बारे में भी शोरूम पर जानकारी ले सकते हैं।",
    farming:
      "जिले में नहर और नलकूप, दोनों से सिंचाई होती है। पानी की उपलब्धता के हिसाब से फसल चुनने और उसी के अनुसार इम्प्लीमेंट लगाने पर ट्रैक्टर का पूरा फायदा मिलता है।",
  },
];

export const tehsilAreas = serviceAreas.filter((area) => area.isTehsil);
export const blockAreas = serviceAreas.filter((area) => area.isBlock);
export const townAreas = serviceAreas.filter((area) => area.urbanBody && !area.isTehsil && !area.isBlock);

export type AreaFaq = { q: string; a: string };

/**
 * Voice queries run 7-10 words and are conversational, so these are written as
 * whole spoken questions rather than keyword fragments.
 */
export function areaFaqs(area: ServiceArea): AreaFaq[] {
  const place = area.hindiName;
  return [
    {
      q: `${place} में John Deere ट्रैक्टर का शोरूम कहाँ है?`,
      a: `${place} के किसानों के लिए नजदीकी अधिकृत John Deere डीलर S.B. Auto Sales & Service है, जो Etawah Road, Sirsaganj, ${districtName} (पिन 283151) पर स्थित है। आने से पहले 70885 01000 पर WhatsApp करके मॉडल की उपलब्धता पूछ लेना बेहतर रहता है।`,
    },
    {
      q: `${place} में John Deere ट्रैक्टर की कीमत क्या है?`,
      a: `कीमत मॉडल, HP, 2WD या 4WD और चुने गए वेरिएंट पर निर्भर करती है, और समय-समय पर बदलती रहती है। इसीलिए हम वेबसाइट पर कीमत नहीं लिखते — ${place} के लिए मौजूदा कीमत और उपलब्ध ऑफर WhatsApp पर पूछ लीजिए।`,
    },
    {
      q: `क्या ${place} में ट्रैक्टर पर फाइनेंस या लोन मिल जाएगा?`,
      a: `हाँ, फाइनेंस की सुविधा उपलब्ध लेनदारों के माध्यम से रहती है। EMI का अंदाजा आप हमारे कैलकुलेटर पर खुद लगा सकते हैं, और दस्तावेज तथा प्रक्रिया में शोरूम से सहायता मिलती है। लोन स्वीकृति और ब्याज दर बैंक या फाइनेंस कंपनी तय करती है।`,
    },
    {
      q: `${place} में ट्रैक्टर की सर्विस और जेन्युइन पार्ट्स कहाँ मिलेंगे?`,
      a: `सर्विस बुकिंग और असली John Deere पार्ट्स के लिए S.B. Auto Sales & Service, Sirsaganj से संपर्क करें। समस्या और मॉडल WhatsApp पर भेज दीजिए ताकि पार्ट की उपलब्धता पहले ही जाँची जा सके।`,
    },
    {
      q: `क्या ${place} से पुराना ट्रैक्टर देकर नया लिया जा सकता है?`,
      a: `हाँ, किसी भी ब्रांड का पुराना ट्रैक्टर देकर एक्सचेंज पर बात की जा सकती है। ब्रांड, मॉडल, वर्ष और हालत भेजिए — कीमत का शुरुआती अंदाजा मिल जाएगा, और अंतिम आकलन ट्रैक्टर देखने के बाद होता है।`,
    },
  ];
}

/** Short administrative label for the hero stat — `standing` is the full phrase. */
export function shortType(area: ServiceArea) {
  if (area.key === "firozabad") return "ज़िला मुख्यालय";
  if (area.isTehsil) return "तहसील";
  if (area.isBlock) return "विकासखंड";
  return area.urbanBody ?? "क्षेत्र";
}

export function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}

export function getNearbyAreas(area: ServiceArea, count = 6) {
  const index = serviceAreas.findIndex((item) => item.slug === area.slug);
  return Array.from({ length: Math.min(count, serviceAreas.length - 1) }, (_, offset) =>
    serviceAreas[(index + offset + 1) % serviceAreas.length],
  );
}

/** Every area name, both scripts and alternates — used for the coverage summary. */
export function allAreaNames() {
  return serviceAreas.flatMap((area) =>
    area.altName ? [area.hindiName, area.hindiAltName as string] : [area.hindiName],
  );
}
