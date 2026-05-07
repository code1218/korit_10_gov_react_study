import { useState } from 'react'

function App() {

  const [ inputValue, setInputValue ] = useState("");
  const [ content, setContent ] = useState("");
  const [ inputValue2, setInputValue2 ] = useState("");
  const [ content2, setContent2 ] = useState("");

  const handleOnClick = (e) => {
    setContent(inputValue);
    setContent2(inputValue2);
  }

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleOnChange2 = (e) => {
    setInputValue2(e.target.value);
  }

  return (
    <>
      <input type="text" onChange={handleOnChange} />
      <input type="text" onChange={handleOnChange2} />
      <button onClick={handleOnClick}>출력</button>
      <h1>내용1: {content}</h1>
      <h1>내용2: {content2}</h1>
    </>
  )
}

export default App
