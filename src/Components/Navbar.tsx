import olx from '../assets/olx.png'
import lens from '../assets/lens.png'
import arrow from '../assets/arrow.png'
import search from '../assets/search.png'
import Login from './Login'
import { useState } from 'react'
type search = {
    setSearch:any
}
const Navbar = (props:search) => {
    
const[loginPop,setLoginPop] = useState(false)

  return (
    <>
    <div className="flex gap-4 p-4 bg-slate-100 shadow-md">
      <img src={olx} alt="" className='h-9' />
      <div className='flex border-2 border-spacing-1 w-64 p-2 border-black justify-center ml-5  bg-white'>
        <img src={lens} alt="" className='h-5 mt-1 ' />
        <input type="text" placeholder='location' className='ml-3 outline-none'/>
        <img src={arrow} alt="" className='h-7' />
      </div>
      <div className='flex h-12 ml-4 border-2 border-black  bg-white'>
        <input onChange={(e)=>{props?.setSearch(e.target.value)}} placeholder='Find Cars, Mobile Phones and more...' className='outline-none ml-3 w-[50vw]'/>
        <img src={search} />
      </div>
      <div className='flex h-12 p-3 ml-10 cursor-pointer'>
        <h1 className='font-semibold'>ENGLISH</h1>
        <img src={arrow} alt="" className='h-7 ml-[5px]' />
      </div>
      <div className='flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline'>
        <h1 className='font-semibold text-lg' onClick={()=>{setLoginPop(!loginPop)}}>Login</h1>
      </div>
      <div className='w-28 flex h-12 p-2 ml-6 cursor-pointer rounded-full border border-yellow-500 hover:no-underline'>
        <h1 className='font-semibold text-lg ml-3'>+ SELL</h1>
      </div>
    </div>{
        loginPop && <Login setLoginPop = {setLoginPop}/>
    }
    </>
  )
}

export default Navbar
