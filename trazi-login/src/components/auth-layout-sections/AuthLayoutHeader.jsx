import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button/Button";

export const AuthLayoutHeader = ({
  hideBackBtn = true,
  right = null,
  onBackBtnClick = undefined,
  prevPath = undefined,
}) => {
  const navigate = useNavigate();

  console.log(prevPath, "prevPaths");

  const handleBack = () => {
    navigate(prevPath ? prevPath : -1);
  };

  return (
    <div className="z-[1] flex-shrink-0 flex items-center justify-between gap-4 container lg:px-12 py-2 md:py-6">
      <div className="flex items-center gap-4">
        {!hideBackBtn && (
          <Button
            className="font-semibold text-sm size-10 p-1 hover:bg-brand-primary-100"
            variant="tertiary"
            title="Back to login"
            onClick={handleBack}
          >
            {/* <IconArrowBack size="20" /> */}
          </Button>
        )}

        <img
          src="/imgs/trazi-logo.png"
          alt="logo"
          width="120"
        />
      </div>
      {right}
      {/* <div className="flex items-center gap-2 flex-shrink-0">
        {right}
        <Select
          labelKey="name"
          valueKey="code"
          options={AVAILABLE_LANGUAGES}
          containerClassName="w-fit min-w-[140px] flex-shrink-0"
          className="focus:ring-0 border-none"
          optionClassName="text-xs"
          showSearch={false}
          placeholder="Select Language"
          selectedOption={selectedLang}
          showClearBtn={false}
          onSelect={setSelectedLang}
          renderOption={(option) => <SelectRender {...option} />}
          render={(option) => <SelectRender {...option} />}
        />
      </div> */}
    </div>
  );
};
