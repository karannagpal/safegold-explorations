import React from "react";

import { ButtonProps, ButtonVariant } from "@/types";

function Button({
  ctaText,
  onClickHandler,
  variant = ButtonVariant.CUSTOM,
  customClasses = "",
}: ButtonProps) {
  const defaultClasses = "border-2 rounded-md text-sm px-5 py-3";
  const whiteVariantClasses = "bg-white border-2 border-white text-[#C4A646]";
  const greenVariantClasses =
    "bg-[#00bbb4] border-2 border-[#00bbb4] text-white";
  const greenOutlinedVariantClasses =
    "bg-white border-2 border-[#00bbb4] text-[#00bbb4]";

  const getAllClassNames = () => {
    switch (variant) {
      case ButtonVariant.WHITE:
        return `${defaultClasses} ${whiteVariantClasses} ${customClasses}`;
      case ButtonVariant.GREEN:
        return `${defaultClasses} ${greenVariantClasses} ${customClasses}`;
      case ButtonVariant.GREEN_OUTLINED:
        return `${defaultClasses} ${greenOutlinedVariantClasses} ${customClasses}`;
      case ButtonVariant.CUSTOM:
        return `${defaultClasses} ${customClasses}`;
    }
  };

  return (
    <button onClick={onClickHandler} className={getAllClassNames()}>
      {ctaText}
    </button>
  );
}

export default Button;
