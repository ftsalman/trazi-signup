import PropTypes from "prop-types";
import { Button } from "./button/Button";
import { cn } from "../../utils/utils";
import { IconArrowRight } from "../../assets/icons/InterfaceIcons";

export const AuthSectionHeader = ({
  head = "",
  descp = "",
  showBtn = false,
  onBtnClick = undefined,
  className = "",
}) => (
  <div className={cn("flex-shrink-0 max-w-[500px]", className)}>
    {showBtn && (
      <Button
        className="mb-2 px-0 flex-shrink-0 hover:bg-gray-50"
        variant="tertiary"
        onClick={onBtnClick}
      >
        <IconArrowRight size="24" />
        <p className="font-semibold text-lg text-brand-secondary-500">Back</p>
      </Button>
    )}
    <h4 className="text-[28px] font-bold text-brand-secondary-500">{head}</h4>
    {descp && (
      <h4 className="mt-1.5 text-base font-medium text-brand-secondary-200">
        {descp}
      </h4>
    )}
  </div>
);

AuthSectionHeader.propTypes = {
  head: PropTypes.node,
  descp: PropTypes.node,
  showBtn: PropTypes.bool,
  onBtnClick: PropTypes.func,
  className: PropTypes.string,
};
