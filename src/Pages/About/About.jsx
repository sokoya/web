import React from 'react'
import { Link } from 'react-router-dom'
import About1 from '../../assets copy/images/friends.jpg'

function About() {
  return (
    <>
      <div className="h-screen bg-sky-700 grid md:grid-cols-2 grid-cols-1 items-center">
        <div className="flex items-center">
          <div className="text-white p-2 md:m-5 m-2">
            <h1 className="font-bold text-xs m-2 my-1">WHO WE ARE</h1>
            <h1 className="md:text-4xl text-2xl font-bold m-2 my-1 leading-[1.2em]">
              Transforming Financial Services for Individuals, Businesses, and
              Beyond.
            </h1>
            <p className="m-2 md:leading-7 leading-6">
              We are on a mission to bridge the gap between individuals and
              fintech innovation. By offering a platform that serves both
              personal finance and the sophisticated requirements of businesses,
              we’re creating a seamless ecosystem where everyone can thrive.
            </p>

            <div className="my-2 transform hover:-translate-y-1 transition ease-in-out duration-300">
              <Link
                to="/register"
                className="p-3 rounded-lg mx-2 bg-primary text-white"
              >
                Create a Free Account
              </Link>
            </div>
          </div>
        </div>

        <div>
          <img src={About1} className="h-[80%]"/>
        </div>
      </div>
    </>
  )
}

export default About
