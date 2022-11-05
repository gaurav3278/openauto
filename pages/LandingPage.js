import React, { useState } from 'react'
import map from '../public/map.png'
import ope from '../public/rangerover.png'
import arrow from '../public/ArrowBottom_icon.svg'
import Image from 'next/image'
import validator from 'validator'
import PhoneScreen from './PhoneScreen'
import HeroSection from './HeroSection'
import Form from './Form'
const LandingPage = () => {
  const [about, setAbout] = useState(false)
  return (
    <div className=" sm:w-full sm:flex sm:flex-col  ">
      {/* navbar */}
      <div className="nav flex justify-between p-8 sm:flex sm:justify-between  ">
        <Image src="/oo.png" height={200} width={200} alt="" />

        <button className="border border-gray-400 bg-white-smoke  px-8 rounded-md sm:hidden">
          Contact
        </button>
      </div>
      {/*  hero section*/}
      <div className="flex justify-around p-10 items-center sm:p-0  relative sm:flex-col sm:w-full ">
        <div className="flex  flex-col sm:px-10  w-2/5 sm:w-full font-public">
          <h1 className="text-7xl sm:text-5xl ">
            Delivered to <br />
            <span className="text-7xl font-extrabold sm:text-5xl">Your Door.</span>
          </h1>
          <div className='font-inter text-xs  py-2   sm:p-3 '>
            Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text.
            It Has Roots In A Piece Of Classical Latin Literature From 45 Bc,
            Making It Over 2000 Years Old.
          </div>

          {/* apps available on app store */}
          <div className="flex flex-col mt-14 sm:hidden">
            <div className="flex items-center gap-1">
              <Image src="/apple.png" height={50} width={15} alt="" />
              <h3>Avalable on app store</h3>
              <Image src="/right-arrows.png" height={50} width={30} alt="" />
            </div>
            <div className="flex items-center gap-1">
              <Image src="/playstore.png" height={50} width={15} alt="" />
              <h3>Avalable on play store</h3>
              <Image src="/right-arrows.png" height={50} width={30} alt="" />
            </div>
          </div>
        </div>
        {/* vancouver image */}

        <div className="h-2/3 sm:pt-5 sm:w-full  ">
          <Image src="/map.png" className="" height={400} width={700} alt="" />
        </div>
        {/* car image */}
        <div className="flex justify-center  z-10 absolute left-60 top-2/3 sm:-left-20 sm:right-52 sm:w-2/3">
          <img src="/rangerover.png" className="" alt="range" />
        </div>

        <div className="sm:flex sm:flex-col sm:mt-14 sm:items-center hidden">
          <div className="flex items-center gap-1">
            <Image src="/apple.png" height={50} width={15} alt="" />
            <h3>Avalable on app store</h3>
            <Image src="/right-arrows.png" height={50} width={30} alt="" />
          </div>
          <div className="flex items-center gap-1">
            <Image src="/playstore.png" height={50} width={15} alt="" />
            <h3>Avalable on play store</h3>
            <Image src="/right-arrows.png" height={50} width={30} alt="" />
          </div>
        </div>
      </div>

      {/* social icons */}
      <div className="flex justify-end items-center pr-10 gap-6 sm:hidden">
        <div>
          <Image src="/Facebook_icon.svg" height={20} width={10} alt="" />
        </div>
        <div>
          <Image src="/twitter_icon.svg" height={40} width={20} alt="" />
        </div>
        <div>
          <Image src="/Liknedin_icon.svg" height={40} width={20} alt="" />
        </div>
      </div>
      <div
        class="flex flex-col w-full items-center pt-5 pb-3 cursor-pointer"
        onClick={() => {
          setAbout(!about)
        }}
      >
        <div>{!about ? 'Explore More' : 'Explore Less'}</div>
        {about && (
          <div>
            <Image
              src="/ArrowBottom_icon.svg"
              width={10}
              height={20}
              className="rotate-180"
              alt=""
            />
          </div>
        )}
        {!about && (
          <div className="">
            <Image src="/ArrowBottom_icon.svg" width={10} height={20} alt="" />
          </div>
        )}
      </div>
      {/* middle section */}
      {about && <HeroSection />}
      {/* form section */}
      {about && <Form />}
      {/* footer */}
      {about && (
        <div className="flex justify-between items-center  p-8 bg-light-gray sm:flex-col sm:p-5 sm:gap-3">
          <div>
            <Image src="/OpenAuto_Logo.png" height={100} width={100} alt="" />
          </div>
          <div>Copyright @ 2022 OpenAuto All Rights Reserved</div>
        </div>
      )}
    </div>
  )
}

export default LandingPage
