import React, { useState } from 'react';
import Entries from './Entries';

const App = () => {
  const [dataList, setDataList] = useState([]);
  const [data, setData] = useState({
    name: '',
    email: '',
    age: '',
    dateOfBirth: '',
    address: '',
    files: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setData({ ...data, files });
  };

  const handleData = () => {
    setDataList([...dataList, data]);
    setData({
      name: '',
      email: '',
      age: '',
      dateOfBirth: '',
      address: '',
      files: [],
    });
  };
  const filter2 =(item,index)=>{
    
    const dataListNew= dataList.filter((item)=>{
      return item.index!==index;
    })
    setDataList(dataListNew);
  }
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-lg-6 mx-auto p-3">
          <h1 className="text-center">Multiple Controlled Inputs</h1>
          <form className="form border rounded p-3">
            <div className="mt-2">
              <label>Name:</label>
              <input
                name="name"
                value={data.name}
                onChange={handleChange}
                type="text"
                className="form-control mt-1"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mt-2">
              <label>Email:</label>
              <input
                name="email"
                value={data.email}
                onChange={handleChange}
                type="email"
                className="form-control mt-1"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mt-2">
              <label>Age:</label>
              <input
                name="age"
                value={data.age}
                onChange={handleChange}
                type="number"
                className="form-control mt-1"
                placeholder="Enter Your Age"
              />
            </div>
            <div className="mt-2">
              <label>Date Of Birth:</label>
              <input
                name="dateOfBirth"
                value={data.dateOfBirth}
                onChange={handleChange}
                type="date"
                className="form-control mt-1"
              />
            </div>
            <div className="mt-2">
              <label>Address:</label>
              <textarea
                name="address"
                value={data.address}
                onChange={handleChange}
                className="form-control mt-1"
                placeholder="Enter Your Address"
              />
            </div>
            <div className="mt-2">
              <label>Files:</label>
              <input
                onChange={handleFileChange}
                type="file"
                multiple
                className="form-control mt-1"
              />
            </div>
            <div className="mt-3 d-flex flex-wrap">
              {data.files.map((file, index) => {
                const fileType = file.type;
                return (
                  <div key={index} className="mt-1">
                    {fileType.startsWith('image/') && <>
                    <img width={100} height={100} className='mx-2' src={URL.createObjectURL(file)} alt="" />
                    </>}
                    {fileType.startsWith('video/') && <>
                    <video  className='mx-2'  width={150} height={100} controls src={URL.createObjectURL(file)}></video>
                    
                    </>}
                    {fileType.startsWith('audio/') && <>
                    <audio  className='mx-2' controls src={URL.createObjectURL(file)}></audio>
                    
                    </>}
                    {fileType === 'application/pdf' && <span>📄 {file.name}</span>}
                  </div>
                );
              })}
            </div>
            <button
              onClick={handleData}
              type="button"
              className="btn btn-success w-100 my-2"
            >
              Add Data
            </button>
          </form>
        </div>
      </div>
      <div className="row gap-5 d-flex justify-content-center mb-5">

        {dataList.length>0 && <h3 className='text-center'>Data List</h3>}
          
          {dataList.map((entry, index) => (
            <Entries key={index} {...entry} filter2={()=>{filter2(index)}} index={index} />
          ))}
    
      </div>
    </div>
  );
};

export default App;
