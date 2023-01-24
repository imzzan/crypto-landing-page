import React from 'react';

const CardTesti = ({name, profile, desc, id}) => {
  return (
    <div className=' bg-color3 rounded-[25px] px-10 py-5 relative mt-24 w-full lg:w-[500px]'>
        <img src={profile} alt="profile" className=' w-[100px] rounded-full absolute top-[-60px] left-[30%] sm:left-[36%] lg:left-10'/>
        <p className=' font-roboto font-normal text-[16px] lg:text-[18px] leading-[23.44px] text-center text-color2 mt-8'>{desc}</p>
        <p className=' font-[700] text-[18px] leading-[27.5px] font-roboto text-center text-color2 mt-5'>{name}</p>
    </div>
  )
}

export default CardTesti