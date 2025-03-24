"use client";

import React from "react";
import { useFormik } from "formik";
import { getInTouchSchema } from "../Schemas/getInTouchSchema";

const GetInTouch = () => {
  const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      questionType: "",
      courseType: "",
    },
    validationSchema: getInTouchSchema,
    onSubmit,
  });

  return (
    <div className="bg-[#DBD1ED] px-12 lg:px-24 flex py-24">
      <div className="">
        <h2 className="font-semibold text-2xl mb-5">Get in Touch</h2>
        <div className="flex flex-col bg-white gap-4 p-6 rounded-lg shadow-sm pt-16">
          <div className="flex flex-col lg:flex-row">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:w-1/2"
              id="getInTouch"
            >
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="First Name"
                  style={{
                    boxShadow: "inset 0px 1.35px 1.35px rgba(0, 0, 0, 0.25)",
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg "
                />
                {errors.firstName && touched.firstName && (
                  <p className="text-red-500">{errors.firstName}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Last Name"
                  style={{
                    boxShadow: "inset 0px 1.35px 1.35px rgba(0, 0, 0, 0.25)",
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg "
                />
                {errors.lastName && touched.lastName && (
                  <p className="text-red-500">{errors.lastName}</p>
                )}
              </div>

              <div className="col-span-2">
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email Address"
                  style={{
                    boxShadow: "inset 0px 1.35px 1.35px rgba(0, 0, 0, 0.25)",
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                />
                {errors.email && touched.email && (
                  <p className="text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="col-span-2">
                <textarea
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Message...."
                  style={{
                    boxShadow: "inset 0px 1.35px 1.35px rgba(0, 0, 0, 0.25)",
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md h-32"
                ></textarea>
                {errors.message && touched.message && (
                  <p className="text-red-500">{errors.message}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="questionType"
                  value={values.questionType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Question Type"
                  style={{
                    boxShadow: "inset 0px 1.35px 1.35px rgba(0, 0, 0, 0.25)",
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg "
                />
                {errors.questionType && touched.questionType && (
                  <p className="text-red-500">{errors.questionType}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="courseType"
                  value={values.courseType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Course Type"
                  style={{
                    boxShadow: "inset 0px 1.35px 1.35px rgba(0, 0, 0, 0.25)",
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg "
                />
                {errors.courseType && touched.courseType && (
                  <p className="text-red-500">{errors.courseType}</p>
                )}
              </div>
            </form>
            <div className="lg:w-1/2 py-8 lg:p-8 flex flex-col gap-4">
              <h3 className="text-xl font-semibold mb-4">
                Frequently Asked Questions
              </h3>

              <div className="space-y-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold"> • What about pricing?</p>
                  <p className="text-gray-600 w-full leading-8">
                    Our services are tailored to your needs. Course fees,
                    consultations, and membership prices vary — we'll guide you
                    to the best option for your journey.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="font-semibold">
                    • How soon will I get a response?
                  </p>
                  <p className="text-gray-600 leading-8">
                    We aim to reply within 24-48 hours to ensure you get the
                    support and answers you need.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-16 mb-10 lg:mr-24">
            <button
              type="submit"
              className="bg-[#390099] text-white px-3 py-2 rounded-md font-medium text-[8px]"
              form="getInTouch"
              disabled={isSubmitting}
            >
              Send Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
