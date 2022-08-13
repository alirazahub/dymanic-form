import React, { useState } from 'react';
import {FaMinus,FaPlus} from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), subjectName: '', subjectCode: '', subjectTeacherName: '' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
    alert("See Console For Output")
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })

    setInputFields(newInputFields);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(), subjectName: '', subjectCode: '',subjectTeacherName: '' }])
  }

  const handleRemoveFields = id => {
    const values = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }

  return (
    <div className='container'>
      <h1>Add New Member</h1>
      <form onSubmit={handleSubmit}>
        {inputFields.map(inputField => (
          <div className='row' key={inputField.id}>
            <div class="col-md-3 mb-3">
              <label class="form-label">Subject Name</label>
              <input type="text" value={inputField.subjectName} onChange={event => handleChangeInput(inputField.id, event)} name="subjectName" class="form-control" placeholder="Science" required/>
            </div>
            <div class="col-md-3 mb-3">
              <label class="form-label">Subject Code</label>
              <input type="text" value={inputField.subjectCode} onChange={event => handleChangeInput(inputField.id, event)} name="subjectCode" class="form-control" placeholder="SCN-100" required/>
            </div>
            <div class="col-md-3 mb-3">
              <label class="form-label">Teacher Name</label>
              <input type="text" value={inputField.subjectTeacherName} onChange={event => handleChangeInput(inputField.id, event)} name="subjectTeacherName" class="form-control" placeholder="M. Ali" required/>
            </div>

            <span className='btns col-md-3'>
            <button className='btn' disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
              <FaMinus  />
            </button>
            <button className='btn' onClick={handleAddFields}>
              <FaPlus />
            </button> 
            </span>
          </div>
        ))}
        <button className='btn btn-primary' onClick={handleSubmit} >Send</button>
      </form>
    </div>
  );
}

export default App;
