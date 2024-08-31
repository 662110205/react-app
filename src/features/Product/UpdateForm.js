import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProduct } from "./action";
import { deleteProduct } from "./action";

export default function UpdateForm() {
    const { id } = useParams();
    const products = useSelector((state) => state.products);
    const product = products.find((product) => product.id === Number(id));

    const [name, setName] = useState(product.name);
    const [type, setType] = useState(product.type);
    const [imageURL, setImageURL] = useState(product.imageURL);

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
        dispatch(updateProduct({ id: product.id, name, type, imageURL }));
        navigate('/');
    };

    const onDelete = () => {
        dispatch(deleteProduct({ id: product.id }));
        navigate('/');
    };

    return (
        <Fragment>
            <h1>Update Product</h1>
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

                <button type="button" className="UpdateForm__delete-button">
                    Delete restaurant
                </button>
                <button type="submit" onClick={onDelete}>Update product</button>
            </form>
        </Fragment>
    );
}