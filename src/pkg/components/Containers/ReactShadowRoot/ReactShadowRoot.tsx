import React, {useRef, useState} from "react";
import ReactDOM                  from "react-dom";
import {useMount}                from "../../../hooks/useMount";

const shadowRootSupported = window?.Element?.prototype?.hasOwnProperty("attachShadow");

type ReactShadowRootProps = {
  mode?: "open" | "closed",
}

/**
 * ReactShadowRoot Functional Component
 * @param {string} className - used to set a class on a higher element tag
 * @return {React.FC<ReactShadowRootProps>}
 */
const ReactShadowRoot: React.FC<ReactShadowRootProps> = ({children, mode}) => {
  const placeholderRef                = useRef<HTMLInputElement | null>(null);
  const shadowRootRef                 = useRef<ShadowRoot | undefined | null>(null);
  const [initialized, setInitialized] = useState(false);

  useMount(() => {
    if (shadowRootRef.current) return; // prevents error w/ React fast refreshing
    shadowRootRef.current = placeholderRef.current?.parentElement?.attachShadow({
      mode: mode || "open",
    });
    setInitialized(true);
  });

  if (!initialized) return <input ref={placeholderRef} type="hidden"/>;

  // @ts-ignore
  return ReactDOM.createPortal(children, shadowRootRef.current);
};

export default ReactShadowRoot;
