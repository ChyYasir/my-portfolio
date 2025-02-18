"use client";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/yasir-5.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yasir Rahman</title>
        <meta
          name="description"
          content="Yasir Rahman - Tech Enthusiast. Solving life's challenges through code."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-3/4">
              <Image
                src={profilePic}
                alt="Yasir Rahman"
                className="w-full h-auto md:inline-block md:w-full"
                priority
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text={"Decoding life's code, one line at a time"}
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="mt-2 mb-4 text-base font-medium md:text-sm sm:text-xs">
                Hi, I&apos;m Yasir Rahman, a tech enthusiast dedicated to
                solving life&apos;s challenges through code. Join me in my
                journey of problem-solving—one line at a time. Welcome to my
                world of practical solutions and innovation!
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Resume_of_Yasir_Rahman.pdf"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark transition-all ease-in-out duration-300 border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:border-light hover:dark:bg-dark hover:dark:text-light md:p-2 md:px-4 md:text-base"
                  download={true}
                  target="_blank"
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href={"mailto:chyyasir2000@gmail.com"}
                  target="_blank"
                  className="ml-4 flex items-center bg-light text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-dark hover:text-light transition-all ease-in-out duration-300 border-2 border-solid border-dark dark:bg-dark dark:text-light hover:dark:bg-light hover:dark:text-dark dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
