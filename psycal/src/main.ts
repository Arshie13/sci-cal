import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<body class="body">
<br><br><br><br>
<center>
 <div class="div"> 
   <br><br>
   <table class = "table">
      <tr>
         <input class = "form" type="text" id="fname" size="42"  placeholder="0">
      </tr>
     <tr>
        <td><button class = "button1" id="sin" onclick="sin()" type="button">Sin</button> </td>
        <td><button class = "button1" id="cos" onclick="cos()" type="button">Cos</button> </td>
        <td><button class = "button1" id="tan" onclick="tan()" type="button">Tan</button></td>
     </tr>
     <tr>
      <td><button class = "button1" id="arcsin" onclick="arcsin()"type="button">ArcSin</button></td>
      <td><button class = "button1" id="arccos" onclick="arccos()" type="button">ArcCos</button></td>
      <td><button class = "button1" id="arctan" onclick="arctan()" type="button">ArcTan</button></td>
     </tr>
     <tr>
      <td><button class = "button1" id="log" onclick="log()" type="button">Log</button></td>
      <td><button class = "button1" id="ln" onclick="ln()" type="button">In</button></td>
      <td><button class = "button1" id="squareroot" onclick="squareroot()" type="button">√</button></td>
     </tr>
   </table>
<!-- lower -->
  <table>
     <tr>
      <td><button class = "button3" id="exponent" onclick="exponent()" type="button">^</button></td>
      <td><button class = "button3" id="parenthesisLeft" onclick="parenthesisLeft()" type="button">(</button></td>
      <td><button class = "button3" id="parenthesisRight" onclick="parenthesisRight()" type="button">)</button></td>
      <td><button class = "button3" id="clear" onclick="clear()" type="button">AC</button></td>
     </tr>
     <tr>
        <td><button class = "button2" id="seven" onclick="seven()" type="button">7</button></td>
        <td><button class = "button2" id="eight" onclick="eight()" type="button">8</button></td>
        <td><button class = "button2" id="nine" onclick="nine()" type="button">9</button></td>
        <td><button class = "button3" id="divide" onclick="divide()" type="button">÷</button></td>
     </tr>
     <tr>
        <td><button class = "button2" id="four" onclick="four()" type="button">4</button></td>
        <td><button class = "button2" id="five" onclick="five()" type="button">5</button></td>
        <td><button class = "button2" id="six" onclick="six()" type="button">6</button></td>
        <td><button class = "button3" id="multiply" onclick="multiply()" type="button">x</button></td>
     </tr>
     <tr>
        <td><button class = "button2" id="one" onclick="one()" type="button">1</button></td>
        <td><button class = "button2" id="two" onclick="two()" type="button">2</button></td>
        <td><button class = "button2" id="three" onclick="three()" type="button">3</button></td>
        <td><button class = "button3" id="subtract" onclick="subtract()" type="button">-</button></td>
     </tr>
     <tr>
        <td><button class = "button2" id="zero" onclick="zero()"  type="button">0</button></td>
        <td><button class = "button2" id="decimal" onclick="decimal()" type="button">.</button></td>
        <td><button class = "button2" id="equals" onclick="equals()" type="button">=</button></td>
        <td><button class = "button3" id="add" onclick="add()" type="button">+</button></td>
     </tr>
    </table>
   </div> 
