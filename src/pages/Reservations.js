import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import Datepicker from "react-tailwindcss-datepicker";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Reservations() {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });
  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      phone: "",
      type: "",
      comment: "",
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      await wait(2000);
      setIsLoading(false);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Phone number is required"),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Comment is required"),
    }),
  });
  return (
    <div className="flex flex-col py-10 text-white text-center w-1/2">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col w-full space-y-6 justify-center text-center items-center"
      >
        <div className="flex flex- col form-control w-full ">
          <label className="label">
            <span className="label-text">What is your first name?</span>
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Type firstname here"
            className="input input-bordered flex w-full"
            {...formik.getFieldProps("firstName")}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <span className="text-red-700 text-start">
              {formik.errors.firstName}
            </span>
          )}
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">What is your email address?</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Type email here"
            className="input input-bordered w-full "
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-red-700 text-start">
              {formik.errors.email}
            </span>
          )}
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">What is your phone number?</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="phone"
            placeholder="Type phone number here"
            className="input input-bordered w-full "
            {...formik.getFieldProps("phone")}
          />
          {formik.touched.phone && formik.errors.phone && (
            <span className="text-red-700 text-start">
              {formik.errors.phone}
            </span>
          )}
        </div>

        <div className="form-control w-full ">
          {" "}
          <label className="label">
            <span className="label-text">Select Date</span>
          </label>
          <Datepicker
            primaryColor={"emerald"}
            value={value}
            onChange={handleValueChange}
            showShortcuts={true}
          />
        </div>
        <button
          type="submit"
          isLoading={isLoading}
          className="btn w-1/2 capitalize bg-secondary border-0 text-primary hover:bg-primary hover:text-secondary "
        >
          Submit
        </button>
      </form>
    </div>
  );
}
