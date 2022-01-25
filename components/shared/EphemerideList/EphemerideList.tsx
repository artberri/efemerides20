import { Ephemeride } from "../Ephemeride/Ephemeride";

export interface EphemerideListProps {
  title: string;
  ephemerides: Ephemerides;
  className?: string;
}

export const EphemerideList = ({
  title,
  ephemerides,
  className,
}: EphemerideListProps): JSX.Element => {
  return (
    <div className={`pt-6 ${className}`}>
      <h2 className="font-heading text-primary text-3xl pb-4">{title}</h2>
      {ephemerides.map((ephemeride) => (
        <Ephemeride key={ephemeride.content} ephemeride={ephemeride} />
      ))}
    </div>
  );
};
