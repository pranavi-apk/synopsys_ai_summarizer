const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex  items-center justify-center space-x-2">
          <img src="./src/assets/favicon.png" className="w-20" />
        </div>

        <button
          type="button"
          onClick={() => window.open("https://github.com/pranavi-apk")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with
        <br className="max-md:hidden" />
        <span className="orange_gradient"> OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Enhance your reading experience with Synopsys, an open-source tool that
        turns complex articles/websites into easy-to-understand summaries.
      </h2>
    </header>
  );
};

export default Hero;
