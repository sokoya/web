import React from 'react'
import LastBannerImg from '../assets copy/images/homepage/lastbannerimg.png'
import { Link } from 'react-router-dom'

function LastBanner() {
  return (
    <div className="py-0 md:px-10 px-1 my-10">
    <div className="bg-[#144BC7] md:px-10 md:p-1 p-0 rounded-xl text-white overflow-hidden relative scale-[98%]">
      <div className="grid md:grid-cols-2 grid-cols-1 md:my-5 my-0">
        <div className="md:p-2 p-10">
          <h2 className="text-md font-bold my-1 md:my-2 text-3xl">
            Start Building Today
          </h2>

          <p className="my-2 text-white text-md">
            Sign up in seconds and start processing payments right away!
            Alternatively, our experts are here to help you craft a
            tailored payment solution that perfectly suits your business
            needs - just reach out to us!.
          </p>
          <br />

          <div className="md:flex block items-center my-3">
            <Link
              to="/register"
              className="p-3 rounded-lg md:w-auto w-full mx-2 font-bold bg-white text-black transition ease-in-out duration-300 transform hover:-translate-y-1"
            >
              Start Building
            </Link>
            <Link
              to="/contactus"
              className=" border-solid border mx-2 font-bold p-3 rounded-lg bg-white text-black transition ease-in-out duration-300 transform hover:-translate-y-1 "
            >
              Contact us
            </Link>
          </div>
        </div>

        <div className="m-0 md:mt-0 mt-5 pt-5 flex justify-center overflow-hidden">
          <img
            src={LastBannerImg}
            className="md:absolute relative h-full mx-auto transform"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default LastBanner