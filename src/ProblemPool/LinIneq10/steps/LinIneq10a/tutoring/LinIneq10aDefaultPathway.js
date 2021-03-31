var hints = [{id: "LinIneq10a-h1", type: "hint", dependencies: [], title: "Absolute Value Inequalities", text: "$$|X| \\leq k$$ is equivalent to $$-k \\leq X \\leq k$$."}, {id: "LinIneq10a-h2", type: "hint", dependencies: ["LinIneq10a-h1"], title: "Applying the Formula for Absolute Value Inequalities", text: "The inequality can be rewritten as $$-3 \\leq x-1 \\leq 3$$."}, {id: "LinIneq10a-h3", type: "hint", dependencies: ["LinIneq10a-h2"], title: "Solve Compound Inequality", text: "We can solve the compound inequality by simply add 1 to all three parts."}, {id: "LinIneq10a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$-2 \\leq x \\leq 4$$"], dependencies: ["LinIneq10a-h3"], title: "Solve Compound Inequality", text: "What is the inequality?", choices: ["$$-4 \\leq x \\leq 2$$", "$$-2 \\leq x \\leq 4$$"]}, {id: "LinIneq10a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$[-2,4]$$"], dependencies: ["LinIneq10a-h4"], title: "Interval Notation", text: "What is $$-2 \\leq x \\leq 4$$ written in the interval notation?", choices: ["$$[-2,4]$$", "$$(-2,4)$$"]}, ]; export {hints};