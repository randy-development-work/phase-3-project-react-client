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

    const handleFormSubmission = (event) => {
        event.preventDefault();

        // set the request to the server
        fetch(`https://g-iv-back-end-production.up.railway.app/charities/${charityId}`, {
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
            <h3>Edit Charity</h3>

            <form method="POST" className="mt-5" onSubmit={handleFormSubmission}>
            {/* handle image upload */}
            <div className="mb-4">
                <input type="file" className="form-control" />
            </div>

            {/* handle title input */}
            <div className="mb-4">
                <label htmlFor="individual-name" className="form-label">Charity name</label>
                <input type="text" name="name" className="form-control" id="individual-name" placeholder="Edit name"
                    value={editData?.name}
                    onChange={handleFormInput} />
            </div>

            {/* handle description */}
            <div className="mb-4">
                <label htmlFor="individual-description" className="form-label">Charity description</label>
                <textarea name="description" className="form-control" id="individual-description" rows="5"
                    value={editData?.description}
                    onChange={handleFormInput}></textarea>
            </div>


            {/* handle location */}
            <div className="mb-4">
                <label htmlFor="individual-dob" className="form-label">Charity Location</label>
                <input type="text" name="location" className="form-control" id="individual-dob"
                    value={editData?.location}
                    onChange={handleFormInput} />
            </div>

            {/* handle date of death */}
            <div className="mb-4">
                <label htmlFor="individual-dod" className="form-label">Year Established</label>
                <input type="number" name="year_established" placeholder="yyyy" className="form-control" id="individual-dod"
                    value={editData?.year_established}
                    onChange={handleFormInput} />
            </div>

            <div className="mb-4">
                <button type="submit" className="btn btn-primary">
                    SAVE CHANGES
                </button>
            </div>
        </form>
        </Fragment>
    )
}

export default EditCharity;