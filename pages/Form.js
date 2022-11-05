import React, { useState } from 'react'
import validator from 'validator'
const Form = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const reg = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    // console.log(reg.test(phone))
    if (phone.match(reg)) {
      setErrorEmail(false)
    } else {
      setErrorEmail(true)
    }
  }
  
  //name validator
  const handleNameChange = (e) => {
    setName(e.target.value)
    const name = e.target.value
    if (name.length > 4 || name.length === 0) {
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <div className="flex px-40 py-20 sm:gap-10 sm:px-5 sm:flex-col gap-40">
      <div className="flex flex-col gap-y-2 w-1/2 sm:w-full">
        <div className="text-5xl font-light">
          We're All
          <br />
          <span className="text-5xl font-extrabold">Ears!</span>
        </div>
        <div className="text-base font-inter">
          If you Trouble Managing Your Order, Or Want To Talk To One Of Your
          Expert Technicians We Are Here For You!
        </div>
      </div>
      {/* form */}
      <form onSubmit={handleSubmit} className = 'w-full '>
        <div className=" w-3/4 flex flex-col gap-10 sm:w-full">
          <div className="border border-light-black p-2 rounded-md w-full relative">
            <div className="absolute -top-4 bg-white-smoke ml-4 p-1   text-light-black">Name</div>

            <input
              type="text"
              className="focus:outline-none py-2 bg-white-smoke"
              onChange={handleNameChange}
            />
          </div>
          {error && (
            <span className="text-red-500">
              name should be greater than 4 characters
            </span>
          )}
          <div className="border border-light-border p-2 rounded-md w-full relative">
            <div className="absolute -top-4 bg-white-smoke ml-4 p-1 text-light-black">Phone</div>

            <input
              className="focus:outline-none py-2 bg-white-smoke"
              type="tel"
              onChange={(e) => {
                setPhone(e.target.value)
              }}
            />
          </div>
          {errorEmail && (
            <span className="text-red-500">Please enter a valid phone number</span>
          )}
          <div className="border border-light-border rounded-md w-full relative p-3 h-28">
            <div className="absolute -top-4 bg-white-smoke ml-4 p-1 text-light-black">Message</div>

            <textarea name="" className='resize-none focus:outline-none h-full  w-full py-2 bg-white-smoke' rows="5"></textarea>
          </div>
          <div className="flex  border border-light-border rounded-md p-1 w-max sm:w-full sm:justify-center">
            <button type="submit" className = 'w-full h-full px-20 py-2 text-light-black'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
