// Head-to-head pages targeting the brands actually sold by dealers in Firozabad
// district (Mahindra, Swaraj, Sonalika, Massey, Eicher, Farmtrac, Powertrac...).
//
// RULE FOR THIS FILE: every figure below is copied from the manufacturer's own
// website, and `source` records which one. Third-party aggregators contradict each
// other — the same Mahindra 575 is listed as both 2730cc/4-cyl and 2979cc across
// sites — so aggregator numbers are never used here. If a manufacturer page does
// not state a figure, the value is "निर्माता ने नहीं बताया" rather than a guess.
//
// Comparative claims must stay factual and non-disparaging: we publish the numbers
// and let the reader decide. Never imply any affiliation with the other brand.

export type SpecRow = {
  label: string;
  johnDeere: string;
  rival: string;
};

export type Comparison = {
  slug: string;
  johnDeereName: string;
  johnDeereSlug: string;
  rivalBrand: string;
  rivalName: string;
  /** Manufacturer pages the figures were read from. */
  sources: { label: string; url: string }[];
  intro: string;
  rows: SpecRow[];
  /** Honest read of the table — including where the rival leads. */
  verdict: string;
};

export const comparisons: Comparison[] = [
  {
    slug: "john-deere-5045d-vs-mahindra-575-di",
    johnDeereName: "John Deere 5045D",
    johnDeereSlug: "5045d-powerpro",
    rivalBrand: "Mahindra",
    rivalName: "Mahindra 575 DI XP Plus",
    sources: [
      { label: "deere.co.in — 5045D", url: "https://www.deere.co.in/en/tractors/d-series-tractors/5045d-tractor/" },
      { label: "mahindratractor.com — 575 DI XP Plus", url: "https://www.mahindratractor.com/tractors/mahindra-575-di-xp-plus" },
    ],
    intro:
      "फ़िरोज़ाबाद ज़िले में 45 HP वर्ग सबसे ज्यादा बिकने वाला वर्ग है, और इसी में John Deere 5045D और Mahindra 575 DI आमने-सामने आते हैं। नीचे दोनों के आधिकारिक आँकड़े रखे गए हैं — दोनों कंपनियों की अपनी वेबसाइट से।",
    rows: [
      { label: "इंजन पावर", johnDeere: "46 HP (4WD) / 45 HP (2WD)", rival: "36–50 HP रेंज" },
      { label: "सिलेंडर", johnDeere: "3", rival: "4" },
      { label: "इंजन क्षमता", johnDeere: "2900 CC", rival: "निर्माता पेज पर नहीं दी गई" },
      { label: "PTO पावर", johnDeere: "निर्माता पेज पर नहीं दी गई", rival: "42 HP (31.2 kW)" },
      { label: "हाइड्रोलिक लिफ्ट क्षमता", johnDeere: "1600 kgf", rival: "1500 kg" },
      { label: "गियर", johnDeere: "8 आगे + 4 पीछे", rival: "8 आगे + 2 पीछे" },
      { label: "रेटेड RPM", johnDeere: "2100", rival: "2000" },
    ],
    verdict:
      "आँकड़ों में सबसे साफ फर्क गियर और लिफ्ट का है — 5045D में पीछे के चार गियर मिलते हैं जबकि 575 DI में दो, और लिफ्ट क्षमता 1600 kgf बनाम 1500 kg है। दूसरी तरफ 575 DI चार सिलेंडर का है, जिसे कई किसान चलने में ज्यादा संतुलित मानते हैं। दोनों की PTO और इंजन क्षमता की पूरी तुलना निर्माता पेजों पर एक जैसी जानकारी न होने के कारण अधूरी रहती है — इसलिए खरीदने से पहले दोनों को चलाकर देखना सबसे भरोसेमंद तरीका है।",
  },
  {
    slug: "john-deere-5045d-vs-swaraj-744-fe",
    johnDeereName: "John Deere 5045D",
    johnDeereSlug: "5045d-powerpro",
    rivalBrand: "Swaraj",
    rivalName: "Swaraj 744 FE",
    sources: [
      { label: "deere.co.in — 5045D", url: "https://www.deere.co.in/en/tractors/d-series-tractors/5045d-tractor/" },
      { label: "swarajtractors.com — 744 FE", url: "https://www.swarajtractors.com/swaraj-744-fe-tractor" },
    ],
    intro:
      "Swaraj 744 FE इस इलाके का बहुत पुराना और भरोसेमंद नाम है, और ज़िले में इसके कई डीलर हैं। John Deere 5045D उसी पावर वर्ग में आता है। दोनों के आधिकारिक आँकड़े नीचे रखे गए हैं।",
    rows: [
      { label: "इंजन पावर", johnDeere: "46 HP (4WD) / 45 HP (2WD)", rival: "46–50 HP" },
      { label: "सिलेंडर", johnDeere: "3", rival: "3" },
      { label: "इंजन क्षमता", johnDeere: "2900 CC", rival: "3307 CC" },
      { label: "PTO पावर", johnDeere: "निर्माता पेज पर नहीं दी गई", rival: "41.8 HP, 540/540E" },
      { label: "हाइड्रोलिक लिफ्ट क्षमता", johnDeere: "1600 kgf", rival: "2000 kg" },
      { label: "गियर", johnDeere: "8 आगे + 4 पीछे", rival: "8 आगे + 2 पीछे, या 12 आगे + 3 पीछे" },
      { label: "रेटेड RPM", johnDeere: "2100", rival: "2000" },
    ],
    verdict:
      "यहाँ तुलना सीधी है और हर बात John Deere के पक्ष में नहीं जाती। Swaraj 744 FE की लिफ्ट क्षमता 2000 kg है, जो 5045D की 1600 kgf से ज्यादा है, और इसका इंजन भी बड़ा (3307 CC) है — भारी इम्प्लीमेंट उठाने वालों के लिए यह मायने रखता है। 5045D की तरफ पीछे के चार गियर और ज्यादा रेटेड RPM हैं। असली फर्क अक्सर सर्विस और पार्ट्स की उपलब्धता में आता है, इसलिए अपने इलाके के हिसाब से दोनों की सर्विस सहायता भी देख लीजिए।",
  },
];

export function getComparison(slug: string) {
  return comparisons.find((item) => item.slug === slug);
}
