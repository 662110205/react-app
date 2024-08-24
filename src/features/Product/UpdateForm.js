import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";

export default function UpdateForm() {
    const { id } = useParams();
    console.log(id);

    const [name, setName] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [type, setType] = useState('');

    const onChangeName = (event) => {
        setName(event.target.value);
    }

    const onChangeImageURL = (event) => {
        setImageURL(event.target.value);
    }

    const onChangeType = (event) => {
        setType(event.target.value);
    }

    return (
        <Fragment>
            <h1>Update Product</h1>
            <form id="create-form">
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input
                        name="name"
                        type="text"
                        id="name"
                        value={name}
                        onChange={onChangeName} />
                </div>

                <div className=" input-group">
                    <label htmlFor="imageURL">Image URL</label>
                    <input
                        name="imageURL"
                        type="text"
                        id="imageURL"
                        value={imageURL}
                        onChange={onChangeImageURL} />
                </div>

                <div className=" input-group">
                    <label htmlFor="type">Type</label>
                    <input
                        name="type"
                        type="text"
                        id="type"
                        value={type}
                        onChange={onChangeType} />
                </div>

                <button type="button" className="UpdateForm__delete-button">
                    Delete restaurant
                </button>
                <button type="submit">Update product</button>
            </form>
        </Fragment>
    );
}