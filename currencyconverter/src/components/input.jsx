import React from 'react'

function input({
  label,
  currency,
  options=[],
  amount, setAmount,
  convert,
  Currencychange,
  classname = {} }) {
    console.log(options)
  return (
    
    <div className='w-full h-full '>
      <div className='bg-white p-2 rounded-lg'>
        <div className='flex justify-between py-2'>

          <div className='text-gray-500 '>{label}</div>

          <div className='text-gray-500 '>Currency Type</div>
        </div>
        <div className='flex justify-between py-2'>

          <input type="number" placeholder={`Amount in ${currency} `}
            className=" text-blue-800 p-2 bg-white outline-none  rounded-xl"
            value={amount} 
            onChange={(e) =>{
              const newAmount = e.target.value === "" ? "" : Number(e.target.value);
              setAmount && setAmount(newAmount);
              convert(newAmount);
            }}  />

          <select value={currency}
            onChange={(e) => Currencychange && Currencychange(e.target.value)}
            className="text-blue-800  bg-white outline-none  rounded-xl">

            {options.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
            
          </select>
        </div>
      </div>
    </div>
  )
}

export default input