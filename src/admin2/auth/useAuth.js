import React from 'react'




export default function useAuth() {

    console.log('haha');
    console.log( localStorage.role);
   
    const role = localStorage.role;  
    let auth=false
    if(role=='admin'){
        (auth=true)
    }
    else{
        (auth= false)
    }

    return auth
}

