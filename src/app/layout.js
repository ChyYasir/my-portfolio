import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./global.css";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      className={`dark ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
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
        <Sidebar />
        <div className="lg:pl-[336px]">
          <main className="min-h-screen pt-16 lg:pt-0">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
