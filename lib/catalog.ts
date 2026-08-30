export type ProductKind = "series" | "tractor" | "implement" | "precision";

export type CatalogItem = {
  kind: ProductKind;
  slug: string;
  name: string;
  hindiName?: string;
  eyebrow: string;
  category: string;
  description: string;
  image: string;
  officialUrl: string;
  specs: Array<[string, string]>;
  applications: string[];
  highlights: string[];
  seriesSlug?: string;
};

export type CatalogVideo = {
  id: string;
  title: string;
  description: string;
};

const base = "https://www.deere.co.in";
const image = (path: string) => `${base}${path}`;
const hindiUrl = (path: string) => `${base}${path.replace("/en/", "/hi/")}`;

export const seriesItems: CatalogItem[] = [
  {
    kind: "series",
    slug: "d-series",
    name: "John Deere D Series",
    eyebrow: "ट्रैक्टर सीरीज़",
    category: "36–50 HP",
    description: "D Series बहुउपयोगी ट्रैक्टरों की रेंज है, जिसे खेती के नियमित काम, इम्प्लीमेंट संचालन और भारी ढुलाई के संतुलन के लिए बनाया गया है। इसमें PowerPro™, GearPro™ और LiftPro™ जैसे विकल्प मिलते हैं, इसलिए किसान अपनी जमीन और काम के अनुसार कॉन्फ़िगरेशन चुन सकते हैं।",
    image: image("/assets/images/region-1/products/tractors/d-series-tractors/d-series-technology-which-transforms-life.jpg"),
    officialUrl: hindiUrl("/en/tractors/d-series-tractors/"),
    specs: [["पावर रेंज", "36–50 HP"], ["ड्राइव विकल्प", "2WD और 4WD"], ["कुल मॉडल", "11"], ["मुख्य उपयोग", "खेती और ढुलाई"]],
    applications: ["रोटावेटर और कल्टीवेटर", "बीज ड्रिल और प्लांटर", "ट्रॉली एवं कृषि ढुलाई", "आलू और गेहूँ की सामान्य खेती"],
    highlights: ["कई HP और ट्रांसमिशन विकल्प", "दैनिक उपयोग के लिए बहुउपयोगी रेंज", "PowerPro™, GearPro™ और LiftPro™ तकनीक विकल्प"],
  },
  {
    kind: "series",
    slug: "e-series",
    name: "John Deere E Series",
    eyebrow: "ट्रैक्टर सीरीज़",
    category: "50–74 HP",
    description: "E Series अधिक शक्ति, बड़े इम्प्लीमेंट और लंबे समय तक भारी काम के लिए बनाई गई रेंज है। PowerTech™ इंजन, कई ट्रांसमिशन विकल्प और 2WD/4WD कॉन्फ़िगरेशन इसे बड़े खेतों और कमर्शियल कृषि कार्यों के लिए उपयोगी बनाते हैं।",
    image: image("/assets/images/region-1/tractors/e-family-tractors/john-deere-e-series-english.jpg"),
    officialUrl: hindiUrl("/en/tractors/e-series-tractors/"),
    specs: [["पावर रेंज", "50–74 HP"], ["ड्राइव विकल्प", "2WD और 4WD"], ["कुल मॉडल", "4"], ["मुख्य उपयोग", "हेवी-ड्यूटी काम"]],
    applications: ["बड़े रोटावेटर और प्लाऊ", "आलू प्लांटर और डिगर", "भारी ट्रॉली और कमर्शियल ढुलाई", "बड़े क्षेत्र में लंबे कार्य घंटे"],
    highlights: ["PowerTech™ इंजन तकनीक", "बड़े इम्प्लीमेंट संभालने की क्षमता", "उन्नत ट्रांसमिशन और हाइड्रोलिक विकल्प"],
  },
  {
    kind: "series",
    slug: "speciality-series",
    name: "John Deere Speciality Series",
    eyebrow: "ट्रैक्टर सीरीज़",
    category: "28–35 HP",
    description: "Speciality Series संकरी चौड़ाई और बेहतर manoeuvrability वाले कॉम्पैक्ट 4WD ट्रैक्टरों की रेंज है। यह बाग़, सब्ज़ी, इंटरकल्चर, वेटलैंड और उन खेतों के लिए उपयोगी है जहाँ सामान्य आकार के ट्रैक्टर को चलाना कठिन होता है।",
    image: image("/assets/images/region-1/products/tractors/john-deere-speciality-tractors-orchard-tractors.jpg"),
    officialUrl: hindiUrl("/en/tractors/speciality-tractors/"),
    specs: [["पावर रेंज", "28–35 HP"], ["ड्राइव", "4WD"], ["कुल मॉडल", "3"], ["मुख्य उपयोग", "विशेष फसलें"]],
    applications: ["बाग़ और अंगूर/फल पंक्तियाँ", "सब्ज़ियों में इंटरकल्चर", "धान और वेटलैंड संचालन", "संकरे खेत और छोटे मोड़"],
    highlights: ["कॉम्पैक्ट और संकरी बनावट", "4WD traction", "विशेष फसलों के लिए बेहतर नियंत्रण"],
  },
  {
    kind: "series",
    slug: "5m-series",
    name: "John Deere 5M Series",
    eyebrow: "ट्रैक्टर सीरीज़",
    category: "130 HP",
    description: "5M Series बड़े पैमाने की खेती, भारी इम्प्लीमेंट और कम समय में अधिक काम करने वाले किसानों एवं कॉन्ट्रैक्टरों के लिए प्रीमियम रेंज है। भारत में इसका प्रमुख मॉडल 5130M है, जिसमें उच्च पावर, उन्नत ट्रांसमिशन और स्मार्ट कनेक्टिविटी मिलती है।",
    image: image("/assets/images/region-1/products/tractors/5m-series-tractors/power-and-technology-background.jpg"),
    officialUrl: hindiUrl("/en/tractors/5m-series-tractors/"),
    specs: [["पावर", "130 HP"], ["ड्राइव", "MFWD"], ["कुल मॉडल", "1"], ["मुख्य उपयोग", "बड़े पैमाने के भारी कार्य"]],
    applications: ["बड़े खेत और कॉन्ट्रैक्ट फार्मिंग", "भारी इम्प्लीमेंट", "कम समय में बड़े क्षेत्र का संचालन", "प्रिसीजन एग्रीकल्चर"],
    highlights: ["Powr8™ EcoShift ट्रांसमिशन", "प्रीमियम कैब और ऑपरेटर कम्फर्ट", "JDLink™ और ISOBUS readiness"],
  },
];

type TractorInput = {
  slug: string;
  name: string;
  seriesSlug: string;
  series: string;
  hp: string;
  drive: string;
  officialPath: string;
  imagePath: string;
  special?: string[];
};

