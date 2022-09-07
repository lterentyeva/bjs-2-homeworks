"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant < 0) {
    arr;
  } else if (discriminant === 0) {
    let oneRoot = -b / (2 * a);
    arr[0] = oneRoot;
  } else if (discriminant > 0) {
    let firstRoot = (-b + Math.sqrt(discriminant)) / (2 * a);
    let secondRoot = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr[0] = firstRoot;
    arr[1] = secondRoot;
  }

  return arr;
}
