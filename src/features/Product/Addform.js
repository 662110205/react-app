import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { addProduct } from "./action";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
    const [name, setName] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [type, setType] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChangeName = (event) => {
        setName(event.target.value);
    }

    const onChangeImageURL = (event) => {
        setImageURL(event.target.value);
    }

    const onChangeType = (event) => {
        setType(event.target.value);
    }


    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(addProduct({ name, type, imageURL }));
        navigate('/');
    }

    return (
        <Fragment>
            <h1>Add Product</h1>
            <form id="create-form" onSubmit={onSubmit}>
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

                <button type="submit">Add product</button>
            </form>
        </Fragment>
    );
}
AddProduct.prototype = {
    AddProduct: PropTypes.func.isRequired
};

export default AddProduct;