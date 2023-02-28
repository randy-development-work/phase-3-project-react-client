import React, {useState,useEffect} from "react-router-dom";

function CharitiesPage(){
    const [charities,setCharities]= useState([]);

useEffect(() => {
        fetch("http://localhost:9292/test")
        .then((response) => response.json())
        // using async method to add events
        .then((charitiesData) => {
            console.log(charitiesData) 
            return setCharities(() => charitiesData)})
    }, [])
}
export default CharitiesPage