import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "solid" | "ghost";
const cls = (v: Variant) => `btn${v === "ghost" ? " ghost" : ""}`;

export function LinkButton({ variant = "solid", external, ...p }: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; external?: boolean }) {
  return <a {...p} className={cls(variant)} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} />;
}

export function Button({ variant = "solid", ...p }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button type="button" {...p} className={cls(variant)} />;
}
