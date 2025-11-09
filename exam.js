function execute_expression(formula, values) {
  const arithemic = Object.assign({}, ...values);
  const expression = formula
    .replace(/\^/g, "**")
    .replace(
      /\b([a-zA-Z]\w*)\b/g,
      (match) => arithemic[match.toLowerCase()] ?? match
    );
  return eval(
    expression.replace(/\b(sqrt|sin|cos|tan|abs|max|min)\b/g, "Math.$1")
  );
}
const pythagoran = "sqrt(x^2 + y^2)";
const values = [{ x: 2 }, { y: 3 }];
const result = execute_expression(pythagoran, values);
console.log(result);
