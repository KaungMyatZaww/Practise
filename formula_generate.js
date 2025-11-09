function execute_expression(formula, values) {
  const vars = Object.assign({}, ...values);
  // can also do
  // const vars = Object.assign(...values);
  // // but this will just point to the values[0] so updating this const will also update the original value
  // values.y = 69;
  const expr = formula
    .replace(/\^/g, "**") // replace ^ with ** for JS exponentiation
    .replace(
      /\b([a-zA-Z]\w*)\b/g,
      (match) => vars[match.toLowerCase()] ?? match
    );
  console.log("[expr]", expr);
  console.log(vars);
  vars.y = 69;
  console.log(values);

  return eval(expr.replace(/\b(sqrt|sin|cos|tan|abs|max|min)\b/g, "Math.$1"));
}

const formula = "x + y * (x^2 + y^2)";
const formula_two = "X + y * (x**2 + Y**2)";
const formula_three = "(x^2 + y^2) / (x + y)";
const pythagoran = "sqrt(x^2 + y^2)";
const values = [{ x: 2 }, { y: 3 }];

const result = execute_expression(formula_three, values);
console.log(result);
