import React, {useState} from "react";
import dayjs             from "dayjs";
import localeData        from "dayjs/plugin/localeData";

/**
 * Types
 */
type State = Locale | undefined;
type Dispatch = ((locale: Locale) => void) | undefined;


/**
 * Contexts
 */
const LocaleStateContext    = React.createContext<State>(undefined);
const LocaleDispatchContext = React.createContext<Dispatch>(undefined);

/**
 * Interface for global provider
 */
interface ILocaleProvider {
  children?: React.ReactNode,
  initial?: Locale,
  onFetchedLocale?: () => void,
}

/**
 * Global Provider
 * @param children
 * @param initial
 * @param onFetchedLocale
 * @constructor
 */
function LocaleProvider({children, initial = "en", onFetchedLocale}: ILocaleProvider): JSX.Element {
  const [locale, setLocale] = useState<Locale>(initial);

  import(`dayjs/locale/${locale}`)
    .then(() => {
      dayjs.locale(locale);
      dayjs.extend(localeData);
      if (onFetchedLocale) onFetchedLocale();
    });

  return (
    <LocaleStateContext.Provider value={locale}>
      <LocaleDispatchContext.Provider value={setLocale}>
        {children}
      </LocaleDispatchContext.Provider>
    </LocaleStateContext.Provider>
  );
}

/**
 * State hook
 */
function useLocaleState(): State {
  const context: State = React.useContext(LocaleStateContext);
  if (context === undefined) {
    // TODO: only in debug mode
    throw new Error("useLocaleState must be used within a LocaleProvider");
  }
  return context;
}


/**
 * Dispatch hook
 */
function useLocaleDispatch(): Dispatch {
  const context: Dispatch = React.useContext(LocaleDispatchContext);
  if (context === undefined) {
    // TODO: only in debug mode
    throw new Error("useLocaleDispatch must be used within a LocaleProvider");
  }
  return context;
}


/**
 * Merge state and dispatch hooks
 */
function useLocale(): Array<any> {
  return [useLocaleState(), useLocaleDispatch()];
}


export {LocaleProvider, useLocale, useLocaleState};
