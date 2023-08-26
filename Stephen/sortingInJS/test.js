/// number sort

// const data = [3, 5, 2];
// let i = 0;
// console.log(
//   data.sort((a, b) => {
//     i++;
//     return a - b;
//   })
// );
// console.log(i);

/// string sort

// const data = ["t", "A", "a", "x", "B", "b"];
// let i = 0;
// console.log(
//   data.sort((a, b) => {
//     return a.localeCompare(b);
//   })
// );
// console.log(i);

/// object sort

// const data = [
//   { name: "t", age: 3 },
//   { name: "x", age: 12 },
//   { name: "y", age: 23 },
//   { name: "s", age: 6 },
// ];

// // sort by age
// const getSortValue = (data) => {
//   return data.name;
// };

// const order = "desc";

// data.sort((a, b) => {
//   const valA = getSortValue(a);
//   const valB = getSortValue(b);

//   const reverseOrder = order === "desc" ? -1 : 1;

//   if (typeof valA === "string") {
//     return valA.localeCompare(valB) * reverseOrder;
//   } else if (typeof valA === "number") {
//     return (valA - valB) * reverseOrder;
//   }
// });

// console.log(data);

const data = [
  { name: "t", age: 3 },
  { name: "x", age: 12 },
  { name: "y", age: 23 },
  { name: "s", age: 6 },
];

const copyData = structuredClone(data);
copyData.sort((a, b) => {
  return a.age - b.age;
});

copyData[0].age = 1000000;

console.log({ copyData, data });
