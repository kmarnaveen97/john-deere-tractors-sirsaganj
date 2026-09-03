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

// Product images are the manufacturers' own, saved locally under /public/rivals
// rather than hotlinked. Hotlinks to these hosts are fragile — URLs move, and
// several of these sites are search competitors who can block referrers — which
// would leave the comparison pages with broken images and no warning.

export type SpecRow = { label: string; johnDeere: string; rival: string };

export type Comparison = {
  slug: string;
  johnDeereName: string;
  johnDeereSlug: string;
  /** Self-hosted under /public/rivals — see the note above on why not hotlinked. */
  johnDeereImage: string;
  rivalImage: string;
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
    johnDeereImage: "/rivals/john-deere-5045d.jpg",
    rivalImage: "/rivals/mahindra-575-di.png",
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
    johnDeereImage: "/rivals/john-deere-5045d.jpg",
    rivalImage: "/rivals/swaraj-744-fe.png",
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
    johnDeereImage: "/rivals/john-deere-5045d.jpg",
    rivalImage: "/rivals/sonalika-745-iii.webp",
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
  {
    slug: "john-deere-5042d-vs-massey-ferguson-241-di",
    johnDeereName: "John Deere 5042D",
    johnDeereSlug: "5042d-powerpro",
    johnDeereImage: "/rivals/john-deere-5042d.png",
    rivalImage: "/rivals/massey-241-di.jpg",
    rivalBrand: "Massey Ferguson",
    rivalName: "Massey Ferguson 241 DI",
    sources: [
      JD_5045D_SOURCE,
      { label: "masseyfergusonindia.com — MF 241 DI", url: "https://masseyfergusonindia.com/massey-ferguson/MF-241-DI" },
    ],
    intro:
      "शिकोहाबाद में Massey Ferguson का डीलर है और 241 DI इस इलाके का जाना-पहचाना ट्रैक्टर है। यह 42 HP वर्ग का है, इसलिए इसकी तुलना यहाँ John Deere 5042D (44 HP) से की गई है, 5045D से नहीं — ताकि दोनों लगभग एक ही वर्ग में रहें। सभी आँकड़े दोनों कंपनियों की अपनी वेबसाइट से हैं।",
    rows: [
      { label: "गियर", johnDeere: "8 आगे + 4 पीछे, कॉलरशिफ्ट", rival: "8 आगे + 2 पीछे" },
      { label: "इंजन पावर", johnDeere: "44 HP (32.3 kW)", rival: "31.33 kW (42 HP वर्ग)" },
      { label: "रेटेड RPM", johnDeere: "2100", rival: "2000" },
      { label: "सिलेंडर", johnDeere: "3", rival: "3" },
      { label: "इंजन क्षमता", johnDeere: "निर्माता पेज पर नहीं दी गई", rival: "2500 CC" },
      { label: "हाइड्रोलिक लिफ्ट क्षमता", johnDeere: "1600 kgf", rival: "1700 kgf" },
      { label: "PTO", johnDeere: "540 @ 2100 ERPM (इकोनॉमी 540 @ 1600)", rival: "540 RPM @ 1500 ERPM" },
    ],
    verdict:
      "पावर लगभग बराबर है — 44 HP बनाम 42 HP वर्ग। साफ फर्क गियर का है: 5042D में पीछे चार गियर मिलते हैं, 241 DI में दो। ट्रॉली के साथ तंग जगह में पीछे लेना हो तो यह रोज काम आता है, और 5042D का रेटेड RPM भी ज्यादा (2100 बनाम 2000) है। दूसरी तरफ लिफ्ट क्षमता में 241 DI आगे है — 1700 kgf बनाम 1600 kgf। दोनों की PTO एक जैसी 540 है, पर 5042D में इकोनॉमी PTO का विकल्प भी है, जो कम RPM पर डीजल बचाने के लिए दिया जाता है।",
  },
  {
    slug: "john-deere-5045d-vs-powertrac-euro-45-plus",
    johnDeereName: "John Deere 5045D",
    johnDeereSlug: "5045d-powerpro",
    johnDeereImage: "/rivals/john-deere-5045d.jpg",
    rivalImage: "/rivals/powertrac-euro-45-plus.webp",
    rivalBrand: "Powertrac",
    rivalName: "Powertrac Euro 45 Plus",
    sources: [
      JD_5045D_SOURCE,
      { label: "powertrac.escortskubota.com — Euro 45 Plus", url: "https://powertrac.escortskubota.com/powerhouse/euro-45-plus" },
    ],
    intro:
      "सिरसागंज में ही Powertrac का डीलर है, इसलिए यह तुलना यहाँ के किसान सबसे ज्यादा करते हैं। Euro 45 Plus और 5045D, दोनों 45–47 HP वर्ग में आते हैं। आँकड़े दोनों कंपनियों की अपनी वेबसाइट से लिए गए हैं।",
    rows: [
      { label: "गियर", johnDeere: "8 आगे + 4 पीछे", rival: "8 आगे + 2 पीछे, कॉन्स्टेंट मेश साइड शिफ्ट" },
      { label: "इंजन क्षमता", johnDeere: "2900 CC", rival: "निर्माता पेज पर नहीं दी गई" },
      { label: "हाइड्रोलिक लिफ्ट क्षमता", johnDeere: "1600 kgf", rival: "1600 kg" },
      { label: "इंजन पावर", johnDeere: "46 HP (4WD) / 45 HP (2WD)", rival: "35.0 kW (47 HP वर्ग)" },
      { label: "सिलेंडर", johnDeere: "3", rival: "3" },
      { label: "अधिकतम टॉर्क", johnDeere: "निर्माता पेज पर नहीं दी गई", rival: "198.5 Nm" },
      { label: "PTO पावर", johnDeere: "निर्माता पेज पर नहीं दी गई", rival: "30.6 kW (41.1 HP)" },
    ],
    verdict:
      "लिफ्ट क्षमता दोनों की एक जैसी है — 1600। पावर भी लगभग बराबर है, Euro 45 Plus कागज पर 47 HP वर्ग का है। साफ फर्क फिर गियर का ही है: 5045D में पीछे चार गियर, Euro 45 Plus में दो। Powertrac ने PTO पावर और टॉर्क अपने पेज पर साफ बताए हैं, जो John Deere के पेज पर नहीं हैं — इतनी हद तक Powertrac की जानकारी ज्यादा खुली है। जब दो ट्रैक्टर आँकड़ों में इतने पास हों, तब फैसला मशीन से हटकर सर्विस की दूरी, पार्ट्स की उपलब्धता और पाँच साल बाद की कीमत पर आ जाता है।",
  },
  {
    slug: "john-deere-5050d-vs-swaraj-855-fe",
    johnDeereName: "John Deere 5050D",
    johnDeereSlug: "5050d",
    johnDeereImage: "/rivals/john-deere-5050d.png",
    rivalImage: "/rivals/swaraj-855-fe.png",
    rivalBrand: "Swaraj",
    rivalName: "Swaraj 855 FE",
    sources: [
      { label: "deere.co.in — 5050D", url: "https://www.deere.co.in/en/tractors/d-series-tractors/5050d-tractor/" },
      { label: "swarajtractors.com — 855 FE", url: "https://www.swarajtractors.com/swaraj-855-fe-tractor" },
    ],
    intro:
      "50 HP वर्ग में Swaraj 855 FE इस पूरे इलाके का सबसे जाना-पहचाना नाम है और ज़िले में Swaraj के कई डीलर हैं। John Deere 5050D उसी वर्ग में आता है। दोनों के आधिकारिक आँकड़े नीचे हैं।",
    rows: [
      { label: "गियर", johnDeere: "8 आगे + 4 पीछे, कॉलरशिफ्ट", rival: "8 आगे + 2 पीछे (12 आगे + 12 पीछे तक विकल्प)" },
      { label: "रेटेड RPM", johnDeere: "2100", rival: "2000" },
      { label: "इंजन पावर", johnDeere: "50 HP (36.5 kW)", rival: "46–50 HP (33.56–37.28 kW)" },
      { label: "सिलेंडर", johnDeere: "3", rival: "3" },
      { label: "इंजन क्षमता", johnDeere: "2.9 लीटर", rival: "3478 cc" },
      { label: "हाइड्रोलिक लिफ्ट क्षमता", johnDeere: "1600 kgf", rival: "2000 kg" },
      { label: "PTO", johnDeere: "540 @ 2100 ERPM, इकोनॉमी 540 @ 1600", rival: "540, वैकल्पिक 540/540" },
    ],
    verdict:
      "Swaraj 855 FE की लिफ्ट क्षमता 2000 kg है और इंजन भी बड़ा — 3478 cc बनाम 2.9 लीटर। जो किसान रोज बहुत भारी इम्प्लीमेंट उठाते हैं, उनके लिए यह असली फायदा है और इसे छिपाने का कोई मतलब नहीं। 5050D की तरफ पीछे के चार गियर मानक रूप से मिलते हैं, रेटेड RPM ज्यादा है, और इकोनॉमी PTO कम RPM पर डीजल बचाने के लिए दिया गया है। सवाल वही है — आपके अपने इम्प्लीमेंट कितना वजन माँगते हैं, और उसके बाद सर्विस तथा पाँच साल बाद की कीमत।",
  },
  {
    slug: "john-deere-5310-vs-sonalika-di-750-iii",
    johnDeereName: "John Deere 5310",
    johnDeereSlug: "5310-powertech",
    johnDeereImage: "/rivals/john-deere-5310.png",
    rivalImage: "/rivals/sonalika-750-iii.webp",
    rivalBrand: "Sonalika",
    rivalName: "Sonalika DI 750 III",
    sources: [
      { label: "deere.co.in — 5310", url: "https://www.deere.co.in/en/tractors/e-series-tractors/5310e-tractor/" },
      { label: "sonalika.com — DI 750 III", url: "https://www.sonalika.com/tractor/di-750-iii.html" },
    ],
    intro:
      "बड़ी जोत और भारी इम्प्लीमेंट वाले किसान 55–57 HP वर्ग देखते हैं। Sonalika DI 750 III और John Deere 5310, दोनों इसी वर्ग में हैं। आँकड़े दोनों कंपनियों की वेबसाइट से लिए गए हैं।",
    rows: [
      { label: "इंजन", johnDeere: "टर्बो चार्ज्ड, HPCR फ्यूल इंजेक्शन", rival: "निर्माता पेज पर तकनीक नहीं बताई गई" },
      { label: "गियर", johnDeere: "12 आगे + 4 पीछे (GearPro), 12+12 PowrReverser विकल्प", rival: "8+2 / 12+3 / 12+12" },
      { label: "रेटेड RPM", johnDeere: "2100", rival: "2000" },
      { label: "इंजन पावर", johnDeere: "57 HP (42 kW)", rival: "55 HP वर्ग" },
      { label: "हाइड्रोलिक लिफ्ट क्षमता", johnDeere: "2000 kgf (वैकल्पिक 2500 kgf)", rival: "2200 kg" },
      { label: "सिलेंडर", johnDeere: "3", rival: "4" },
      { label: "अधिकतम टॉर्क", johnDeere: "निर्माता पेज पर नहीं दी गई", rival: "235 Nm" },
    ],
    verdict:
      "यह तुलना सबसे बराबरी की है। मानक लिफ्ट में DI 750 III आगे है — 2200 kg बनाम 2000 kgf — पर 5310 में 2500 kgf का विकल्प भी मिलता है, यानी जरूरत हो तो वह आगे निकल जाता है। DI 750 III चार सिलेंडर का है और उसका टॉर्क कंपनी ने साफ बताया है। 5310 की तरफ टर्बो चार्ज्ड इंजन और HPCR फ्यूल इंजेक्शन है, जो भारी काम में लगातार पावर और ईंधन नियंत्रण के लिए दिया जाता है, और GearPro में 12 आगे + 4 पीछे गियर मानक हैं। इस वर्ग में ट्रैक्टर सालों लंबे घंटे चलता है, इसलिए सर्विस की दूरी और पार्ट्स की उपलब्धता का असर सबसे ज्यादा यहीं पड़ता है।",
  },
  {
    slug: "john-deere-5036d-vs-massey-ferguson-1035-di",
    johnDeereName: "John Deere 5036D",
    johnDeereSlug: "5036d",
    johnDeereImage: "/rivals/john-deere-5036d.png",
    rivalImage: "/rivals/massey-1035-di.jpg",
    rivalBrand: "Massey Ferguson",
    rivalName: "Massey Ferguson 1035 DI",
    sources: [
      { label: "deere.co.in — 5036D", url: "https://www.deere.co.in/en/tractors/d-series-tractors/5036d-tractor/" },
      { label: "masseyfergusonindia.com — MF 1035 DI", url: "https://masseyfergusonindia.com/massey-ferguson/MF-1035-DI" },
    ],
    intro:
      "छोटी और मध्यम जोत वाले किसानों के लिए 36 HP वर्ग सबसे व्यावहारिक रहता है। John Deere 5036D और Massey Ferguson 1035 DI, दोनों ठीक इसी वर्ग में हैं। आँकड़े दोनों कंपनियों की अपनी वेबसाइट से हैं।",
    rows: [
      { label: "गियर", johnDeere: "8 आगे + 4 पीछे, कॉलरशिफ्ट", rival: "6 आगे + 2 पीछे (8 आगे + 2 पीछे विकल्प)" },
      { label: "हाइड्रोलिक लिफ्ट क्षमता", johnDeere: "1600 kgf", rival: "1100 kgf" },
      { label: "रेटेड RPM", johnDeere: "2100", rival: "निर्माता पेज पर नहीं दी गई" },
      { label: "इंजन पावर", johnDeere: "36 HP (26.8 kW)", rival: "36 HP (26.47 kW)" },
      { label: "सिलेंडर", johnDeere: "3", rival: "3" },
      { label: "इंजन क्षमता", johnDeere: "निर्माता पेज पर नहीं दी गई", rival: "2400 cc" },
      { label: "PTO", johnDeere: "540 @ 2100 ERPM, इंडिपेंडेंट", rival: "540 @ 1650 ERPM, लाइव सिंगल स्पीड" },
    ],
    verdict:
      "पावर दोनों की लगभग एक जैसी है — 36 HP। इस जोड़ी में फर्क साफ है: 5036D की लिफ्ट क्षमता 1600 kgf है जबकि 1035 DI की 1100 kgf, और गियर 8+4 बनाम 6+2 हैं। यानी भारी इम्प्लीमेंट और तंग जगह में पीछे लेने के मामले में 5036D ज्यादा गुंजाइश देता है। 1035 DI हल्का ट्रैक्टर है (1713 kg) और उसकी इंजन क्षमता कंपनी ने साफ बताई है। अगर आपके इम्प्लीमेंट हल्के हैं और बजट सबसे बड़ी शर्त है तो 1035 DI विकल्प बनता है; भारी काम और ज्यादा गियर चाहिए तो 5036D उसी हिसाब से बना है।",
  },
];

export function getComparison(slug: string) {
  return comparisons.find((item) => item.slug === slug);
}