const tractor = ({ slug, name, seriesSlug, series, hp, drive, officialPath, imagePath, special = [] }: TractorInput): CatalogItem => {
  const power = Number.parseInt(hp, 10);
  const applications = power <= 35
    ? ["बाग़, सब्ज़ी और इंटरकल्चर", "हल्के इम्प्लीमेंट", "संकरी जगह और छोटे मोड़", "वेटलैंड या विशेष फसलें"]
    : power <= 46
      ? ["कल्टीवेटर और रोटावेटर", "बीज ड्रिल और बुवाई", "सामान्य ट्रॉली ढुलाई", "मध्यम आकार के खेत"]
      : power <= 63
        ? ["भारी रोटावेटर और प्लाऊ", "आलू प्लांटर व डिगर", "भारी ढुलाई", "लंबे समय तक बहुउपयोगी काम"]
        : ["बड़े इम्प्लीमेंट", "कमर्शियल खेती", "भारी ढुलाई और कॉन्ट्रैक्ट कार्य", "बड़े खेतों में उच्च उत्पादकता"];
  const technology = [
    name.includes("GearPro") ? "GearPro™ में अधिक गति विकल्प अलग-अलग काम के लिए सही working speed चुनने में मदद करते हैं।" : "मॉडल के अनुसार उपलब्ध ट्रांसमिशन खेत और ढुलाई के काम में उपयोगी गति विकल्प देता है।",
    name.includes("PowerTech") ? "PowerTech™ तकनीक भारी काम में शक्ति और लगातार प्रदर्शन पर केंद्रित है।" : "John Deere इंजन और हाइड्रोलिक प्रणाली दैनिक कृषि अनुप्रयोगों के लिए तैयार की गई है।",
    name.includes("LiftPro") ? "LiftPro™ विकल्प भारी इम्प्लीमेंट उठाने और चलाने की जरूरत को ध्यान में रखता है।" : `${drive} कॉन्फ़िगरेशन जमीन और traction की जरूरत के अनुसार चुना जा सकता है।`,
    ...special,
  ];
  return {
    kind: "tractor",
    slug,
    name,
    eyebrow: "John Deere ट्रैक्टर",
    category: series,
    seriesSlug,
    description: `${name} ${hp} श्रेणी का ${drive} विकल्प वाला ${series} ट्रैक्टर है। इसे भारतीय खेती की अलग-अलग परिस्थितियों में इम्प्लीमेंट चलाने, खेत का काम समय पर पूरा करने और आवश्यकता के अनुसार ढुलाई के लिए समझा जा सकता है। सही वेरिएंट का चुनाव मिट्टी, फसल, खेत के आकार और इम्प्लीमेंट के आधार पर किया जाना चाहिए।`,
    image: image(imagePath),
    officialUrl: hindiUrl(officialPath),
    specs: [["इंजन पावर", hp], ["ड्राइव", drive], ["सीरीज़", series], ["उपलब्धता", "वेरिएंट अनुसार"]],
    applications,
    highlights: technology,
  };
};

export const tractorItems: CatalogItem[] = [
  tractor({ slug: "5036d", name: "5036D", seriesSlug: "d-series", series: "D Series", hp: "36 HP", drive: "2WD", officialPath: "/en/tractors/d-series-tractors/5036d-tractor/", imagePath: "/assets/images/tractors/d-series-tractors/5036d-tractor/5036_D_large_8789d23e32f5d3e658485c7ee0d5731cf18306af.png" }),
  tractor({ slug: "5105", name: "5105", seriesSlug: "d-series", series: "D Series", hp: "40 HP", drive: "2WD / 4WD", officialPath: "/en/tractors/d-series-tractors/5105-tractor/", imagePath: "/assets/images/5105_4WD_large_0af9e0a7f34eb1c5e60aba8eeb8493bb9c3a8a16.jpg" }),
  tractor({ slug: "5105-gearpro", name: "5105 GearPro™", seriesSlug: "d-series", series: "D Series", hp: "40 HP", drive: "2WD / 4WD", officialPath: "/en/tractors/d-series-tractors/5105-gearpro/", imagePath: "/assets/images/region1/products/5105d_4wd_gearpro_frontleft_small_2611f0c0e719a99dc3529119c516d90f7877d184.jpg", special: ["12F + 4R गति और बढ़ा हुआ सर्विस इंटरवल इसके प्रमुख आधिकारिक आकर्षण हैं।"] }),
  tractor({ slug: "5039d-powerpro", name: "5039D PowerPro™", seriesSlug: "d-series", series: "D Series", hp: "41 HP", drive: "2WD", officialPath: "/en/tractors/d-series-tractors/5039d-tractor/", imagePath: "/assets/images/region-1/products/tractors/d-series-tractors/john_deere_tractor_5039D_large_1b11434b53dca9a485a7875ac525d5237cf2a4f0.png" }),
  tractor({ slug: "5042d-powerpro", name: "5042D PowerPro™", seriesSlug: "d-series", series: "D Series", hp: "44 HP", drive: "2WD", officialPath: "/en/tractors/d-series-tractors/5042d-tractor/", imagePath: "/assets/images/region-1/products/tractors/d-series-tractors//john_deere_tractor_5042D_PowerPro_large_05430d0bd45b9eee12ff6ba2e51f10e90d330cfd.png" }),
  tractor({ slug: "5042d-gearpro-powerpro", name: "5042D GearPro™ PowerPro™", seriesSlug: "d-series", series: "D Series", hp: "44 HP", drive: "2WD", officialPath: "/en/tractors/d-series-tractors/5042d-gearpro-powerpro/", imagePath: "/assets/images/region-1/products/tractors/d-series-tractors/5042d_2wd_gearpro_powerpro_frontleft_small_87ac7473fdd3c4e74dac0eb2f10d0c70dd968419.jpg" }),
  tractor({ slug: "5045d-powerpro", name: "5045D PowerPro™", seriesSlug: "d-series", series: "D Series", hp: "46 HP", drive: "2WD / 4WD", officialPath: "/en/tractors/d-series-tractors/5045d-tractor/", imagePath: "/assets/images/5045D_powerPro_large_ad9e2adb47697e5d237eaefd0c5b3fc38a28da1b.png" }),
  tractor({ slug: "5045d-gearpro", name: "5045D GearPro™", seriesSlug: "d-series", series: "D Series", hp: "46 HP", drive: "2WD / 4WD", officialPath: "/en/tractors/d-series-tractors/5045d-gearpro/", imagePath: "/assets/images/region-1/products/tractors/d-series-tractors/5045d-gearpro-45hp/5045d_gearpro_45hp_large_ec0d46f3640860fdfe234d30a13c7d220879ad1b.jpg" }),
  tractor({ slug: "5045d-liftpro", name: "5045D PowerPro™ GearPro™ LiftPro™", seriesSlug: "d-series", series: "D Series", hp: "46 HP", drive: "वेरिएंट अनुसार", officialPath: "/en/tractors/d-series-tractors/5045d-powerpro-gearpro-liftpro/", imagePath: "/assets/images/region-1/products/tractors/5045powerpro_gearpro_liftpro_small_bfec7b8090130090bc1c930b4e49cf3a13dabf00.png" }),
  tractor({ slug: "5050d", name: "5050D", seriesSlug: "d-series", series: "D Series", hp: "50 HP", drive: "2WD / 4WD", officialPath: "/en/tractors/d-series-tractors/5050d-tractor/", imagePath: "/assets/images/region-1/products/tractors/d-series-tractors/john_deere_tractor_5050D_large_a7341c4a17e854d5b4a1c9aeae3b3ab8c367b9ef.png" }),
  tractor({ slug: "5050d-gearpro", name: "5050D GearPro™", seriesSlug: "d-series", series: "D Series", hp: "50 HP", drive: "2WD / 4WD", officialPath: "/en/tractors/d-series-tractors/5050d-gearpro/", imagePath: "/assets/images/region-1/products/tractors/d-series-tractors/5050d_gearproo_large_a383269a24b7d7c0b8347df37dcd8c08514ddc30.jpg" }),
  tractor({ slug: "5210-gearpro", name: "5210 GearPro™", seriesSlug: "e-series", series: "E Series", hp: "50 HP", drive: "2WD / 4WD", officialPath: "/en/tractors/e-series-tractors/5210-gearpro-tractor/", imagePath: "/assets/images/tractors/e-series-tractors/5210GearPro-tractor/John_Deere_India_Tractors_5210_Gear_Pro_large_0f8a86c79862106b322a2cbee2f41369222a70a4.jpg" }),
  tractor({ slug: "5310-powertech", name: "5310 PowerTech™", seriesSlug: "e-series", series: "E Series", hp: "57 HP", drive: "2WD / 4WD", officialPath: "/en/tractors/e-series-tractors/5310e-tractor/", imagePath: "/assets/images/tractors/e-series-tractors/5310e-tractor/john_deere_india_trem4_5310_right_angle_large_1a5dd6f40ebd3c6aac80321ed0a29f52e44dbe57.png" }),
  tractor({ slug: "5405-powertech", name: "5405 PowerTech™", seriesSlug: "e-series", series: "E Series", hp: "63 HP", drive: "2WD / 4WD", officialPath: "/en/tractors/e-series-tractors/5405-tractor/", imagePath: "/assets/images/tractors/e-series-tractors/5405-tractor/5405_ac_cab_right_low_large_2345c81c932e22a9a36425d7b6b85b9f2325c03c.jpg" }),
  tractor({ slug: "5075e-powertech", name: "5075E PowerTech™", seriesSlug: "e-series", series: "E Series", hp: "74 HP", drive: "2WD / 4WD", officialPath: "/en/tractors/e-series-tractors/5075e-tractor/", imagePath: "/assets/images/tractors/e-series-tractors/5075e-tractor/5075E_Front_Right_Studio_Graphic_4k_small_eeb61e28f76fa62f8d8a582465e5a8045102a4d7.jpg" }),
  tractor({ slug: "3028en", name: "3028EN", seriesSlug: "speciality-series", series: "Speciality Series", hp: "28 HP", drive: "4WD", officialPath: "/en/tractors/speciality-tractors/3028en-tractor/", imagePath: "/assets/images/tractors/speciality-tractors/3028en-tractor/3028EN_Front_Right_Studio_Graphic_4K_small_cb510caaa708d35cb6d0f1ff79052af502f56d6e.jpg" }),
  tractor({ slug: "3036en", name: "3036EN", seriesSlug: "speciality-series", series: "Speciality Series", hp: "35 HP", drive: "4WD", officialPath: "/en/tractors/speciality-tractors/3036en-tractor/", imagePath: "/assets/images/tractors/speciality-tractors/3036en-tractor/3036EN_Front_Right_Studio_Graphic_4K_small_7a599509297c8c62b455bc85a7a9f059e0c1e8af.jpg" }),
  tractor({ slug: "3036e", name: "3036E", seriesSlug: "speciality-series", series: "Speciality Series", hp: "35 HP", drive: "4WD", officialPath: "/en/tractors/speciality-tractors/3036e-tractor/", imagePath: "/assets/images/tractors/speciality-tractors/3036e-tractor/3036E_Front_Right_Studio_Graphic_4K_small_dafcb9dbbad4dcf7db694eb1c17b93efa247024d.jpg" }),
  tractor({ slug: "5130m", name: "5130M", seriesSlug: "5m-series", series: "5M Series", hp: "130 HP", drive: "MFWD", officialPath: "/en/tractors/5m-series-tractors/5130m-tractor/", imagePath: "/assets/images/region-1/products/tractors/5130_5m_left_small_b1d2873ccbf0cb92ed819ac9b7cdfc9639a24257.jpg", special: ["Powr8™ EcoShift, प्रीमियम कैब, JDLink™ और ISOBUS readiness बड़े पैमाने के काम के लिए दिए गए हैं।"] }),
];

