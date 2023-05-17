/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <Image
        src="/assets/svg/cloud_1.svg"
        alt="cloud_1"
        width={100}
        height={100}
      />
      <Image
        src="/assets/svg/cloud_2.svg"
        alt="cloud_2"
        width={100}
        height={100}
      />
      <div className="text_section">
        <h1>Listencraft</h1>
        <h2>Learn the art of good listening</h2>
        <div>
          <p>
            We experience this personally when we talk to others who don't seem
            to hear anything we say, and we see it in society in general.
          </p>
          <p>
            I want to give people the opportunity to learn better listening
            skills: to help each other, and to make the world a more sensitive
            place.
          </p>
        </div>
        <button>Contact</button>
      </div>
      <Image
        src="/assets/svg/sun_bg.svg"
        alt="sun_bg"
        width={100}
        height={100}
      />
      <Image
        src="/assets/webp/trees.webp"
        alt="trees"
        width={100}
        height={100}
      />
      <Image
        src="/assets/webp/man_woman.webp"
        alt="man_woman"
        width={600}
        height={600}
      />
      <div className="people"></div>
    </div>
  );
};

export default HeroSection;
