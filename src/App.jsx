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
    <div className='text-center max-w-lg mx-auto bg-slate-900 m-20 px-4 py-7 rounded-2xl border-4 border-cyan-950 shadow-2xl shadow-cyan-950'>
      <h1 className='text-red-400 font-bold text-3xl text-center m-4'>Password Generator</h1>
      <div className='m-10'>
        <input 
        className='border-zinc-600 border outline-none px-3 py-2 rounded-l-3xl w-xs bg-white text-gray-700 '
        type="text" 
        placeholder='Password'/>
        <button className='px-3 py-2 border-blue-500 border-2 bg-blue-600 rounded-r-3xl cursor-pointer text-white font-semibold'>Copy</button>
      </div>

      <div className='flex text-sm gap-x-5'>
        <div className='flex items-center gap-x-1'>
        <input 
      className='cursor-pointer'
      type="range"
      min={8}
      max={30}
      value={length}
      onChange={(e)=>{setLength(e.target.value)}}
      />
      <label 
      className='text-red-400'
      htmlFor="range">Length: {length}</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={numAllowed}
        id='numberInput'
        onChange={()=>{
          setNumAllowed(prev => !prev);
        }}
        />
        <label 
        className='text-red-400'
        htmlFor="numberInput">Numbers</label>

      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={charAllowed}
        id='characterInput'
        onChange={()=>{
          setNumAllowed(prev => !prev);
        }}
        />
        <label 
        className='text-red-400'
        htmlFor="characterInput">Special Characters</label>

      </div>
      </div>
      
    </div>
  )
}

export default App
