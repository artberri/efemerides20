import { Fragment, ReactNode } from "react";
import { Content } from "../Content/Content";
import { Breadcrumps } from "./components/Breadcrumps";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export interface PageProps {
  children: ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return (
    <Fragment>
      <Header />
      <Breadcrumps />
      <main className="py-6">
        <Content>{children}</Content>
      </main>
      <Footer />
    </Fragment>
  );
};
