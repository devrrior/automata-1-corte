export const checkAutomata = (input) => {
  const states = {
    q0: { 2: "q1" },
    q1: { 1: "q2" },
    q2: { E: "q3", H: "q11", D: "q33" },
    q3: { 4: "q4" },
    q4: { S: "q5" },
    q5: { 0: "q6" },
    q6: { 9: "q7" },
    q7: { 9: "q8", 8: "q8" },
    q8: { 0: "q9" },
    q9: { 0: "q10" },
    q11: { N: "q12", R: "q27" },
    q12: { S: "q13" },
    q13: { 2: "q14" },
    q14: { D: "q15" },
    q15: { 9: "q16", A: "q24" },
    q16: { 0: "q17" },
    q17: { 0: "q18" },
    q18: { _: "q19" },
    q19: { T: "q20" },
    q20: { P: "q21" },
    q21: { M: "q22" },
    q22: { X: "q23" },
    q24: { 0: "q25" },
    q25: { 0: "q26" },
    q27: { S: "q28" },
    q28: { 1: "q29" },
    q29: { 6: "q30" },
    q30: { G: "q31" },
    q31: { 0: "q32" },
    q32: { 0: "q18" },
    q33: { D: "q34" },
    q34: { S: "q35" },
    q35: { 1: "q36" },
    q36: { 4: "q37" },
    q37: { 5: "q38" },
    q38: { 0: "q39" },
    q39: { 0: "q40" },
    q40: { _: "q41" },
    q41: { T: "q42" },
    q42: { P: "q43" },

    q10: {}, q23: {}, q26: {}, q43: {}
  };

  let currentState = "q0";
  let history = ["q0"];
  const inputArray = input.split("");
  let response;


  for (let i = 0; i < inputArray.length; i++) {
    const char = inputArray[i];
    if (states[currentState][char]) {
      currentState = states[currentState][char];
      history.push(currentState);
      console.log(`the current state is ${currentState}, the transition is ${char} and the next state is ${states[currentState][char]}`);
    } else {
      console.log("else statement");
      response = { success: false, message: "Automata no valido, su secuencia de estados hasta donde llego fue el siguiente: " + history.join(" -> ")};
      break;
    }
  }

  if (input.length !== 10 && input.length !== 13 && input.length !== 15) {
    return { success: false, message: "Automata no valido, su secuencia de estados hasta donde llego fue el siguiente: " + history.join(" -> ")};
  }


  if (currentState !== "q10" && currentState !== "q18" && currentState !== "q23" && currentState !== "q26" && currentState !== "q40" && currentState !== "q43") {
    return { success: false, message: "Automata no valido, su secuencia de estados hasta donde llego fue el siguiente: " + history.join(" -> ")};
  }
  return response || { success: true, message: "Automata valido, su secuencia de estados hasta donde llego fue el siguiente: " + history.join(" -> ")};
};

// /**
//  * @param {string} input
//  * @returns {boolean}
//  */
// export const checkAutomata = (input) => {
//   return /^21(E4S09[98]00|HNS2DA00|(HNS2D900|HRS16G00)(_TPMX)?|DDS14500(_TP)?)$/.test(input);
// };
