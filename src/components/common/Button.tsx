import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "outline";
  size?: "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const base =
    "font-sans font-semibold rounded-xl shadow-btn transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-primary";
  const variants = {
    primary:
      "bg-primary text-white hover:bg-blue-700",
    accent:
      "bg-accent text-white hover:bg-green-600",
    outline:
      "bg-white border border-primary text-primary hover:bg-blue-50",
  };
  const sizes = {
    md: "px-5 py-2 text-base",
    lg: "px-7 py-3 text-lg",
  };
  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
