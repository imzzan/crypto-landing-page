import React, {useRef} from 'react';
import { NavDekstop, NavMobile } from '../moleculs';

const Navbar = () => {

    const abaout = useRef();
    const pricing = useRef();
    const testimoni = useRef();

    const items = [
        {
            name : 'About',
            id : 'about',
            ref : abaout
        },
        {
            name : 'Pricing',
            id : 'pricing',
            ref : pricing
        },
        {
            name : 'Testimoni',
            id : 'testimoni',
            ref : testimoni
        }
    ];

    const handleScroll = (ref) => {
        typeof window != "undefined" &&
          window.scrollTo({
            top: ref?.offsetTop - 10,
            left: 0,
            behavior: "smooth",
          });
      };
    

  return (
    <div className='fixed z-50 w-full'>
        <NavDekstop items={items} handleScroll={handleScroll}/>
        <NavMobile items={items} handleScroll={handleScroll}/>
    </div>
  )
}

export default Navbar