// Recursive Fib
function fibRec(n){
  if (n < 2) return n;
  return fibRec(n-1) + fibRec(n-2);
}

// Iterative Fib
function fibIter(n){
  if (n < 2) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++){
    const next = a + b;
    a = b;
    b = next;
  }
  return b;
}

const tests = [12,234,999,55,754,345,222,555];

console.log("Recursive (only small ones):");
console.log(12, fibRec(12));

console.log("Iterative:");
tests.forEach(n => console.log(n, fibIter(n)));
