function HeaderContent() {
  return (
    <div>
      <div className="absolute sm:top-34 top-36">
        <div
          className=" heading absolute left-[30%] sm:left-[10%] top-16 sm:top-8 z-10"
          style={{ fontFamily: "Alfa Slab One , serif" }}
        >
          <div className=" flex mb-4 sm:mb-2">
            <h1 className="text-8xl  sm:text-5xl md:text-7xl pr-6 sm:pr-3"> Web </h1>
            <h1 className="text-8xl sm:text-5xl md:text-7xl"> Design </h1>
          </div>
          <h1 className="text-8xl sm:text-5xl md:text-7xl"> Company </h1>
        </div>
        <div className="rbox w-72 h-[300px] sm:w-44 sm:h-44 bg-[#fa488f] "></div>

        <div className=" header-text absolute sm:w-60 w-96  m-8 mt-12 sm:m-6 sm:mt-8 ml-16 sm:ml-8 ">
          <h1 className="text-[23px]  sm:text-base w-[520px] sm:w-60">
            We help companies discover what make them unique and Channal into a
            memorable experience that outsells and outshine their compitation
            online
          </h1>
        </div>
      </div>

      <div className="header-btn fixed sm:bottom-[20%]  sm:left-10 bottom-32 left-16  ">
        <button
          className="border border-white p-2  text-xl lg:px-6 xl:px-6 md:px-6 
                    hover:bg-white hover:text-[#ec3d3d]"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default HeaderContent;
