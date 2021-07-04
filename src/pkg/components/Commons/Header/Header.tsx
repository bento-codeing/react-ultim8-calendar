import React                                from "react";
import {ReactComponent as ChevronLeftIcon}  from "../../../assets/icons/arrow_back_white_24dp.svg";
import {ReactComponent as ChevronRightIcon} from "../../../assets/icons/arrow_forward_white_24dp.svg";
import {useClassReferrer}                   from "../../../hooks/useClassReferrer";
import cx                                   from "classnames";
import {useConfigurationContextState}       from "../../../contexts/configuration/ConfigurationContext";

type HeaderProps = {}

/**
 * Header Functional Component
 * @constructor
 * @return {React.FC<HeaderProps>}
 */
const Header: React.FC<HeaderProps> = () => {
  const referrer          = useClassReferrer();
  const {classNamePrefix} = useConfigurationContextState();

  const classes = {
    container: cx(referrer`ru8c-header`, {[`${classNamePrefix}-ru8c-header`]: classNamePrefix}),
    prevBtn  : cx(referrer`ru8c-header__prev-btn`, {[`${classNamePrefix}-ru8c-header__prev-btn`]: classNamePrefix}),
    date     : cx(referrer`ru8c-header__date`, {[`${classNamePrefix}-ru8c-header__date`]: classNamePrefix}),
    nextBtn  : cx(referrer`ru8c-header__next-btn`, {[`${classNamePrefix}-ru8c-header__next-btn`]: classNamePrefix}),
  };

  return (
    <div className={classes.container}>
      <button className={classes.prevBtn}>
        <ChevronLeftIcon/>
      </button>
      <div className={classes.date}>
        <h2>May</h2>
        <p>Fri May 29, 2020</p>
      </div>
      <button className={classes.nextBtn}>
        <ChevronRightIcon/>
      </button>
    </div>
  );
};

export default Header;
