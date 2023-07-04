import React from 'react'

const Contact = ({mode}) => {
  return (
    <>
    <div className="container" style={{color:`${mode==='dark'?'white':'black'}`}}>
        <u><h2 className="text-center mt-4" >Contact us</h2></u>
         <h4 className="text-center">You can contact us via email.</h4>
         <p className="text-center">
         dummy@email.com 
         </p>
      </div>
    </>
  )
}

export default Contact