import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DiscordIcon,
  FacebookIcon,
  GithubIcon,
  GmailIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  // console.log(router);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute -bottom-0.5 left-0 group-hover:w-full 
        transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute -bottom-0.5 left-0 group-hover:w-full 
        transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"} dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};
const thresholdWidthForMobile = 1023;
const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsopen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const handleClick = () => {
    setIsopen(!isOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= thresholdWidthForMobile);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <header
        className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light
      relative z-10 lg:px-16 md:px-12 sm:px-8"
      >
        <button
          className="lg:flex flex-col justify-center items-center hidden"
          onClick={handleClick}
        >
          <span
            className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>

        <div className="w-full flex justify-between items-center lg:hidden">
          <nav>
            <CustomLink href="/" title="Home" className="mr-4" />
            <CustomLink href="/about" title="About" className="mx-4 " />
            <CustomLink href="/projects" title="Projects" className="mx-4" />
            <CustomLink
              href="/achievements"
              title="Achievements"
              className="mx-4"
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap">
            <motion.a
              href="https://www.linkedin.com/in/yasir-rahman-chy/"
              target={"_blank"}
              className="w-8 mr-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/ChyYasir"
              target={"_blank"}
              className="w-7 mx-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://discord.com/users/758387316103446599"
              target={"_blank"}
              className="w-7 mx-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <DiscordIcon />
            </motion.a>

            <motion.a
              href="https://www.facebook.com/profile.php?id=100042767077083"
              target={"_blank"}
              className="w-7 mx-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FacebookIcon />
            </motion.a>
            <motion.a
              href={"mailto:chyyasir2000@gmail.com"}
              target={"_blank"}
              className="w-7 mx-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GmailIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              className={`w-6 ml-5 text-2xl flex items-center justify-center rounded-full p-1
            `}
            >
              {mode === "dark" ? "☀️" : "🌙"}
            </button>
          </nav>
        </div>

        {/* for mobile  */}

        {isOpen && isMobile ? (
          <motion.div
            className="min-w-[70vw] flex flex-col justify-between items-center fixed z-30 top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 100 }}
          >
            <nav className="flex flex-col items-center justify-center">
              <CustomMobileLink
                href="/"
                title="Home"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/about"
                title="About"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/projects"
                title="Projects"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/achievements"
                title="Achievements"
                className=""
                toggle={handleClick}
              />
            </nav>

            <nav className="flex items-center justify-center flex-wrap mt-2">
              <motion.a
                href="https://www.linkedin.com/in/yasir-rahman-chy/"
                target={"_blank"}
                className="w-8 mr-3"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a
                href="https://github.com/ChyYasir"
                target={"_blank"}
                className="w-7 mx-3 dark:text-dark text-light"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                href="https://discord.com/users/758387316103446599"
                target={"_blank"}
                className="w-7 mx-3"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <DiscordIcon />
              </motion.a>

              <motion.a
                href="https://www.facebook.com/profile.php?id=100042767077083"
                target={"_blank"}
                className="w-7 mx-3"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FacebookIcon />
              </motion.a>
              <motion.a
                href={"mailto:chyyasir2000@gmail.com"}
                target={"_blank"}
                className="w-7 mx-3"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <GmailIcon />
              </motion.a>
              <button
                onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                className={`w-6 ml-4 text-2xl flex items-center justify-center rounded-full p-1
            `}
              >
                {mode === "dark" ? "☀️" : "🌙"}
              </button>
            </nav>
          </motion.div>
        ) : null}

        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <Logo />
        </div>
      </header>
    </>
  );
};

export default NavBar;
