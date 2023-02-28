import Home from "./Home";
import React, {useState,useEffect} from "react";
import { Fragment } from "react";
import EachCharity from "./EachCharity";
import AddDonation from "./AddDonation";
import { Route, Routes, Outlet } from "react-router-dom";

function CharitiesPage(){
    const [charities, setCharities]= useState([]);
    const [search, setSearch] = useState("")

    const searched = charities.filter((charity) => {
        return search.toLowerCase() === ""
          ? charity
          : charity.name.toLowerCase().includes(search);
      });

useEffect(() => {
        fetch(" http://localhost:3000/charities")
        .then((response) => response.json())
        // using async method to add events
        .then((charitiesData) => {
            console.log(charitiesData) 
            return setCharities(() => charitiesData)})
    }, [])

    const onecharity = searched.map((charity) => {
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
                           <div>
                           <form style={{padding:'20px  20px ',paddingLeft: '180px'}} className="d-flex " role="search">
                             <input style={{width:'60rem'}}className="form-control me-2" type="text" placeholder="Search for a charity" value={search}  onChange={(e) => setSearch(e.target.value)} aria-label="Search"/>
                          </form>
                           </div>
                                {onecharity}
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