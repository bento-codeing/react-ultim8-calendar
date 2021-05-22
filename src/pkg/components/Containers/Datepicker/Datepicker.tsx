import React              from "react";
import uniqid             from "uniqid";
import Header             from "../../Commons/Header/Header";
import {useClassReferrer} from "../../../hooks/useClassReferrer";
import {LocaleProvider}   from "../../../contexts/locale/LocaleContext";
import Weekdays           from "../../Commons/Weekdays/Weekdays";
import {ReferrerProvider} from "../../../contexts/referrer/ReferrerContext";

type DatepickerProps = {
  locale: Locale,
}

/**
 * Datepicker Functional Component
 * @constructor
 * @return {React.FC<DatepickerProps>}
 */
const Datepicker: React.FC<DatepickerProps> = ({locale}) => {
  const uuid: string = uniqid();
  const referrer     = useClassReferrer(uuid);

  return (
    <ReferrerProvider initial={uuid}>
      <LocaleProvider initial={locale}>
        <div className={referrer`ru8c-datepicker-container`}>
          <Header/>
          <Weekdays/>
        </div>
      </LocaleProvider>
    </ReferrerProvider>
  );
};

export default Datepicker;