</center>
</body>
`

let output = document.getElementById('fname') as HTMLInputElement

let sinButton = document.getElementById('sin')
let cosButton = document.getElementById('cos')
let tanButton = document.getElementById('tan')
let arcsinButton = document.getElementById('arcsin')
let arccosButton = document.getElementById('arccos')
let arctanButton = document.getElementById('arctan')
let logButton = document.getElementById('log')
let lnButton = document.getElementById('ln')
let squarerootButton = document.getElementById('squareroot')
let exponentButton = document.getElementById('exponent')
let parenthesisLeftButton = document.getElementById('parenthesisLeft')
let parenthesisRightButton = document.getElementById('parenthesisRight')
let clearButton = document.getElementById('clear')
let sevenButton = document.getElementById('seven')
let eightButton = document.getElementById('eight')
let nineButton = document.getElementById('nine')
let divideButton = document.getElementById('divide')
let fourButton = document.getElementById('four')
let fiveButton = document.getElementById('five')
let sixButton = document.getElementById('six')
let multiplyButton = document.getElementById('multiply')
let oneButton = document.getElementById('one')
let twoButton = document.getElementById('two')
let threeButton = document.getElementById('three')
let subtractButton = document.getElementById('subtract')
let zeroButton = document.getElementById('zero')
let decimalButton = document.getElementById('decimal')
let equalsButton = document.getElementById('equals')
let addButton = document.getElementById('add')

if (sinButton) {
  sinButton.addEventListener('click', () => {
    output.value += 'sin('
  })
}

if (cosButton) {
  cosButton.addEventListener('click', () => {
    output.value += 'cos('
  })
}

if (tanButton) {
  tanButton.addEventListener('click', () => {
    output.value += 'tan('
  })
}

if (arcsinButton) {
  arcsinButton.addEventListener('click', () => {
    output.value += 'arcsin('
  })
}

if (arccosButton) {
  arccosButton.addEventListener('click', () => {
    output.value += 'arccos('
  })
}

if (arctanButton) {
  arctanButton.addEventListener('click', () => {
    output.value += 'arctan('
  })
}

if (logButton) {
  logButton.addEventListener('click', () => {
    output.value += 'log('
  })
}

if (lnButton) {
  lnButton.addEventListener('click', () => {
    output.value += 'ln('
  })
}

if (squarerootButton) {
  squarerootButton.addEventListener('click', () => {
    output.value += '√('
  })
}

if (exponentButton) {
  exponentButton.addEventListener('click', () => {
    output.value += '^'
  })
}

if (parenthesisLeftButton) {
  parenthesisLeftButton.addEventListener('click', () => {
    output.value += '('
  })
}

if (parenthesisRightButton) {
  parenthesisRightButton.addEventListener('click', () => {
    output.value += ')'
  })
}

if (clearButton) {
  clearButton.addEventListener('click', () => {
    output.value = ''
  })
}

if (sevenButton) {
  sevenButton.addEventListener('click', () => {
    output.value += '7'
  })
}

if (eightButton) {
  eightButton.addEventListener('click', () => {
    output.value += '8'
  })
}

if (nineButton) {
  nineButton.addEventListener('click', () => {
    output.value += '9'
  })
}

if (divideButton) {
  divideButton.addEventListener('click', () => {
    output.value += '/'
  })
}

if (fourButton) {
  fourButton.addEventListener('click', () => {
    output.value += '4'
  })
}

if (fiveButton) {
  fiveButton.addEventListener('click', () => {
    output.value += '5'
  })
}

if (sixButton) {
  sixButton.addEventListener('click', () => {
    output.value += '6'
  })
}

if (multiplyButton) {
  multiplyButton.addEventListener('click', () => {
    output.value += '*'
  })
}

if (oneButton) {
  oneButton.addEventListener('click', () => {
    output.value += '1'
  })
}

if (twoButton) {
  twoButton.addEventListener('click', () => {
    output.value += '2'
  })
}

if (threeButton) {
  threeButton.addEventListener('click', () => {
    output.value += '3'
  })
}

if (subtractButton) {
  subtractButton.addEventListener('click', () => {
    output.value += '-'
  })
}

if (zeroButton) {
  zeroButton.addEventListener('click', () => {
    output.value += '0'
  })
}

if (decimalButton) {
  decimalButton.addEventListener('click', () => {
    output.value += '.'
  })
}

if (addButton) {
  addButton.addEventListener('click', () => {
    output.value += '+'
  })
}
