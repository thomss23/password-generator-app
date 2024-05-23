import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import PasswordConfigurator from './components/PasswordConfigurator'
import Title from './components/Title'

function App() {

  const [password, setPassword] = useState('default');

  return (
    <>
      <Title></Title>
      <Display password={password}></Display>
      <PasswordConfigurator setPassword={setPassword}></PasswordConfigurator>
    </>
  )
}

export default App
