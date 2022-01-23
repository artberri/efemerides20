import { Fragment, ReactNode } from "react";
import { Content } from "../../shared/Content/Content";
import { Breadcrumps, BreadcrumpsProps } from "./components/Breadcrumps";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export interface PageProps {
  children: ReactNode;
  breadcrumps: BreadcrumpsProps;
}

export const Page = ({ children, breadcrumps }: PageProps): JSX.Element => {
  return (
    <Fragment>
      <Header />
      <Breadcrumps {...breadcrumps} />
      <main className="py-6">
        <Content>{children}</Content>
      </main>
      <Footer />
    </Fragment>
  );
};
