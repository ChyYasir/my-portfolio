// about.js
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/yasir-7.png";

import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Yasir Rahman</title>
        <meta
          name="description"
          content="Yasir Rahman's biography and achievements in coding, passion, and innovation."
        />
        <meta name="author" content="Yasir Rahman" />
        <meta
          name="keywords"
          content="competitive programming, web development, MERN stack, tech enthusiast"
        />
        <meta
          property="og:description"
          content="Yasir Rahman's biography and achievements in coding, passion, and innovation."
        />
      </Head>
      <main className="flex flex-col items-center justify-center w-full dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={"Code. Passion. Innovation"}
            className={
              "mb-16 lg:text-6xl md:text-6xl sm:text-4xl sm:mb-8 text-center text-dark dark:text-light"
            }
          />
          <div className="grid grid-cols-8 gap-16 w-full sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Greetings! I am Yasir Rahman, currently pursuing a degree in
                Computer Science and Engineering at CUET. With a passion for
                competitive programming, I thrive on the thrill of algorithmic
                challenges. Beyond the realms of academia, I&apos;ve delved into
                the world of web development, crafting innovative solutions
                using the MERN stack.
              </p>
              <p className="font-medium mt-4">
                When I&apos;m not glued to my screen, you might catch me buzzing
                around like an excited bee—full of energy and maybe a tad
                quirky. My goal? To use tech superpowers for good, solving
                everyday problems and making the world a bit brighter, one
                coding challenge at a time!
              </p>
            </div>
            <div
              className="col-span-3 xl:col-span-4 relative h-max 
            rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light
            md:order-1 md:col-span-8"
            >
              <Image
                src={profilePic}
                alt="Yasir Rahman"
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>
            <div
              className="col-span-2 xl:col-span-8 xl:flex-row flex flex-col items-end justify-between
            xl:items-center md:order-3 md:col-span-8"
            >
              <div className="flex flex-col items-center justify-center ">
                <span className="inline-block text-5xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1500} />+
                </span>
                <h2
                  className="text-lg font-medium capitalize text-dark/75 dark:text-light/75
                md:text-base sm:text-sm xs:text-xs xl:text-center mt-2"
                >
                  {" "}
                  Problems Solved{" "}
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center xl:items-center">
                <span className="inline-block text-5xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2
                  className="text-lg font-medium capitalize text-dark/75 dark:text-light/75
                md:text-base sm:text-sm xs:text-xs xl:text-center mt-2"
                >
                  {" "}
                  Projects Completed{" "}
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <span className="inline-block text-5xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2
                  className="text-lg font-medium capitalize text-dark/75 dark:text-light/75
                md:text-base sm:text-sm xs:text-xs xl:text-center mt-2"
                >
                  {" "}
                  Years Experience{" "}
                </h2>
              </div>
            </div>
          </div>
          <Experience />
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default About;
