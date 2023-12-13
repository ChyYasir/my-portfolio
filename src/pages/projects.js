import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project11 from "../../public/images/projects/project1-1.png";
import Project12 from "../../public/images/projects/project1-2.png";
import Project13 from "../../public/images/projects/project1-3.png";
import Project14 from "../../public/images/projects/project1-4.png";
import Project15 from "../../public/images/projects/project1-5.png";
import Project16 from "../../public/images/projects/project1-6.png";
const FrameImage = motion(Image);

const Project = ({ title, details, status, githubLink, images }) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <li className="relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl">
      <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="inline-block overflow-hidden rounded-lg"
            >
              <FrameImage
                src={image}
                alt={`${title} - Image ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          ))}
        </Slider>
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold capitalize text-dark/75 dark:text-light/75 hover:underline xs:text-lg">
              {title}
            </h2>
            <p className="md:text-sm text-xl mb-2 text-dark dark:text-light">
              {details}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span
              className={`text-lg font-semibold text-${
                status === "Paid" ? "primaryDark" : "primary"
              } dark:text-${status === "Paid" ? "primaryDark" : "light"}`}
            >
              {status}
            </span>
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="w-6 h-6 text-dark dark:text-light hover:text-primary hover:dark:text-primaryDark" />
              </a>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

const projects = () => {
  // Replace these images with your project images
  const project1Images = [
    Project11,
    Project12,
    Project13,
    Project14,
    Project15,
    Project16,
  ];
  const project2Images = [
    /* Image URLs */
  ];
  // Add more projects and their images as needed

  return (
    <>
      <Head>
        <title>Yasir|projects</title>
        <meta name="description" content="projects" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full mb-16 overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text={"Explore My Projects"}
            className={"mb-16 lg:!text-6xl md:!text-6xl sm:!text-4xl sm:mb-8"}
          />
          <ul className="grid grid-cols-1  gap-16 lg:gap-8 md:gap-y-16">
            <Project
              title={"Tuition Media Internal Management System"}
              details={
                "• Developed an educational platform to facilitate online learning." +
                "\n• Implemented features for content delivery and student interaction." +
                "\n• Utilized React-Redux for state management and Tailwind CSS for a modern design."
              }
              status={"Paid"}
              images={project1Images}
            />

            {/* Add more projects here */}
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default projects;
