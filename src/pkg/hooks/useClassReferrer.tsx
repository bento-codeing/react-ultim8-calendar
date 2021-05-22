import {useReferrer} from "../contexts/referrer/ReferrerContext";


export type ReferrerMethod = (strings: TemplateStringsArray) => string

/**
 * Custom hook that adds a uniq id at the end of a string
 */
export function useClassReferrer() {
  const referrer = useReferrer();

  /**
   * Template literals parse function
   * @param strings
   */
  const tag: ReferrerMethod = strings => `${strings.raw[0]}-${referrer}`;

  return tag;
}
