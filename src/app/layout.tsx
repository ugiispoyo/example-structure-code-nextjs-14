import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

import App from ".";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Example Code Nextjs 14",
  description: "Example Code Nextjs 14",
  icons: "./triagle.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins  bg-bodybg`}>
        <App>{children}</App>
      </body>
    </html>
  );
}
