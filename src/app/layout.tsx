import type { Metadata } from "next";
import { Manrope, Urbanist } from "next/font/google";
import "./globals.css";
import "./icons.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edunex",
  description: "Education LMS and Online course template",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${urbanist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
