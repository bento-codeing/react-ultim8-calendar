import React            from "react";
import {ReactComponent as ChevronLeftIcon} from "../../../../assets/icons/arrow_back_white_24dp.svg";
import {ReactComponent as ChevronRightIcon} from "../../../../assets/icons/arrow_forward_white_24dp.svg";

type HeaderProps = {
  referrer: string
}

/**
 * Header Functional Component
 * @constructor
 * @return {React.FC<HeaderProps>}
 */
const Header: React.FC<HeaderProps> = ({ referrer }) => {
  return (
    <div className={`ru8c-header-${referrer}`}>
      <button className={`ru8c-header__prev-btn-${referrer}`}>
        <ChevronLeftIcon/>
      </button>
      <div className={`ru8c-header__date-${referrer}`}>
        <h2>May</h2>
        <p>Fri May 29, 2020</p>
      </div>
      <button className={`ru8c-header__next-btn-${referrer}`}>
        <ChevronRightIcon/>
      </button>
    </div>
  );
};

export default Header;
