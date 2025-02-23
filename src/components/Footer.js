import React from "react";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="bg-black/80 border-t border-green-500/30 py-4">
    <div className="max-w-4xl mx-auto text-center">
      <motion.p
        className="text-green-400 font-mono text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {">"} Hacked by Yasir Rahman © {new Date().getFullYear()}
        <motion.span
          className="inline-block ml-2"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          _
        </motion.span>
      </motion.p>
    </div>
  </footer>
);

export default Footer;
