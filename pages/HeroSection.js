import React from 'react'
import Image from 'next/image'
const HeroSection = () => {
  return (
    <div className="flex mt-40">
      <div className="flex h-full w-64 bg-gray-300/30  p-8 relative ">
        <Image src="/ABOUT.png" className='' height={100} width={100} />
        <div className="text-5xl z-10 absolute  ml-24 ">
          About <br /> <span className="text-5xl font-bold">OpenAuto</span>
        </div>
      </div>

      <div className="flex flex-col  mt-36">
        <div className="flex p-5 items-start  mt-5 w-2/4  ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </div>
        <div className="flex flex-row justify-around gap-2">
          {/* 1 */}
          <div className="flex flex-col gap-2 ">
            <div className=''>
              <Image src="/tracking.png" height={25} width={25} />
            </div>
            <div>
              Track <span className="font-bold">Live</span>
            </div>
            <div>Track Your Car Service Real-Time</div>
            <div>And get Status Updates</div>
          </div>
          {/* 2 */}
          <div className="flex flex-col gap-2">
            <div>
              <Image src="/tracking.png" height={25} width={25} />
            </div>
            <div>
              Easy <span className="font-bold">Pick-Ups</span>
            </div>
            <div>Book Your Preferred Slot For Pick-Up</div>
            <div>Of Your Vehicle</div>
          </div>
          {/* 3 */}
          <div className="flex flex-col gap-2">
            <div>
              <Image src="/secure.png" height={25} width={25} />
            </div>
            <div>
              Payment <span className="font-bold">Online</span>
            </div>
            <div>We Offer Flexible Payment Options</div>
            <div>For Your Convinience</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
