import React from 'react'

const Button1 = ({name, width, height}) => {
  return (
    <button className={`bg-color3 text-color1 rounded-[20px] text-[20px] font-[600] leading-[27.5px] ${width} ${height} hover:scale-110 transition-all`}>{name}</button>
  )
}

export default Button1