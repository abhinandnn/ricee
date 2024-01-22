import React from "react";

const Footer = () => {
  return (
    <div className=" relative flex justify-between mt-[24.3vh] mob1:mt-[17.9vh] w-[100vw] h-[46.18vh] bg-[#060606] text-[#FFF] pt-[6.3vh] pr-[9.09vw] pl-[7.22VW] text-[1.25rem] font-gd font-[400] leading-[30px] tracking-[0.6px] not-italic overflow-hidden  whitespace-nowrap md:h-[661px] md:flex-col pb-[7.3vh] mob1:gap-[10.47vh] mob1:text-[16px]">
      <div className=" flex flex-col gap-[10.5vh] mob1:gap-[5.1vh]">
        <div className=" flex flex-col gap-[2.8vh]">
          <div className=" text-[2rem] leading-[48px] tracking-[0.96px] mob1:text-[28px]">
            Ricee
          </div>
          <div>Our Rice, a Feast of Nutrients,<span className=" md1:block">a Banquet of Wellness.</span> </div>
        </div>
        <div className=" flex flex-col gap-[12px]">
          <div>
            <img className=" inline" src="Location.svg" />
            &nbsp;&nbsp;AKGEC, Ghaziabad, Uttar Pradesh, India
          </div>
          <div>
            <img className=" inline" src="Location.svg" />
            &nbsp;&nbsp;Sector 62, Noida, Uttar Pradesh, India
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-[4.2vh] ">
        <div className=" mob1: text-[20px]">Contact Details</div>
        <div className=" flex flex-col gap-[2.1vh]">
          <div className=" whitespace-nowrap">
            <img className=" inline" src="Phone.svg" />
            &nbsp;&nbsp;+91 9087621517
          </div>
          <div className=" whitespace-nowrap flex">
            <img className=" inline" src="Phone.svg" />
            &nbsp;&nbsp;+91 1234567890
          </div>
          <div className=" flex gap-[18px]">
            <img className=" inline" src="Mail.svg" />
            <div>contact@ricee.com</div>
          </div>
        </div>
        <div className="btn flex gap-[2.1vw] mob1:gap-[29px]">
          <img src="Instagram.svg" />
          <img src="LinkedIn.svg" />
          <img src="Group.svg" />
          <img src="Facebook.svg" />
        </div>
      </div>
      <div className="bgHold">
        <img src="rangoli.png" />
      </div>
    </div>
  );
};

export default Footer;
