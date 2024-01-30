import React from "react";

const Footer = () => {
  return (

    <div id="location" className=" relative flex justify-between mt-[24.3vh] mob1:mt-[17.9vh] w-[100vw]  bg-[#060606] text-[#FFF] pt-[6.3vh] pr-[9.09vw] pl-[7.22VW] text-[1.25rem] font-gd font-[400] leading-[30px] tracking-[0.6px] not-italic overflow-hidden  whitespace-nowrap  md:flex-col md:gap-[80px] pb-[7.3vh]  mob1:text-[16px]">

    

      <div className=" flex flex-col gap-[48px] ">
        <div className=" flex flex-col gap-[24px]">
          <div className=" text-[2rem] leading-[48px] tracking-[0.96px] mob1:text-[28px]">
            Ricee
          </div>
          <div>Our Rice, a Feast of Nutrients, <span className=" md1:block">a Banquet of Wellness.</span> </div>
        </div>
        <div className=" flex flex-col gap-[12px]">
          <div>
            <img className=" inline" src="Location.svg" />
            &nbsp;&nbsp;Lumbini Road, Kakrahwa Bazar, <span className=" block">&nbsp;&nbsp;&nbsp;&nbsp; Siddharthnagar, Uttar Pradesh, India</span>
          </div>
         
        </div>
      </div>
      <div className=" flex flex-col gap-[32px] ">
        <div className=" mob1: text-[20px]">Contact Details</div>
        <div className=" flex flex-col gap-[2.1vh]">
          <div className=" whitespace-nowrap">
            <img className=" inline" src="Phone.svg" />
            &nbsp;&nbsp;+91 9087621517
          </div>
          <div className=" whitespace-nowrap flex">
            <img className=" inline" src="Phone.svg" />
            &nbsp;&nbsp;+91 9540182525
          </div>
          <div className=" flex gap-[18px]">
            <img className=" inline" src="Mail.svg" />
            <div>info@pbagrofoods.com</div>
          </div>
        </div>
        <div className="btn flex  gap-[29px]">
          <img src="Instagram.svg" />
          <img src="LinkedIn.svg" />
          <img src="Group.svg" />
          <img src="Facebook.svg" />
        </div>
      </div>
      <div className="bgHold relative">
        <img className="absolute mini:left-[-7rem] mob:left-[-5.5rem] sm:left-[-20%] md:left-[-14%] xl:left-[-6%]" src="rangoli.png" />
      </div>
      <div className=" absolute bottom-[2px] left-[50%] translate-x-[-50%] text-[1rem] text-[#5d5c5c] mob:text-[0.7rem]">Copyright &copy; 2022 P&B Agro Foods-All Rights Reserved</div>
      </div>
    
  );
};

export default Footer;
