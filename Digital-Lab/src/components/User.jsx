import React, { useEffect, useState } from 'react'
import getUser from '../helper/getUser';

function user() {
    const [ content , setContent ] = useState();

    useEffect(() =>{
        getUser().then(response => {
            setContent(response.data)
        });
    }, error => {
        console.error(error);
    })

  return (
    <div>
        <h2>User</h2>
        <p>{content}</p>
    </div>
    
  )
}

export default user