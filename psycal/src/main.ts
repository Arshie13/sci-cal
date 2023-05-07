import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

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

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)