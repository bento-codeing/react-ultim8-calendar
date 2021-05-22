import React              from "react";
import {useClassReferrer} from "../../../hooks/useClassReferrer";

type WeekdaysProps = {}

/**
 * Weekdays Functional Component
 * @constructor
 * @return {React.FC<WeekdaysProps>}
 */
const Weekdays: React.FC<WeekdaysProps> = () => {
  const referrer = useClassReferrer();

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
