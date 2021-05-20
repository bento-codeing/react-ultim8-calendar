import React                                from "react";
import {ReactComponent as ChevronLeftIcon}  from "../../../../assets/icons/arrow_back_white_24dp.svg";
import {ReactComponent as ChevronRightIcon} from "../../../../assets/icons/arrow_forward_white_24dp.svg";
import {ReferrerMethod}                     from "../../../../hooks/useClassReferer";

type HeaderProps = {
  referrer: ReferrerMethod
}

/**
 * Header Functional Component
 * @constructor
 * @return {React.FC<HeaderProps>}
 */
const Header: React.FC<HeaderProps> = ({ referrer }) => {
  return (
    <div className={referrer`ru8c-header`}>
      <button className={referrer`ru8c-header__prev-btn`}>
        <ChevronLeftIcon/>
      </button>
      <div className={referrer`ru8c-header__date`}>
        <h2>May</h2>
        <p>Fri May 29, 2020</p>
      </div>
      <button className={referrer`ru8c-header__next-btn`}>
        <ChevronRightIcon/>
      </button>
    </div>
  );
};

export default Header;
