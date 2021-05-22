/** Description: Referrer Context is a simple unchanged state context based on hooks */
import React, {useRef} from "react";

/**
 * Type
 */
type Type = string | undefined;


/**
 * Contexts
 */
const ReferrerRefContext = React.createContext<Type>(undefined);

/**
 * Interface for global provider
 */
interface IReferrerProvider {
  children?: React.ReactNode,
  initial?: Type,
}

/**
 * Global Provider
 * @param children
 * @param initial
 * @constructor
 */
function ReferrerProvider({children, initial}: IReferrerProvider): JSX.Element {
  const {current: referrer} = useRef<Type>(initial);

  return (
    <ReferrerRefContext.Provider value={referrer}>
      {children}
    </ReferrerRefContext.Provider>
  );
}


/**
 * Custom Hook useReferrer
 */
function useReferrer(): Type {
  const context: Type = React.useContext(ReferrerRefContext);
  if (context === undefined) {
    throw new Error("useReferrer must be used within a ReferrerProvider");
  }
  return context;
}


export {ReferrerProvider, useReferrer};
