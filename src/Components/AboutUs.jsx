import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger'
import { useState } from "react";
function AboutUs() {
  return (
    <>
      <div className="relative py-12 sm:py-6">
        <div>
          {/* adding w behind the tex */}
          <span
            className="absolute text-[200px] font-extrabold opacity-10 top-[-20%] sm:text-9xl md:text-9xl sm:top-[-2%] md:top-[5%] lg:top-[5%]  "
            style={{ fontFamily: "Alfa Slab One , serif" }}
          >
            W
          </span>
        </div>
        <div className="flex mb-4 justify-center items-center sm:flex-col md:flex-col lg:flex-col ">
          <div className="w-1/2  ml-14 sm:w-full md:w-full lg:w-11/12">
            <div className="relative">
              <h1
                className="text-3xl py-4 z-10"
                style={{ fontFamily: "Alfa Slab One , serif" }}
              >
                We are digital and creative team
              </h1>
              {/* this is the round circle behind the text */}
              <div className=" w-8 h-8 absolute inset-0 rounded-full bg-pink-500 opacity-80 left-60 top-0 sm:left-40">
                <div className="w-3 h-3 rounded-full bg-[#5a1515]"></div>
              </div>
              <p className="w-3/4">
                Driven by innovation and human behavior, our web design agency
                is changing the way brands connect with audiences in a digital
                world. Discover why market leaders choose our enterprise
                solutions.
              </p>

              <button className="my-4 border border-[#f3647c] px-6 py-3 text-[#f3647c] font-semibold hover:bg-[#f3647c] hover:text-[white] transition duration-300 ease-in-out">
                Contact Us
              </button>
            </div>
          </div>
          {/* Achievements section  will go here or counting up section */}
          <div className="w-1/2 sm:w-full md:w-full sm:mt-4 lg:w-4/5">
            <div className="flex  flex-wrap justify-center   ">
              <CardComp
                num="8"
                exp="Years of Experience"
                extClass="bg-gray-200"
              />
              <CardComp num="250" exp="Successfull Projects"   />
              <CardComp num="30" exp="Team Members"   />
              <CardComp
                num="200"
                exp="Satisified Clients "
                extClass="bg-gray-200 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CardComp(props) {
  let[scrollStart ,  setScrollStart] = useState(false)
  return (
    <>
    <ScrollTrigger onEnter={()=> setScrollStart(true)} onExit={()=>setScrollStart(false)}>
      <div
        className={`py-8 px-12 sm:py-4 flex flex-col items-center  w-60  lg:w-1/2 hover:bg-[#f3647c] hover:text-[white] transition-colors duration-300 sm:w-32  ${props.extClass}`}
      >
        <div className="relative hover:text-[white]">
          <h1 className="text-6xl font-bold p-4 sm:text-xl sm:p-3">
           {
            scrollStart && <CountUp
            start={0}
            end={parseInt(props.num)}
            duration={2}
            decimals={0}
          /> 
          }   
          </h1>
          <p className="absolute top-0 mb-4 right-0 text-3xl text-[#f3647c] hover:text-white  ">
            +
          </p>
        </div>
        <div>
          <p className="text-base my-6 sm:text-sm sm:my-2">{props.exp}</p>
        </div>
      </div>
      </ScrollTrigger>
    </>
  );
}

export default AboutUs;
