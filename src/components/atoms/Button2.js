import React from 'react'

const Button2 = ({width, name, height}) => {
  return (
    <button className={` bg-transparant border-2 border-color6 text-color1 rounded-[20px] text-[20px] font-[600] leading-[27.5px] ${width} ${height} hover:scale-110 transition-all`}>{name}</button>
  )
}

export default Button2