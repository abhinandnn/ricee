import React from "react";

const Share = () => {
  return (
    <div className="relative w-[100vw] h-[51.2vh] border-t-[1px] border-b-[1px] border-solid border-[#744150] bg-[#FFE6CE] pl-[7.43vw] pt-[10.2vh] " >
      <div className="new"></div>
      <div className=" absolute right-0 top-0 h-[100%]"> <img className=" h-[100%]" src="hand.svg"></img></div>
      <div className=" w-[52.08vw] flex flex-col gap-[4.2vh]">
        <div className=" font-gd text-[3rem] not-italic font-[400] leading-[61.44px] text-[#0F0D0A]">Connect now with our experts for business enquiries</div>
        <div className=" w-[205px] h-[64px] rounded-[12px] bg-[#762023] flex justify-center items-center gap-[12px]">
            <img src="logo.svg"></img>
            <div className=" text-[#FFF] font-[400] font-gd leading-[19.2px] tracking-[0.48px] not-italic text-[1rem]">Whatsapp Now</div>
        </div>
      </div>
    </div>
  );
};

export default Share;
