import { useEffect } from "react";
import SliderImage from "../Images/slider.jpg";
import gsap from "gsap";
import Navbar from "./Navbar";
import Menubar from "./Menubar";
import HeaderContent from "./HeaderContent";
import Services from "./Service";
import ContactInfo from "./ContactInfo";
import AboutUs from "./AboutUs";
import Progress from "./Progress";
import LastPart from "./LastPart";
function Main() {
  useEffect(() => {
    let tl = gsap.timeline()
    tl.from(".header-slider", {
      x: "-100%",
      delay: 1.5,
      opacity: 0,
    });
   tl.from(".heading",{
    x: 100, 
    y:-10,
    rotate: 45,
    opacity: 0,
    duration : 0.5,
   })
    tl.from(".rbox",{
      x: 150,
      y: -150,
      rotate: 360,
      opacity: 0,
      duration: 1.5,
    })
    tl.from(".header-text",{
       y:-10,
       opacity: 0,

    })
    tl.from(".header-btn", {
      y:-10,
      opacity: 0,

    })
  });
  return (
    <>
      <div className="main text-[white]">
        <div className="header h-[50rem] sm:h-screen bg-black relative">
       
      <Navbar/>  
    
         <div
            className="header-slider h-full relative "
            style={{
              backgroundImage: `url(${SliderImage})`,
              backgroundSize: "cover",
              backgroundPosition: "80% 100%",
            }}
          >  <HeaderContent/> </div>  
   
             <Menubar />
            
            
        </div>
     
        <div>

        </div>
          <Services/>
      </div>
      <div>
      <ContactInfo/>
      </div>
        <AboutUs/>
        <Progress/>
        <LastPart/>
     
    </>
  );
}
export default Main;
