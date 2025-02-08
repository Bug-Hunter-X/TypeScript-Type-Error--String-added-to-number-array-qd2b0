function combine(arr1: number[], arr2: number[]): number[] {
  //Filter out non-numbers from arr1 before combining
  const filteredArr1 = arr1.filter(item => typeof item === 'number');
  return filteredArr1.concat(arr2);
}

let arr1: (number | string)[] = [1, 2, 3];
arr1.push("hello");
let arr2: number[] = [4, 5, 6];

let result: number[] = combine(arr1, arr2); // No error with the solution file