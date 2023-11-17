const generateCombos = (n) => {
  const combos = [];

  
  for (let i = 0; i < n; i++) {
    const rowCombo = [];
    for (let j = 1; j <= n; j++) {
      rowCombo.push(i * n + j);
    }
    combos.push(rowCombo);
  }

 
  for (let i = 1; i <= n; i++) {
    const colCombo = [];
    for (let j = 0; j < n; j++) {
      colCombo.push(j * n + i);
    }
    combos.push(colCombo);
  }


  const diag1 = [];
  const diag2 = [];
  for (let i = 0; i < n; i++) {
    diag1.push(i * n + i + 1);
    diag2.push((n - i - 1) * n + i + 1);
  }
  combos.push(diag1);
  combos.push(diag2);

  return combos;
};

const sizeArgIndex = process.argv.indexOf('-n');
const size = sizeArgIndex !== -1 ? Number(process.argv[sizeArgIndex + 1]) : 3;
const combos = generateCombos(size);

combos.forEach((combo) => {
  console.log(`[${combo.join(", ")}]`);
});


module.exports = { generateCombos };
