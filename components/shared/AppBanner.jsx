import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowDownCircle } from "react-icons/fi";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

function AppBanner() {
  const [activeTheme] = useThemeSwitcher();

  return (
    <div
      className="bg-cover min-h-screen"
      style={{
        backgroundImage: `url('/images/banner-4.jpg')`,
      }}
    >
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className=" mt-5 md:mt-2 object-cover pl-10 "
      >
        <div className="w-full md:w-1/3 text-left pt-72">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.1,
            }}
            className="  font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark uppercase"
          >
            Khaliques Group of Companies Limited
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.2,
            }}
            className=" font-general-medium mt-4 text-sm md:text-md lg:text-lg xl:text-md text-center sm:text-left leading-normal text-ternary-dark"
          >
            A leading company in Real Estate (Commercial &amp; Residential),
            construction of hospital infrastructure, hotels, and hospitality
            management services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.3,
            }}
            className="flex justify-center sm:block"
          >
            {/* <a
            download="Stoman-Resume.pdf"
            href="/files/Stoman-Resume.pdf"
            className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
            aria-label="Download Resume"
          >
            <FiArrowDownCircle className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
            <span className="text-sm sm:text-lg duration-100">Download CV</span>
          </a> */}
          </motion.div>
        </div>
        {/* <motion.div
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
          className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0 "
        >
          <img
            layout="responsive"
            src={
              activeTheme === "dark"
                ? "/images/banner.jpeg"
                : "/images/banner.jpeg"
            }
            alt="Khaliques Global HQ"
            className="rounded-2xl"
          />
        </motion.div> */}
      </motion.section>
    </div>
  );
}

export default AppBanner;
