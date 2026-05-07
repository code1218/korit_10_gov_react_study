import { useState } from 'react'

function App() {
    const initUser = {
        username: "",
        email: "",
        password: "",
        phone: "",
    }

    const [inputValues, setInputValues] = useState(initUser);

    const handleInputOnChange = (e) => {
        const { name, value } = e.target;

        const newInputValues = {
            ...inputValues,
            [name]: value,
        }

        setInputValues(newInputValues);
    }

    const handleSignUpOnClick = () => {
        console.log(inputValues);
        setInputValues(initUser);
    }

    return (
        <>
            <div>
                <label htmlFor="username">사용자이름</label>
                <input type="text" id='username' name='username' value={inputValues.username} onChange={handleInputOnChange} />
            </div>
            <div>
                <label htmlFor="email">이메일</label>
                <input type="text" id='email' name='email' value={inputValues.email} onChange={handleInputOnChange} />
            </div>
            <div>
                <label htmlFor="password">비밀번호</label>
                <input type="text" id='password' name='password' value={inputValues.password} onChange={handleInputOnChange} />
            </div>
            <div>
                <label htmlFor="phone">연락처</label>
                <input type="text" id='phone' name='phone' value={inputValues.phone} onChange={handleInputOnChange} />
            </div>
            <div>
                <button onClick={handleSignUpOnClick}>회원가입</button>
            </div>
        </>
    )
}

export default App
