import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://eldarcodes.com"),
  title: {
    default: "Eldar Mirzabekov",
    template: "%s | Eldar Mirzabekov",
  },
  description: "Developer and creator.",
  openGraph: {
    title: "Eldar Mirzabekov",
    description: "Developer and creator.",
    url: "https://eldarcodes.com",
    siteName: "Eldar Mirzabekov",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Eldar Mirzabekov",
    card: "summary_large_image",
  },

  // @TODO: Add verification keys
  // verification: {
  //   google: "",
  //   yandex: "",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
