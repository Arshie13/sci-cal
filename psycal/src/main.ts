import ScientificCalculator from './components/sci-cal'
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
        <td><button class = "button" id="sin(" type="button">sin</button> </td>
        <td><button class = "button" id="cos(" type="button">cos</button> </td>
        <td><button class = "button" id="tan(" type="button">tan</button></td>
     </tr>
     <tr>
      <td><button class = "button" id="arcsin(" type="button">arcSin</button></td>
      <td><button class = "button" id="arccos(" type="button">arcCos</button></td>
      <td><button class = "button" id="arctan(" type="button">arcTan</button></td>
     </tr>
     <tr>
      <td><button class = "button" id="log(" type="button">log</button></td>
      <td><button class = "button" id="ln(" type="button">ln</button></td>
      <td><button class = "button" id="√(" type="button">√</button></td>
     </tr>
   </table>
<!-- lower -->
  <table>
     <tr>
      <td><button class = "button" id="^" type="button">^</button></td>
      <td><button class = "button" id="(" type="button">(</button></td>
      <td><button class = "button" id=")" type="button">)</button></td>
      <td><button class = "button" id="clear" type="button">AC</button></td>
     </tr>
     <tr>
        <td><button class = "button" id="7" type="button">7</button></td>
        <td><button class = "button" id="8" type="button">8</button></td>
        <td><button class = "button" id="9" type="button">9</button></td>
        <td><button class = "button" id="/" type="button">÷</button></td>
     </tr>
     <tr>
        <td><button class = "button" id="4" type="button">4</button></td>
        <td><button class = "button" id="5" type="button">5</button></td>
        <td><button class = "button" id="6" type="button">6</button></td>
        <td><button class = "button" id="*" type="button">x</button></td>
     </tr>
     <tr>
        <td><button class = "button" id="1" type="button">1</button></td>
        <td><button class = "button" id="2" type="button">2</button></td>
        <td><button class = "button" id="3" type="button">3</button></td>
        <td><button class = "button" id="-" type="button">-</button></td>
     </tr>
     <tr>
        <td><button class = "button" id="0" type="button">0</button></td>
        <td><button class = "button" id="." type="button">.</button></td>
        <td><button class = "button" id="=" type="button">=</button></td>
        <td><button class = "button" id="+" type="button">+</button></td>
     </tr>
    </table>
   </div> 
</center>
</body>
`

let output = document.getElementById('fname') as HTMLInputElement
let solver = new ScientificCalculator
let buttons = document.querySelectorAll('.button')

if (buttons) {
  buttons.forEach(button => {
    button.addEventListener('click', buttonClick)
  })
}

function buttonClick(event: any) {
  let buttonID = event.target.id

  switch (buttonID) {
    case 'sin(':
    case 'cos(':
    case 'tan(':
    case 'arcsin(':
    case 'arccos(':
    case 'arctan(':
    case 'log(':
    case 'ln(':
    case '√(':
      output.value += `${buttonID}`
      break
    case '^':
    case '/':
    case '*':
    case '-':
    case '+':
    case '.':
    case '(':
    case ')':
      output.value += buttonID
      break
    case 'clear':
      output.value = ''
      break
    case '=':
      output.value = `${solver.evaluateExpression(output.value)}`
      break
    default:
      output.value += buttonID
      break
  }
}
