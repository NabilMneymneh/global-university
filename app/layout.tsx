import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ToastProvider } from "@/components/providers/ToastProvider";

export const metadata: Metadata = {
  title: "Global University | Leading Higher Education in Lebanon",
  description: "Global University is a premier institution of higher education in Lebanon, offering diverse academic programs, world-class facilities, and a commitment to excellence.",
  keywords: ["Global University", "Lebanon", "Higher Education", "University", "Academic Programs"],
  authors: [{ name: "Global University" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gu.edu.lb",
    siteName: "Global University",
    title: "Global University | Leading Higher Education in Lebanon",
    description: "Global University is a premier institution of higher education in Lebanon.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global University | Leading Higher Education in Lebanon",
    description: "Global University is a premier institution of higher education in Lebanon.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Global University",
    url: "https://gu.edu.lb",
    logo: "https://gu.edu.lb/logo.png",
    description: "A premier institution of higher education in Lebanon, committed to excellence in teaching, research, and community engagement.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "LB",
      addressLocality: "Beirut",
    },
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}

