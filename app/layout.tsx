import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shuvashis Sarker | AI researcher",
  description: "AI researcher and developer specializing in Machine Learning and Deep Learning, passionate about creating practical AI solutions and teaching as an Adjunct Lecturer.",
  //metadataBase: new URL("https://achyutkatiyar.com"),
  
  // Basic metadata
  applicationName: "Shuvashis Sarker Portfolio",
  authors: [{ name: "Shuvashis Sarker" }],
  keywords: ["AI Researcher",
  "Machine Learning",
  "Deep Learning",
"Academic Mentor"],
  
  openGraph: {
    type: "website",
    //url: "https://achyutkatiyar.com",
    title: "Shuvashis Sarker | Full Stack Developer",
    description: "Full Stack Developer & Blockchain and Machine Learning Enthusiast with expertise in Next.js, React, and blockchain technologies.",
    siteName: "Shuvashis Sarker",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shuvashis Sarker - Portfolio",
      },
    ],
  },
  
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
  
  alternates: {
    canonical: "https://achyutkatiyar.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}