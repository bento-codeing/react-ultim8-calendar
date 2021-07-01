import React, {useState}  from "react";
import dayjs              from "dayjs";
import uniqid             from "uniqid";
import Datepicker         from "./components/Containers/Datepicker/Datepicker";
import {ReferrerProvider} from "./contexts/referrer/ReferrerContext";
import {LocaleProvider}   from "./contexts/locale/LocaleContext";
import {LoadingProvider}  from "./contexts/loading/LoadingContext";

type EntryPointProps = {
  locale: Locale,
  options?: {
    format?: {
      date?: string,
      monthsShort?: boolean,
      weekdaysMax?: boolean,
    }
  }
}

/**
 * EntryPoint Functional Component
 * @constructor
 * @return {React.FC<EntryPointProps>}
 */
const EntryPoint: React.FC<EntryPointProps> = ({ locale, options }) => {
  const [loading, setLoading] = useState<Boolean|null>(null);
  const uuid: string = uniqid();

  function handleFetchedLocale() {
    setLoading(false);
  }

  return (
      <ReferrerProvider initial={uuid}>
        <LocaleProvider initial={locale} onFetchedLocale={handleFetchedLocale}>
          {/* @ts-ignore */}
          <LoadingProvider controlledValue={loading} initial={true}>
            <Datepicker/>
          </LoadingProvider>
        </LocaleProvider>
      </ReferrerProvider>
  );
};

export default EntryPoint;
