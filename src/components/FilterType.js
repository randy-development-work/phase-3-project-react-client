import React, { Fragment, useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';

function FilterType({ filterParam, setFilterParam }) {
    // categories usestate
    const [categories, setCategories] = useState([])

    // getting categories from server
    useEffect(() => {
        fetch("g-iv-back-end-production.up.railway.app/categories")
        .then((r)=>r.json())
        .then((data) => setCategories(data))
    },[]);
    
    return (
        <Fragment>   
       
            <Form.Select 
                style={{width: "30%"}}
                
                aria-label="Default select example"
                // new value of selection becomes the filterParam
                onChange={(e) => {
                    setFilterParam(e.target.value);
                    console.log(e.target.value);
                }}
            >
                <option value="All">Filter by Donation Category</option>
                {categories.map((item) => (
                        <option value={item["name"]}>{item["name"]}</option>
                ))}

                {/* <option value="Food">Food</option>
                <option value="Clothing">Clothing</option>
                <option value="Electronics">Electronics</option>
                <option value="Household Items">Household Items</option>
                <option value="Cash">Cash</option> */}

                
            </Form.Select>
        </Fragment>
    )

}

export default FilterType;