import React from 'react'

export default function Content() {
  return (
    <div className='bg-neutral-800 py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end relative z-10'>
            <h1 className='text-[10vw] md:text-[14vw] leading-[0.8] mt-10 relative z-10'>Parlons-en</h1>
            {/* <p>©copyright</p> */}
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20 h-[40vh]'>
           
        </div>
    )
}