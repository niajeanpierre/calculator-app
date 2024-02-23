import Wrapper from './components/Wrapper'
import Screen from './components/Screen'
import ButtonBox from './components/ButtonBox'
import Button from './components/Button'
import CalcProvider from './context/CalcContext'

const buttonValues = [
  ['C', '+-', '%', '/'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '=']
]

function App () {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {buttonValues.flat().map((button, i) => (
            <Button value={button} key={i} />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  )
}

export default App
