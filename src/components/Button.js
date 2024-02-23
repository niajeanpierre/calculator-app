import { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'

const getStyleName = button => {
  const className = {
    '=': 'equals',
    x: 'operation',
    '/': 'operation',
    '+': 'operation',
    '-': 'operation'
  }
  return className[button]
}

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext)

  //User clicks dot
  const dotClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
    })
  }

  //User clicks C
  const clearClick = () => {
    setCalc({
      sign: '',
      num: 0,
      res: 0
    })
  }

  //User clicks any number 0-9
  const handleClickNumber = () => {
const numberString = value.toString()

let numberValue;
if(numberString === '0' && calc.num === 0) {
numberValue = '0'
} else {
  numberValue = Number(calc.num + numberString)
}

setCalc({
  ...calc,
  num: numberValue
})
  }

//User clicks any operation
const signClick = () => {
  setCalc({
    sign: value,
    res: !calc.res && calc.num ? calc.num : calc.res,
    num: 0
  })
}

//User clicks on the equal sign
const equalsClick = () => {
  if(calc.res && calc.num) {
    const math = (a, b, sign) => {
      const result = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        'x': (a, b) => a * b,
        '/': (a, b) => a / b,
      }
      return result[sign](a, b);
    }
     setCalc({
    res: math(calc.res, calc.num,calc.sign),
    sign: '',
    num: 0
  })
  }
}

//User clicks percent button
const percentClick = () => {
  setCalc({
    num: (calc.num / 100),
    res: (calc.res / 100),
    sign: ''
  })
}

//User clicks +- button
const plusMinusClick = () => {
  setCalc({
    num: calc.num ? calc.num * -1 : 0,
    res: calc.res ? calc.res * -1 : 0,
    sign: ''
  })
}

  const handleButtonClick = () => {
    const results = {
      '.': dotClick,
      'C': clearClick,
      '/': signClick,
      'x': signClick,
      '+': signClick,
      '-': signClick,
      '=': equalsClick,
      "%": percentClick,
      "+-" : plusMinusClick
    }
    if (results[value]) {
      return results[value]()
    } else {
      return handleClickNumber()
    }
  }

  return (
    <button
      onClick={handleButtonClick}
      className={`${getStyleName(value)} button`}
    >
      {value}
    </button>
  )
}

export default Button
