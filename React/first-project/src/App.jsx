import { useState } from 'react'
import './App.css'

function InputBox({onKeyDown, pHolder, value, name, onChange, type='text'}) {
  return(
  <div>
  <input onKeyDown={onKeyDown} name={name} type={type} onChange={onChange} placeholder={pHolder} value={value}></input>
  </div>
  )
}

function LoginPage({ onLogin }) {
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({email: '', password: ''})
  const [output, setOutput] = useState('')
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value})}
  const handleKeyDown = (e) => {
  if (e.key == 'Enter') {
     onLogin()
   }
  }
  return (
    <div>
    <h1>Email Software</h1>
    <InputBox onKeyDown={handleKeyDown} pHolder='Email' value={form.email} name='email' onChange={handleChange} />
    <br></br>
    <InputBox onKeyDown={handleKeyDown} pHolder='Password' value={form.password} name='password' onChange={handleChange} type='password' />
    <br></br>
    <button onClick={onLogin} style={{ width: '150px'}}>Enter</button>
    </div>
  )
}

function HomePage({ openNot, exit, openRead}) {
  return(
    <div>
    <h1>Welcome home!</h1>
    <ul>
    <li><button onClick={openNot}>Notifications</button></li>
    <li><button onClick={openRead}>Read</button></li>
    <li><button onClick={exit}>Exit</button></li>
    </ul>
    </div>
  )
}

function NotPage({ exit }) {
  return(
    <div>
      <h1>Notifications</h1>
      <ul>
        <li><button onClick={exit}>Exit</button></li>
      </ul>
    </div>
  )
}

function ReadPage({exit}) {
  return(
    <div>
    <h1>Read</h1>
    <ul>
      <li><button onClick={exit}>Exit</button></li>
    </ul>
    </div>
  )
}

function App() {
  const [pageNum, setPageNum] = useState(1)
  if (pageNum == 1) {
    return(
      <LoginPage onLogin={() => setPageNum(2)} />
    )
  } else if (pageNum == 2) {
    return(
      <HomePage exit={() => setPageNum(1)} openNot={() => setPageNum(3)} openRead={() => setPageNum(4)} />
    )
  } else if (pageNum == 3) {
    return(
      <NotPage exit={() => setPageNum(2)} />
    )
  } else if (pageNum == 4) {
    return(
    <ReadPage exit={() => setPageNum(2)} />
    )
  }
}

export default App
