import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark text-light p-4">
      <div className="flex justify-between items-center">
        <span>
          © {new Date().getFullYear()} Yasir Rahman. All Rights Reserved.
        </span>
        <div className="flex space-x-4">
          <Link href="https://github.com/ChyYasir" className="text-primary">
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/yasir-rahman-chy/"
            className="text-primary"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
