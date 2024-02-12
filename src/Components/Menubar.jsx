import servicesImg from "../Images/servicesImg.png";
import { useState } from "react";
function Menubar() { 
 let[hidemenu , seHidemenu] = useState(true)
 
  return (
    <div>
    <div className=  {`lg:block xl:block md:block sm:relative sm:transition-left sm:duration-500 sm:ease-in-out border rounded-md ${(hidemenu) ? "left-[-60%]" : "left-0"}`}>
    <div className=" lg:absolute xl:absolute md:absolute fixed top-20 p-4 z-10 w-full md:flex xl:flex lg:flex justify-center   sm:top-0 sm:w-3/4 sm:h-64">
      <ul className="md:flex lg:flex xl:flex w-3/4 justify-around text-sm font-bold cursor-pointer  
        xl:w-1/2 lg:w-1/2  sm:h-80 sm:bg-black sm:border sm:border-white rounded-md
      ">
        <li className="group relative sm:bg-[black] sm:p-4 sm:align-center ">
         
            HOME
          
          <ul className="  bg-white text-[#393838] px-8 py-6  hover:cursor-pointer hidden group-hover:block absolute left-[-7]  sm:z-10  sm:w-full sm:left-20 sm:border-2 border-black sm:rounded-md">
            <li className="border-b border-gray mb-3 pb-2 hover:text-[#f3647c] hover:border-[#f3647c]">
            
              Homepage1
            </li>

            <li className="border-b border-gray mb-3 pb-2 hover:text-[#f3647c] hover:border-[#f3647c]">
              
              Homepage2
            </li>
            <li className="border-b border-gray mb-3 pb-2  hover:text-[#f3647c] hover:border-[#f3647c]">
             
             Homepage3
            </li>
            <li className="border-b border-gray mb-3 pb-2 hover:text-[#f3647c] hover:border-[#f3647c]">
             
              Homepage4
            </li>
          </ul>
        </li>

        <li className=" relative  group sm:bg-[black] sm:p-4  ">
         
            Pages
          
          <ul className="w-3/4 md:flex lg:flex xl:flex absolute md:right-52 lg:right-52 xl:right-52 sm:z-10 sm:text-[white]  sm:overflow-scroll  sm:w-60 sm:left-20  ">
            <ul className=" hidden group-hover:block bg-white text-[black] p-5 text-base    ">
              <li className="px-3 border-b border-gray mb-3 w-44 hover:text-[#f3647c] hover:border-[#f3647c]">
              <i className="fa-solid fa-person-running text-[#f3647c] text-xl"></i>  About
              </li>
              <li className="px-3 border-b border-gray  mb-3 w-44 hover:text-[#f3647c] hover:border-[#f3647c]">
              <i className="fa-regular fa-image text-[#f3647c] "></i>  PortfolioList1
              </li>
              <li className="px-3 border-b border-gray  mb-3 w-44 hover:text-[#f3647c] hover:border-[#f3647c]">
              <i className="fa-regular fa-image text-[#f3647c] "></i>  PortfolioList2
              </li>
              <li className="px-3 border-b border-gray  mb-3 w-44 hover:text-[#f3647c] hover:border-[#f3647c]">
              <i className="fa-regular fa-image text-[#f3647c] "></i>   Portfolio Work 1
              </li>
              <li className="px-3 border-b border-gray mb-3 w-44 hover:text-[#f3647c] hover:border-[#f3647c]">
              <i className="fa-regular fa-image text-[#f3647c] "></i>   Portfolio Work 2
              </li>
              <li className="px-3 border-b border-gray mb-3 w-44 hover:text-[#f3647c] hover:border-[#f3647c]">
              <i class="fa-solid fa-bars text-[#f3647c]"></i>  Services
              </li>
              <li className="px-3 border-b border-gray mb-3 w-44 hover:text-[#f3647c] hover:border-[#f3647c]">
              <i class="fa-solid fa-bars text-[#f3647c]"></i>  Services 2
              </li>
              <li className="px-3 border-b border-gray mb-3 w-44 hover:text-[#f3647c] hover:border-[#f3647c]">
              <i className ="fa-solid fa-envelope text-[#f3647c]"></i> Contact
              </li>
              <li className="px-3 border-b border-gray mb-3 w-44 hover:text-[#f3647c] hover:border-[#f3647c]">
              <i className ="fa-solid fa-envelope text-[#f3647c]"></i>  Contact 2
              </li>
              <li className="px-3 border-b border-gray mb-3 w-44 hover:text-[#f3647c] hover:border-[#f3647c]">
              <i className ="fa-solid fa-envelope text-[#f3647c]"></i>  Contact 3
              </li>
            </ul>

            <ul className=" hidden group-hover:block   bg-white text-[black] p-5  text-base ">
              <li className="px-3 border-b border-gray mb-3 w-44 hover:text-[#f3647c] hover:border-[#f3647c]">
              <i class="fa-solid fa-bars text-[#f3647c]"></i> Accordion & Toogles
              </li>
              <li className="px-3 border-b border-gray mb-3 w-44 hover:text-[#f3647c] hover:border-[#f3647c]">
              <i class="fa-solid fa-exclamation text-[#f3647c]"></i>  Alert Boxes
              </li>
              <li className="px-3 border-b border-gray mb-3 w-44 hover:text-[#f3647c] hover:border-[#f3647c]">
    
              <i class="fa-solid fa-a text-[#f3647c]"></i> Background lable
              </li>
              <li className="px-3 border-b border-gray mb-3 w-44 hover:text-[#f3647c] hover:border-[#f3647c]">
              <i class="fa-solid fa-tag text-[#f3647c]"></i>  Banners
              </li>
              <li className="px-3 border-b border-gray mb-3 w-44 hover:text-[#f3647c] hover:border-[#f3647c]">
              <i class="fa-solid fa-wand-magic-sparkles text-[#f3647c]"></i> Benifit grid Element
              </li>
              <li className="px-3 border-b border-gray mb-3 w-44 hover:text-[#f3647c] hover:border-[#f3647c]">
              <i class="fa-solid fa-microsoft text-[#f3647c]"></i>   Carsol
              </li>
              <li className="px-3 border-b border-gray mb-3 w-44 hover:text-[#f3647c] hover:border-[#f3647c]">
              <i class="fa-solid fa-clock text-[#f3647c]"></i> Counter and graphs
              </li>
              <li className="px-3 border-b border-gray mb-3 w-44 hover:text-[#f3647c] hover:border-[#f3647c]">
              <i class="fa-solid fa-image text-[#f3647c]"></i>  Gallery and Images
              </li>
              <li className="px-3 border-b border-gray mb-3 w-44 hover:text-[#f3647c] hover:border-[#f3647c]">
              <i class="fa-solid fa-grid-5 text-[#f3657c]"></i> Icon Boxes
              </li>
              <li className="px-3 border-b border-gray mb-3 w-44 hover:text-[#f3647c] hover:border-[#f3647c]">
              <i class="fa-solid fa-image text-[#f3657c]"></i>   Image Effect
              </li>
              <li className="px-3 border-b border-gray mb-3 w-44 hover:text-[#f3647c] hover:border-[#f3647c]">
              <i class="fa-solid fa-hand-holding-dollar text-[#f3657c]"></i>  Price Table
              </li>
            </ul>


            <ul className=" hidden group-hover:block   bg-white text-[black] p-5 text-base ">
              <li className="px-3 border-b border-gray mb-2 w-44  hover:text-[#f3647c] hover:border-[#f3647c]">
                Get a free Quote
              </li>
              <li className="px-3 border-b border-gray mb-3 hover:text-[#f3647c] hover:border-[#f3647c]">
                Tables
              </li>
              <li className="px-3 bor er-b border-gray mb-3 hover:text-[#f3647c] hover:border-[#f3647c]">
                Tabs
              </li>
              <li className="px-3 border-b border-gray mb-3 hover:text-[#f3647c] hover:border-[#f3647c]">
                Team Extended
              </li>
              <li className="px-3 border-b border-gray mb-3 hover:text-[#f3647c] hover:border-[#f3647c]">
                Typhrography
              </li>
              <li className="px-3 border-b border-gray mb-3 hover:text-[#f3647c] hover:border-[#f3647c]">
                Blog Default
              </li>
              <li className="px-3 border-b border-gray mb-3 hover:text-[#f3647c] hover:border-[#f3647c]">
                Blog 1
              </li>
              <li className="px-3 border-b border-gray mb-2 hover:text-[#f3647c] hover:border-[#f3647c]">
                Blog 2
              </li>
              <li className="px-3 border-b border-gray mb-3 hover:text-[#f3647c] hover:border-[#f3647c]">
                Blog 3
              </li>
              <li className="px-3 border-b border-gray mb-3 hover:text-[#f3647c] hover:border-[#f3647c]">
                Blog 4
              </li>
              <li className="px-3 border-b border-gray mb-3 hover:text-[#f3647c] hover:border-[#f3647c]">
                Blog 5
              </li>
            </ul>
          </ul>
        </li>
        <li className=" relative group sm:bg-[black] sm:p-4 ">
               Services
          <ul className="md:flex lg:flex xl:flex  md:w-96 lg:w-96 xl:w-96 bg-white text-[black] absolute items-center sm:z-10 sm:left-20 sm:w-full " >
          <ul className="hidden group-hover:block ">
            <li className="m-3 p-2  border-b border-gray-500  hover:text-[#f3647c] hover:border-[#f3647c]">
            Web Development
            </li>
            <li className="m-3 p-2  border-b border-gray-500 hover:text-[#f3647c] hover:border-[#f3647c]">
             
            App Development
            </li>
            <li className="m-3 p-2  border-b border-gray-500 hover:text-[#f3647c] hover:border-[#f3647c]">
              Seo Optimization
            </li>
            <li className="m-3 p-2  border-b border-gray-500 hover:text-[#f3647c] hover:border-[#f3647c]">
               SMM services
            </li>
            <li className="m-3 p-2  border-b border-gray-500 hover:text-[#f3647c] hover:border-[#f3647c]">
           Conversion Rate
            </li>
            <li className="m-3 p-2  border-b border-gray-500 hover:text-[#f3647c] hover:border-[#f3647c]">
              Landing Pages
            </li>
            <li className="m-3 p-2  border-b border-gray-500 hover:text-[#f3647c] hover:border-[#f3647c]">
              Reputation Managment
            </li>
            <li className="m-3 p-2  border-b border-gray-500 hover:text-[#f3647c] hover:border-[#f3647c]">
              Search Engine Marketing
            </li>
           </ul>
              <ul className="hidden group-hover:block  ">
                <li><img src={servicesImg} alt="servicesImg"  className="float-right sm:hidden" /></li>
              </ul>
             
          </ul>




          <ul className="hidden">
            <li>
              <img src={servicesImg} alt="" />
            </li>
          </ul>
        </li>
        <li className="relative group sm:bg-[black] sm:p-4 ">
          GDPR
          <ul className=" absolute hidden group-hover:block bg-white text-[black] p-3 sm:z-10 sm:left-20 ">
            <li className="w-44 p-2 m-2  border-b border-gray-500 hover:text-[#f3647c] hover:border-[#f3647c] ">
             Privacy policy
            </li>
            <li  className="w-44 p-2 m-2 border-b border-gray-500s hover:text-[#f3647c] hover:border-[#f3647c]">
          
             Term of use
            </li>
          </ul>
        </li>
        <li className="relative group sm:bg-[black] sm:p-4 " >CONTACT</li>
        <li>
       
          <i class="fa-solid fa-magnifying-glass sm:hidden"></i>
        </li>
      </ul>
    </div>
    </div>
    <div className="" onClick={()=>seHidemenu(!hidemenu)}>
    <i className="fa-solid fa-bars absolute top-20 right-5 text-white text-2xl border border-white px-2
       xl:hidden lg:hidden md:hidden"></i>
    </div>
    </div>
  
  );
}
export default Menubar;
