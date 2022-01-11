import Link from "next/link";
import { Fragment } from "react";
import { Content } from "../../Content/Content";

export interface BreadcrumpsProps {
  current: string;
  previous?: [path: string, title: string][];
}

export const Breadcrumps = ({
  current,
  previous = [],
}: BreadcrumpsProps): JSX.Element => {
  return (
    <nav className="bg-gray-200">
      <Content>
        <p className="text-xs py-2 text-gray-600">
          {previous.map(([path, title]) => (
            <Fragment key={path}>
              <Link href={path}>
                <a className="text-primary">{title}</a>
              </Link>{" "}
              &raquo;{" "}
            </Fragment>
          ))}
          <span>{current}</span>
        </p>
      </Content>
    </nav>
  );
};
