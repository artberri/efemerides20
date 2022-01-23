import { getMonths } from "../../../../../utils/date";
import { Month } from "../Month/Month";

export const Months = (): JSX.Element => {
  const months = getMonths();

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 p-0">
      {months.map((month) => (
        <li key={month.name} className="list-none pb-0">
          <Month month={month} />
        </li>
      ))}
    </ul>
  );
};
