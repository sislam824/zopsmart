function sum(args) {
  let total_sum = Number(args);

  function inner(b) {
    if (b === undefined) {
      return total_sum;
    }
    const num = Number(b);
    if (isNaN(num)) {
      throw new Error("Please provide a valid number.");
    }
    total_sum += num;
    return inner;
  }

  if (isNaN(total_sum)) {
    throw new Error("Please provide a valid number.");
  }

  return inner;
}
// example
// console.log(sum(2)(3)("4")(5)());
// console.log(sum(5)());
// console.log(sum("10")("20")(30)());
