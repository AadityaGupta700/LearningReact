import { useState,useEffect,useCallback,useRef } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(10)
  const [hasNumber, setHasNumber] = useState(false)
  const [hasSymbol, setHasSymbol] = useState(false)
  const passwordRef = useRef(null)
  const [hidden, setHidden] = useState('hidden')
  //Usecallback is used to prevent the function from being called every time the component is rendered
  const passgen = useCallback(() => {
    const numbers = '0123456789'
    const symbols = '!@#$%^&*-_+:'
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let password = ''
    if (hasNumber) characters += numbers
    if (hasSymbol) characters += symbols
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    setPassword(password)
  }
  ,[length, hasNumber, hasSymbol,setPassword])
  const copytoclipboard =useCallback (() => {
    setHidden('')
   
    const timer = setTimeout(() => {
      setHidden('hidden')
    }, 2000);
  
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(() => {
    passgen()
  } , [length,hasNumber,hasSymbol,passgen])
  return (
  
  <div className='bg-fuchsia-700 h-screen w-screen flex items-start  justify-center'>
    <div className=' text-white bg-gray-800 w-1/2 rounded-2xl m-10'>
      <h1 className='text-center font-bold text-4xl m-5 '>Password Generator</h1>
        <div className='flex justify-center text-xl flex-wrap items-center  '>
          <input type="text" value={password} readOnly className='w-1/2 text-black 
          rounded-s-lg '  
          ref={passwordRef} />
          <button onClick={copytoclipboard} className='after:bg-blue-950 
           hover:bg-red-400 active:bg-blue-950 duration-300 px-2 bg-blue-600 
           rounded-e-lg mr-5 ' >Copy</button>
        </div>
          <div className='flex p-5 text-xl gap-4 justify-center'>
            <div className='flex gap-2'>
              <input type="range" min={8} max={30} value={length}
               onChange={(e)=>setLength(e.target.value)} className='' />
              <label >Set Length: {length}</label>
            </div>

            <div>
              <input type="checkbox" className= ''
              onChange={()=>setHasNumber((prev)=>!prev)} name="number" id="number" />
              <label htmlFor="">Number</label>
            </div>

          <div>
            
              <input type="checkbox" name="specialcharacters" id="specialcharacters"
              onClick={()=>setHasSymbol((previousvalue)=>!previousvalue)} />Special Characters
          </div>
          </div>
    </div>
    <div className={` ${hidden} border-gray-950 border-2 absolute bottom-10 bg-blue-600 rounded-lg px-10 py-5 `} >Text selected to clipboard</div>
  </div>
  
  )
}

export default App
