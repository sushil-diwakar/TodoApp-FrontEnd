import React from 'react'

const About = ({mode}) => {
  return (
    <>
    <div className="container" style={{color:`${mode==='dark'?'white':'black'}`}}>
        <u><h2 className="text-center mt-4" >About Todo App</h2></u>
         <h4 className="text-center">This is a simple MERN based ToDo web app where user can add, update, delete there daily tasks.</h4>
         <p className="text-center">
         ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules. We can add more tasks at any time and delete a task that is completed. 
         </p>
      </div>
    </>
  )
}

export default About;