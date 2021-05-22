import React, { useMemo, useState } from "react";

/**
 * Types
 */
type State = boolean | undefined;
type Dispatch = ( (bool: boolean) => void ) | undefined;


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
}

/**
 * Global Provider
 * @param children
 * @constructor
 */
function LocaleProvider({ children }: ILocaleProvider): JSX.Element {
  const [authed, setAuthed] = useState<boolean>(false);
  return (
    <LocaleStateContext.Provider value={authed}>
      <LocaleDispatchContext.Provider value={setAuthed}>
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


// /**
//  * Dispatch hook
//  */
// function useAuthDispatch(): Dispatch {
//   const context: Dispatch = React.useContext(AuthDispatchContext);
//   if (context === undefined) {
//     throw new Error("[Tiny] - useAuthDispatch must be used within a AuthProvider");
//   }
//   return context;
// }
//
//
// /**
//  * Merge state and dispatch hooks
//  */
// function useAuth(): Array<any> {
//   return [useAuthState(), useAuthDispatch()];
// }
//
//
// export { AuthProvider, useAuth, useAuthState };
