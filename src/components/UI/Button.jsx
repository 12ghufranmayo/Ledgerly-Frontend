import React from 'react'

function Button({className, title}) {
  return (
    <>
        <button type="submit" className={className}>
            {title}
        </button>
    </>        
  )
}

export default Button