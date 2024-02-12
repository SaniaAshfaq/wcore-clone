import chart2 from "../Images/chart2.png";
import information from "../Images/information2.png";
import clipboard from "../Images/clipboard.png";
import creativity from "../Images/creativity.png";
import startup from "../Images/startup.png";
import download from "..//Images/download.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
function Progress() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{
    gsap.from(".iconImg",{
      y: -200,
      opacity: 0,
      duration:2,
         scrollTrigger:{
          trigger: ".progress-div",
          start: "top center",
          end: "bottom center",
          markers:false,
         
         }
      
    })

  },[])
  
  return (
    <>
      <div className="progress-div mt-12 ">
        {/* div for h */}
        <div className="absolute left-12 sm:left-0  text-[300px] sm:text-9xl font-extrabold  text-[#e8e6e6] opacity-1  "    style={{fontFamily: "Alfa Slab One , serif"}}>H</div>
        <div className="flex flex-col items-center ">
          <div className="z-10  relative">
            <h1
              className="text-5xl my-6 z-10 sm:text-4xl"
              style={{ fontFamily: "Alfa Slab One , serif" }}
            >
              How it is going?
            </h1>
            <div className=" w-8 h-8 absolute inset-0 rounded-full bg-pink-500 opacity-80 left-60 top-3 sm:left-40">
              <div className="w-3 h-3 rounded-full bg-[#5a1515]"></div>
            </div>
          </div>

          <div className="my-6 text-[gray] z-10 sm:w-4/5 ">
            <p className="z-10">
              We offer professional web design services at affordable rates to
              help your business attract more visitors and keep them on your
              site!
            </p>
          </div>

          <div className="w-full flex justify-center ">
            <div
              className="w-[80%]  flex justify-between items-center mb-16 flex-wrap sm:justify-center "
              style={{
                backgroundImage: `url(${chart2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <ProgressCard
                image={information}
                name="Info Gathering"
                dis="Need a good understanding of what are your business goals and dreams."
                adju = "xl:pt-16"
              />
              <ProgressCard
                image={clipboard}
                name="Planning"
                dis="We will help you to decide what technologies should be implemented."
              />
              <ProgressCard
                image={creativity}
                name="Design"
                dis="It’s time to determine the look and feel of your site"
                adju = "xl:pt-40"
              />
              <ProgressCard
                image={startup}
                name="Development"
                dis="Writing valid HTML / CSS code that complies to current web standards."
                
              />
              <ProgressCard
                image={download}
                name="Testing and launch"
                dis="Testing of the complete functionality of forms and scripts etc."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ProgressCard(props) {
  return (
    <>
      <div>
        <div
          className={`w-40 flex flex-col justify-center items-center ${props.adju} sm:mb-6 sm:w-60`}
        >
          <div>
            <img src={props.image} alt="info" className="iconImg text-[pink] my-3" />
          </div>

          <h1 className={`font-bold py-2`}>{props.name}</h1>
          <p className="text-center text-sm">{props.dis}.</p>
        </div>
      </div>
    </>
  );
}
export default Progress;
