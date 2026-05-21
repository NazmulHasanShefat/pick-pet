import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/context/Providers";
import Navbar from "@/components/header/Navbar";
import { Toast } from "@heroui/react";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "pickpet platform - Home",
  description: "Pet Adoption Platform to adopt you new pet",
};

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Providers>
          <Navbar />
           <Toast.Provider placement="top end"/>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
