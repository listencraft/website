/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import styles from "./QuestionsSection.module.css";
import Image from "next/image";

const QuestionsSection = () => {
  return (
    <div
      className={`${styles.questions_container} overflow-hidden relative py-8 h-full w-full bg-ground mt-[1045px] sm:mt-[1424px] md:mt-[640px] lg:mt-[180px] lg:h-[400px]`}
    >
      <img
        className="absolute top-48 left-0 w-full h-auto object-cover lg:top-28 xl:top-24"
        src="/assets/svg/brown_bottom_bg.svg"
        alt="brown background"
      />
      <div
        className={`${styles.light_brown_bg} absolute h-[70%] inset-0 bg-light_brown_bg top-[340px] sm:top-[600px] md:top-[680px] md:h-[650px] lg:hidden`}
      ></div>
      <h3 className="text-center text-questions text-2xl leading-7 font-extralight pt-10 pb-20 mx-auto w-2/3 sm:pt-0 md:pt-5">
        Below are some questions that need answering. Can you help answer them?
      </h3>

      <div className="relative">
        <div className="grid grid-rows-3 grid-cols-1 lg:flex lg:justify-center">
          <div className="relative bg-questions_bg_1 h-[200px] w-[300px] mb-6 mx-auto rounded-tl-3xl rounded-tr-3xl rounded-br-2xl rounded-bl-2xl sm:w-[350px] md:w-[450px] lg:w-full lg:mx-6 max-w-[400px]">
            <div className="h-[70px] w-full bg-questions_bg_2 rounded-tl-2xl rounded-tr-2xl flex items-baseline pt-3">
              <Image
                className="ml-6"
                src="/assets/svg/principles_icon.svg"
                alt="principles icon"
                width={30}
                height={30}
              />
              <h1 className="text-questions ml-4 text-2xl">Principles</h1>
            </div>
            <p className="text-lg px-6 pt-4 leading-6 font-extralight">
              What principles inform the content and approach to learning and
              behaviour change?
            </p>
          </div>
          <div className="relative bg-questions_bg_1 h-[200px]  w-[300px]  mx-auto rounded-tl-3xl rounded-tr-3xl rounded-br-2xl rounded-bl-2xl sm:w-[350px] md:w-[450px] lg:w-full lg:mx-6 max-w-[400px]">
            <div className="h-[70px] w-full bg-questions_bg_2 rounded-tl-2xl rounded-tr-2xl flex items-baseline pt-5">
              <Image
                className="ml-6"
                src="/assets/svg/audience_icon.svg"
                alt="principles icon"
                width={40}
                height={40}
              />
              <h1 className="text-questions ml-4 text-2xl">Audience</h1>
            </div>
            <p className="text-lg px-6 pt-4 leading-6 font-extralight">
              Who do we want to reach, and how will we reach them?
            </p>
          </div>
          <div className="relative bg-questions_bg_1 h-[200px] w-[300px]  mx-auto rounded-tl-3xl rounded-tr-3xl rounded-br-2xl rounded-bl-2xl sm:w-[350px] md:w-[450px] lg:w-full lg:mx-6 max-w-[400px]">
            <div className="h-[70px] w-full bg-questions_bg_2 rounded-tl-2xl rounded-tr-2xl flex items-baseline pt-5">
              <Image
                className="ml-6"
                src="/assets/svg/technology_icon.svg"
                alt="principles icon"
                width={30}
                height={30}
              />
              <h1 className="text-questions ml-4 text-2xl">Technology</h1>
            </div>
            <p className="text-lg px-6 pt-4 leading-6 font-extralight">
              What technology will be used in the tool's construction?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsSection;
