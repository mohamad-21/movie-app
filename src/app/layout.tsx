import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/src/components/Header";
import { Suspense } from "react";
import Loading from "@/src/components/Loading";
import Footer from "@/src/components/Footer";

export const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
export const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "STREAM X - Streaming Platform",
    template: "%s | STREAM X - Streaming Platform",
  },
  description: "Movies and series platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} ${geistMono.className} bg-background text-foreground`}
      >
        <Suspense
          fallback={
            <div className="fixed inset-0 flex items-center justify-center">
              <Loading />
            </div>
          }
        >
          <Header />
          <main className="min-h-[70dvh] grid grid-cols-1">{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
