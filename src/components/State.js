import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react'

const State = () => {
   let data = 'amir'
   let num = 5;
   const[ user,setdata ] = useState(data)
   const[ users,setdatas ] = useState(num)

   function updata(){
   setdata('khan')
   setdatas(users+1)
   }
        

  return (
    <>
    <h1>hello {user}</h1>
    <h1>hello {users}</h1>
    <button onClick={updata}>click</button>
    </>
  )
}


export default State