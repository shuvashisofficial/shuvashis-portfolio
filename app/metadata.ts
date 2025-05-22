// app/metadata.ts
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shuvashis Sarker | Portfolio",
  description: "AI researcher & Machine Learning Enthusiast",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", type: "image/png" },
  },
};