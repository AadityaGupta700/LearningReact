import React from 'react'
import { useState} from 'react'
import './App.css'
import useCurrencyInfo from './hooks/currencyinfo.js'
import Input from './components/input.jsx'
function App() {
  const [amount, setamount] = useState('')
  const [convertedamt, setconvertedamt] = useState('')
  const [from, setfrom] = useState('inr')
  const [to, setTo] = useState('usd')

  const fromCurrency = useCurrencyInfo(from)

  const options=Object.keys(fromCurrency)

  const swap=()=>{
    
    setfrom(to);
    setTo(from);
  } 
  const convert=(amt)=>{
  setconvertedamt(amt*fromCurrency[to])
  }

  return (
    <>
    <div
    className="h-screen flex justify-center items-center w-screen bg-cover "
    style={{ backgroundImage: 'url(/images/a.jpg)' }}
    >
      <div className='h-1/2 w-1/2 bg-slate-950 opacity-80  
      rounded-xl flex-col flex  items-center justify-center  '>
          
           
          <div className=' w-1/2 m-3'>
            <Input  label='From'
            amount={amount} currency={from} setAmount={setamount} 
             options={options} convert={convert} Currencychange={setfrom}/>
          </div>
          <button className='bg-blue-600 absolute hover:bg-blue-800'  onClick={swap}>
            Swap
          </button>
          <div className=' w-1/2 m-3 '>
            <Input label='To'	
             amount={convertedamt} currency={to} setAmount={setconvertedamt} 
             options={options}  Currencychange={setTo} />
          </div>


        

      </div>
    </div>
  </> 
  )
}

export default App