function combine(arr1: number[], arr2: number[]): number[] {
  return arr1.concat(arr2);
}

let arr1: number[] = [1, 2, 3];
arr1.push("hello"); // This line causes a type error
let arr2: number[] = [4, 5, 6];

let result: number[] = combine(arr1, arr2);