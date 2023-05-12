
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
}

