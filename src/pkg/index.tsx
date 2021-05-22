import React              from "react";
import {ReferrerProvider} from "./contexts/referrer/ReferrerContext";
import {LocaleProvider}   from "./contexts/locale/LocaleContext";
import Datepicker         from "./components/Containers/Datepicker/Datepicker";
import uniqid             from "uniqid";

type EntryPointProps = {
  locale: Locale,
}

/**
 * EntryPoint Functional Component
 * @constructor
 * @return {React.FC<EntryPointProps>}
 */
const EntryPoint: React.FC<EntryPointProps> = ({ locale }) => {
  const uuid: string = uniqid();

  return (
      <ReferrerProvider initial={uuid}>
        <LocaleProvider>
          <Datepicker/>
        </LocaleProvider>
      </ReferrerProvider>
  );
};

export default EntryPoint;
