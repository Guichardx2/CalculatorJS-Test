// Instruções para o usuário
alert("Bem-vindo a calculadora mais simples do mundo! Porém, funcional!");
prompt(
  "\nDigite dois números e escolha um operador para realizar a operação desejada. \n\nOperadores válidos: \n+ (soma) \n- (subtração) \n* (multiplicação) \n/ (divisão) \n% (resto da divisão) \n^ (potenciação)\n√ (Raíz quadrada) \nVamos lá!"
);

//Definindo variaveis para recuperar campos do HTML
let firstNumber = document.getElementById("num1");
let secondNumber = document.getElementById("num2");
let operatorValue = document.getElementById("operator");
let button_calc = document.getElementById("calculate");

//Definindo funções para as operações matemáticas
function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
function square(a) {
  return Math.sqrt(a);
}
function pow(a, b) {
  return a ** b;
}
function rest(a, b) {
  return a % b;
}

//Função para botão de calcular
function calculate() {
  //Recuperando os valores dos inputs dos campos HTML
  let first_value = parseFloat(firstNumber.value);
  let second_value = parseFloat(secondNumber.value);
  let operator = operatorValue.value;
  let result;
  // console.log(first_value, second_value, operator)

  // Verificações de preenchimento dos campos
  if (isNaN(first_value) || isNaN(second_value)) {
    //Caso um dos inputs não seja preenchido
    result = "Por favor, preencha todos os campos numéricos";
  } else {
    // Verificadores de operadores e validações + callback das funções
    if (operator === "+") {
      result = sum(first_value, second_value);
    } else if (operator === "-") {
      result = sub(first_value, second_value);
    } else if (operator === "*") {
      result = mult(first_value, second_value);
    } else if (operator === "/") {
      result = div(first_value, second_value);
      if (second_value === 0) {
        result = "Impossível dividir por zero";
      }
    } else if (operator === "√") {
      result = square(first_value);
      if (first_value < 0 || second_value < 0) {
        result = "Impossível calcular raíz quadrada de número negativo";
      } else if (first_value !== second_value || second_value !== first_value) {
        result = "Preencha os dois campos com o mesmo valor";
      }
    } else if (operator === "^") {
      result = pow(first_value, second_value);
    } else if (operator === "%") {
      result = rest(first_value, second_value);
    } else {
      //Caso o operador seja inválido
      result = "Por favor, escolha um operador válido";
    }
  }

  //Criando um novo campo para exibir o resultado
  const resultField = document.getElementById("result");
  resultField.innerHTML = "";

  const newfield = document.createElement("h3");
  newfield.classList.add("calcresult");
  newfield.textContent = `Resultado: ${result}`;
  resultField.appendChild(newfield);
  // console.log(result)

  //Limpando campos após o cálculo
  if (
    firstNumber.value.trim() !== "" ||
    secondNumber.value.trim() !== "" ||
    operatorValue.value.trim() !== ""
  ) {
    firstNumber.value = "";
    secondNumber.value = "";
    operatorValue.value = "Escolha";
  }
}
button_calc.addEventListener("click", calculate);
console.log("Então você veio aqui...");