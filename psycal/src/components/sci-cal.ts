import InfixTokenizer from '@psse-cpu/tokenizer'
import Stack from './Stack'

export default class ScientificCalculator {
  private operatorPrecedence: {[key: string]: number} = {
    '^': 4,
    '*': 3,
    '/': 3,
    '+': 2,
    '-': 2,
  }

  private functions: {[key: string]: (arg: number) => number} = {
    sin: Math.sin,
    cos: Math.cos,
    tan: Math.tan,
    arcsin: Math.asin,
    arccos: Math.acos,
    arctan: Math.atan,
    log: Math.log10,
    ln: Math.log,
    sqrt: Math.sqrt,
    cbrt: Math.cbrt,
  }

  private applyOperator(operator: string, operand2: number, operand1: number): number {
    switch (operator) {
      case '^':
        return Math.pow(operand1, operand2)
      case '*':
        return operand1 * operand2
      case '/':
        return operand1 / operand2
      case '+':
        return operand1 + operand2
      case '-':
        return operand1 - operand2
      default:
        throw new Error(`Unknown operator ${operator}`)
    }
  }

  public evaluateExpression(expression: string): number {
    const stack = new Stack<string>()
    const outputQueue: string[] = []

    const tokenizer = new InfixTokenizer(expression, Object.keys(this.functions))

    while (tokenizer.hasMoreTokens()) {
      const token = tokenizer.readToken()
      if (token === undefined) {
        break;
      }
      if (token in this.functions) {
        stack.push(token)
      } else if (token === '(') {
        stack.push(token)
      } else if (token === ')') {
        while (stack.peek() !== '(') {
          outputQueue.push(stack.pop())
        }
        stack.pop() // Pop the '('
        if (stack.peek() in this.functions) {
          outputQueue.push(stack.pop())
        }
      } else if (token in this.operatorPrecedence) {
        const precedence = this.operatorPrecedence[token]
        while (
          !stack.isEmpty() &&
          stack.peek() in this.operatorPrecedence &&
          this.operatorPrecedence[stack.peek()] >= precedence
        ) {
          outputQueue.push(stack.pop())
        }
        stack.push(token)
      } else {
        outputQueue.push(token)
        if (stack.peek() in this.functions) {
          outputQueue.push(stack.pop())
        }
      }
    }

    while (!stack.isEmpty()) {
      outputQueue.push(stack.pop())
    }

    const evalStack = new Stack<number>()
    for (const token of outputQueue) {
      if (token in this.operatorPrecedence) {
        const operand2 = evalStack.pop()
        const operand1 = evalStack.pop()
        evalStack.push(this.applyOperator(token, operand2, operand1))
      } else if (token in this.functions) {
        const arg = evalStack.pop()
        evalStack.push(this.functions[token](arg))
      } else {
        evalStack.push(parseFloat(token))
      }
    }

    return evalStack.pop()
  }
}