type ImplementInput = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  officialPath: string;
  imagePath: string;
  applications: string[];
};

const implementHindiNames: Record<string, string> = {
  "multi-application-tillage-unit": "बहुउद्देश्यीय जुताई इकाई",
  "deluxe-mb-plough": "डीलक्स मिट्टी पलट हल",
  "chisel-plough": "गहरी जुताई चिज़ल हल",
  subsoiler: "सबसॉइलर — 1 से 3 टाइन",
  "puddler-cum-leveler": "पडलर-कम-लेवलर",
  "laser-leveler": "लेज़र भूमि समतलीकरण यंत्र",
  "single-bottom-mb-plough": "सिंगल बॉटम मिट्टी पलट हल",
  "rotary-tiller-series": "रोटरी टिलर — 1000 व 5000 सीरीज़",
  ridger: "मेड़ बनाने वाला यंत्र",
  cultivator: "कल्टीवेटर",
  "check-basin-former": "क्यारी बनाने वाला यंत्र",
  "power-harrow": "पावर हैरो",
  "mini-rotary-tiller": "मिनी रोटरी टिलर",
  "paddy-special-rotary-tiller": "धान विशेष रोटरी टिलर",
  "hydraulic-reversible-mb-plough": "हाइड्रोलिक रिवर्सिबल मिट्टी पलट हल",
  "post-hole-digger": "गड्ढा खोदने वाला यंत्र",
  "combination-implement": "संयुक्त कृषि यंत्र",
  "super-seeder": "सुपर सीडर",
  "seed-cum-fertilizer-drill": "बीज-सह-उर्वरक ड्रिल",
  "roto-seeder": "रोटो सीडर",
  "multi-crop-mechanical-planter": "बहुफसली यांत्रिक प्लांटर",
  "front-hitch-front-pto": "फ्रंट हिच व फ्रंट पीटीओ",
  "high-speed-planter": "उच्च गति प्लांटर",
  "potato-planter": "आलू प्लांटर",
  "fertilizer-broadcaster": "उर्वरक प्रसारक",
  "potato-digger": "आलू खुदाई यंत्र",
  "ratoon-manager": "गन्ना पेड़ी प्रबंधक",
  "square-baler-rotary-rake": "स्क्वायर बेलर व रोटरी रेक",
  "compact-round-baler": "कॉम्पैक्ट गोल बेलर",
  "flail-mower": "फ्लेल मोवर",
  mulcher: "मल्चर",
  "straw-reaper": "स्ट्रॉ रीपर",
};

const implement = ({ slug, name, category, summary, officialPath, imagePath, applications }: ImplementInput): CatalogItem => ({
  kind: "implement",
  slug,
  name,
  hindiName: implementHindiNames[slug],
  eyebrow: "John Deere GreenSystem™ इम्प्लीमेंट",
  category,
  description: summary,
  image: image(imagePath),
  officialUrl: hindiUrl(officialPath),
  specs: [["उत्पाद प्रकार", "ट्रैक्टर इम्प्लीमेंट"], ["श्रेणी", category], ["ब्रांड रेंज", "GreenSystem™"], ["चयन", "ट्रैक्टर HP अनुसार"]],
  applications,
  highlights: ["सही HP वाले ट्रैक्टर से मेल करके उपयोग करें।", "काम, मिट्टी और खेत की स्थिति के अनुसार आकार/वेरिएंट चुनें।", "कीमत और उपलब्धता S.B. Auto से पुष्टि करें।"],
});

