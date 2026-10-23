import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface CommonButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  isDownload?: boolean;
}

interface ButtonAsButton extends CommonButtonProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: never;
  rel?: never;
}

interface ButtonAsLink extends CommonButtonProps {
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none select-none";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-orange text-white hover:bg-orange-hover shadow-subtle active:scale-[0.98]",
  secondary:
    "bg-transparent text-navy border border-secondary-border hover:bg-orange-light hover:border-orange/40 active:scale-[0.98]",
  ghost: "bg-transparent text-navy hover:text-orange active:scale-[0.98]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm rounded-lg",
  md: "h-11 px-5 text-sm rounded-xl",
  lg: "h-12 px-6 text-base rounded-xl",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  showArrow = false,
  isDownload = false,
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  const ArrowIcon = isDownload ? Download : ArrowUpRight;
  const arrow = showArrow ? (
    <ArrowIcon
      className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      aria-hidden="true"
    />
  ) : null;

  if ("href" in props && props.href !== undefined) {
    const isExternal =
      props.href.startsWith("http") || props.href.startsWith("mailto:");
    const content = (
      <>
        {children}
        {arrow}
      </>
    );

    if (isDownload) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          download
          className={`${classes} group`}
        >
          {content}
        </a>
      );
    }

    if (isExternal) {
      return (
        <a
          href={props.href}
          target={props.target ?? "_blank"}
          rel={props.rel ?? "noopener noreferrer"}
          className={`${classes} group`}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={props.href}
        target={props.target}
        rel={props.rel}
        className={`${classes} group`}
      >
        {content}
      </Link>
    );
  }

  const btnProps = props as ButtonAsButton;
  return (
    <button
      type={btnProps.type ?? "button"}
      disabled={btnProps.disabled}
      onClick={btnProps.onClick}
      className={`${classes} group`}
    >
      {children}
      {arrow}
    </button>
  );
}
