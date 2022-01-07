import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface FooterLinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: ReactNode;
}

export const FooterLink = ({ children, ...props }: FooterLinkProps) => {
  return (
    <a className="underline" {...props}>
      {children}
    </a>
  );
};
