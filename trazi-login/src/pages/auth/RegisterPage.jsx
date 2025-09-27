import React, { useState } from "react";
import { InputGroup } from "../../components/ui/InputGroup";
import { IconTextBox } from "../../components/ui/IconTextBox";
import {
  IconEmail,
  IconLock,
  IconUser,
} from "../../assets/icons/InterfaceIcons";
import { Button } from "../../components/ui/button/Button";
import { PasswordInput } from "../../components/ui/PasswordInput";
import { Link } from "react-router-dom";

const INI_FORM_DATA = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  termsAccepted: false,
};

export const RegisterPage = () => {
  const [formData, setFormData] = useState(INI_FORM_DATA);
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.userName.trim()) newErrors.userName = "Username is required";
    if (!formData.email.includes("@"))
      newErrors.email = "Valid email is required";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.termsAccepted)
      newErrors.termsAccepted = "You must accept Terms & Conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return; // stop if errors
    setShowOtp(true); // simulate success → OTP screen
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP");
      return;
    }
    console.log("OTP Submitted:", otp);
    // call backend to verify OTP
  };

  return (
    <div className="w-full md:w-auto md:min-w-[356px] border border-gray-200 p-4 bg-white rounded-xl shadow-md">
      {/* Logo */}
      <div className="flex justify-center ">
        <img
          src="/imgs/trazi-logo.png"
          alt="Trazi Logo"
          className="h-30 w-auto"
        />
      </div>

      {/* Registration Form */}
      {!showOtp ? (
        <form onSubmit={handleFormSubmit} className="mt-2 space-y-2.5">
          {/* Username */}
          <InputGroup label="Username">
            <IconTextBox
              prefix={<IconUser size="20" />}
              name="userName"
              id="userName"
              placeholder="User Name"
              inputClassName={`border-gray-200 ${
                errors.userName && "border-red-500"
              }`}
              value={formData.userName}
              onChange={handleInputChange}
            />
          </InputGroup>
          {errors.userName && (
            <p className="text-xs text-red-500">{errors.userName}</p>
          )}

          {/* Email */}
          <InputGroup label="Email">
            <IconTextBox
              prefix={<IconEmail size="20" />}
              name="email"
              id="email"
              placeholder="Email Address"
              inputClassName={`border-gray-200 ${
                errors.email && "border-red-500"
              }`}
              value={formData.email}
              onChange={handleInputChange}
            />
          </InputGroup>
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email}</p>
          )}

          {/* Password */}
          <InputGroup label="Password">
            <PasswordInput
              name="password"
              id="password"
              placeholder="Password"
              inputClassName={`border-gray-200 ${
                errors.password && "border-red-500"
              }`}
              value={formData.password}
              onChange={handleInputChange}
            />
          </InputGroup>
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password}</p>
          )}

          {/* Confirm Password */}
          <InputGroup label="Confirm Password">
            <PasswordInput
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              inputClassName={`border-gray-200 ${
                errors.confirmPassword && "border-red-500"
              }`}
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </InputGroup>
          {errors.confirmPassword && (
            <p className="text-xs text-red-500">{errors.confirmPassword}</p>
          )}

          {/* Terms & Conditions */}
          <div className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleInputChange}
              className="h-4 w-4 border-gray-300 rounded"
            />
            <label className="text-gray-600 text-xs">
              I agree to the{" "}
              <Link to="#" className="text-yellow-500 text-xs underline">
                Terms & Conditions
              </Link>
            </label>
          </div>
          {errors.termsAccepted && (
            <p className="text-xs text-red-500">{errors.termsAccepted}</p>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full mt-2 bg-yellow-500 rounded-full text-white"
            variant="secondary"
          >
            Register
          </Button>
        </form>
      ) : (
        /* OTP Form Section */

        <form onSubmit={handleOtpSubmit} className="mt-4 space-y-3">
          <h2 className="text-center text-lg font-semibold  text-gray-700">
            Enter OTP
          </h2>
          <p className="text-center text-xs text-gray-500">
            We’ve sent a 6-digit code to your email/phone
          </p>

          <InputGroup label="OTP Code">
            <IconTextBox
              prefix={<IconLock size="20" />}
              name="otp"
              id="otp"
              placeholder="Enter OTP"
              inputClassName="border-gray-200 text-center tracking-widest"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </InputGroup>
          <Button
            type="submit"
            className="w-full bg-yellow-500 hover:scale-105 transition-all rounded-full text-white"
            variant="secondary"
          >
            Verify OTP
          </Button>
        </form>
      )}

      {/* Already have account */}
      {!showOtp && (
        <div className="mt-1.5 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="https://app.flowbee.io/auth/login"
            className="text-yellow-500 font-medium hover:underline"
          >
            Login
          </a>
        </div>
      )}
    </div>
  );
};
