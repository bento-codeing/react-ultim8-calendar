import React, {useMemo}               from "react";
import dayjs                          from "dayjs";
import {useClassReferrer}             from "../../../hooks/useClassReferrer";
import {useLocaleState}               from "../../../contexts/locale/LocaleContext";
import {useConfigurationContextState} from "../../../contexts/configuration/ConfigurationContext";
import {moveLeftRight}                from "../../../utils/varTypes/structured/array/moveLeftRight";

type WeekdaysProps = {}

/**
 * Weekdays Functional Component
 * @constructor
 * @return {React.FC<WeekdaysProps>}
 */
const Weekdays: React.FC<WeekdaysProps> = () => {
  const referrer = useClassReferrer();
  const locale   = useLocaleState();
  const {format} = useConfigurationContextState();

  const weekdayLabels = useMemo(() => {
    const wkdays         = dayjs?.[format?.weekdaysMax ? "weekdays" : "weekdaysShort"]();
    const firstDayOfWeek = dayjs.localeData().firstDayOfWeek();
    return moveLeftRight(wkdays, firstDayOfWeek);
  }, [format?.weekdaysMax, locale]);

  return (
    <div className={referrer`ru8c-weekdays`}>
      {
        weekdayLabels.map(weekdayShort => {
          const label = weekdayShort.replace(".", "");
          return <div key={label}>{label}</div>;
        })
      }
    </div>
  );
};

export default Weekdays;
