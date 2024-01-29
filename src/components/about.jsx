import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className=" pt-[18.9vh] mb-[13.15vh] mx-[5vw] flex gap-[24px]   md1:flex-col-reverse md1:items-center mob1:justify-center"
    >
      <div className=" flex flex-col gap-[2rem] w-[100%]  text-[1.25rem] text-[#000] font-gd font-[400]  leading-[30px] tracking-[0.3px] not-italic ">
        <div className=" flex flex-col gap-[1.5rem]">
          {" "}
          <div className=" text-[3.1rem] leading-[65px] tracking-[1.5px] ">
            About Ricee
          </div>
          <div className=" flex flex-col md1:gap-[15px]">
            <div className=" text-[2.1rem] leading-[65px] tracking-[1.5px] text-center text-[#545654]">
              Kalanamak rice
            </div>
            <div className=" flex gap-[40px] items-center md1:flex-col-reverse">
              <div>
                {" "}
                <span className=" font-bold ">Kalanamak</span> is a scented rice of Nepal and India. Its name means
                black husk (Kala = black; the suffix ‘namak’ means salt). This
                variety has been in cultivation since the Buddhist period (600
                BC). It was featured in the book Speciality rices of the world
                by the Food and Agriculture Organization of the United Nations.
                Chinese monk Faxian wrote that when Buddha visited Kapilvastu
                for the first time after attaining enlightenment’, villagers
                asked him for Prasad (Gift), Buddha gave them some grains of
                kalanamak rice and asked them to sow in marshy land and said,
                "It will have a typical aroma and will always remind people of
                me". It was granted the Geographical Indication (Gl) Tag in 2012
                by the Government of India. It is rich in micronutrients such as
                Iron and Zinc. It has double protein that of common rice and has
                a low Glycemic Index making it relatively sugar-Free and
                suitable for diabetics.
              </div>
              <img
                src="kala.PNG"
                className=" h-[350px] w-[350px] rounded-[50%]"
              />
            </div>
          </div>
          <div className=" flex flex-col mt-[10px] md1:gap-[15px] ">
            <div className=" text-[2.1rem] leading-[65px] tracking-[1.5px] text-center text-[#545654]">
            P&B Agro Foods
            </div>
            <div className=" flex gap-[40px] items-center md1:flex-col-reverse">
              <div>
                {" "}
                P&B Agro Foods brings you the original and quality Kalanamak
                rice from the lands of Siddharthnagar. We are on a mission to
                let the world know about Kalanamak rice and its health benefits.
                Due to lack of research and change in soil conditions due to
                excess use of fertilizers, over the years, the yield of this
                rice has reduced significantly. We have the vision to increase
                the cultivation of kalanamak rice by assisting and supporting
                our farmers. We help them monitor crops at defined intervals and
                take necessary steps if required. P&B aims to become a trustable
                and reliable organization both for our farmers and customers.
              </div>
              <img
                src="kala.PNG"
                className=" h-[350px] w-[350px] rounded-[50%]"
              />
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-[20px]">
          <div className=" text-[3.1rem] leading-[48px] tracking-[0.96px] text-center">
            Our Vision
          </div>
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

        <div className=" text-[1.25rem] leading-[24px] tracking-[0.6px] mob:text-center">
          Check Ricee’s Locations{" "}
          <img src="arrow.svg" className=" inline"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
