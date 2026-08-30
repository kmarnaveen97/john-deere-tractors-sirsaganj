export const whatsappNumber = "917088501000";

type WhatsAppOptions = {
  interestDetails?: string[];
  customerDetails?: string[];
  locationLink?: string;
  pageUrl?: string;
};

export function getCurrentLocationLink(): Promise<string | null> {
  if (typeof navigator === "undefined" || !navigator.geolocation) return Promise.resolve(null);

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve(`https://maps.google.com/?q=${coords.latitude.toFixed(6)},${coords.longitude.toFixed(6)}`);
      },
      () => resolve(null),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 },
    );
  });
}

export function whatsappUrl(subject = "सामान्य enquiry", options: WhatsAppOptions = {}) {
  const interestDetails = options.interestDetails?.filter(Boolean) ?? [];
  const customerDetails = options.customerDetails?.filter(Boolean) ?? [];
  const message = [
    "नमस्ते S.B. Auto Sales & Services, Sirsaganj,",
    "",
    "नई वेबसाइट enquiry:",
    `Enquiry: ${subject || "सामान्य enquiry"}`,
    ...(interestDetails.length ? ["", "रुचि वाले मॉडल / उत्पाद की details:", ...interestDetails] : []),
    ...(customerDetails.length ? ["", ...customerDetails] : ["", "नाम:", "गाँव / स्थान:", "तहसील / जिला:", "मेरी आवश्यकता:"]),
    "",
    `Current location: ${options.locationLink || "साझा नहीं की गई"}`,
    ...(options.pageUrl ? [`Source page: ${options.pageUrl}`] : []),
  ].join("\n");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
