import type { Metadata, Viewport } from "next";
import { PwaInstaller } from "@/components/pwa-installer";
import "./globals.css";

export const metadata: Metadata = {
  title: "S.B. Auto Sales & Services | John Deere ट्रैक्टर Sirsaganj",
  description:
    "John Deere India के ट्रैक्टर, GreenSystem इम्प्लीमेंट और प्रिसीजन एग्रीकल्चर उत्पादों की पूरी जानकारी हिंदी में। S.B. Auto Sales & Services, Etawah Road, Sirsaganj: 7088501000.",
  applicationName: "S.B. Auto Sirsaganj",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "S.B. Auto",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/pwa-icon-192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#063b1d",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body>
        {children}
        <PwaInstaller />
      </body>
    </html>
  );
}