export const implementItems: CatalogItem[] = [
  implement({ slug: "multi-application-tillage-unit", name: "Multi Application Tillage Unit (MAT)", category: "भूमि तैयारी", summary: "MAT एक बहुउद्देश्यीय मशीन है जो निराई, मिट्टी ढीली करने, मेड़ बनाने, हल्की जुताई और bund forming जैसे कई इंटरकल्चर कार्य एक ही प्लेटफॉर्म से कर सकती है।", officialPath: "/en/implements/multi-application-tillage-unit/", imagePath: "/assets/images/implements/multi-application-tillage-unit/johndeere_india_mat2_small_c6ca725457d73d7eab997d69c85d0036d8a05ce6.jpg", applications: ["इंटरकल्चर", "निराई", "मेड़ और नाली बनाना", "हल्की जुताई"] }),
  implement({ slug: "deluxe-mb-plough", name: "Deluxe MB Plough", category: "भूमि तैयारी", summary: "Deluxe MB Plough मिट्टी की कठोर परत तोड़कर मिट्टी को पलटने, मिलाने और ढीला करने के लिए उपयोग होता है। गहरी प्राथमिक जुताई और खेत को अगली प्रक्रिया के लिए तैयार करने में यह उपयोगी है।", officialPath: "/en/implements/deluxe-mb-plough/", imagePath: "/assets/images/region-1/products/implements/delux_mb_plough_large_e3c28bc0d087f304f3d93e23f1baff30ed40034e.png", applications: ["गहरी जुताई", "Hardpan तोड़ना", "फसल अवशेष मिलाना", "मिट्टी पलटना"] }),
  implement({ slug: "chisel-plough", name: "Chisel Plough", category: "भूमि तैयारी", summary: "Chisel Plough मिट्टी को पूरी तरह उलटे बिना कठोर परत में गहरी दरारें बनाता है। इससे जड़ों, पानी और हवा को नीचे जाने का रास्ता मिलता है और primary या secondary tillage में मदद होती है।", officialPath: "/en/implements/chisel-plough/", imagePath: "/assets/images/region-1/products/implements/Green_System_Chisel_Plough_large_7a75139f1171a783058877786a0a619087d17ad1.png", applications: ["गहरी मिट्टी ढीली करना", "कम्पैक्शन कम करना", "जल प्रवेश सुधारना", "बीज-शय्या से पहले जुताई"] }),
  implement({ slug: "subsoiler", name: "Subsoiler — 1 to 3 Tines", category: "भूमि तैयारी", summary: "Subsoiler जमीन की नीचे बनी कठोर परत को गहराई में तोड़ने के लिए बनाया गया है। 1 से 3 tine विकल्प खेत की चौड़ाई, मिट्टी और उपलब्ध tractor power के अनुसार चुने जाते हैं।", officialPath: "/en/implements/subsoiler2-3tine/", imagePath: "/assets/images/region-1/products/implements/subsoiler2-3tine/subsoiler2_3tine_1_large_62c3faad7d448860458e5ff4b9942358d857a18f.jpg", applications: ["Deep tillage", "Hardpan breaking", "जल निकास", "जड़ क्षेत्र सुधार"] }),
  implement({ slug: "puddler-cum-leveler", name: "Puddler Cum Leveler", category: "भूमि तैयारी", summary: "Puddler Cum Leveler धान के गीले खेत में puddling और leveling दोनों काम के लिए उपयोगी है। इससे transplanting के लिए समान और तैयार सतह बनाने में मदद मिलती है।", officialPath: "/en/implements/puddler-leveler/", imagePath: "/assets/images/region-1/products/implements/GreenSystem_Implement_Puddler_Leveler_large_e5456d26bb969421272710f37ae1d9ccac667c18.png", applications: ["धान की तैयारी", "Puddling", "गीले खेत की leveling", "रोपाई से पहले सतह बनाना"] }),
  implement({ slug: "laser-leveler", name: "Laser Leveler", category: "भूमि तैयारी", summary: "Laser Leveler लेज़र निर्देशित प्रणाली से खेत को समान स्तर पर तैयार करता है। बेहतर leveling से सिंचाई का पानी अधिक समान फैल सकता है और ऊँचे-नीचे हिस्सों में पानी की बर्बादी कम हो सकती है।", officialPath: "/en/implements/laser-leveler/", imagePath: "/assets/images/region-1/products/implements/greensystem_laser_leveller_large_a83aad4b36c4c3a234af7d048d5c9b3dd426ea96.jpg", applications: ["Precision leveling", "सिंचाई दक्षता", "समान जल वितरण", "बीज-शय्या सुधार"] }),
  implement({ slug: "single-bottom-mb-plough", name: "Single Bottom MB Plough", category: "भूमि तैयारी", summary: "Single Bottom MB Plough एक bottom के साथ मिट्टी की गहरी परत को पलटता और ढीला करता है। यह छोटे क्षेत्र, कम चौड़ाई और नियंत्रित गहरी जुताई के लिए सरल विकल्प है।", officialPath: "/en/implements/single-bottom-mb-plough/", imagePath: "/assets/images/region-1/products/implements/John_Deere_Green_System_Single_Bottom_MB_Plough_large_118522edf798b416460fd6805051fb8de8bc4185.jpg", applications: ["छोटे खेत", "नियंत्रित गहरी जुताई", "मिट्टी पलटना", "Hardpan loosening"] }),
  implement({ slug: "rotary-tiller-series", name: "Rotary Tiller — 1000 & 5000 Series", category: "भूमि तैयारी", summary: "Rotary Tiller घूमते blades से मिट्टी को काटता, भुरभुरा करता और seedbed तैयार करता है। 1000 और 5000 Series के विकल्प tractor power और काम की चौड़ाई के अनुसार चुने जा सकते हैं।", officialPath: "/en/implements/rotary-tiller-1000-series/", imagePath: "/assets/images/region-1/products/implements/rotary-tiller-1000-series//rotary_tiller_1000_series_large_e83b723dc8501b6542d9f0483226e76f8673dfd2.png", applications: ["Seedbed preparation", "Primary/secondary tillage", "फसल अवशेष मिलाना", "मिट्टी भुरभुरी करना"] }),
  implement({ slug: "ridger", name: "Ridger", category: "भूमि तैयारी", summary: "Ridger पंक्ति वाली फसलों के लिए समान ridges और furrows बनाता है। आलू, गन्ना, मिर्च और केले जैसी फसलों में रोपाई, सिंचाई और जल निकास के लिए यह खास तौर पर उपयोगी है।", officialPath: "/en/implements/ridger/", imagePath: "/assets/images/region-1/products/implements/ridger/ridger_img_large_ad26135ac451323d6132e38c1ceebd660be53bac.jpg", applications: ["आलू की मेड़", "गन्ना furrow", "मिर्च/केला पंक्तियाँ", "जल निकास"] }),
  implement({ slug: "cultivator", name: "Cultivator", category: "भूमि तैयारी", summary: "Cultivator मिट्टी में penetration करके खरपतवार उखाड़ता, बचा हुआ residue मिलाता और खेत को अगली बुवाई प्रक्रिया के लिए तैयार करता है। अलग soil conditions के लिए rigid, spring और अन्य tyne विकल्प मिल सकते हैं।", officialPath: "/en/implements/cultivator/", imagePath: "/assets/images/region-1/products/implements/Cultivator_Greensystem_implement_large_963708a0da8407469b82f5f2147e821f7b95a118.png", applications: ["निराई", "Secondary tillage", "अवशेष मिलाना", "मिट्टी ढीली करना"] }),
  implement({ slug: "check-basin-former", name: "Check Basin Former", category: "भूमि तैयारी", summary: "Check Basin Former सिंचाई के लिए खेत में व्यवस्थित छोटे basins और मेड़ बनाता है। इसका उद्देश्य पानी को नियंत्रित हिस्सों में रोकना और irrigation management को आसान बनाना है।", officialPath: "/en/implements/checkbasinformer/", imagePath: "/assets/images/john_deere_tractors_green_system_implement_Check_Basin_Former__large_095f882794fa5f79bc619894a8297d0140fda271.png", applications: ["सिंचाई basin बनाना", "पानी रोकना", "खेत विभाजन", "Irrigation planning"] }),
  implement({ slug: "power-harrow", name: "Power Harrow", category: "भूमि तैयारी", summary: "Power Harrow secondary tillage में मिट्टी को समान रूप से तैयार कर fine seedbed बनाने में मदद करता है। Rotating tines मिट्टी को संभालते हैं और clods को तोड़ते हैं।", officialPath: "/en/implements/power-harrow/", imagePath: "/assets/images/region-1/products/implements/John_Deere_Green_System_Power_Harrow_large_764a640f59a514eb2567d60c8de53ef54c6b7279.png", applications: ["Fine seedbed", "Clod breaking", "Secondary tillage", "बुवाई से पहले finishing"] }),
  implement({ slug: "mini-rotary-tiller", name: "Mini Rotary Tiller", category: "भूमि तैयारी", summary: "Mini Rotary Tiller बाग़ और सब्ज़ी वाली संकरी पंक्तियों में tillage एवं interculture के लिए compact rotary implement है। इसे speciality tractors के साथ सीमित जगह में काम करने के लिए समझा जा सकता है।", officialPath: "/en/implements/mini-rotary-tiller/", imagePath: "/assets/images/region-1/products/implements/mini-rotary-tiller/swan_mini_rotary_tiller_large_fa56243cbb25bfe7a7df7a397e3510acad79b85e.jpg", applications: ["बाग़", "सब्ज़ी पंक्तियाँ", "Interculture", "संकरी जगह"] }),
  implement({ slug: "paddy-special-rotary-tiller", name: "Paddy Special Rotary Tiller", category: "भूमि तैयारी", summary: "Paddy Special Rotary Tiller धान transplanting से पहले wet-field seedbed तैयार करने के लिए बनाया गया rotary implement है। यह पानी वाले खेत में मिट्टी को puddled condition में लाने में मदद करता है।", officialPath: "/en/implements/paddy-tiller/", imagePath: "/assets/images/region-1/products/implements/Paddy_Tiller_Implement_John_Deere_large_e78afff8d88c9621daf80de541182eb4d69196cb.png", applications: ["धान", "Wet-field tillage", "Puddling", "रोपाई तैयारी"] }),
  implement({ slug: "hydraulic-reversible-mb-plough", name: "Hydraulic Reversible MB Plough", category: "भूमि तैयारी", summary: "Hydraulic Reversible MB Plough दिशा बदलते समय plough body को hydraulic तरीके से पलटता है। इससे दोनों दिशाओं में साफ furrow और controlled ploughing की जा सकती है।", officialPath: "/en/implements/hydraulic-reversible-plough/", imagePath: "/assets/images/region-1/products/implements/Hydraulic_Reverse_MB_Plough_large_e258933c708e0814da4b9fc43d361ff7224d9e90.png", applications: ["Precision ploughing", "दोनों दिशा में जुताई", "गहरी मिट्टी पलटना", "बड़े खेत"] }),
  implement({ slug: "post-hole-digger", name: "Post Hole Digger", category: "भूमि तैयारी", summary: "Post Hole Digger tractor PTO से auger घुमाकर जमीन में समान गहराई के गड्ढे बनाता है। बाग़ रोपण, fencing और poles लगाने में manual digging का समय कम किया जा सकता है।", officialPath: "/en/implements/post-hole-digger/", imagePath: "/assets/images/region-1/products/implements/Post_Hole_Digger_Implement_Green_system_John_Deere_large_846783987a8f7ffe0eb6a458908e85bedbf89fd6.png", applications: ["बाग़ रोपण", "Fencing", "Pole installation", "गड्ढा खुदाई"] }),
  implement({ slug: "combination-implement", name: "Combination Implement", category: "भूमि तैयारी", summary: "Combination Implement chisel plough, disc harrow और roller/leveler को एक solution में जोड़ता है। इसका उद्देश्य multiple passes कम करके seedbed preparation में समय और ईंधन बचाना है।", officialPath: "/en/implements/combination-implement/", imagePath: "/assets/images/region-1/products/implements/combination_implement_with_tractor_small_debfd4fbdebd086d39dc44d7acec469dcbec11b6.jpg", applications: ["एक-pass भूमि तैयारी", "Chiselling", "Disc harrowing", "Levelling"] }),
  implement({ slug: "super-seeder", name: "Super Seeder", category: "बुवाई एवं रोपाई", summary: "Super Seeder tilling, sowing और seedbed covering को एक pass में जोड़ता है। Combine से कटी धान की फसल के बाद गेहूँ की बुवाई में residue जलाए बिना काम करने के लिए यह उपयोगी समाधान है।", officialPath: "/en/implements/super-seeder/", imagePath: "/assets/images/region-1/products/implements/super_seeder_large_b00872fc7e3bb4589abe2574e2b636e1033834e0.png", applications: ["धान के बाद गेहूँ", "एक-pass बुवाई", "Residue management", "Seed placement"] }),
  implement({ slug: "seed-cum-fertilizer-drill", name: "Seed Cum Fertilizer Drill", category: "बुवाई एवं रोपाई", summary: "Seed Cum Fertilizer Drill बीज और उर्वरक को नियंत्रित दर और गहराई पर एक साथ डालने के लिए उपयोग होती है। इससे पंक्ति, spacing और input placement अधिक व्यवस्थित हो सकते हैं।", officialPath: "/en/implements/seed-cum-fertilizer-drill/", imagePath: "/assets/images/region-1/products/implements/seed_fertilizer_drill_large_eab835ad3c902260de299f6ea0530e6ccc87aa0a.png", applications: ["अनाज बुवाई", "बीज + उर्वरक placement", "पंक्ति निर्माण", "Input efficiency"] }),
  implement({ slug: "roto-seeder", name: "Roto Seeder", category: "बुवाई एवं रोपाई", summary: "Roto Seeder rotary tillage और sowing को एक साथ करके खेत के passes घटाता है। यह मिट्टी तैयार करते हुए बीज डालता है, जिससे समय और परिचालन लागत कम करने में मदद मिल सकती है।", officialPath: "/en/implements/roto-seeder/", imagePath: "/assets/images/region-1/products/implements/John_Deere_Roto_Seeder__Greensystem__Implement_large_ee1be813b435c3785b8c64e37dc4bd2b698875e8.png", applications: ["Tillage + sowing", "एक-pass संचालन", "गेहूँ/अनाज", "Seedbed preparation"] }),
  implement({ slug: "multi-crop-mechanical-planter", name: "Multi-Crop Mechanical Planter", category: "बुवाई एवं रोपाई", summary: "Multi-Crop Mechanical Planter row crops में बीज की spacing और fertilizer placement को अधिक सटीक बनाने के लिए उपयोग होता है। सही seed plate और setting फसल के अनुसार चुनी जाती है।", officialPath: "/en/implements/multi-crop-mechanical-planter/", imagePath: "/assets/images/region-1/products/implements/multi_crop_mechanical_planter_large_2b6fa117b8cd223c57a058824f896a275e7e30b2.png", applications: ["Row crops", "समान seed spacing", "उर्वरक placement", "मक्का/कपास जैसी फसलें"] }),
  implement({ slug: "front-hitch-front-pto", name: "Front Hitch & Front PTO (FHFPTO)", category: "बुवाई एवं रोपाई", summary: "FHFPTO tractor के आगे implement जोड़ने और उसे PTO power देने की व्यवस्था है। सही combination में आगे और पीछे के implements के साथ दो operations को एक pass में करने की संभावना बनती है।", officialPath: "/en/implements/front-hitch-front-pto/", imagePath: "/assets/images/region-1/products/front_hitch_front_pto_trem_small_c3df783da4c00ef1cf8e6c1548c4e152af4f620a.jpg", applications: ["Front-mounted implements", "एक-pass multiple operations", "समय बचत", "उन्नत mechanisation"] }),
  implement({ slug: "high-speed-planter", name: "High Speed Planter", category: "बुवाई एवं रोपाई", summary: "High Speed Planter row crops में अधिक working speed पर नियंत्रित seed spacing और placement के लिए बनाया गया है। सही field preparation और calibration इसके परिणाम के लिए जरूरी हैं।", officialPath: "/en/implements/high-speed-planter/", imagePath: "/assets/images/region-1/products/implements/5210_planter_standard_rearright_large_04ddf3e49fd15c1fdc6071437008172c9b41ef93.jpg", applications: ["Row-crop planting", "तेज बुवाई", "सटीक spacing", "बड़े क्षेत्र"] }),
  implement({ slug: "potato-planter", name: "GreenSystem™ Potato Planter", category: "बुवाई एवं रोपाई", summary: "Potato Planter आलू के seed tubers को पंक्ति, spacing और depth के अनुसार स्वचालित तरीके से बोने के लिए उपयोग होता है। बड़े आलू क्षेत्र में manual labour और समय कम करने में यह खास उपयोगी हो सकता है।", officialPath: "/en/implements/potato-planter/", imagePath: "/assets/images/region-1/products/implements/potato_planter_with_tractor_small_8b5898bd8c935f74775d19b29504b625a3cb76d6.jpg", applications: ["आलू बुवाई", "Seed-tuber placement", "समान spacing", "Commercial potato farming"] }),
  implement({ slug: "fertilizer-broadcaster", name: "GreenSystem™ Fertilizer Broadcaster", category: "फसल देखभाल", summary: "Fertilizer Broadcaster दानेदार उर्वरक को खेत में नियंत्रित चौड़ाई में फैलाने के लिए उपयोग होता है। सही calibration से समान application और कम समय में बड़े क्षेत्र का coverage मिल सकता है।", officialPath: "/en/implements/green-system-fertilizer-broadcaster/", imagePath: "/assets/images/region-1/products/implements/green-system-fertilizer-broadcaster/green_system_fertilizer_broadcaster_large_fced7be88181533f069efc90325153ce0d9a91e9.jpg", applications: ["उर्वरक फैलाव", "Top dressing", "समान coverage", "समय बचत"] }),
  implement({ slug: "potato-digger", name: "GreenSystem™ Potato Digger", category: "कटाई", summary: "Potato Digger मिट्टी के नीचे से आलू उठाकर soil separation के बाद सतह पर छोड़ता है। सही depth और speed के साथ बड़े आलू क्षेत्र की harvesting में labour और समय घटाया जा सकता है।", officialPath: "/en/implements/potato-digger/", imagePath: "/assets/images/region-1/products/implements/greensystem_potato_digger_large_bf75bfb929b8b60047d76bce7de46d2e31c9e88c.png", applications: ["आलू खुदाई", "Soil separation", "Commercial harvesting", "Labour reduction"] }),
  implement({ slug: "ratoon-manager", name: "Ratoon Manager", category: "अवशेष एवं प्रबंधन", summary: "Ratoon Manager गन्ने की कटाई के बाद बचे stubble और residue को संभालकर ratoon crop management में मदद करता है। इसका उपयोग अगली ratoon फसल के लिए field condition सुधारने में होता है।", officialPath: "/en/implements/ratoon-manager/", imagePath: "/assets/images/ratoon_manager_large_2e687d779c2534118b4c00cc8a61bf6039518b93.png", applications: ["गन्ना ratoon", "Stubble management", "Residue handling", "अगली फसल तैयारी"] }),
  implement({ slug: "square-baler-rotary-rake", name: "Square Baler & Rotary Rake", category: "अवशेष एवं प्रबंधन", summary: "Rotary Rake खेत में फैले straw को windrow में इकट्ठा करता है और Square Baler उसे संभालने योग्य चौकोर bales में दबाता है। यह residue collection, transport और storage को व्यवस्थित बनाता है।", officialPath: "/en/implements/rotary-rake/square-baler/", imagePath: "/assets/images/implements/rotary-rake/square-baler//implements_rotary_rake_small_1ef6e718500176d0d43e59788d9f6545059367cc.jpg", applications: ["Straw collection", "Windrow बनाना", "Square baling", "Residue transport/storage"] }),
  implement({ slug: "compact-round-baler", name: "Compact Round Baler", category: "अवशेष एवं प्रबंधन", summary: "Compact Round Baler खेत में बचे straw या residue को compact गोल bales में बनाता है। Paddy residue को इकट्ठा कर transport, feed या दूसरे उपयोग के लिए तैयार करने में यह मदद कर सकता है।", officialPath: "/en/implements/compact-round-baler/", imagePath: "/assets/images/baler/greensystem_round_baler_auto_twine_right_small_ec3c04c77fa4ba3b0e9c88356d9a18cc50e90e43.png", applications: ["Paddy residue", "Round baling", "Straw collection", "Transport और storage"] }),
  implement({ slug: "flail-mower", name: "Flail Mower", category: "अवशेष एवं प्रबंधन", summary: "Flail Mower vegetation और crop residue को छोटे टुकड़ों में काटकर खेत की सतह पर फैलाता है। इससे residue management, moisture conservation और अगली field operation की तैयारी में सहायता मिलती है।", officialPath: "/en/implements/flail-mower/", imagePath: "/assets/images/region-1/products/implements/Green_System_Flail_Mower_large_c6c930fe270b78d13bc200a09676e1f255c3d87b.png", applications: ["Residue shredding", "Vegetation cutting", "Moisture conservation", "Field cleaning"] }),
  implement({ slug: "mulcher", name: "Mulcher", category: "अवशेष एवं प्रबंधन", summary: "Mulcher कटे हुए पुआल और residue को छोटे टुकड़ों में काटकर समान रूप से फैलाता है। खेत में residue को natural organic matter की तरह मिलाने और burning से बचने में यह उपयोगी है।", officialPath: "/en/implements/mulcher/", imagePath: "/assets/images/John_Deere_Green_System_Mulcher_Implement_large_18550a71f3da5e8fcd5ae27694a052ac2afbcc32.png", applications: ["Paddy straw", "Residue chopping", "In-situ management", "Organic matter incorporation"] }),
  implement({ slug: "straw-reaper", name: "GreenSystem™ Straw Reaper", category: "अवशेष एवं प्रबंधन", summary: "Straw Reaper combine harvesting के बाद बचे stubble को काटता और straw को fine size में process करता है। इसका उपयोग खेत की सफाई और straw recovery दोनों उद्देश्यों में किया जाता है।", officialPath: "/en/implements/straw-reaper/", imagePath: "/assets/images/region-1/products/implements/straw_reaper_large_5630736b6bafb705f128db6b3da66cb938a3d7f7.jpg", applications: ["Combine के बाद stubble", "Straw recovery", "Fine chopping", "Field cleaning"] }),
];

