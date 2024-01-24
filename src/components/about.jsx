import React from "react";

const About = () => {
  return (
    <div className=" mt-[18.9vh]  mx-[7.4vw] flex gap-[24px] w-[85.3vw]   items-center md1:flex-col-reverse md1:items-center mob1:justify-center">
      <div className=" flex flex-col gap-[2.6vh] w-[100%]  text-[1.25rem] text-[#000] font-gd font-[400]  leading-[30px] tracking-[0.3px] not-italic ">
        <div>
          {" "}
          <div className=" text-[3.1rem] leading-[65px] tracking-[1.5px] mob:text-center">About Ricee</div>
          <div className=" mob:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
            sapien odio, eget faucibus ante lacinia eu. Donec finibus turpis at
            lacus viverra, et dignissim lorem commodo. Vestibulum ultrices est
            mi, id ullamcorper arcu sodales nec. Curabitur et fermentum sem, eu
            aliquam felis. Vestibulum lorem odio, tristique sit amet erat at,
            maximus porttitor turpis. Curabitur mi dolor, aliquet in justo sit
            amet, elementum ullamcorper ipsum.
          </div>
        </div>

        <div>
          <div className=" text-[2rem] leading-[48px] tracking-[0.96px] mob:text-center">Our Vision</div>
          <div className="  mob:text-center">
            {" "}
            Fusce imperdiet feugiat dolor, quis molestie neque tincidunt
            ultricies. Quisque et eleifend leo. Integer dictum efficitur quam
            molestie molestie. Vivamus mollis gravida dolor, vel fringilla eros
            ornare eget. Fusce vitae mollis neque. Sed aliquet massa vel nibh
            vestibulum elementum. Etiam placerat diam tincidunt ornare aliquet.
            Donec sed leo et purus feugiat varius quis et ligula.
          </div>
        </div>

        <div className=" text-[1.25rem] leading-[24px] tracking-[0.6px] mob:text-center">Check Ricee’s Locations <img src="arrow.svg" className=" inline"></img></div>
      </div>
      <div className=" flex justify-center items-center">
        <img src="Group 16.svg" className=" "/>
      </div>
    </div>
  );
};

export default About;
