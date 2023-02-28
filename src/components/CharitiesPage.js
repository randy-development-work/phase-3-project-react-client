import Home from "./Home";
import React, {useState,useEffect} from "react-router-dom";
import { Fragment } from "react";
import EachCharity from "./EachCharity";
import AddDonation from "./AddDonation";

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

    oneCharity = charities.map((charity) => {
        return (
            <EachCharity key={charity.id} charity={charity}/>
        )
    })

    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/allcharities" element={
                    <Fragment>
                        <div className="ui three column grid container" style={{
                            
                            display: 'flex',
                            justifyContent: 'space-between', 
                            alignItems: 'center' 
                            }}>
                            <div className="row">
                                {oneCharity}
                            </div>
                            
                        </div>
                    </Fragment>
                }>

                </Route>
                <Route path="adddonation/:donationID" element={<AddDonation />} />


            </Routes>

        </Fragment>
    )
}
export default CharitiesPage