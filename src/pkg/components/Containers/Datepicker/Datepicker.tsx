import React              from "react";
import Header             from "../../Commons/Header/Header";
import Weekdays           from "../../Commons/Weekdays/Weekdays";
import {useLoadingState}  from "../../../contexts/loading/LoadingContext";
import {useClassReferrer} from "../../../hooks/useClassReferrer";

type DatepickerProps = {}

/**
 * Datepicker Functional Component
 * @constructor
 * @return {React.FC<DatepickerProps>}
 */
const Datepicker: React.FC<DatepickerProps> = () => {
  const referrer = useClassReferrer();
  const loading = useLoadingState();

  console.debug({loading})

  return (
    <div className={referrer`ru8c-datepicker-container`}>
      <Header/>
      <Weekdays/>
    </div>
  );
};

export default Datepicker;
