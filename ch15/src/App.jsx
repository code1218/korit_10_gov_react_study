import { useState } from 'react'
import * as s from "./styles";

function App() {
  

  return (
    <>
      <div css={s.card}>
        <div css={s.inputBox}>
          <input type="text" />
        </div>
        <div css={s.inputBox}>
          <input type="text" />
        </div>
        <div css={s.buttonBox}>
          <button disabled={false}>사용자 정보 등록</button>
        </div>
      </div>
    </>
  )
}

export default App
