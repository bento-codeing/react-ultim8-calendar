import React, {useState}              from "react";
import uniqid                         from "uniqid";
import Datepicker                     from "./components/Containers/Datepicker/Datepicker";
import {ReferrerProvider}             from "./contexts/referrer/ReferrerContext";
import {LocaleProvider}               from "./contexts/locale/LocaleContext";
import {LoadingProvider}              from "./contexts/loading/LoadingContext";
import {ConfigurationContextProvider} from "./contexts/configuration/ConfigurationContext";
import "./index.scss";
import ReactShadowRoot                from "./components/Containers/ReactShadowRoot/ReactShadowRoot";

type EntryPointProps = {
  className?: string,
  classNamePrefix?: string,
  locale: Locale,
  onChange?: (...args: any[]) => any,
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
const EntryPoint: React.FC<EntryPointProps> = ({className, classNamePrefix, locale, onChange, options}) => {
  const [loading, setLoading] = useState<Boolean | null>(null);
  const uuid: string          = uniqid();

  function handleFetchedLocale() {
    setLoading(false);
  }

  return (
    <ReactShadowRoot>
      <ConfigurationContextProvider value={{...options, classNamePrefix}}>
        <ReferrerProvider initial={uuid}>
          <LocaleProvider initial={locale} onFetchedLocale={handleFetchedLocale}> {/* @ts-ignore */}
            <LoadingProvider controlledValue={loading} initial={true}>
              <Datepicker className={className} onChange={onChange}/>
            </LoadingProvider>
          </LocaleProvider>
        </ReferrerProvider>
      </ConfigurationContextProvider>
    </ReactShadowRoot>
  );
};

export default EntryPoint;
