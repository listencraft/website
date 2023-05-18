/* eslint-disable @next/next/no-img-element */
import styles from "./FeaturesSection.module.css";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <div className={`${styles.features_section}`}>
      <div className="relative pb-[100%]">
        <div
          className={`absolute h-[1050px] inset-0 bg-ground top-28 sm:h-[1450px] md:top-44 md:h-[650px] lg:hidden`}
        ></div>

        <div className="absolute top-0 left-0 h-full w-full pb-[100%]">
          <img
            className={styles.ground}
            src="/assets/svg/ground_bg.svg"
            alt="brown ground"
          />

          <div className={`${styles.features_container}`}>
            <div className="px-2 py-2 relative max-w-[500px]">
              <Image
                className="w-full"
                src="/assets/svg/text_cloud_1.svg"
                alt="text cloud"
                width={500}
                height={500}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-10 lg:px-6 xl:px-10">
                <h1 className="text-2xl font-semibold sm:text-3xl">
                  Accessible
                </h1>
                <p className="text-xl font-extralight mt-2 text-features lg:mt-1">
                  Free to use, on any device, with everyone in mind
                </p>
              </div>
            </div>
            <div className="px-2 py-2 relative max-w-[500px]">
              <Image
                className="w-full"
                src="/assets/svg/text_cloud_2.svg"
                alt="text cloud"
                width={500}
                height={500}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-10 lg:px-6 xl:px-10">
                <h1 className="text-2xl font-semibold sm:text-3xl">
                  Game like
                </h1>
                <p className="text-xl font-extralight mt-2 text-features lg:mt-1">
                  It's not a bunch of dull lectures
                </p>
              </div>
            </div>
            <div className="px-2 py-2 relative max-w-[500px]">
              <Image
                className="w-full"
                src="/assets/svg/text_cloud_3.svg"
                alt="text cloud"
                width={500}
                height={500}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-10 lg:px-6 xl:px-10">
                <h1 className="text-2xl font-semibold sm:text-3xl">
                  Video and Audio
                </h1>
                <p className="text-xl font-extralight mt-2 text-features lg:mt-1">
                  Not just text, but audio and video that engages
                </p>
              </div>
            </div>
            <div className="px-2 py-2 relative max-w-[500px]">
              <Image
                className="w-full"
                src="/assets/svg/text_cloud_4.svg"
                alt="text cloud"
                width={500}
                height={500}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-10 lg:px-6 xl:px-10">
                <h1 className="text-2xl font-semibold sm:text-3xl">
                  Principles and Measurement
                </h1>
                <p className="text-xl font-extralight mt-2 text-features lg:mt-1">
                  Based on sound principles, we want to know, if, who and how it
                  helps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
