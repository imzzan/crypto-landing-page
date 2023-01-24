import React from 'react';
import { useScrollspy } from '../../helpers/handleScroll';
import { Button1 } from '../atoms';

const NavDekstop = ({items, handleScroll}) => {

  return (
    <div className=' lg:flex justify-between items-center px-10 h-[80px] hidden  bg-gradient-to-r from-color3 to-color5 lg:px-14'>
      <h1 className=' font-[600] text-[25px] leading-[27.5px] text-color1'>Krypto</h1>
      <ul className='flex gap-14 items-center'>
        {
          items.map((item, i) => {
            return <li className='font-normal text-[18px] leading-[27.5px] text-color1 hover:border-b-2 border-white' onClick={() => handleScroll(item.ref.current)}><a href={`#${item.id}`}>{item.name}</a></li>
          })
        }
        <li><Button1 name='buy nfts' width='w-[115px]' height='h-[40px]'/></li>
      </ul>
    </div>
  )
}

export default NavDekstop