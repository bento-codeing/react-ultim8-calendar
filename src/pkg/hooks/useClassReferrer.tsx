import {useRef} from "react";
import uniqid   from "uniqid";


export type ReferrerMethod = (strings: TemplateStringsArray) => string

/**
 * Custom hook that adds a uniq id at the end of a string
 */
export function useClassReferrer() {
  const { current: uniqidRefValue } = useRef(uniqid());

  /**
   * Template literals parse function
   * @param strings
   */
  const tag: ReferrerMethod = strings => `${strings.raw[0]}-${uniqidRefValue}`;

  return [tag];
}
