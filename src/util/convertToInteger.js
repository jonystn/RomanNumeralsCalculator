export default function convertToInteger(value, numbersObject) {
  let romanToInteger = [];

  let nextIndex;

  value.forEach((v, index, arr) => {
    if (index !== nextIndex) {
      if (
        arr[index + 1] &&
        numbersObject[arr[index + 1]].value > numbersObject[v].value
      ) {
        nextIndex = index + 1;
        romanToInteger.push(
          numbersObject[arr[index + 1]].value - numbersObject[v].value
        );
      } else {
        romanToInteger.push(numbersObject[v].value);
      }
    }
  });

  // SUM

  const sum = romanToInteger.reduce((a, b) => a + b);

  return sum;
}
