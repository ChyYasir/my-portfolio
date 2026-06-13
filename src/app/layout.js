import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./global.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Yasir Rahman",
    template: "%s · Yasir Rahman",
  },
  description:
    "Software engineer, adjunct lecturer at IIUC Chittagong, and published researcher. Building data systems, teaching, and research.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`dark ${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.remove('dark');else document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-sans">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
