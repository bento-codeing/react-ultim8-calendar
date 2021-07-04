/** Description: Configuration Context Context is a simple state context based on hooks */
import React, {useState} from "react";

/**
 * Types
 */
type State = any | null | undefined;
type Dispatch = ((configurationContext: any | null) => void) | undefined;


/**
 * Contexts
 */
const ConfigurationContextStateContext    = React.createContext<State>(undefined);
const ConfigurationContextDispatchContext = React.createContext<Dispatch>(undefined);

/**
 * Type for global provider
 */
type ConfigurationContextProviderProps = {
  children?: React.ReactNode,
  value?: State,
}

/**
 * Global Provider
 * @param children
 * @param value
 * @constructor
 */
function ConfigurationContextProvider({children, value}: ConfigurationContextProviderProps): JSX.Element {
  const [configurationContext, setConfigurationContext] = useState<State>(value);

  return (
    <ConfigurationContextStateContext.Provider value={configurationContext}>
      <ConfigurationContextDispatchContext.Provider value={setConfigurationContext}>
        {children}
      </ConfigurationContextDispatchContext.Provider>
    </ConfigurationContextStateContext.Provider>
  );
}

/**
 * State hook
 */
function useConfigurationContextState(): State {
  const context: State = React.useContext(ConfigurationContextStateContext);
  if (context === undefined) {
    throw new Error("useConfigurationContextState must be used within a ConfigurationContextProvider");
  }
  return context;
}


/**
 * Dispatch hook
 */
function useConfigurationContextDispatch(): Dispatch {
  const context: Dispatch = React.useContext(ConfigurationContextDispatchContext);
  if (context === undefined) {
    throw new Error("useConfigurationContextDispatch must be used within a ConfigurationContextProvider");
  }
  return context;
}


/**
 * Merge state and dispatch hooks
 */
function useConfigurationContext(): Array<any> {
  return [useConfigurationContextState(), useConfigurationContextDispatch()];
}


export {ConfigurationContextProvider, useConfigurationContext, useConfigurationContextState};
