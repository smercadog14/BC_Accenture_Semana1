let mensaje = document.getElementById("mensaje");
let casilla = document.getElementById("casilla");
let historial = document.getElementById("historial");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");

// operaciones
let btnSuma = document.getElementById("btnSuma");
let btnResta = document.getElementById("btnResta");
let btnMulti = document.getElementById("btnMulti");
let btnDivi = document.getElementById("btnDivi");
let btnIgual = document.getElementById("btnIgual");
let btnAC = document.getElementById("btnAC");
let btnCE = document.getElementById("btnCE");
let btnPunto = document.getElementById("btnPunto");

//variables temporales
let num1Temp = "";
let num2Temp = "";
let op = "";
let hTemp = "";

//funciones

const btn1f = () => {
  if (op === "") {
    num1Temp += "1";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
      num2Temp += "1";
      casilla.innerHTML = num2Temp;
    }
  }
};

const btn2f = () => {
  if (op === "") {
    num1Temp += "2";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
      num2Temp += "2";
      casilla.innerHTML = num2Temp;
    }
  }
};

const btn3f = () => {
  if (op === "") {
    num1Temp += "3";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
      num2Temp += "3";
      casilla.innerHTML = num2Temp;
    }
  }
};

const btn4f = () => {
  if (op === "") {
    num1Temp += "4";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
      num2Temp += "4";
      casilla.innerHTML = num2Temp;
    }
  }
};

const btn5f = () => {
  if (op === "") {
    num1Temp += "5";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
      num2Temp += "5";
      casilla.innerHTML = num2Temp;
    }
  }
};

const btn6f = () => {
  if (op === "") {
    num1Temp += "6";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
      num2Temp += "6";
      casilla.innerHTML = num2Temp;
    }
  }
};

const btn7f = () => {
  if (op === "") {
    num1Temp += "7";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
      num2Temp += "7";
      casilla.innerHTML = num2Temp;
    }
  }
};

const btn8f = () => {
  if (op === "") {
    num1Temp += "8";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
      num2Temp += "8";
      casilla.innerHTML = num2Temp;
    }
  }
};

const btn9f = () => {
  if (op === "") {
    num1Temp += "9";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
      num2Temp += "9";
      casilla.innerHTML = num2Temp;
    }
  }
};

const btn0f = () => {
  if (op === "") {
    num1Temp += "0";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
      num2Temp += "0";
      casilla.innerHTML = num2Temp;
    }
  }
};

const btnPuntof = () => {
  if (num1Temp.includes(".") && op === "") {
    mensaje.innerHTML = "Ya existe un punto en Operador 1";
    lM();
  } else {
    if (op === "" && num1Temp === "") {
      num1Temp += "0.";
      casilla.innerHTML = num1Temp;
    } else {
      if (op === "") {
        num1Temp += ".";
        casilla.innerHTML = num1Temp;
      } else {
        if (num2Temp.includes(".") && op !== "") {
          mensaje.innerHTML = "Ya existe un punto en Operador 2";
          lM();
        } else {
          if (num2Temp === "") {
            num2Temp += "0.";
            casilla.innerHTML = num2Temp;
          } else {
            num2Temp += ".";
            casilla.innerHTML = num2Temp;
          }
        }
      }
    }
  }
};

const btnSumaf = () => {
  if (num1Temp === "") {
    mensaje.innerHTML = "favor digite un primer numero";
    lM();
  } else {
    casilla.innerHTML = "";
    op = "+";
    hTemp += num1Temp + op;
    historial.innerHTML = hTemp;
  }
};

const btnRestaf = () => {
  if (num1Temp === "") {
    mensaje.innerHTML = "favor digite un primer numero";
    lM();
  } else {
    casilla.innerHTML = "";
    op = "-";
  }
};

const btnMultif = () => {
  if (num1Temp === "") {
    mensaje.innerHTML = "favor digite un primer numero";
    lM();
  } else {
    casilla.innerHTML = "";
    op = "*";
  }
};

const btnDivif = () => {
  if (num1Temp === "") {
    mensaje.innerHTML = "favor digite un primer numero";
    lM();
  } else {
    casilla.innerHTML = "";
    op = "/";
  }
};

const lM = () => {
  setTimeout(() => {
    mensaje.innerHTML = "";
  }, 2000);
};

const btnIgualf = () => {
  if (num2Temp === "") {
    mensaje.innerHTML("Np hay mensaje");
    lM();
  } else {
    let numero1 = parseFloat(num1Temp);
    let numero2 = parseFloat(num2Temp);
    let resultado = 0;

    switch (op) {
      case "+":
        resultado = numero1 + numero2;
        break;
      case "-":
        resultado = numero1 - numero2;
        break;
      case "*":
        resultado = numero1 * numero2;
        break;
      case "/":
        if (numero2 == 0) {
          return (mensaje.innerHTML = "no se puede dividir por 0");
        } else {
          resultado = numero1 / numero2;
        }
        break;
    }
    casilla.innerHTML = resultado;
    historial.innerHTML = resultado;
  }
};
//onclicks
const btnACf = () => {
  casilla.innerHTML = "";
  historial.innerHTML = "";
  num1Temp = "";
  num2Temp = "";
  op = "";
  hTemp = "";
};

const btnCEf = () => {
  if (num1Temp === "") {
    mensaje.innerHTML = "No hay Digitos que borrar";
    lM();
  } else {
    if (op === "") {
      num1Temp = num1Temp.substring(0, num1Temp.length - 1);
      casilla.innerHTML = num1Temp;
    } else {
      num2Temp = num2Temp.substring(0, num2Temp.length - 1);
      casilla.innerHTML = num2Temp;
    }
  }
};

btn1.onclick = () => {
  btn1f();
};

btn2.onclick = () => {
  btn2f();
};

btn3.onclick = () => {
  btn3f();
};
btn4.onclick = () => {
  btn4f();
};
btn5.onclick = () => {
  btn5f();
};
btn6.onclick = () => {
  btn6f();
};
btn7.onclick = () => {
  btn7f();
};
btn8.onclick = () => {
  btn8f();
};
btn9.onclick = () => {
  btn9f();
};
btn0.onclick = () => {
  btn0f();
};

btnSuma.onclick = () => {
  btnSumaf();
};
btnResta.onclick = () => {
  btnRestaf();
};
btnMulti.onclick = () => {
  btnMultif();
};
btnDivi.onclick = () => {
  btnDivif();
};

btnIgual.onclick = () => {
  btnIgualf();
};
btnAC.onclick = () => {
  btnACf();
};
btnCE.onclick = () => {
  btnCEf();
};

btnPunto.onclick = () => {
  btnPuntof();
};
