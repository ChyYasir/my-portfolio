"use client";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../../public/images/profile/yasir-7.png";
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
        <title>Yasir | About</title>
        <meta name="description" content="About Yasir Rahman" />
      </Head>
      <main className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto space-y-12">
          <section className="text-center space-y-8 py-12">
            <h1 className="text-6xl font-bold font-mono text-green-400">
              About Me
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1">
                <Image
                  src={profilePic}
                  alt="Yasir Rahman"
                  className="w-full h-auto rounded-2xl"
                  priority
                />
              </div>
              <div className="col-span-1 flex flex-col justify-center">
                <p className="text-gray-300 text-lg">
                  I am a Senior Software Engineer with a passion for building
                  scalable applications and leading tech innovations. With
                  experience in various programming languages and frameworks, I
                  strive to optimize performance and mentor future engineers.
                </p>
                <div className="flex flex-col items-center mt-4">
                  <span className="inline-block text-5xl font-bold">
                    <AnimatedNumbers value={1500} />+
                  </span>
                  <h2 className="text-lg font-medium capitalize text-dark/75 dark:text-light/75 mt-2">
                    Problems Solved
                  </h2>
                </div>
                <div className="flex flex-col items-center mt-4">
                  <span className="inline-block text-5xl font-bold">
                    <AnimatedNumbers value={6} />+
                  </span>
                  <h2 className="text-lg font-medium capitalize text-dark/75 dark:text-light/75 mt-2">
                    Projects Completed
                  </h2>
                </div>
                <div className="flex flex-col items-center mt-4">
                  <span className="inline-block text-5xl font-bold">
                    <AnimatedNumbers value={2} />+
                  </span>
                  <h2 className="text-lg font-medium capitalize text-dark/75 dark:text-light/75 mt-2">
                    Years Experience
                  </h2>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <Experience />

          {/* Skills Section */}
          <Skills />
        </div>
      </main>
    </>
  );
};

export default About;
