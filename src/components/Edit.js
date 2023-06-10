import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Edit(props) {
  
  const [show, setShow] = useState(false);
  const [checkUpdated, setCheckUpdated]=useState(false);
  const [notes, setNotes] = useState(props.rowData);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    setNotes(props.rowData);
  };

  let name,value;
  const handleInputs = (event)=>{
    name = event.target.name;
    value = event.target.value;
    setNotes({...notes, [name]:value});
}
const handleUpdate= async (e)=>{
  e.preventDefault();
  const {title, description} = notes;
  if(!title || !description){
    alert("Please Fill the details");
  }
  else{
      const res = await fetch(`/${props.rowData._id}`, {
          method:"PATCH",
          headers:{
              "Content-Type": "application/json"
          },
          body:JSON.stringify({title,description})
      });

      const data = await res.json();
      
      if(data.status===400 || !title || !description)
          alert('Invalid Data');
      else{
          alert('Saved Successfully');
          setCheckUpdated(!checkUpdated);
          handleClose();
      }
  }
}
useEffect(()=>{
        
  fetch('https://todo-backend-1qnd.onrender.com//getAllNotes', {
      method: "GET",
  }).then((res)=>res.json()).then((storedData)=>{
      props.setData(storedData);
  });
  
},[checkUpdated]);


  return (
    <>
      <button onClick={handleShow}>
        Edit
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="container">
            <form className='form' method='POST'>
                <div className="mb-3 mt-3">
                    <input type="text" name="title" className="form-control" id="titleText" placeholder='Enter Title' onChange={handleInputs} value={notes.title} required/>
                </div>
                <div className="mb-3">
                    <textarea className="form-control" name="description" id="descText" placeholder='Enter Description' onChange={handleInputs} value={notes.description} required></textarea>
                </div>
            </form>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;