import React from "react";

const Share = () => {
  return (
    <div className="relative w-[100vw] mt-[18.9vh] h-[51.2vh] border-t-[1px] border-b-[1px] border-solid border-[#744150] bg-[#FFE6CE] pl-[7.43vw] pt-[10.2vh] md:pt-[5.89vh] md:pl-[4.44vw] md:h-[45.02vh] overflow-hidden " >
      <div className="new absolute left-0 top-0 w-[1060px] h-[100%] bg-cover lg1:w-[780px] lg1:bg-contain md1:w-[650px] md:w-[540px] "></div>
      <div className=" absolute right-0 top-0  md:top-[12.57vh] md:right-[-11vw] md1:top-[10vh] mob1:right-[-8vw]"> <img className=" h-[100%] lg1:w-[540px] md1:w-[420px] md:w-[60.27vw] md:h-[159px] " src="hand.svg"></img></div>
      <div className=" w-[52.08vw] flex flex-col gap-[4.2vh] md:w-[68.7vw]">
        <div className=" font-gd text-[3rem] not-italic font-[400] leading-[61.44px] text-[#0F0D0A] mob1:text-[2rem] mob1:leading-[40.96px] ">Connect now with our experts for business enquiries</div>
        <div className="btn w-[205px] h-[64px] mob1:w-[165px] mob1:h-[56px] rounded-[12px] bg-[#762023] flex justify-center items-center gap-[12px]">
            <img src="logo.svg"></img>
            <div className=" text-[#FFF] font-[400] font-gd leading-[19.2px] tracking-[0.48px] not-italic text-[1rem]">Whatsapp Now</div>
        </div>
      </div>
    </div>
  );
};

export default Share;
