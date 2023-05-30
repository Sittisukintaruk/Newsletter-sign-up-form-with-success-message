import React from "react";
import success from "../../assets/icon-success.svg";
import { useNavigate } from "react-router-dom";

const Subscribing = () => {
  const navigate = useNavigate();
  const handlerSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <React.Fragment>
      <div className=" flex h-screen w-full  max-w-full flex-col gap-[259px] rounded-[36px] bg-white px-6 pb-[63px] pt-[149px] md:h-auto md:max-w-[504px] md:gap-[40px] md:px-16 md:pt-[50px]">
        <div className="flex flex-col gap-6 text-Charcoal-Grey">
          <div className="flex flex-col items-start justify-start gap-[38px]">
            <img src={success} className="" alt="check" />
            <h1 className="text-[40px] font-bold leading-[50px] md:text-[55px] md:leading-[64px] ">
              Thanks for subscribing!
            </h1>
          </div>
          <p className="text-base font-normal">
            A confirmation email has been sent to <b>ash@loremcompany.com.</b> Please
            open it and click the button inside to confirm your subscription.
          </p>
        </div>
        <button
          onClick={handlerSubmit}
          className="rounded-lg bg-Charcoal-Grey py-4   text-base font-bold text-white hover:bg-gradient-to-r hover:from-ending hover:to-starting"
        >
          Dismiss message
        </button>
      </div>
    </React.Fragment>
  );
};

export default Subscribing;
