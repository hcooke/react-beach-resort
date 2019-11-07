import React from 'react'
console.log("Banner");

function Banner({children, title, subtitle}) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  )
}

export default Banner
