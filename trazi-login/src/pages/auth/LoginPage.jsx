import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputGroup } from "../../components/ui/InputGroup";
import { AuthSectionHeader } from "../../components/ui/AuthSectionHeader";
import { IconTextBox } from "../../components/ui/IconTextBox";
import { IconEmail } from "../../assets/icons/InterfaceIcons";
import { PasswordInput } from "../../components/ui/PasswordInput";
import { Button } from "../../components/ui/button/Button";

const INI_FORM_DATA = {
  userName: "",
  password: "",
  rememberMe: false,
  termsAccepted: false,
};

export const LoginPage = () => {
  // states
  const [formData, setFormData] = useState(INI_FORM_DATA);
  const [formErrors, setFormErrors] = useState({
    userName: "",
    password: "",
    termsAccepted: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // handle input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // handle submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.termsAccepted) {
      setFormErrors((prev) => ({
        ...prev,
        rememberMe: "You must accept the Terms & Conditions",
      }));
      setIsLoading(false);
      return;
    }

    if (formData?.userName === "admin" && formData?.password === "123") {
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } else {
      setFormErrors({
        userName: formData.userName ? "" : "Username is required",
        password: formData.password
          ? "Invalid password"
          : "Password is required",
        termsAccepted: "",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full md:w-auto md:min-w-[356px] border border-gray-200 p-4 bg-white rounded-xl shadow-md">
      <div className="flex justify-center mb-6">
        <img
          src="/imgs/trazi-logo.png"
          alt="Trazi Logo"
          className="h-30 w-auto"
        />
      </div>

      <form className="mt-6 space-y-5" onSubmit={handleFormSubmit}>
        {/* Username */}
        <InputGroup
          label="User Name"
          >
          <IconTextBox
            prefix={<IconEmail size="20" />}
            name="userName"
            id="userName"
            value={formData.userName}
            onChange={handleInputChange}
            placeholder="User Name"
            inputClassName={
              !formErrors?.userName && "border-brand-secondary-100"
            }
            hasError={!!formErrors?.userName}
          />
          {formErrors.userName && (
            <p className="text-red-500 text-sm mt-1">{formErrors.userName}</p>
          )}
        </InputGroup>

        {/* Password */}
        <InputGroup
          label="Password"
          >
          <PasswordInput
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            inputClassName={
              !formErrors?.password && "border-brand-secondary-100"
            }
            hasError={!!formErrors?.password}
          />
          {formErrors.password && (
            <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
          )}
        </InputGroup>

        {/* Remember Me */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            checked={formData.rememberMe}
            onChange={handleInputChange}
            className="h-4 w-4 rounded border-gray-300 accent-yellow-400"
          />
          <label
            htmlFor="rememberMe"
            className="text-sm text-gray-800 font-medium"
          >
            Remember Me
          </label>
        </div>

        {/* Forgot Password */}
        <Link to="#">
          <p className="mt-1 text-end  font-medium text-sm text-yellow-500">
            Forgot Password ?
          </p>
        </Link>

        {/* Submit Button */}
        <Button
          variant="secondary"
          type="submit"
          className="w-full mt-4 bg-yellow-500 text-white hover:scale-105 transition-all rounded-full"
        >
          {isLoading ? "Loading.." : "Login"}
        </Button>
      </form>

      {/* Register link */}
      <p className="mt-6 text-center text-sm text-gray-600">
        Don’t have an account?{" "}
        <Link to="/register" className="text-yellow-500 font-medium hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
};
