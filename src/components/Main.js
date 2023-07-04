import React, { useEffect } from 'react';
import { useState } from "react";
import Edit from './Edit';

const Main = ({mode}) => {

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
    const handleDelete=async (id)=>{
        const res = await fetch(`https://todo-backend-1qnd.onrender.com/${id}`, {
            method:"DELETE"
        });

        const deletedRow = await res.json();
        if(deletedRow){
            alert("Row Deleted");
            setCheckUpdated(!checkUpdated);
        }
        else{
            alert("Invalid action")
        }
       
    }
    
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
                <input type="text" name="title" style={{backgroundColor:`${mode==='dark'?'#635985':'white'}`, color:`${mode==='dark'?'white':'black'}`}} className="form-control" id="titleText" placeholder='Enter Title' onChange={handleInputs} value={notes.title}/>
            </div>
            <div className="mb-3">
                <textarea style={{backgroundColor:`${mode==='dark'?'#635985':'white'}`, color:`${mode==='dark'?'white':'black'}`}} className="form-control" name="description" id="descText" placeholder='Enter Description' onChange={handleInputs} value={notes.description}></textarea>
            </div>
            <button  className="btn btn-primary" onClick={handleSubmit}>Add Task</button>
            </form>
        </div>
        
        {data && data.length >0 ?<div className="container">
            <table className="table" style={{color:`${mode==='dark'?'white':'black'}`}}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                {data && data.map((x) => (
              <tr>
                {/* <td>{x._id}</td> */}
                <td>{x.title}</td>
                <td>{x.description}</td>
                <td><Edit rowData={x} setData={setData}/></td>
                {/* <td><button onClick={handleEdit(x)}>Edit</button></td> */}
                <td><button className="btn btn-danger btn-sm" onClick={() => handleDelete(x._id)}>Delete</button></td>
              </tr>
            ))}
                </tbody>
            </table>
        </div>:<h5 className='text-center'>No Task to display</h5>}
        
    </>
  )
}

export default Main