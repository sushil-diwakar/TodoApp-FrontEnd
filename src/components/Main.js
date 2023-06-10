import React, { useEffect } from 'react';
import { useState } from "react";
import Edit from './Edit';

const Main = () => {

    const [notes, setNotes] = useState({title:"",description:""});
    const [data, setData] = useState();
    const [checkUpdated, setCheckUpdated]=useState(false);
    let name,value;
    const handleInputs = (event)=>{
        name = event.target.name;
        value = event.target.value;
        setNotes({...notes, [name]:value});
    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const {title, description} = notes;
        const res = await fetch('https://todo-backend-1qnd.onrender.com/add', {
            method:"POST",
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
            setNotes({title:"",description:""})
            setCheckUpdated(!checkUpdated);
        }
    }
    const handleDelete=(id)=>{
        fetch(`https://todo-backend-1qnd.onrender.com/${id}`, {
            method:"DELETE"
        }).then(setCheckUpdated(!checkUpdated));
       
    }

    // const handleEdit = (x)=>{
    //     console.log(x)
    //     {<Edit rowData={x} setData={setData}/>}
    // }
    
    useEffect(()=>{
        
        fetch('https://todo-backend-1qnd.onrender.com/getAllNotes', {
            method: "GET",
        }).then((res)=>res.json()).then((storedData)=>{
            setData(storedData);
        });
        
    },[checkUpdated]);
    
    
  return (
    <>
        <div className="container">
            <form className='form' method='POST'>
            <div className="mb-3 mt-3">
                <input type="text" name="title" className="form-control" id="titleText" placeholder='Enter Title' onChange={handleInputs} value={notes.title}/>
            </div>
            <div className="mb-3">
                <textarea className="form-control" name="description" id="descText" placeholder='Enter Description' onChange={handleInputs} value={notes.description}></textarea>
            </div>
            <button  className="btn btn-primary" onClick={handleSubmit}>Add Task</button>
            </form>
        </div>
        
        {data && data.length >0 ?<div className="container">
            <table className="table">
                <tr>
                    {/* <th>id</th> */}
                    <th>Title</th>
                    <th>Description</th>
                </tr>
                {data && data.map((x) => (
              <tr>
                {/* <td>{x._id}</td> */}
                <td>{x.title}</td>
                <td>{x.description}</td>
                <td><Edit rowData={x} setData={setData}/></td>
                {/* <td><button onClick={handleEdit(x)}>Edit</button></td> */}
                <td><button onClick={() => handleDelete(x._id)}>Delete</button></td>
              </tr>
            ))}
                
            </table>
        </div>:<h5 className='text-center'>No Task to display</h5>}
        
    </>
  )
}

export default Main