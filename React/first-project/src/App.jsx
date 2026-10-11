import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function InputBox({pHolder, value, name, onChange, type='text'}) {
  return(
  <div>
  <input name={name} type={type} onChange={onChange} placeholder={pHolder} value={value}></input>
  </div>
  )
}

function LoginPage({ onLogin }) {
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({email: '', password: ''})
  const [output, setOutput] = useState('')
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value})}

  return (
    <div>
    <h1>Email Software</h1>
    <InputBox pHolder='Email' value={form.email} name='email' onChange={handleChange} />
    <br></br>
    <InputBox pHolder='Password' value={form.password} name='password' onChange={handleChange} type='password' />
    <br></br>
    <button onClick={onLogin} style={{ width: '150px'}}>Enter</button>
    </div>
  )
}

function HomePage({ openNot, exit }) {
  return(
    <div>
    <h1>Welcome home!</h1>
    <ul>
    <li><button onClick={openNot}>Notifications</button></li>
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

function App() {
  //const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const [pageNum, setPageNum] = useState(1)
  //const [error, setError] = useState('')

  //const handSubmit = () => {}
    //if (!emailPattern.test(form.email)) {
      //setError('Invalid email address')
      //return
    //}
    //setError('')
    //setOutput(form.email)
  if (pageNum == 1) {
    return(
      <LoginPage onLogin={() => setPageNum(2)} />
    )
  } else if (pageNum == 2) {
    return(
      <HomePage exit={() => setPageNum(1)} openNot={() => setPageNum(3)} />
    )
  } else if (pageNum == 3) {
    return(
      <NotPage exit={() => setPageNum(2)} />
    )
  }
}

export default App
