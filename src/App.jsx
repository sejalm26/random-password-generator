import React, { useCallback, useState } from 'react'

const App = () => {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState('');

  const generatePassword = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+";

    for(let i=1; i<= array.length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, 
    [length, numAllowed, charAllowed])

  return (
    <div>
      <h1 className='text-red-400 font-bold text-4xl text-center m-4'>Password Generator</h1>
    </div>
  )
}

export default App
