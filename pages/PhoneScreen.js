import React from 'react'
import Image from 'next/image'
const PhoneScreen = () => {
  return (
    <div className="flex flex-col   bg-sky-500 p-4   rounded-md w-60 h-max">
      <div className="flex justify-between p-4">
        <h5>12:30</h5>
        <div className="flex items-center gap-1">
          <Image src="/network-signal.png" height="12" width="12" />
          <Image src="/battery.png" height="12" width="12" />
          <Image src="/wifi-connection.png" height="12" width="12" />
        </div>
      </div>
      {/* into */}
      <div className="text-3xl">
        Your Vehicle is <br />
        <span className="text-3xl font-bold">Out Of Delivery</span>
      </div>
      {/* vancouver map2 */}
      <div className="rounded-md">
        <Image src="/vancouverMap2.png" height="156" width="262" />
      </div>
      {/*  request image and car image*/}
      <div className="relative">
        <Image src="/request.png" height="222" width="262" />
      </div>
      {/* car image */}
      <div className="flex z-10 absolute bottom-3 right-0">
        <Image src="/rangerover2.png" height="165" width="149" />
      </div>
    </div>
  )
}

export default PhoneScreen
