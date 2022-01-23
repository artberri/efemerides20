import { useTranslation } from "next-i18next";
import { map, pipe, sort } from "ramda";
import { Fragment } from "react";
import { generateNumberArray } from "../../../../../utils/number";

export const TagCloud = (): JSX.Element => {
  const { t } = useTranslation();
  const tags = pipe(
    () => generateNumberArray(11),
    map((n) => t(`tagcloud.tag${n}`)),
    map((tag) => ({ tag, size: Math.floor(Math.random() * 6) + 10 })),
    sort(() => 0.5 - Math.random()),
  )();

  return (
    <p className="text-center text-primary" suppressHydrationWarning>
      {tags.map(({ tag, size }) => (
        <Fragment key={tag}>
          <span
            suppressHydrationWarning
            className={`inline-block pl-4 pr-4 text-xs`}
            style={{ fontSize: `${size}px` }}
          >
            {tag}
          </span>{" "}
        </Fragment>
      ))}
    </p>
  );
};
