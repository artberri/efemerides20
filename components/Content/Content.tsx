import { ReactNode } from "react";

export interface ContentProps {
  children: ReactNode;
}

export const Content = ({ children }: ContentProps) => {
  return <div className="max-w-6xl mx-auto px-4">{children}</div>;
};
