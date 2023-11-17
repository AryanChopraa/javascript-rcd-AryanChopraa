const generateCombos = (n) => {
  //    Write your code here
};

const [_1, _2, sizeStr, ..._3] = process.argv;

let size = Number(sizeStr);
let combos = generateCombos(size);

combos.forEach((combo) => {
  console.log(combo.join(","));
});

module.exports = { generateCombos };
