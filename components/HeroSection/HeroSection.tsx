/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import FeaturesSection from "../FeaturesSection/FeaturesSection";
import styles from "./HeroSection.module.css";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className={`${styles.hero_container} relative z-0`}>
      <Image
        className={styles.cloud_1}
        src="/assets/svg/cloud_1.svg"
        alt="cloud_1"
        width={125}
        height={125}
      />
      <Image
        className={styles.cloud_2}
        src="/assets/svg/cloud_1.svg"
        alt="cloud_2"
        width={125}
        height={125}
      />
      <div className={`${styles.text_section} px-3 md:px-10`}>
        <h1 className="text-title text-4xl font-semibold 2xl:text-5xl">
          Listencraft
        </h1>
        <h2 className="mt-4 text-white text-xl font-semibold 2xl:text-2xl">
          Learn the art of good listening
        </h2>
        <div className="mt-4 mb-7 text-white font-extralight text-lg leading-5 md:w-1/2  lg:w-1/3 2xl:text-xl">
          <p>
            We experience this personally when we talk to others who don't seem
            to hear anything we say, and we see it in society in general.
          </p>
          <p className="mt-5">
            I want to give people the opportunity to learn better listening
            skills: to help each other, and to make the world a more sensitive
            place.
          </p>
        </div>
        <a
          className="text-white bg-btnColor1 py-1.5 px-5 rounded-3xl transition ease-in-out duration-500 hover:bg-btnColorHover 2xl:text-xl"
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdyoOZzJA1qCMelRU1TvBjjDfBUhfOr_IdLF25DY_vtS_NNKw/viewform"
        >
          Contact
        </a>
      </div>
      <div className={styles.image_container}>
        <div className={styles.rel_img_container}>
          <Image
            className={styles.sun_bg}
            src="/assets/svg/sun_bg.svg"
            alt="sun_bg"
            width={100}
            height={100}
          />
          <Image
            className={styles.trees}
            src="/assets/webp/trees.webp"
            alt="trees"
            width={200}
            height={200}
          />
          <Image
            className={styles.people}
            src="/assets/webp/man_woman.webp"
            alt="man and woman are sitting"
            width={1000}
            height={1000}
          />
          <FeaturesSection />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
