import {useReferrer} from "../contexts/referrer/ReferrerContext";


export type ReferrerMethod = (strings: TemplateStringsArray) => string

/**
 * Custom hook that adds a uniq id at the end of a string
 */
export function useClassReferrer(uuid?: string) {
  const referrer = useReferrer({ debug: false });

  /**
   * Template literals parse function
   * @param strings
   */
  const tag: ReferrerMethod = strings => `${strings.raw[0]}-${uuid||referrer}`;

  return tag;
}
