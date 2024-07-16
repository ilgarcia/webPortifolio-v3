import type { Metadata } from "next";
import { Source_Sans_3, Fira_Code, Sriracha } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";

import Header from "@/components/layouts/header/Header";

import "./globals.css";
import Loader from "@/components/layouts/Loader";

export const source = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--source-font",
});

export const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--fira-font",
  preload: true,
});

export const sriracha = Sriracha({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--Sriracha-font",
  preload: true,
});

export const metadata: Metadata = {
  title: "ilgarcia",
  description:
    "Hi, my name is Igor Lima Garcia i'm a software engineer specializing in building exceptional and practical digital experiences and this is my portfolio",
  applicationName: "Portfolio",

  openGraph: {
    type: "website",
    url: "https://www.ilgarcia.com/",
    title: "ilgarcia",
    description:
      "Hi, my name is Igor Lima Garcia i'm a software engineer specializing in building exceptional and practical digital experiences and this is my portfolio",
    siteName: "Portfolio website",
    // images: "og-image.png",
  },
  authors: {
    name: "Igor Lima Garcia",
    url: "https://www.linkedin.com/in/ilgarcia/",
  },
  generator: "NextJs",
  keywords: [
    "ilgarcia, NextJS",
    "Portfolio",
    "Web Developer",
    "Frontend",
    "Backend",
    "Fullstack",
    "JavaScript",
    "HTML",
    "CSS",
  ],
  creator: "Igor Lima Garcia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${source.className} ${firaCode.variable} ${sriracha.variable}`}
      >
        <Loader />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
