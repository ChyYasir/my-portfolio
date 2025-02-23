"use client";
import "@/app/global.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import NetworkBackground from "@/components/NetworkBackground";
import { Terminal, Shield, Cpu, Database, Code, Server } from "lucide-react";
import MatrixRain from "@/components/MatrixRain";

// export const metadata = {
//   title: "Yasir Rahman",
//   description:
//     "Yasir Rahman - Tech Enthusiast. Solving life's challenges through code.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
