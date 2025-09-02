import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/Components/Home/ResponsiveNav";
import Provider from "@/Components/HOC/Provider";
import Footer from "@/Components/Home/Footer/Footer";
import ScrolltoTop from "@/Components/Helper/ScrolltoTop";

const font=Manrope({
    weight: ["300","400", "500", "600", "700","800"],
    subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Food landing page",
  description: "Generated using next.js and tailwind css",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased`}
      >
        <Provider>
          <ResponsiveNav/>
          {children}
          <Footer/>
          <ScrolltoTop/>
        </Provider>
      </body>
    </html>
  );
}
