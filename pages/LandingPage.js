import React from 'react'
import ope from '../public/rangerover.png'
import Image from 'next/image'
import validator from 'validator'
import PhoneScreen from './PhoneScreen'
import HeroSection from './HeroSection'
import Form from './Form'
const LandingPage = () => {
  return (
    <div className=" sm:w-full sm:flex sm:flex-col bg-red-500 ">
      {/* navbar */}
      <div className="nav flex justify-between p-8 sm:flex sm:justify-between ">
        <Image src="/oo.png" height={200} width={200} />

        <button className="border border-gray-400 bg-white px-3 rounded-md sm:hidden">
          Connect
        </button>
      </div>
      {/*  hero section*/}
      <div className="flex justify-around p-10 mt-10 relative sm:flex sm:flex-col ">
        <div className="flex  flex-col   w-2/5 sm:w-full">
          <h1 className="text-7xl sm:text-4xl ">
            Delivered to <br></br>
            <span className="text-7xl font-bold sm:text-4xl">Your Door.</span>
          </h1>
          <div>
            Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text.
            It Has Roots In A Piece Of Classical Latin Literature From 45 Bc,
            Making It Over 2000 Years Old.
          </div>

          {/* apps available on app store */}
          <div className="flex flex-col mt-14">
            <div className="flex items-center gap-1">
              <Image src="/apple.png" height={50} width={15} />
              <h3>Avalable on app store</h3>
              <Image src="/right-arrows.png" height={50} width={30} />
            </div>
            <div className="flex items-center gap-1">
              <Image src="/playstore.png" height={50} width={15} />
              <h3>Avalable on play store</h3>
              <Image src="/right-arrows.png" height={50} width={30} />
            </div>
          </div>
        </div>
        <div className="h-2/3 ">
          <Image src="/vancouverMap.png" height={400} width={700} />
        </div>
        {/* car image */}
        <div className="flex justify-center  z-10 absolute top-2/3 ">
          <img src="/rangerover.png" height={240} width={564} alt="" />
        </div>
        {/* mobile section */}
        <div className=" flex justify-center  z-10 absolute top-0 right-32 sm:hidden ">
          <PhoneScreen />
        </div>
      </div>
      {/* social icons */}
      <div>

      </div>
      {/* middle section */}
      <HeroSection/>
      {/* form section */}
      <Form/>
      {/* footer */}
      <div className="flex justify-around items-center p-5 bg-gray-400/50">
        <div>
          <Image src="/OpenAuto_Logo.png" height={100} width={100} />
        </div>
        <div>
          Copyright @ 2022 OpenAuto All Rights Reserved
        </div>
      </div>
    </div>
  )
}

export default LandingPage
