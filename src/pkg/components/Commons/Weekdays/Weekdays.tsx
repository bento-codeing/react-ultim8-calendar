import React            from "react";
import {ReferrerMethod} from "../../../hooks/useClassReferrer";

type WeekdaysProps = {
  referrer: ReferrerMethod
}

/**
 * Weekdays Functional Component
 * @param {string} className - used to set a class on a higher element tag
 * @constructor
 * @return {React.FC<WeekdaysProps>}
 */
const Weekdays: React.FC<WeekdaysProps> = ({ referrer }) => {

  return (
    <div className={referrer`ru8c-weekdays`}>
      <div>Lun</div>
      <div>Mar</div>
      <div>Mer</div>
      <div>Jeu</div>
      <div>Ven</div>
      <div>Sam</div>
      <div>Dim</div>
    </div>
  );
};

export default Weekdays;
