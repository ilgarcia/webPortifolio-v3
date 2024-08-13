import type { Metadata } from "next";
import { Source_Sans_3, Fira_Code, Sriracha } from "next/font/google";

import { ThemeProvider } from "@/providers/ThemeProvider";

import Loader from "@/components/layouts/loader/Loader";
import Header from "@/components/layouts/header/Header";
import Footer from "@/components/layouts/footer/Footer";

import "@/styles/globals.css";
import "@/styles/variables.css";

export const source = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--source-font",
});

export const firaCode = Fira_Code({
  weight: ["300", "400", "500"],
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
  metadataBase: new URL("https://www.ilgarcia.com"),
  title: "ilgarcia",
  description:
    "Hi, my name is Igor Lima Garcia i'm a software engineer specializing in building exceptional and practical digital experiences and this is my portfolio",

  // Basic metadata
  applicationName: "Portfolio",
  authors: {
    name: "Igor Lima Garcia",
    url: "https://www.linkedin.com/in/ilgarcia/",
  },
  generator: "Next.js",
  keywords: ["ilgarcia", "next.js", "portfolio", "fullstack", "javascript"],
  creator: "Igor Lima Garcia",

  // Open Graph metadata
  openGraph: {
    title: "ilgarcia",
    description:
      "Hi, my name is Igor Lima Garcia i'm a software engineer specializing in building exceptional and practical digital experiences and this is my portfolio",
    url: "https://www.ilgarcia.com/",
    siteName: "Ilgarcia Portfolio",
    locale: "en_Us",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ilgarcia Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ilgarcia Portfolio",
    description:
      "Hi, my name is Igor Lima Garcia i'm a software engineer specializing in building exceptional and practical digital experiences and this is my portfolio",
    creator: "@ilgarcia",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ilgarcia Portfolio",
      },
    ],
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // // Verification for search engines
  // // You can get these values from the respective
  // // search engines when you submit your site for
  // // indexing
  // verification: {
  //   google: 'google-site-verification=1234567890',
  //   yandex: 'yandex-verification=1234567890',
  //   yahoo: 'yahoo-site-verification=1234567890',
  // },

  // // Alternate languages
  // alternates: {
  //   canonical: 'https://myawesomewebsite.com',
  //   languages: {
  //     'en-US': 'https://myawesomewebsite.com/en-US',
  //     'es-ES': 'https://myawesomewebsite.com/es-ES',
  //   },
  // },

  // // Manifest
  // manifest: '/site.webmanifest',

  // // App-specific metadata
  // appleWebApp: {
  //   capable: true,
  //   title: 'My Awesome App',
  //   statusBarStyle: 'black-translucent',
  // },

  // // Robots directives
  // robots: {
  //   index: true,
  //   follow: true,
  //   nocache: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     noimageindex: true,
  //     'max-video-preview': -1,
  //     'max-image-preview': 'large',
  //     'max-snippet': -1,
  //   },
  // },

  // // Format detection
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
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
          disableTransitionOnChange
        >
          <div className="relative">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
