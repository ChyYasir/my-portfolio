"use client";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import BUET2022 from "../../../public/images/achievements/BUET(1).jpg";
import ICPC2022 from "../../../public/images/achievements/ICPC-22.jpg";
import ICPC2023 from "../../../public/images/achievements/ICPC-23.jpg";
import EDU from "../../../public/images/achievements/EDU.jpeg";
import SEC from "../../../public/images/achievements/SEC.jpeg";
import CUET_IJC from "../../../public/images/achievements/CUET_IJC.jpg";
import { motion } from "framer-motion";

const FrameImage = motion(Image);

const Achievement = ({ img, title, summary, teamName, rank }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl">
      <div className="inline-block overflow-hidden rounded-lg">
        <FrameImage
          src={img}
          alt={title}
          className="w-full h-auto "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <h2 className="text-2xl font-bold capitalize text-dark/75 dark:text-light/75 hover:underline xs:text-lg">
        {title}
      </h2>
      <h3 className="text-xl font-semibold capitalize text-primary dark:text-primaryDark">
        Rank : {rank}
      </h3>
      {teamName ? (
        <span className="text-lg font-semibold text-dark dark:text-light">
          Team Name: {teamName}
        </span>
      ) : (
        " "
      )}
      <p className="text-sm mb-2 text-dark dark:text-light">{summary}</p>
    </li>
  );
};

const Achievements = () => {
  return (
    <>
      <Head>
        <title>Yasir | Achievements</title>
        <meta name="description" content="Achievements" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full mb-16 overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text={"Achieve. Inspire. Repeat"}
            className={"mb-16 lg:!text-6xl md:!text-6xl sm:!text-4xl sm:mb-8"}
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <Achievement
              img={ICPC2022}
              title={"ICPC Asia Dhaka Regional Contest 2021-22"}
              summary={
                "It marked my inaugural participation in the ICPC, during which our team successfully tackled five problems. I personally contributed by solving a task that involved a combination of dynamic programming and number theory. The overall contest proved to be enjoyable, and we wrapped up the day with friendly matches of chess and table tennis."
              }
              teamName={"CUET_AugniPaksha"}
              rank={"48"}
            />
            <Achievement
              img={ICPC2023}
              title={"ICPC Asia Dhaka Regional Contest 2022-23"}
              summary={
                "My second participation in the ICPC took place at Green University, Bangladesh. Our team successfully tackled four problems, and although we came close to solving another, we fell short. Despite that, the overall experience was highly positive. I had the opportunity to meet and engage in lengthy conversations with Sahjalal Shohag vai, which added to the enjoyment of the event."
              }
              teamName={"CUET_Infinite_Tsukuyomi"}
              rank={"40"}
            />
            <Achievement
              img={BUET2022}
              title={"BUET Inter University Programming Contest"}
              summary={
                "It was a great experience to be a part of this contest. We were able to solve 3 problems. The problem set was quite good."
              }
              teamName={"CUET_AugniPaksha"}
              rank={"43"}
            />
            <Achievement
              img={EDU}
              title={"EDU Engineering Day Inter University Programming Contest"}
              summary={
                "Finally, we clinched the championship in an IUPC, marking an unforgettable experience. Our team successfully solved 7 out of 10 problems, with Asad and Tanzim delivering outstanding performances. The thrilling moment came when we solved the last problem just 10 minutes before the contest concluded, securing our championship title. Our mentor, Billal Sir, expressed great joy and satisfaction with our team's performance."
              }
              teamName={"CUET_AugniPaksha"}
              rank={"1"}
            />
            <Achievement
              img={SEC}
              title={"SEC Inter University Junior Programming Contest, 2022"}
              summary={
                "In my second IUPC, an inter-university junior programming contest, hosted by Sylhet Engineering College, the overall experience was truly remarkable. The contest was efficiently organized, and our team successfully solved 6 problems, earning us the 11th position. Although we came close to solving another problem, the entire event was a rewarding and enriching experience."
              }
              teamName={"CUET_AugniPaksha"}
              rank={"11"}
            />
            <Achievement
              img={CUET_IJC}
              title={"CUET Intra University Junior Programming Contest"}
              summary={
                "Participating in an intra-junior programming contest at CUET was a fantastic experience, engaging with my fellow CUETians. I secured the position of the second runner-up in this competition."
              }
              rank={"3"}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Achievements;
