import React from 'react'
import MyApp from '../Components/Cal'


function BookADemo() {
  return (
    <>
      <div className="my-5 flex justify-center">
        <div className='w-[90%]'>
        <div className="lg:mx-5 mx-2 md:my-10 my-20">
          <h2 className="text-back md:text-6xl text-3xl md:font-semibold text-center ">
            Book a Demo
          </h2>
        </div>
        <div className="flex justify-center md:mx-10 mx-2 my-10">
          <h2 className=" text-black md:text-md text-center md:w-[70%] w-full">
            Get a free live one-on-one demo of the Payscribe API. You do not need to create an account. You can choose
            to do it yourself as we guide you or we show it to you while you do
            it yourself later.
          </h2>
        </div>
        <MyApp/>
        </div>
      </div>
    </>
  )
}

export default BookADemo
