import { MouseEventHandler } from "react";

export enum ButtonVariant {
  WHITE = "WHITE",
  GREEN = "GREEN",
  GREEN_OUTLINED = "GREEN_OUTLINED",
  CUSTOM = "CUSTOM",
}

export interface ButtonProps {
  ctaText: string;
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonVariant;
  customClasses?: string;
}