const precision = (slug: string, name: string, category: string, summary: string, officialPath: string, imagePath: string, applications: string[], highlights: string[]): CatalogItem => ({
  kind: "precision",
  slug,
  name,
  eyebrow: "John Deere Precision Agriculture",
  category,
  description: summary,
  image: image(imagePath),
  officialUrl: hindiUrl(officialPath),
  specs: [["समाधान प्रकार", category], ["उपयोग", "Precision Agriculture"], ["डेटा/मार्गदर्शन", "उत्पाद अनुसार"], ["Compatibility", "कॉन्फ़िगरेशन अनुसार"]],
  applications,
  highlights,
});

export const precisionItems: CatalogItem[] = [
  precision("4240-universal-display", "4240 Universal Display", "डिस्प्ले", "4240 एक 8.4-inch smart touchscreen display है जो AutoTrac™ guidance, track error, implement status और machine information को ऑपरेटर के सामने दिखाता है।", "/en/precision-ag/guidance/4240-universal-display/", "/assets/images/precision-ag-technology/guidance/4240-universal-display/AutoTrac_Display_John_Deere_India_large_c35c513ed9010d1f4e3f07c7596cf1ebd7b565f0.png", ["AutoTrac™ monitoring", "Track error देखना", "Machine/implement data", "Guidance setup"], ["8.4-inch touchscreen", "धूप और dusty field conditions के लिए designed display", "Compatible guidance ecosystem के साथ उपयोग"]),
  precision("autotrac-universal-300", "AutoTrac™ Universal 300", "ऑटोमेटेड स्टीयरिंग", "AutoTrac™ Universal 300 steering wheel को नियंत्रित करके tractor को निर्धारित सीधी guidance line पर चलाने में मदद करता है। इसका उद्देश्य overlap, operator fatigue और अनावश्यक passes कम करना है।", "/en/precision-ag/guidance/auto-trac-300/", "/assets/images/precision-ag-technology/guidance/auto-trac-300//atu300new_large_01f2aec5b077e81e71b96ed2ad607c6b1239bb1c.jpg", ["सीधी लाइन guidance", "Planting और seeding", "Overlap reduction", "Operator fatigue कम करना"], ["Open-station tractors के लिए dust/moisture resistant design", "मौजूदा steering setup में retrofit application", "Display और receiver के साथ integrated use"]),
  precision("starfire-6000", "StarFire™ 6000 with SF3", "सैटेलाइट रिसीवर", "StarFire™ 6000 with SF3 satellite correction signal से tractor की position और guidance line तय करने वाला receiver है। Official product information के अनुसार यह pass-to-pass accuracy को लगभग 2 inch तक ला सकता है।", "/en/precision-ag/guidance/starfire-6000-receiver-with-sf3/", "/assets/images/precision-ag-technology/guidance/starfire-6000-receiver-with-sf3/StarFire_Reciever_John_Deere_India_large_b5a3f559f8457516eb29d940f451edcec8d41c58.png", ["Satellite guidance", "समान parallel rows", "Planting और seeding accuracy", "Pass-to-pass repeatability"], ["SF3 correction support", "Display और AutoTrac™ के साथ उपयोग", "Input overlap कम करने में सहायता"]),
  precision("autotrac-system", "John Deere AutoTrac™", "Guidance System", "AutoTrac™ display, receiver और automated steering को जोड़कर tractor को hands-free straight-path guidance देता है। इससे field operations में overlap कम करने और consistent rows बनाने में मदद मिलती है।", "/en/precision-ag/john-deere-autotrac/", "/assets/images/region-1/precision-ag-technology/John_Deere_AutoTrac_Precision_Ag.jpg", ["सीधी पंक्तियाँ", "Planting/seeding", "Fuel और input overlap reduction", "लंबे field runs"], ["4240 Display, ATU 300 और StarFire receiver का ecosystem", "Operator fatigue कम करने में सहायता", "High-value row crops में सटीक संचालन"]),
  precision("jdlink", "JDLink™", "Connected Machine", "JDLink™ tractor की location, alerts और machine health information को connected application तक पहुँचाने वाला telematics solution है। इससे owner या dealer दूर से machine status पर नजर रख सकते हैं।", "/en/precision-ag/jd-link/", "/assets/images/products/precision-ag/jdlink_1_large_52efa6cbbfb423756f9ea8fdd0d83d143c13e950.jpg", ["Location monitoring", "Machine alerts", "Health/status visibility", "Service planning"], ["Connected tractor monitoring", "Downtime कम करने के लिए early information", "Supported models और connectivity पर निर्भर"]),
  precision("operations-center", "John Deere Operations Center", "Farm Data Platform", "Operations Center खेत, machine और operation data को एक जगह देखने और analyse करने वाला digital platform है। इसका उद्देश्य field planning, documentation और informed decision-making को आसान बनाना है।", "/en/precision-ag/operations-center/", "/assets/images/products/precision-ag/operation_center_large_0f0f78dff1164aefafa48918b4e84d56a8f01a14.jpg", ["Field records", "Operation planning", "Machine data review", "Season comparison"], ["Web-based farm information view", "Compatible connected equipment से data", "Planning और documentation support"]),
  precision("greensystem-link-app", "GreenSystem™ Link App", "Mobile Application", "GreenSystem™ Link App tractor और implement के सही matching, setup और उपयोग से जुड़ी digital जानकारी देने वाला mobile solution है। किसान field operation के लिए उपयुक्त combination समझने में इसका उपयोग कर सकते हैं।", "/en/precision-ag/greensystem-link-app/", "/assets/images/products/precision-ag/greensystem_link1_large_7aa29b500c28fa55f87f4c108f6a89cfdfd37152.jpeg", ["Tractor-implement matching", "Setup guidance", "Product information", "Field-use support"], ["Mobile access", "GreenSystem™ implement ecosystem", "Compatibility और setup समझने में सहायता"]),
];

