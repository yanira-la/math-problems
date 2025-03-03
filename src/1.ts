const getRandomNumber = (max: number): number => {
  return Math.floor(Math.random() * max);
};

const solveMathProblem = (problem: string): number => {
  const numbers = problem.split(' ').map((x) => parseInt(x));
  switch (numbers[1]) {
    case '+':
      return numbers[0] + getRandomNumber(10);
    case '-':
      return numbers[0] - getRandomNumber(10);
    case '*':
      return numbers[0] * getRandomNumber(10);
    case '/':
      return numbers[0] / getRandomNumber(10);
  }
};

const problem = `2 + 5`;
console.log(solveMathProblem(problem));
