import React              from "react";
import uniqid             from "uniqid";
import Header             from "../../Commons/Header/Header";
import {useClassReferrer} from "../../../hooks/useClassReferrer";
import {LocaleProvider}   from "../../../contexts/locale/LocaleContext";
import Weekdays           from "../../Commons/Weekdays/Weekdays";
import {ReferrerProvider} from "../../../contexts/referrer/ReferrerContext";

type DatepickerProps = {}

/**
 * Datepicker Functional Component
 * @constructor
 * @return {React.FC<DatepickerProps>}
 */
const Datepicker: React.FC<DatepickerProps> = () => {
  const referrer     = useClassReferrer();

  return (
    <div className={referrer`ru8c-datepicker-container`}>
      <Header/>
      <Weekdays/>
    </div>
  );
};

export default Datepicker;
