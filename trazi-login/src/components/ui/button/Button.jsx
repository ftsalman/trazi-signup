import PropTypes from "prop-types";
import { cn } from "../../../utils/utils";
import { buttonVariants } from "./buttonVariants";

export const Button = ({
  size,
  variant,
  className,
  children,
  onClick,
  isLoading = false,
  ref,
  ...otherProps
}) => (
  <button
    ref={ref}
    className={cn(buttonVariants({ size, variant, className }))}
    onClick={(e) => onClick?.(e)}
    type="button"
    disabled={isLoading}
    {...otherProps}
  >
    {isLoading ? "Loading..." : children}
  </button>
);

Button.propTypes = {
  size: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  ref: PropTypes.any,
};
