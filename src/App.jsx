import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';


const App = () => {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState('');

  //useRef 
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);

  },
    [length, numAllowed, charAllowed])

  const copyPassword = useCallback(() => {
    if(!password) return;

    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password);

    toast.success('Copied to clipboard!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Bounce,
    });
  }, [password])

  useEffect(() => {
    generatePassword()
  }, [length, numAllowed, charAllowed, generatePassword])


  return (
    <div className='text-center max-w-lg mx-auto bg-slate-900 m-20 px-4 py-7 rounded-2xl border-4 border-cyan-950 shadow-2xl shadow-cyan-950'>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <h1 className='text-red-400 font-bold text-3xl text-center m-4'>Password Generator</h1>
      <div className='m-10'>
        <input
          className='border-zinc-600 border outline-none px-3 py-2 rounded-l-3xl w-xs bg-white text-gray-700 '
          type="text"
          placeholder='Password'
          value={password}
          ref={passwordRef}
          readOnly />
        <button
          onClick={copyPassword}

          className='px-3 py-2 border-blue-500 border-2 bg-blue-600 rounded-r-3xl cursor-pointer text-white font-semibold active:bg-blue-800 transition-all hover:bg-blue-800 active:scale-95'>Copy</button>
      </div>

      <div className='flex text-sm gap-x-5'>
        <div className='flex items-center gap-x-1'>
          <input
            className='cursor-pointer'
            type="range"
            min={8}
            max={30}
            value={length}
            onChange={(e) => { setLength(Number(e.target.value)) }}
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
            onChange={() => {
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
            onChange={() => {
              setCharAllowed(prev => !prev);
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
