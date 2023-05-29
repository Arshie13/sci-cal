import ScientificCalculator from './components/sci-cal'
import './style.css'
import Stack from './components/Stack'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

<body class="body">
<p id="history"/>
<br><br><br><br>
<center>
 <div class="div"> 
   <br><br>
   <table class = "table">
      <tr>
         <input class="form" type="text" readonly id="fname" size="42"  placeholder="0">
      </tr>
     <tr>
        <td><button class = "button1" id="sin(" type="button">sin</button> </td>
        <td><button class = "button1" id="cos(" type="button">cos</button> </td>
        <td><button class = "button1" id="tan(" type="button">tan</button></td>
     </tr>
     <tr>
      <td><button class = "button1" id="arcsin(" type="button">arcSin</button></td>
      <td><button class = "button1" id="arccos(" type="button">arcCos</button></td>
      <td><button class = "button1" id="arctan(" type="button">arcTan</button></td>
     </tr>
     <tr>
      <td><button class = "button1" id="log(" type="button">log</button></td>
      <td><button class = "button1" id="ln(" type="button">ln</button></td>
      <td><button class = "button1" id="√(" type="button">√</button></td>
     </tr>
   </table>
<!-- lower -->
  <table>
     <tr>
      <td><button class = "button3" id="^" type="button">^</button></td>
      <td><button class = "button3" id="(" type="button">(</button></td>
      <td><button class = "button3" id=")" type="button">)</button></td>
      <td><button class = "button3" id="clear" type="button">AC</button></td>
     </tr>
     <tr>
        <td><button class = "button2" id="7" type="button">7</button></td>
        <td><button class = "button2" id="8" type="button">8</button></td>
        <td><button class = "button2" id="9" type="button">9</button></td>
        <td><button class = "button3" id="/" type="button">÷</button></td>
     </tr>
     <tr>
        <td><button class = "button2" id="4" type="button">4</button></td>
        <td><button class = "button2" id="5" type="button">5</button></td>
        <td><button class = "button2" id="6" type="button">6</button></td>
        <td><button class = "button3" id="*" type="button">x</button></td>
     </tr>
     <tr>
        <td><button class = "button2" id="1" type="button">1</button></td>
        <td><button class = "button2" id="2" type="button">2</button></td>
        <td><button class = "button2" id="3" type="button">3</button></td>
        <td><button class = "button3" id="-" type="button">-</button></td>
     </tr>
     <tr>
        <td><button class = "button2" id="0" type="button">0</button></td>
        <td><button class = "button2" id="." type="button">.</button></td>
        <td><button class = "button2" id="=" type="button">=</button></td>
        <td><button class = "button3" id="+" type="button">+</button></td>
     </tr>
    </table>
   </div> 
</center>
</body>
`

let output = document.getElementById('fname') as HTMLInputElement
let solver = new ScientificCalculator
let historyStack = new Stack
let buttons = document.querySelectorAll('.button2, .button1, .button3')

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
      historyStack.push(output.value)
      let historyDiv = document.getElementById("history") as HTMLOutputElement
      let outputText: string = ""

      outputText = historyStack.displayContents()
      historyDiv.innerHTML = outputText
      break
    default:
      output.value += buttonID
      break
  }
}