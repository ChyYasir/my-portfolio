import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full border-solid border-t-2 border-dark font-medium text-lg dark:text-light
    sm:text-base"
    >
      <Layout
        className="py-8 flex items-center justify-between 
      lg:flex-col lg:py-6 "
      >
        <span>© {new Date().getFullYear()}. All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Made with ❤️ by &nbsp;
          <Link
            href={"https://www.linkedin.com/in/yasir-rahman-chy/"}
            className="underline underline-offset-2"
            target="_blank"
          >
            Yasir Rahman
          </Link>{" "}
        </div>
        <div className="flex flex-col text-center">
          <span className="mb-2">
            If you have any queries or project in mind
          </span>
          <Link
            href={"mailto:chyyasir2000@gmail.com"}
            target="_blank"
            className="underline underline-offset-2 "
          >
            Say, Hello! 👋
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
