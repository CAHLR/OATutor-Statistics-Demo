var hints = [{id: "LinIneq9a-h1", type: "hint", dependencies: [], title: "Representing Distance with Algebraic Expression", text: "The distance from x to 5 can be represented using an absolute value symbol, $$|x-\\left(5\\right)|$$."}, {id: "LinIneq9a-h2", type: "hint", dependencies: ["LinIneq9a-h1"], title: "Defining Inequality", text: "All values of x that satisfy the condition can be represented as the inequality: $$|x-\\left(5\\right)| \\leq 4$$."}, {id: "LinIneq9a-h3", type: "hint", dependencies: ["LinIneq9a-h2"], title: "Absolute Value Inequalities", text: "$$|X| \\leq k$$ is equivalent to $$-k \\leq X \\leq k$$."}, {id: "LinIneq9a-h4", type: "hint", dependencies: ["LinIneq9a-h3"], title: "Applying the Formula for Absolute Value Inequalities", text: "$$|x-\\left(5\\right)| \\leq 4$$ can be written as two inequalities: $$x-5 \\leq 4$$ and $$x-5 \\geq -4$$."}, {id: "LinIneq9a-h5", type: "hint", dependencies: ["LinIneq9a-h4"], title: "Solution Set", text: "The two inequalities we get from solving $$x-5 \\leq 4$$ and $$x-5 \\geq -4$$ are: $$x \\leq 9$$ and $$x \\geq 1$$."}, {id: "LinIneq9a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["[1,9]"], dependencies: ["LinIneq9a-h5"], title: "Interval Notation", text: "What is $$x \\leq 9$$ and $$x \\geq 1$$ written in the interval notation?", choices: ["(1,9)", "[1,9]"]}, ]; export {hints};