const Footer = () => {
  return (
    <footer className="bg-light_brown_bg py-10 text-center w-full">
      <div className="w-2/3 mx-auto">
        <h1 className="text-2xl font-bold text-btnColor2 mb-4">
          Want to get involved?
        </h1>
        <p className="text-lg font-extralight text-questions">
          <a
            className="underline cursor-pointer"
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdyoOZzJA1qCMelRU1TvBjjDfBUhfOr_IdLF25DY_vtS_NNKw/viewform"
          >
            Enquire here
          </a>
          <span> </span>
          to learn more about the project and the opportunity to get involved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
