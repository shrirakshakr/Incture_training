function evaluation(express, variable, value){
    for(let i=0; i<variable.length; i++)
    {
        express= express.replace(variable[i], value[i]);
    }
    let sqrtParts = express.match(/sqrt\(([^)]+)\)/g);
    if (sqrtParts) {
        for (let part of sqrtParts) {
            let inner = part.slice(5, -1); 

            let innerValue = eval(inner);


            if (innerValue < 0) {
                return -1;
            }
        }
    }

    express=express.replace(/sqrt/g, "Math.sqrt");


    let result = eval(express);
    
    return Math.round(result * 100) / 100;
}
console.log(evaluation("sqrt(m) + sqrt(n)", ["m","n"], [16,9]));
console.log(evaluation("sqrt(x * y) - z", ["x","y","z"], [2,-3,1]));

























// function evaluateExpression(expression, variables, values) {
//     // Replace variables with corresponding values
//     for (let i = 0; i < variables.length; i++) {
//         let regex = new RegExp("\\b" + variables[i] + "\\b", "g");
//         expression = expression.replace(regex, values[i]);
//     }

//     // Check for square root of negative numbers
//     let sqrtParts = expression.match(/sqrt\(([^)]+)\)/g);
//     if (sqrtParts) {
//         for (let part of sqrtParts) {
//             let inner = part.slice(5, -1); // get the inside of sqrt(...)
//             let innerValue = eval(inner);
//             if (innerValue < 0) {
//                 return -1;
//             }
//         }
//     }

//     // Replace sqrt with Math.sqrt for actual evaluation
//     expression = expression.replace(/sqrt/g, "Math.sqrt");

//     // Evaluate the final expression
//     let result = eval(expression);

//     // Round to 2 decimal places if needed
//      return Math.round(result * 100) / 100;
// }














































// function evaluateExpression(expression, variables, values) {
//     // Step 1: Replace variables with values in order
//     for (let i = 0; i < variables.length; i++) {
//         const variable = new RegExp('\\b' + variables[i] + '\\b', 'g');
//         expression = expression.replace(variable, values[i]);
//     }

//     // Step 2: Detect all sqrt(...) occurrences and validate non-negative inner values
//     const sqrtRegex = /sqrt\(([^)]+)\)/g;
//     let match;
//     while ((match = sqrtRegex.exec(expression)) !== null) {
//         try {
//             const inner = match[1];
//             const innerVal = Function('"use strict";return (' + inner + ')')();
//             if (innerVal < 0) return -1;
//         } catch {
//             return -1;
//         }
//     }

//     // Step 3: Replace sqrt with Math.sqrt and evaluate the final expression
//     const safeExpression = expression.replace(/sqrt/g, 'Math.sqrt');
//     let result;
//     try {
//         result = Function('"use strict";return (' + safeExpression + ')')();
//     } catch {
//         return -1;
//     }

//     // Step 4: Return rounded result
//     return Math.round(result * 100) / 100;
// }
