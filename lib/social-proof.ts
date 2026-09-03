// Social proof is the biggest single gap on this site, and it is also the one
// place where inventing content would be actively harmful — fabricated customer
// quotes are fake reviews, and they would be published under the dealer's name.
//
// So nothing here is invented. Every field starts empty or null, and each section
// renders ONLY when real data is present. Fill these in with genuine details and
// the sections appear automatically; leave them and the site simply omits them.

export type Testimonial = {
  /** The customer's own words, in their language. */
  quote: string;
  name: string;
  /** Village or kasba — local recognition is the trust signal in this market. */
  village: string;
  /** Optional: which tractor they bought. */
  model?: string;
};

/**
 * TODO(owner): replace each null with the real figure. A null hides that tile.
 * Do not estimate — a wrong number is worse than no number.
 */
export const dealerStats: {
  yearsInBusiness: number | null;
  farmersServed: number | null;
  villagesCovered: number | null;
} = {
  yearsInBusiness: null,
  farmersServed: null,
  villagesCovered: null,
};

/**
 * TODO(owner): add real customer quotes with permission to publish.
 * While this array is empty the testimonial section does not render at all.
 */
export const testimonials: Testimonial[] = [];

/** Claims that are already true and verifiable — safe to show today. */
export const verifiedFacts = [
  { label: "अधिकृत John Deere डीलर", detail: "सेल्स, सर्विस और जेन्युइन पार्ट्स" },
  { label: "फ़िरोज़ाबाद ज़िला", detail: "पूरे ज़िले में सेवा क्षेत्र" },
  { label: "सीधे WhatsApp सहायता", detail: "70885 01000 पर तुरंत जवाब" },
];

/** Real photographs already in /public — genuine, not stock imagery. */
export const activityPhotos = [
  { src: "/sb-auto-showroom.jpg", caption: "शोरूम में John Deere 5M ट्रैक्टर" },
  { src: "/sb-auto-gathering.jpg", caption: "किसानों के बीच John Deere की प्रदर्शनी" },
  { src: "/sb-auto-field.jpg", caption: "खेत में काम करता John Deere 5045 D" },
  { src: "/sb-auto-loader.jpg", caption: "Loader अटैचमेंट के साथ John Deere" },
];

export const hasStats = Object.values(dealerStats).some((value) => value !== null);
export const hasTestimonials = testimonials.length > 0;
