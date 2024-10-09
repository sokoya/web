import React from 'react'

export default function HeroComponent() {
  return (
    <div>
      <div className="h-screen bg-basic-gradient grid md:grid-cols-2 grid-cols-1">
        <div className="flex md:h-[80%] h-[100%] md:my-0 my-5 items-center md:py-10 py-1 md:px-5 px-1">
          <motion.div
            className="text-white p-2 md:m-5 m-2"
            variants={show}
            initial="hidden"
            whileInView="show"
          >
            <motion.h1 variants={show} className="font-bold m-2 my-1">
              TAILORED FOR BUSINESS GROWTH
            </motion.h1>
            <motion.h1 className="md:text-5xl text-2xl font-bold m-2 my-1 leading-[1.2em]">
              Comprehensive Financial Solutions Tailored for Your Business
              Growth.
            </motion.h1>
            <motion.p
              variants={show}
              initial="hidden"
              whileInView="show"
              className="m-2 md:leading-7 leading-6"
            >
              Empower your business with secure transactions, advanced
              management tools, and seamless financial integrations. Our
              innovative solutions streamline operations, boost efficiency, and
              drive sustainable growth, giving your business the edge it needs
              to thrive.
            </motion.p>
            <br />

            <div className="my-2 md:flex">
              <p>
                <Link
                  to="/register"
                  className="p-3 rounded-lg mx-2 bg-white font-bold hover:-translate-y-1 text-black transition-transform duration-300"
                >
                  Create a Free Account
                </Link>
              </p>
              <br />
              <p>
                <Link
                  to="/contact-us"
                  className="p-3 rounded-lg mx-2 md:my-0 my-3 bg-white font-bold hover:-translate-y-1 hover:bg-slate-500 text-black transition-transform duration-300"
                >
                  Reach out to us
                </Link>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={show}
          initial="hiddenimg"
          whileInView="imageshow"
          className="flex h-[80%] items-center top-0 sticky"
        >
          <img
            src={BusImg1}
            className="transform scale-[70%] rounded-4xl flex justify-start"
          />
        </motion.div>
      </div>
    </div>
  )
}
