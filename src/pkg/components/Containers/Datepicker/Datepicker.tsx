import React                          from "react";
import cx                             from "classnames";
import Header                         from "../../Commons/Header/Header";
import Weekdays                       from "../../Commons/Weekdays/Weekdays";
import {useLoadingState}              from "../../../contexts/loading/LoadingContext";
import {useClassReferrer}             from "../../../hooks/useClassReferrer";
import {useConfigurationContextState} from "../../../contexts/configuration/ConfigurationContext";

type DatepickerProps = {
  className?: string,
  onChange?: (...args: any[]) => any,
}

/**
 * Datepicker Functional Component
 * @constructor
 * @return {React.FC<DatepickerProps>}
 */
const Datepicker: React.FC<DatepickerProps> = ({className}) => {
  const referrer          = useClassReferrer();
  const loading           = useLoadingState();
  const {classNamePrefix} = useConfigurationContextState();
  console.debug({loading, classNamePrefix});

  const classes: string = cx(
    referrer`ru8c-datepicker-container`,
    className,
    {[`${classNamePrefix}-ru8c-datepicker-container`]: classNamePrefix}
  );

  return (
    <div className={classes}>
      <Header/>
      <Weekdays/>
    </div>
  );
};

export default Datepicker;
