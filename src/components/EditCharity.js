import React, { Fragment, useState, useEffect } from "react";
import { redirect, useParams, useNavigate } from "react-router-dom";

function EditCharity({charities, onUpdateCharity}) {
    const {id, name, image, location, description, year_established} = charities
    const { charityId } = useParams();
    const [editData, setEditData] = useState({});
    // navigator
    let navigator = useNavigate();

    // fetch the user & pre-fill the form so that the user does not have to write from scratch
    useEffect(() => {
        fetch(`https://g-iv-back-end-production.up.railway.app/charities/${charityId}`)
        .then((r)=> r.json())
        .then((data) => setEditData(data))
    }, [charityId])
    // console.log(editData.image);

    const handleFormSubmission = (event) => {
        event.preventDefault();

        // set the request to the server
        fetch(`https://g-iv-back-end-production.up.railway.app/charities/${charityId}/edit`, {
            method: "PATCH",
            body: JSON.stringify(editData),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        })
            .then((resp) => resp.json())
            // .then((status) => {
            //     // TODO: Redirect to the user page
            //     if (status === 200) return redirect(`/charities`);
            // })
            .then((updatedEv) => onUpdateCharity(updatedEv));
            alert('Edit Successful.')
            navigator('/charities')
    }
    const handleFormInput = (event) => {
        const key = event.target.name;
        const val = event.target.value;

        setEditData({ ...editData, [key]: val });
    }

    return (
        <Fragment>
            <h3 style={{textAlign:'center',marginTop:'70px'}}>Edit Charity</h3>
        <div>
        <form
  method="PATCH"
  className="EditCharity-form"
  style={{
    width: "75%",
    border: "1px solid #ccc",
    padding: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50px",
    backgroundColor: "#f5f5f5",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)",
  }}
  onSubmit={handleFormSubmission}
>
  {/* handle image upload */}
  <label htmlFor="individual-image" className="form-label">
    Charity image
  </label>
  <input
    type="text"
    name="image"
    className="form-control"
    id="individual-image"
    value={editData?.image}
    onChange={handleFormInput}
    style={{ marginTop: "8px" }}
  />

  {/* handle title input */}

  <label htmlFor="individual-name" className="form-label">
    Charity name
  </label>
  <input
    type="text"
    name="name"
    className="form-control"
    id="individual-name"
    placeholder="Edit name"
    value={editData?.name}
    onChange={handleFormInput}
    style={{ marginBottom: "15px" }}
  />

  {/* handle description */}

  <label htmlFor="individual-description" className="form-label">
    Charity description
  </label>
  <textarea
    name="description"
    className="form-control"
    id="individual-description"
    rows="3"
    value={editData?.description}
    onChange={handleFormInput}
    style={{ marginBottom: "15px" }}
  ></textarea>

  {/* handle location */}

  <label htmlFor="individual-dob" className="form-label">
    Charity Location
  </label>
  <input
    type="text"
    name="location"
    className="form-control"
    id="individual-dob"
    value={editData?.location}
    onChange={handleFormInput}
    style={{ marginBottom: "15px" }}
  />

  {/* handle Year Established */}

  <label htmlFor="individual-doe" className="form-label">
    Year Established
  </label>
  <input
    type="number"
    name="year_established"
    placeholder="yyyy"
    className="form-control"
    id="individual-dod"
    value={editData?.year_established}
    onChange={handleFormInput}
    style={{ marginBottom: "15px" }}
  />

  <button type="submit" className="btn btn-primary">
    SAVE CHANGES
  </button>
</form>

        </div>
        </Fragment>
        
    )
}

export default EditCharity;