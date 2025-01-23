import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "../public/fonts/Inter/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },

    {
      path: "../public/fonts/Inter/Inter-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],

  variable: "--font-inter",
});

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
    <html lang="en" className={inter.variable}>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KX7ND3XG90"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KX7ND3XG90');
          `,
          }}
        ></script>
      </head>
      <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        {children}

        <Analytics />
      </body>
    </html>
  );
}
