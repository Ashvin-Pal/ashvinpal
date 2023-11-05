import React from "react";
import "./button.css";

export interface ButtonProps extends React.ComponentProps<"button"> {
  label: string;
  size?: string;
  primary?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label,
  size = "small",
  primary = true,
  ...props
}: ButtonProps): JSX.Element => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
