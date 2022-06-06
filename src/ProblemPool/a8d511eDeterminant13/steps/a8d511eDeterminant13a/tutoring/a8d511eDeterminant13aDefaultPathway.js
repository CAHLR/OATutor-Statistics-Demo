var hints = [{id: "a8d511eDeterminant13a-h1", type: "hint", dependencies: [], title: "Principle", text: "Write a 3x3 determinant with the values of x and y and a column of 1", variabilization: {}}, {id: "a8d511eDeterminant13a-h2", type: "hint", dependencies: ["a8d511eDeterminant13a-h1"], title: "Operation", text: "Evaluate the 3x3 determinant along the column of 1", variabilization: {}}, {id: "a8d511eDeterminant13a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0"], dependencies: ["a8d511eDeterminant13a-h2"], title: "Calculation", text: "What is $$1\\left(-2\\right)-1\\left(-1\\right)+1\\times1$$?", variabilization: {}}, {id: "a8d511eDeterminant13a-h4", type: "hint", dependencies: ["a8d511eDeterminant13a-h3"], title: "Principle", text: "The value of the determinant is 0, so the points are collinear", variabilization: {}}, ]; export {hints};