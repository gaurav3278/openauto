import React, {useState} from 'react'
import validator from 'validator'
const Form = () => {
    const [name,setName]=useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validator.isEmail(email)) {
            setError('Please enter a valid email')
        } else {
            setError('')
        }
    }
    //name validator
    const handleNameChange = (e) => {
        setName(e.target.value)
        if (validator.isEmpty(e.target.value)) {
            setError('Please enter your name')
        } else {
            setError('')
        }
    }

  return (
    <div className="flex px-40 py-20 gap-10">
      <div className="flex flex-col  w-1/2">
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
      <div className=" w-1/2 flex flex-col gap-10">
        <div className="border border-gray-600 rounded-md w-full relative">
          <div className="absolute -top-3 bg-white ml-4">Name</div>

          <input type="text" className="focus:outline-none py-1" onChange={handleNameChange} />
        </div>
        <div className="border border-gray-600 rounded-md w-full relative">
          <div className="absolute -top-3 bg-white ml-4 ">Phone</div>

          <input className="focus:outline-none py-1" type="phno" />
        </div>
        <div className="border border-gray-600 rounded-md w-full relative">
          <div className="absolute -top-3 bg-white ml-4">Message</div>

          <input type="text" className="focus:outline-none py-1 h-20" />
        </div>
        <div className="flex  border border-gray-400 rounded-md w-max p-3">
          <button onSubmit={handleNameChange} >Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Form
