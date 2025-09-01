import React from 'react'

function TextInput({
    label,
    type, 
    name, 
    width, 
    value, 
    onChange, 
    placeholder, 
    required = false, 
    error
}) {
  return (
    <div className="mt-4">
        <label htmlFor={name} className="block text-sm/6 font-medium text-gray-900">{label}</label>
        <div className="mt-1">
            <input
              id={name}
              type={type}
              name={name}
              onChange={onChange}
              value={value}
              required={required}
              placeholder={placeholder}
              className={`block ${width} rounded-md bg-white text-gray-900 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 
              placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600 sm:text-sm/6
              ${error ? 'border-2 border-red-500' : ''}`}
            />

            { error && <span className="text-red-500 font-semibold text-sm mt-1">{error}</span> }   
        </div>
    </div>
  )
}

export default TextInput