const input = "786";

function* check(a) {
  yield typeof a;
}
// Generate tokens
function* lexer(input) {
  let indexer = 0; // represents the current position in the input

  while (indexer <= input.length) {
    let char = input[indexer];
    if (char === undefined) {
      yield { type: "EOF" };
    } else {
      yield { type: "NUMBER", value: char };
    }

    yield* check(char);

    indexer++;
  }
}

console.log("Starting lexer");
for (let token of lexer(input)) {
  console.log(token);
}
console.log("End of lexer");
