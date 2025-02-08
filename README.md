# TypeScript Type Error: String added to Number Array

This repository demonstrates a common TypeScript type error.  The `bug.ts` file shows a function that combines two number arrays.  However, a string is pushed into the first array, resulting in a type error because TypeScript enforces type safety.

The `bugSolution.ts` file provides a solution using type guards and array filtering to prevent this error.