import "./css/style.css";

import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title:
    "SpotMySite | Property Management & NRI Services in Andhra Pradesh & Telangana",
  description:
    "Reliable Property Management Services for NRIs & Absentee Owners in Andhra Pradesh & Telangana. Inspections, Land Checks, Fencing, Loans & Legal Support.",
  icons: {
    icon: "/favicon.ico", // or "/icon.png"
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-HCZKVX7T4F"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HCZKVX7T4F');

        `}
      </Script>
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
