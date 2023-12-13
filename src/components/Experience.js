import { useScroll } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, contestName, team }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col  justify-between
      md:w-[80%]"
    >
      <LiIcon referecne={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3
          className="capitalize font-bold text-2xl text-primary dark:text-light
        sm:text-xl xs:text-lg "
        >
          {contestName}
        </h3>
        <h4 className="capitalize font-semibold xs:text-sm">
          Position: {position}
        </h4>
        <span className="capitalize font-medium text-dark dark:text-light md:text-sm">
          Team Name: {team}
        </span>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-16">
      <h2
        className="font-bold text-8xl mb-32 w-full text-center text-dark dark:text-light
      md:text-6xl xs:text-4xl md:mb-16"
      >
        ICPC/IUPC Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-white
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            contestName={"ICPC Asia Dhaka Regional Contest 2022-23"}
            position="42nd"
            team="CUET Infinite Tsukuyomi"
          />
          <Details
            contestName={"ICPC Asia Dhaka Regional Contest 2021-22"}
            position="48th"
            team="CUET AugniPaksha"
          />
          <Details
            contestName={"EDU Engineering Day Programming Contest"}
            position="1st"
            team="CUET AugniPaksha"
          />
          <Details
            contestName={"BUET Inter University Programming Contest"}
            position="43rd"
            team="CUET AugniPaksha"
          />
          <Details
            contestName={"Sylhet Inter University Junior Contest"}
            position="12th"
            team="CUET AugniPaksha"
          />
          <Details
            contestName={"CUET CSE FEST IUPC"}
            position="10th"
            team="CUET AugniPaksha"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
