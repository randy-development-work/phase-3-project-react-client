import React , { useState, useEffect } from "react";

function Donations(){
    const[viewDonations,setViewDonations] = useState([])
    useEffect(()=> {
        fetch("http://localhost:3000/donations")
        .then(res => res.json())
        .then(data =>  console.log(data) )
    },[])

    console.log(viewDonations)
    return(
        <div>
            Hi
        </div>
    )
}

export default Donations