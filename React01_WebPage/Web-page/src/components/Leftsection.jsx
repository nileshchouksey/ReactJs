import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

const Leftsection = () => {
  return (
    <div className='px-3'>
        <div><button className='px-2 py-2 mt-40 text-white bg-black rounded-full px-6 p-10 m-7'>TARGET AUDIENCE</button></div>
        <div className='w-1/3 h-fit'>
            <h1 className='font-bold text-5xl py-10 px-8  '>Prospective <br/> Customer <br /> Segmentation</h1>
            <p className='py-0 w-95 p-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit facilis asperiores aut ullam officia dolores eius provident neque reprehenderit expedita distinctio, deleniti numquam harum ipsam reiciendis atque mollitia quasi suscipit!</p>
            
        </div>
        <div className='py-40 px-10 '>
            < FiArrowUpRight className='w-18 h-18'/>
        </div>
    </div>
  )
}

export default Leftsection