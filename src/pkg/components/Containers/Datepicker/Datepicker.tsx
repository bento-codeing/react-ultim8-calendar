import React              from "react";
import Header             from "../../Commons/Header/Header";
import {useClassReferrer} from "../../../hooks/useClassReferrer";
import {LocaleProvider}   from "../../../contexts/locale/LocaleContext";
import Weekdays           from "../../Commons/Weekdays/Weekdays";

type DatepickerProps = {
  locale: Locale,
}

/**
 * Datepicker Functional Component
 * @constructor
 * @return {React.FC<DatepickerProps>}
 */
const Datepicker: React.FC<DatepickerProps> = ({locale}) => {
  const [referrer] = useClassReferrer();

  return (
    <LocaleProvider initial={locale}>
      <div className={referrer`ru8c-datepicker-container`}>
        <Header referrer={referrer}/>
        <Weekdays referrer={referrer}/>
      </div>
    </LocaleProvider>
  );
};

export default Datepicker;
