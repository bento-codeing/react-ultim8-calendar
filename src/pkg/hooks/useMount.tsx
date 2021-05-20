import { useEffect } from "react";


/**
 * Custom React Hook played only when the component is mounted
 * @param callback
 * @param optionalUnMountCallback
 */
export function useMount(callback: () => void, optionalUnMountCallback?: () => void): void {
  function f() {
    callback();
    if (typeof optionalUnMountCallback === "function")
      return optionalUnMountCallback;
  }


  useEffect(f, []);
}