export const allCatalogItems: CatalogItem[] = [
  ...seriesItems,
  ...tractorItems,
  ...implementItems,
  ...precisionItems,
];

export const tractorGroups = seriesItems.map((series) => ({
  series,
  models: tractorItems.filter((item) => item.seriesSlug === series.slug),
}));

export const implementGroups = ["भूमि तैयारी", "बुवाई एवं रोपाई", "फसल देखभाल", "कटाई", "अवशेष एवं प्रबंधन"].map((category) => ({
  category,
  english: ({ "भूमि तैयारी": "Land preparation", "बुवाई एवं रोपाई": "Sowing & planting", "फसल देखभाल": "Crop care", "कटाई": "Harvest", "अवशेष एवं प्रबंधन": "Residue & farm management" } as Record<string, string>)[category],
  items: implementItems.filter((item) => item.category === category),
}));

export function getCatalogItem(slug: string) {
  return allCatalogItems.find((item) => item.slug === slug);
}

export function getRelatedItems(item: CatalogItem) {
  if (item.kind === "series") return tractorItems.filter((product) => product.seriesSlug === item.slug);
  if (item.kind === "tractor") return tractorItems.filter((product) => product.seriesSlug === item.seriesSlug && product.slug !== item.slug).slice(0, 4);
  if (item.kind === "implement") return implementItems.filter((product) => product.category === item.category && product.slug !== item.slug).slice(0, 4);
  return precisionItems.filter((product) => product.slug !== item.slug).slice(0, 4);
}

