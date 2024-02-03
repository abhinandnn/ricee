"use client";
import React, { useState } from "react";
import Image from "next/image";
import Popup from "./popup";
import { Link } from "react-scroll";
function Product({ background, weight, text1, price }) {
  const [nutri, setNutri] = useState(false);
  const [active, setActive] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      <div className="z-10 bg-white rounded-[1rem]">
        <div
          className={` flex-col p-8 pt-[3rem] items-center gap-[1rem] font-gd relative w-[31.5rem] h-[41.5rem]`}
        >
          <div
            className={`${
              weight == 2 ? "w-[16rem] h-[24.85rem]" : "w-[18.8rem] h-[25.2rem]"
            } flex items-center justify-center`}
          >
            <Image
              src={background}
              className="drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[1.5rem] text-black">{text1}</div>
            <div className="flex justify-between w-[28.5rem] items-center">
              <span className="text-[3.5rem] text-black">₹1245</span>
              <button
                className={`transition-hover duration-300 hover:bg-white hover:text-mar border border-mar w-[11rem] h-[3.8875rem] bg-mar rounded-[0.75rem] text-[1.75rem] text-white`}
              >
                Buy now
              </button>
            </div>
            <span
              className="text-[1.25rem] cursor-pointer text-[#762023]"
              onClick={openPopup}
            >
              View more details
            </span>
          </div>
        </div>
      </div>
      {<Popup onClose={closePopup} show={showPopup} />}
    </>
  );
}

export default Product;
