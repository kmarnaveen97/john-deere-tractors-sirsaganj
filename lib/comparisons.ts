// Head-to-head pages targeting the brands sold by the other dealers in Firozabad
// district (Mahindra, Swaraj, Sonalika, Massey, Eicher, Farmtrac, Powertrac...).
//
// TWO RULES THAT MAKE THESE PAGES WORK
//
// 1. Every figure is copied from the manufacturer's own website, and `sources`
//    records which. Third-party aggregators contradict each other — the same
//    Mahindra 575 appears as both 2730cc/4-cyl and 2979cc across sites — so none
//    are used. Where a manufacturer omits a figure the cell says so.
//
// 2. The pages are openly a dealer's pages and they concede where the rival
//    leads. That is deliberate, not timid: a farmer in Shikohabad can walk into
//    R.S. Tractors and read the Swaraj spec sheet himself. A page caught hiding
//    the 2000 kg lift figure loses that customer permanently, and in a market
//    where buying decisions travel by word of mouth it loses his neighbours too.
//
// Persuasion here comes from FRAMING, which is honest and durable: establishing
// the decision criteria before the numbers, leading with the rows where John
// Deere genuinely leads, and widening the question from sticker price to running
// cost. Nothing is hidden; the full table is always shown.

export type SpecRow = { label: string; johnDeere: string; rival: string };

export type Comparison = {
  slug: string;
  johnDeereName: string;
  johnDeereSlug: string;
  rivalBrand: string;
  rivalName: string;
  sources: { label: string; url: string }[];
  intro: string;
  /** Ordered so the rows John Deere leads on come first. Nothing is omitted. */
  rows: SpecRow[];
  /** Honest read of the table, including where the rival wins. */
  verdict: string;
};

/**
 * Shown before the spec table on every comparison. Raw specs are only part of a
 * tractor decision, and these are the parts a farmer discovers after two seasons
 * rather than on the day he buys.
 */
export const decisionFactors = [
  {
    title: "इम्प्लीमेंट से मिलान",
    text: "सबसे बड़ी लिफ्ट क्षमता नहीं, बल्कि आपके अपने इम्प्लीमेंट के लिए पर्याप्त क्षमता मायने रखती है। रोटावेटर, कल्टीवेटर और सीड ड्रिल जैसे आम इम्प्लीमेंट के लिए 1500–2000 kg की रेंज आमतौर पर काफी रहती है — पहले अपने भारी से भारी इम्प्लीमेंट का वजन देखिए।",
  },
  {
    title: "सर्विस कितनी दूर है",
    text: "सीजन के बीच ट्रैक्टर रुकने की कीमत उसकी कीमत से ज्यादा बैठती है। बुवाई या कटाई के दिनों में एक हफ्ते की देरी पूरी फसल पर भारी पड़ती है। खरीदने से पहले देखिए कि सर्विस और मैकेनिक आपके गाँव से कितनी दूर हैं।",
  },
  {
    title: "पार्ट्स मिलते कितनी जल्दी हैं",
    text: "हर ब्रांड के पार्ट्स बाजार में मिलते हैं, पर असली पार्ट्स तुरंत मिलना अलग बात है। पूछिए कि आम पार्ट्स डीलर के पास स्टॉक में रहते हैं या हर बार मँगवाने पड़ते हैं।",
  },
  {
    title: "पाँच साल बाद की कीमत",
    text: "ट्रैक्टर बेचते या एक्सचेंज करते समय जो कीमत मिलती है, वह कुल खर्च का बड़ा हिस्सा तय करती है। खरीद से पहले अपने इलाके में पाँच-सात साल पुराने उसी मॉडल की चल रही कीमत पूछ लीजिए।",
  },
];

/** The frame the sticker price hides. */
export const ownershipNote =
  "ट्रैक्टर की असली लागत सिर्फ उसकी कीमत नहीं होती। उसमें डीजल की खपत, हर साल की सर्विस, पार्ट्स का खर्च, बीच काम में रुकने से हुआ नुकसान और आखिर में बेचते समय मिलने वाली कीमत — सब जुड़ता है। दो ट्रैक्टरों की कीमत में जो फर्क दिखता है, वह अक्सर तीन-चार साल में सर्विस और डाउनटाइम के अंतर से बराबर हो जाता है। इसलिए तुलना करते समय सिर्फ आज की कीमत नहीं, पूरे समय का खर्च देखिए।";

