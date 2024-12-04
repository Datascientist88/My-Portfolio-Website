import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}>Overview.</h2>
      </div>
      <div className="flex items-center flex-col">
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Hi, I'm Mohammed Bahageel, an AI developer and data scientist based in Saudi Arabia with over four years of experience in artificial intelligence, machine learning, and data science. My journey began with a passion for unlocking insights hidden within data, and it has evolved into a drive to create transformative AI solutions that address real-world challenges.

          My expertise spans a range of technologies, including Python, TensorFlow, LangChain, Flask, and OpenAI's API, enabling me to design applications like virtual assistant avatars, medical transcription tools, and conversational AI platforms. I thrive on solving complex problems, applying predictive analytics, and developing systems that empower decision-making in healthcare and education.

          I’m deeply fascinated by the potential of AI and ML to revolutionize industries, from improving patient care with intelligent systems to enhancing learning experiences with personalized education solutions. I firmly believe that combining data science with cutting-edge AI technology can lead to innovations that make a meaningful impact.

          Beyond my work, I enjoy exploring multilingual communication as a tool to connect with diverse perspectives. Feel free to explore my projects and reach out at{" "}
          <a
            href="mailto:m.bahageel88@gmail.com"
            className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black"
          >
            m.bahageel88@gmail.com
          </a>
          . I'm always eager to collaborate on projects that push the boundaries of what's possible in AI, ML, and data science!
        </p>
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

