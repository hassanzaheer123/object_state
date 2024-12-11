import React from 'react'
import { FaTrash } from 'react-icons/fa'

const Entries = ({name,email,age,dateOfBirth,address,files,filter2,index}) => {
  return (
    <div  className=" rounded p-2 mt-2 col-lg-3 border shadow p-3">
     
        <div className="row mx-auto">   
        <FaTrash index={index} onClick={filter2} size={30} color='red' cursor='pointer' className='my-3' /></div>

              <p><strong>Name:</strong> {name}</p>
              <p><strong>Email: </strong> {email}</p>
              <p><strong> Age:</strong> {age}</p>
              <p><strong> Date of Birth:</strong> {dateOfBirth}</p>
              <p><strong>Address: </strong> {address}</p>
              {files.length > 0 && (
                <div>
                  <strong>Files:</strong>
                  <ul className='d-flex flex-wrap'>
                    {files.map((file, i) => (
                       
                        <div key={i} className="mt-1 ">
                          {file.type.startsWith('image/') && <>
                          <img width={100} height={100} className='mx-2' src={URL.createObjectURL(file)} alt="" />
                          </>}
                          {file.type.startsWith('video/') && <>
                          <video  className='mx-2'  width={150} height={100} controls src={URL.createObjectURL(file)}></video>
                          
                          </>}
                          {file.type.startsWith('audio/') && <>
                          <audio style={{width:'250px'}} className='mx-2' controls src={URL.createObjectURL(file)}></audio>
                          
                          </>}
                          {file.type === 'application/pdf' && <span>📄 {file.name}</span>}
                        </div>
                     
                    ))}
                  </ul>
                </div>
              )}
            </div>
  )
}

export default Entries
