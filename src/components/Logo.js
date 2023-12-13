import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import signaturePic from "../../public/images/signature/signature.png";
const MotionLink = motion(Link);
const Logo = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-2 w-16 h-16">
        <MotionLink
          href={"/"}
          // className="w-50 h-40 items-center justify-center flex"
          className=" bg-dark rounded-full text-light flex items-center justify-center   font-bold
          border border-solid border-transparent dark:border-light"
          whileHover={{
            scale: 1.2,

            //   backgroundColor: [
            //     "#121212",
            //     "rgba(131,58,180,1)",
            //     "rgba(253,29,29,1)",
            //     "rgba(252,176,69,1)",
            //     "rgba(131,58,180,1)",
            //     "#121212",
            //   ],
            //   transition: {
            //     duration: 1,
            //     // yoyo: Infinity,
            //     repeat: Infinity,
            //   },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src={signaturePic}
            alt="CodeBucks"
            className="w-full h-auto"
          ></Image>
        </MotionLink>
      </div>
    </>
    // <div className="flex items-center justify-center mt-2">
    //   <Link href="/">YR</Link>
    // </div>
  );
};

export default Logo;
