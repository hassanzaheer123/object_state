import React from 'react'

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-4 mx-auto p-3">
            <h1 className='text-center'>Multiple Controlled Inputs</h1>
            <form className='form border rounded p-3'>
              <div className="mt-2">
                <label htmlFor="" className="">Name :</label>
                <input type="text" className='form-control mt-1' placeholder='Please Enter Your Name' />
              </div>
              <div className="mt-2">
                <label htmlFor="" className="">Email :</label>
                <input type="email" className='form-control mt-1' placeholder='Please Enter Your Email' />
              </div>
              <div className="mt-2">
                <label htmlFor="" className="">Age :</label>
                <input type="number" className='form-control mt-1' placeholder='Please Enter Your Age' />
              </div>
              <div className="mt-2">
                <label htmlFor="" className="">Date Of Birth :</label>
                <input type="date" className='form-control mt-1' placeholder='Please Enter Your Date Of Birth' />
              </div>
              <div className="mt-2">
                <label htmlFor="" className="">Address :</label>
                <textarea type="text" className='form-control mt-1' placeholder='Please Enter Your Address' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
