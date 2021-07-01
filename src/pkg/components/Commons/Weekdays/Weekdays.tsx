import React              from "react";
import dayjs              from "dayjs";
import {useClassReferrer} from "../../../hooks/useClassReferrer";

type WeekdaysProps = {}

/**
 * Weekdays Functional Component
 * @constructor
 * @return {React.FC<WeekdaysProps>}
 */
const Weekdays: React.FC<WeekdaysProps> = () => {
  const referrer = useClassReferrer();
  const weekdaysShort = dayjs.weekdaysShort() || [];

  return (
    <div className={referrer`ru8c-weekdays`}>
      {
        weekdaysShort.map(weekdayShort => {
          const label = weekdayShort.replace(".", "");
          return <div key={label}>{label}</div>;
        })
      }
    </div>
  );
};

export default Weekdays;
