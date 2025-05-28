import React from 'react'

export default function Input({label,type, onChange, name, value,error, required=false}) {
  return (
    <div className='w-full'>
        <label htmlFor={name}  className='px-2 py-4'>{label}{required ? <span className='text-red-500'>*</span> : " "}</label>
        <input
        type={type}
        className='border-2 border-blue-500 rounded-xl px-2 py-2 outline-none w-full'
        name={name}
        onChange={onChange}
        required={required}
        value={value}
        />
        <p className='text-red-500 px-2'>{error}</p>
    </div>
  )
}
