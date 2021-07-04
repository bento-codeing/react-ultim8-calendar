/**
 * Moves elements of an array from left to right, start to end
 * @param array
 * @param {number} start - The index start position
 * @returns {array} - Returns an array
 * @example
 *   const array = ["A", "B", "C", "D", "E", "F", "G"];
 *   //              0    1    2    3    4    5    6
 *
 *   // We want to start at the D letter
 *   moveLeftRight(array, 3);
 *
 *   console.log(array);
 *   // => ["D", "E", "F", "G", "A", "B", "C"]
 */
export function moveLeftRight(array: Array<any>, start: number) {
  const arr = [...array];
  for (let i = 0 ; i !== start ; i++) {
    arr.push(arr.shift());
  }
  return arr;
}
