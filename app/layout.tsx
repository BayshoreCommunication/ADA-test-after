import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import localFont from "next/font/local";

// TAN ANGLETON (Headline)
const tanAngleton = localFont({
  src: "./fonts/TAN - Angleton Regular.ttf",
  variable: "--font-heading",
  display: "swap",
});

// CANVA SANS (Body + Subheadline)
const canvaSans = localFont({
  src: [
    {
      path: "./fonts/canva-sans-regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Medical Weight Loss",
  description: "Medical Weight Loss website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${tanAngleton.variable} ${canvaSans.variable}`}
    >
      <body>
        <Script id="acsb-widget" strategy="afterInteractive">
          {`(function(){ var s = document.createElement('script'); var h = document.querySelector('head') || document.body; s.src = 'https://acsbapp.com/apps/app/dist/js/app.js'; s.async = true; s.onload = function(){ acsbJS.init(); }; h.appendChild(s); })();`}
        </Script>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
