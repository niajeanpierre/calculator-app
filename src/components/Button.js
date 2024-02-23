
const getStyleName = button => {
  const className = {
    "=" : "equals",
    "x" : "operation",
    "/" : "operation",
    "+" : "operation",
    "-" : "operation"
  }
  return className[button]
}

const Button = ({ value }) => {
  return (
    <div className={`${getStyleName(value)} button`}>{value}</div>
  )
}

export default Button