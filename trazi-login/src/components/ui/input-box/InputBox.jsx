import { cn } from "../../../utils/utils";
import PropTypes from "prop-types";
import { inputboxVariants } from "./inputBoxVariants";

/**
 * InputBox component renders a styled input field.
 *
 * @param {React.InputHTMLAttributes<HTMLInputElement} props - Component props.
 * @param {string} [props.className] - Optional additional class names to apply to the input element.
 * @returns {JSX.Element} The input element.
 */

export const InputBox = ({
  className = "",
  size = "md",
  variant = "secondary",
  ...props
}) => (
  <input
    type="text"
    className={cn(inputboxVariants({ size, variant, className }))}
    {...props}
  />
);

InputBox.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
};
