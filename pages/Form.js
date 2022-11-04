import React, { useState } from 'react'
import validator from 'validator'
const Form = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const reg = new RegExp('^(+d{1,2}s)?(?d{3})?[s.-]d{3}[s.-]d{4}$')
    console.log(reg.test(phone))
    if (reg.test(email)) {
      setErrorEmail(true)
    } else {
      setErrorEmail(false)
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
    <div className="flex px-40 py-20 sm:px-5 sm:flex-col gap-10">
      <div className="flex flex-col  w-1/2 sm:w-full">
        <div className="text-5xl">
          We're All
          <br />
          <span className="text-5xl font-bold">Ears!</span>
        </div>
        <div>
          If you Trouble Managing Your Order, Or Want To Talk To One Of Your
          Expert Technicians We Are Here For You!
        </div>
      </div>
      {/* form */}
      <form onSubmit={handleSubmit} className = 'w-full'>
        <div className=" w-1/2 flex flex-col gap-10 sm:w-full">
          <div className="border border-gray-600 rounded-md w-full relative">
            <div className="absolute -top-3 bg-white ml-4">Name</div>

            <input
              type="text"
              className="focus:outline-none py-1"
              onChange={handleNameChange}
            />
          </div>
          {error && (
            <span className="text-red-500">
              name should be greater than 4 characters
            </span>
          )}
          <div className="border border-gray-600 rounded-md w-full relative">
            <div className="absolute -top-3 bg-white ml-4 ">Phone</div>

            <input
              className="focus:outline-none py-1"
              pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"
              type="tel"
              onChange={(e) => {
                setPhone(e.target.value)
              }}
            />
          </div>
          <div className="border border-gray-600 rounded-md w-full relative">
            <div className="absolute -top-3 bg-white ml-4">Message</div>

            <input type="text" className="focus:outline-none py-1 h-20" />
          </div>
          <div className="flex  border border-gray-400 rounded-md w-max px-5 py-3 sm:w-full sm:justify-center">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
