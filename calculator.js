

class Calculator {
  constructor(lastTextElement, currentTextelement) {
    this.lastTextElement = lastTextElement,
    this.currentTextElement = currentTextelement
    this.reset()
  }

    
     delete() {
    this.currentAction = this.currentAction.toString().slice(0, -1)
  } 
    
  reset() {
    this.currentAction = ''
    this.lastAction = ''
    this.running = undefined
  }


  generateNumber(number) {
    if (number === '.' && this.currentAction.includes('.')) return
    this.currentAction = this.currentAction.toString() + number.toString()
  }

  chooseRunning(running) {
    if (this.currentAction === '') return
    if (this.lastAction  !== '') {
      this.action()
    }
    this.running = running
    this.lastAction  = this.currentAction
    this.currentAction = ''
  }
// her I make the multiplication, devide, subtrakjson and addition to work//
  action() {
    let result
    const last = parseFloat(this.lastAction )
    const current = parseFloat(this.currentAction)
    if (isNaN(last) || isNaN(current)) return
    switch (this.running) {
      case '+':
        result = last + current
        break
      case '-':
        result = last - current
        break
      case '*':
        result = last * current
        break
      case '÷':
        result = last / current
        break
      default:
        return
    }
    this.currentAction = result
    this.running = undefined
    this.lastAction  = ''
  }

  getNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  update() {
    this.currentTextElement.innerText =
      this.getNumber(this.currentAction)
    if (this.running != null) {
      this.lastTextElement.innerText =
        `${this.getNumber(this.lastAction )} ${this.running}`
    } else {
      this.lastTextElement.innerText = ''
    }
  }
}

// Creating variebles which i link with the buttons in the html file and using those variebles to make the calculator work//
const currentTextelement = document.querySelector('[data-current]')
const numberGenerator = document.querySelectorAll('[data-number]')
const dataActionButton = document.querySelectorAll('[data-action]')
const dataEqualsButton = document.querySelector('[data-equals]')
const deleteItemsButton = document.querySelector('[data-delete]')
const acButton = document.querySelector('[data-reset]')
const lastTextElement = document.querySelector('[data-last]')

const calculator = new Calculator(currentTextelement, lastTextElement)

numberGenerator.forEach(button => {
  button.addEventListener('click', () => {
    calculator.generateNumber(button.innerText)
    calculator.update()
  })
})

dataActionButton.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseRunning(button.innerText)
    calculator.update()
  })
})

dataEqualsButton.addEventListener('click', button => {
  calculator.action()
  calculator.update()
})

deleteItemsButton.addEventListener('click', button => {
  calculator.delete()
  calculator.update()
})



dataEqualsButton.addEventListener('click', button => {
  calculator.action()
  calculator.update()
})

acButton.addEventListener('click', button => {
  calculator.reset()
  calculator.update()
})


