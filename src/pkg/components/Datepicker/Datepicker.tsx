import React, {useEffect, useRef, useState} from "react";
import uniqid                               from "uniqid";
import Header                               from "./dependencies/Header/Header";

type DatepickerProps = {

}

/**
 * Datepicker Functional Component
 * @constructor
 * @return {React.FC<DatepickerProps>}
 */
const Datepicker: React.FC<DatepickerProps> = () => {
  const { current: uniqidRefValue } = useRef(uniqid());

  return (
    <div className={`ru8c-datepicker-container-${uniqidRefValue}`}>
      <Header referrer={uniqidRefValue}/>
    </div>
  );
};

export default Datepicker;