const JD_5045D_SOURCE = {
  label: "deere.co.in — 5045D",
  url: "https://www.deere.co.in/en/tractors/d-series-tractors/5045d-tractor/",
};

export const comparisons: Comparison[] = [
  {
    slug: "john-deere-5045d-vs-mahindra-575-di",
    johnDeereName: "John Deere 5045D",
    johnDeereSlug: "5045d-powerpro",
    rivalBrand: "Mahindra",
    rivalName: "Mahindra 575 DI XP Plus",
    sources: [
      JD_5045D_SOURCE,
      { label: "mahindratractor.com — 575 DI XP Plus", url: "https://www.mahindratractor.com/tractors/mahindra-575-di-xp-plus" },
    ],
    intro:
      "फ़िरोज़ाबाद ज़िले में 45 HP वर्ग सबसे ज्यादा बिकने वाला वर्ग है, और इसी में ये दोनों ट्रैक्टर आमने-सामने आते हैं। नीचे दोनों के आधिकारिक आँकड़े हैं — दोनों कंपनियों की अपनी वेबसाइट से।",
    rows: [
      { label: "गियर", johnDeere: "8 आगे + 4 पीछे", rival: "8 आगे + 2 पीछे" },
      { label: "रेटेड RPM", johnDeere: "2100", rival: "2000" },
      { label: "हाइड्रोलिक लिफ्ट क्षमता", johnDeere: "1600 kgf", rival: "1500 kg" },
      { label: "इंजन पावर", johnDeere: "46 HP (4WD) / 45 HP (2WD)", rival: "36–50 HP रेंज" },
      { label: "इंजन क्षमता", johnDeere: "2900 CC", rival: "निर्माता पेज पर नहीं दी गई" },
      { label: "सिलेंडर", johnDeere: "3", rival: "4" },
      { label: "PTO पावर", johnDeere: "निर्माता पेज पर नहीं दी गई", rival: "42 HP (31.2 kW)" },
    ],
    verdict:
      "आँकड़ों में साफ फर्क गियर का है — 5045D में पीछे के चार गियर मिलते हैं, 575 DI में दो। ट्रॉली लगाकर तंग जगह में पीछे लेना हो या इम्प्लीमेंट जोड़ना हो, तब यह रोज काम आता है। लिफ्ट क्षमता भी 1600 kgf बनाम 1500 kg है। दूसरी तरफ 575 DI चार सिलेंडर का है, जिसे कई किसान चलने में ज्यादा संतुलित मानते हैं, और उसकी PTO पावर कंपनी ने साफ बताई है जबकि John Deere के पेज पर नहीं दी गई। दोनों को चलाकर देखना सबसे भरोसेमंद तरीका है।",
  },
  {
    slug: "john-deere-5045d-vs-swaraj-744-fe",
    johnDeereName: "John Deere 5045D",
    johnDeereSlug: "5045d-powerpro",
    rivalBrand: "Swaraj",
    rivalName: "Swaraj 744 FE",
    sources: [
      JD_5045D_SOURCE,
      { label: "swarajtractors.com — 744 FE", url: "https://www.swarajtractors.com/swaraj-744-fe-tractor" },
    ],
    intro:
      "Swaraj 744 FE इस इलाके का पुराना और भरोसेमंद नाम है, और ज़िले में इसके कई डीलर हैं। John Deere 5045D उसी पावर वर्ग में आता है। दोनों के आधिकारिक आँकड़े नीचे हैं।",
    rows: [
      { label: "गियर", johnDeere: "8 आगे + 4 पीछे", rival: "8 आगे + 2 पीछे, या 12 आगे + 3 पीछे" },
      { label: "रेटेड RPM", johnDeere: "2100", rival: "2000" },
      { label: "इंजन पावर", johnDeere: "46 HP (4WD) / 45 HP (2WD)", rival: "46–50 HP" },
      { label: "सिलेंडर", johnDeere: "3", rival: "3" },
      { label: "इंजन क्षमता", johnDeere: "2900 CC", rival: "3307 CC" },
      { label: "हाइड्रोलिक लिफ्ट क्षमता", johnDeere: "1600 kgf", rival: "2000 kg" },
      { label: "PTO पावर", johnDeere: "निर्माता पेज पर नहीं दी गई", rival: "41.8 HP, 540/540E" },
    ],
    verdict:
      "यहाँ हर बात John Deere के पक्ष में नहीं जाती, और यह साफ कह देना ही ठीक है। Swaraj 744 FE की लिफ्ट क्षमता 2000 kg है, जो 5045D की 1600 kgf से ज्यादा है, और इसका इंजन भी बड़ा (3307 CC) है — बहुत भारी इम्प्लीमेंट रोज उठाने वालों के लिए यह मायने रखता है। 5045D की तरफ पीछे के चार गियर और ज्यादा रेटेड RPM हैं। सवाल यह है कि आपके अपने इम्प्लीमेंट कितना वजन माँगते हैं: आम रोटावेटर, कल्टीवेटर और सीड ड्रिल के लिए 1600 kgf आमतौर पर पर्याप्त रहता है, और तब फैसला सर्विस, पार्ट्स और पाँच साल बाद की कीमत पर आ जाता है।",
  },
  {
    slug: "john-deere-5045d-vs-sonalika-di-745-iii",
    johnDeereName: "John Deere 5045D",
    johnDeereSlug: "5045d-powerpro",
    rivalBrand: "Sonalika",
    rivalName: "Sonalika DI 745 III",
    sources: [
      JD_5045D_SOURCE,
      { label: "sonalika.com — DI 745 III", url: "https://www.sonalika.com/tractor/di-745-iii.html" },
    ],
    intro:
      "शिकोहाबाद और फ़िरोज़ाबाद शहर, दोनों में Sonalika के डीलर हैं और DI 745 III उसी 45 HP वर्ग में आता है जिसमें John Deere 5045D। नीचे दोनों कंपनियों की अपनी वेबसाइट से लिए गए आँकड़े हैं।",
    rows: [
      { label: "गियर", johnDeere: "8 आगे + 4 पीछे", rival: "8 आगे + 2 पीछे / 12 आगे + 3 पीछे / 16 आगे + 4 पीछे" },
      { label: "रेटेड RPM", johnDeere: "2100", rival: "1900" },
      { label: "इंजन क्षमता", johnDeere: "2900 CC", rival: "निर्माता पेज पर नहीं दी गई" },
      { label: "इंजन पावर", johnDeere: "46 HP (4WD) / 45 HP (2WD)", rival: "45–50 HP (पेज शीर्षक अनुसार)" },
      { label: "सिलेंडर", johnDeere: "3", rival: "3" },
      { label: "अधिकतम टॉर्क", johnDeere: "निर्माता पेज पर नहीं दी गई", rival: "210 Nm" },
      { label: "हाइड्रोलिक लिफ्ट क्षमता", johnDeere: "1600 kgf", rival: "2000 kg" },
    ],
    verdict:
      "Sonalika DI 745 III की लिफ्ट क्षमता 2000 kg है और उसके गियरबॉक्स के विकल्प ज्यादा हैं — 16 आगे + 4 पीछे तक। यह उन किसानों के लिए मायने रखता है जो बहुत अलग-अलग रफ्तार पर काम करते हैं। 5045D का रेटेड RPM 2100 है, जो DI 745 III के 1900 से ज्यादा है, और उसके पीछे के चार गियर मानक रूप से मिलते हैं। दोनों कंपनियों ने कुछ आँकड़े अपने पेज पर नहीं दिए हैं, इसलिए बाकी तुलना शोरूम पर आमने-सामने ही ठीक से होगी।",
  },
];

export function getComparison(slug: string) {
  return comparisons.find((item) => item.slug === slug);
}
