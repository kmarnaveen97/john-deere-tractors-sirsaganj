import { tractorItems, type CatalogItem } from "@/lib/catalog";

// A guided path exists because the full grid shows 16 models at once, and broad
// choice sets suppress decisions rather than help them. This narrows to three.
// It is a starting suggestion, not a sizing authority — final fit depends on soil,
// implements and budget, which is why every result routes to the showroom.

export type FarmSize = "small" | "medium" | "large" | "xlarge";
export type MainWork = "general" | "haulage" | "heavy" | "narrow";

export const farmSizes: { value: FarmSize; label: string; hint: string }[] = [
  { value: "small", label: "5 बीघा तक", hint: "छोटी जोत" },
  { value: "medium", label: "5 – 15 बीघा", hint: "मध्यम जोत" },
  { value: "large", label: "15 – 40 बीघा", hint: "बड़ी जोत" },
  { value: "xlarge", label: "40 बीघा से ज्यादा", hint: "कमर्शियल खेती" },
];

export const mainWorks: { value: MainWork; label: string; hint: string }[] = [
  { value: "general", label: "सामान्य जुताई-बुवाई", hint: "कल्टीवेटर, रोटावेटर, सीड ड्रिल" },
  { value: "haulage", label: "खेती के साथ ढुलाई", hint: "ट्रॉली और ढुलाई का काम भी" },
  { value: "heavy", label: "आलू, गन्ना, भारी इम्प्लीमेंट", hint: "प्लांटर, डिगर, भारी प्लाऊ" },
  { value: "narrow", label: "बाग़ / सब्ज़ी / संकरी जगह", hint: "इंटरकल्चर और छोटे मोड़" },
];

// Target HP per farm size. Stated directly rather than derived from a range
// midpoint, which the 130 HP model skewed badly at the top end.
const sizeTarget: Record<FarmSize, number> = {
  small: 34,
  medium: 45,
  large: 55,
  xlarge: 78,
};

/** Work type nudges the window rather than replacing it. */
const workShift: Record<MainWork, number> = {
  general: 0,
  haulage: 3,
  heavy: 6,
  narrow: -6,
};

function powerOf(item: CatalogItem) {
  return Number.parseInt(item.specs[0][1], 10) || 0;
}

export function recommendTractors(size: FarmSize, work: MainWork, limit = 3): CatalogItem[] {
  const target = sizeTarget[size] + workShift[work];

  // Orchard and vegetable rows need a narrow tractor whatever the holding size,
  // so this restricts to the Speciality series rather than just low-HP models —
  // a standard-width 45 HP tractor does not fit between the rows.
  const pool = work === "narrow"
    ? tractorItems.filter((item) => item.seriesSlug === "speciality-series")
    : tractorItems;

  // Rank by distance from the adjusted target so the closest fits surface first.
  return [...pool]
    .sort((a, b) => Math.abs(powerOf(a) - target) - Math.abs(powerOf(b) - target))
    .slice(0, limit);
}

export function recommendationReason(size: FarmSize, work: MainWork) {
  const sizeLabel = farmSizes.find((item) => item.value === size)?.label ?? "";
  const workLabel = mainWorks.find((item) => item.value === work)?.label ?? "";
  return `${sizeLabel} और "${workLabel}" के लिए आमतौर पर यह पावर रेंज सबसे उपयुक्त रहती है।`;
}