const video = (id: string, title: string, description: string): CatalogVideo => ({ id, title, description });

const officialVideos: Record<string, CatalogVideo> = {
  "d-series": video("Wjp3Lz8Njn0", "John Deere 5D GearPro Series | Power, Performance & Precision", "D Series और GearPro™ ट्रैक्टरों की बनावट, नियंत्रण और काम के विकल्प आधिकारिक walkthrough में देखें।"),
  "e-series": video("z1Oxc_VSLZo", "John Deere PowerTech™ – A Power Packed Tractor | Hindi", "PowerTech™ ट्रैक्टरों की शक्ति और भारी कृषि अनुप्रयोगों को हिंदी में समझें।"),
  "speciality-series": video("ltMafQ7rtCs", "Ultimate Small Tractor Buying Guide | Hindi", "Speciality ट्रैक्टर, बाग़ और संकरी पंक्तियों के लिए सही छोटा ट्रैक्टर चुनने की आधिकारिक हिंदी guide।"),
  "5m-series": video("7ML7Eix8ikE", "John Deere 5130M Tractor – Power, Comfort & Innovation", "130 HP 5M tractor की power, comfort और advanced features का आधिकारिक परिचय।"),
  "5105": video("vOSDj0xW3G4", "John Deere 5105 GearPro Tractor", "5105 GearPro के 2WD/4WD variants, working speeds और operator features देखें।"),
  "5105-gearpro": video("vOSDj0xW3G4", "John Deere 5105 GearPro Tractor", "5105 GearPro के 2WD/4WD variants, working speeds और operator features देखें।"),
  "5042d-gearpro-powerpro": video("5r3HTvNoKCo", "John Deere 5042D GearPro™", "5042D GearPro™ की 12F+4R गति, comfort और service features का official overview।"),
  "5045d-gearpro": video("SOBXTWhBnmU", "John Deere 5045D & 5050D GearPro™ LiftPro™", "5045D और 5050D में GearPro™ तथा बढ़ी हुई lifting क्षमता को वीडियो में समझें।"),
  "5045d-liftpro": video("SOBXTWhBnmU", "John Deere 5045D & 5050D GearPro™ LiftPro™", "5045D और 5050D में GearPro™ तथा बढ़ी हुई lifting क्षमता को वीडियो में समझें।"),
  "5050d": video("SOBXTWhBnmU", "John Deere 5045D & 5050D GearPro™ LiftPro™", "5045D और 5050D में GearPro™ तथा बढ़ी हुई lifting क्षमता को वीडियो में समझें।"),
  "5050d-gearpro": video("SOBXTWhBnmU", "John Deere 5045D & 5050D GearPro™ LiftPro™", "5045D और 5050D में GearPro™ तथा बढ़ी हुई lifting क्षमता को वीडियो में समझें।"),
  "5210-gearpro": video("Z1CbYOGa5SY", "John Deere 5210 PermaClutch™", "5210 में PermaClutch™ की durability, कम pedal effort और uptime benefits देखें।"),
  "5310-powertech": video("z1Oxc_VSLZo", "John Deere PowerTech™ – A Power Packed Tractor | Hindi", "PowerTech™ ट्रैक्टरों की शक्ति और heavy-duty applications को हिंदी में समझें।"),
  "5405-powertech": video("z1Oxc_VSLZo", "John Deere PowerTech™ – A Power Packed Tractor | Hindi", "PowerTech™ ट्रैक्टरों की शक्ति और heavy-duty applications को हिंदी में समझें।"),
  "5075e-powertech": video("z1Oxc_VSLZo", "John Deere PowerTech™ – A Power Packed Tractor | Hindi", "PowerTech™ ट्रैक्टरों की शक्ति और heavy-duty applications को हिंदी में समझें।"),
  "3028en": video("ltMafQ7rtCs", "Ultimate Small Tractor Buying Guide | Hindi", "बाग़, सब्ज़ी और speciality farming के लिए compact 4WD tractor selection देखें।"),
  "3036en": video("ltMafQ7rtCs", "Ultimate Small Tractor Buying Guide | Hindi", "3036EN सहित speciality tractors के उपयोग और selection को हिंदी में समझें।"),
  "3036e": video("ltMafQ7rtCs", "Ultimate Small Tractor Buying Guide | Hindi", "बाग़, सब्ज़ी और speciality farming के लिए compact 4WD tractor selection देखें।"),
  "5130m": video("7ML7Eix8ikE", "John Deere 5130M Tractor – Power, Comfort & Innovation", "5130M की 130 HP power, premium cabin और बड़े implements के लिए capabilities देखें।"),
  "multi-application-tillage-unit": video("EmM-_lL_GDc", "Multi-Application Tillage (MAT) | Tractor & Tarun | Hindi", "MAT से होने वाले अलग-अलग tillage और interculture कामों को step-by-step देखें।"),
  "rotary-tiller-series": video("VlWwwIRXiqQ", "How to use a Rotary Tiller | Tractor & Tarun | Hindi", "Rotary tiller के parts, depth, rotor speed और सही tractor matching को हिंदी में समझें।"),
  "mini-rotary-tiller": video("VlWwwIRXiqQ", "How to use a Rotary Tiller | Tractor & Tarun | Hindi", "Rotary tiller setup, working depth और सही operating speed को हिंदी में समझें।"),
  "paddy-special-rotary-tiller": video("VlWwwIRXiqQ", "How to use a Rotary Tiller | Tractor & Tarun | Hindi", "Rotary tiller के parts, depth और operation की जरूरी बातें देखें।"),
  "puddler-cum-leveler": video("ZJfhqXOtByY", "Puddler Leveler Benefits | John Deere India", "धान की wet-field preparation में puddling और leveling का practical उपयोग देखें।"),
  "power-harrow": video("B4KboxvVfi8", "Maximizing Farm Productivity with John Deere Power Harrow", "Power Harrow से fine seedbed और खेत की बेहतर तैयारी को official video में देखें।"),
  "high-speed-planter": video("Wb7N5zba5kQ", "High Speed Planter | Precision Farming | Hindi", "तेज और सटीक बुवाई के लिए High Speed Planter की working और benefits देखें।"),
  "potato-planter": video("noOV3JXWDcM", "Precision Automatic Potato Planter | Tractor & Tarun | Hindi", "आलू की सटीक दूरी, depth और planting productivity को हिंदी में समझें।"),
  "multi-crop-mechanical-planter": video("qUbMB78tVJA", "GreenSystem Multi-Crop Mechanical Planter", "अलग-अलग फसलों की row planting और machine operation का official overview देखें।"),
  "compact-round-baler": video("4pV-EkvsL4g", "Round Baler: Advantages and Applications | Hindi", "फसल अवशेष की baling, collection और farm management में उपयोग देखें।"),
  "square-baler-rotary-rake": video("Za2F-73BQC4", "GreenSystem Round Balers | Smart Straw Management", "Baler technology से straw और crop-residue management के benefits समझें।"),
  "straw-reaper": video("8V1k2vr-IYU", "Straw Reaper | Desh Ke Superhero", "गेहूँ की कटाई के बाद straw recovery में Straw Reaper का field use देखें।"),
  "4240-universal-display": video("hopOyiQ_0ko", "Mastering Precision Farming with John Deere AutoTrac | Hindi", "Display, receiver और AutoTrac™ guidance के साथ straight-row farming को समझें।"),
  "autotrac-universal-300": video("hopOyiQ_0ko", "Mastering Precision Farming with John Deere AutoTrac | Hindi", "AutoTrac™ steering और straight-line guidance का practical उपयोग देखें।"),
  "starfire-6000": video("hopOyiQ_0ko", "Mastering Precision Farming with John Deere AutoTrac | Hindi", "StarFire receiver, display और guidance system साथ कैसे काम करते हैं, समझें।"),
  "autotrac-system": video("hopOyiQ_0ko", "Mastering Precision Farming with John Deere AutoTrac | Hindi", "AutoTrac™ से straight rows, कम overlap और operator comfort के benefits देखें।"),
  "jdlink": video("3nfc_GJ3kCs", "John Deere JDLink Tractor Connectivity Technology", "JDLink™ में tractor location, machine health और Operations Center visibility देखें।"),
  "operations-center": video("6x7DKsZoA7E", "John Deere Connectivity Technology Series – Operations Center", "Operations Center App में fleet, machine data और alerts देखने का तरीका समझें।"),
  "greensystem-link-app": video("YQzuySpnXy8", "Upgrade Your Tractor with GreenSystem™ Link | Hindi", "GreenSystem™ Link connectivity और tractor monitoring को official Hindi video में देखें।"),
};

const implementOverview = video("MCGoobcJPPM", "Explore GreenSystem Implements for Your Farming Needs", "John Deere GreenSystem™ के अलग-अलग implements और पूरे crop cycle में उनके उपयोग का official overview देखें।");

export function getOfficialVideo(item: CatalogItem): CatalogVideo {
  const direct = officialVideos[item.slug];
  if (direct) return direct;
  if (item.kind === "tractor" && item.seriesSlug && officialVideos[item.seriesSlug]) return officialVideos[item.seriesSlug];
  if (item.kind === "implement") return implementOverview;
  return video("nGvbrWGKSqs", "John Deere India Product Launch 2026 | Hindi", "John Deere India के tractors, implements और precision technologies का नवीनतम official overview देखें।");
}
