import React from "react";
import check from "../../assets/icon-list.svg";
import bg from "../../assets/illustration-sign-up-desktop.svg";
import bgmobile from "../../assets/illustration-sign-up-mobile.svg";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const initialValues = {
  email: "",
};

const Card = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="flex h-screen w-full flex-col  items-center  justify-center gap-[31px] bg-white md:h-auto md:max-w-[929px] md:flex-row md:gap-[64px] md:rounded-[36px] md:py-[27px] md:pl-[64px] md:pr-[23px]">
        <section className="w-full flex-1 mx-auto  md:hidden">
          <img
            src={bgmobile}
            className="w-full max-w-[540px] select-none "
            alt=""
          />
        </section>
        <section className="flex flex-1 flex-col gap-[44px]  px-6 pb-[40px] md:px-0 md:pb-0">
          <div className=" flex flex-col gap-6 text-Charcoal-Grey">
            <div className="flex flex-col gap-[22px]">
              <h1 className=" text-[40px] font-bold leading-[64px] md:text-[55px] ">
                Stay updated!
              </h1>
              <p className="text-base font-normal">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
            </div>
            <ul className="flex flex-col gap-[11px]">
              <li className="flex items-baseline gap-4 md:items-center">
                <img src={check} className="h-[20px] w-[20px]" alt="check" />
                <span className="self-center">
                  Product discovery and building what matters
                </span>
              </li>
              <li className="flex items-baseline gap-4 md:items-center">
                <img src={check} className="h-[20px] w-[20px]" alt="check" />
                <span className="self-center">
                  Measuring to ensure updates are a success
                </span>
              </li>
              <li className="flex items-baseline gap-4 md:items-center">
                <img src={check} className="h-[20px] w-[20px]" alt="check" />
                <span className="self-center">And much more!</span>
              </li>
            </ul>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={ValidationSchema}
            onSubmit={(values) => {
              setTimeout(() => {
                navigate("/Subscriber");
              }, 500);
            }}
          >
            {({ errors, touched, handleSubmit }) => (
              <div className="flex flex-col gap-[10px]">
                <div className="flex justify-between">
                  <span className="text-sm font-bold text-gray-500 ">
                    Email address
                  </span>
                  <span className=" text-sm font-bold text-Tomato">
                    {errors.email && touched.email
                      ? "Vaild email reaquired"
                      : null}
                  </span>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-[22px]"
                >
                  <Field
                    name="email"
                    type="email"
                    className={`${
                      errors.email && touched.email
                        ? "bg-bgfile focus:border-Tomato"
                        : ""
                    }  rounded-lg border  border-Grey px-[23px] py-4 focus:border-Charcoal-Grey focus:outline-none`}
                    placeholder="email@company.com"
                  />

                  <button
                    className="rounded-lg bg-Charcoal-Grey py-4   text-base font-bold text-white hover:bg-gradient-to-r hover:from-ending hover:to-starting"
                    type="submit"
                  >
                    Subscribe to monthly newsletter
                  </button>
                </form>
              </div>
            )}
          </Formik>
        </section>
        <section className="hidden flex-1 md:block">
          <img src={bg} className="select-none" alt="" />
        </section>
      </div>
    </React.Fragment>
  );
};

export default Card;
