import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddBook.css';

const AddBook = () => {


    const [imageURL, setImageURL] = useState(null);

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'a015be077e18d483a48d0121165bcbdc')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                console.log(response.data.data.display_url);  //for checking image upload
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => 
    {
        const bookData = {
            bookName:data.bookName,
            price:data.price,
            authorName:data.authorName,
            imageURL:imageURL
        }


        fetch('https://limitless-shelf-16314.herokuapp.com/addBook',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(bookData)
        })
        .then(res => console.log(res))
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="form-design " >

                <input name="bookName" placeholder="Enter book name" className="form-control" ref={register} />
                <input name="price" placeholder="Price" className="form-control" ref={register} />
                <input name="authorName" placeholder="authorName" className="form-control" ref={register} />
                <input name="name" type="file" onChange={handleImageUpload} ref={register} />
                <br />
                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default AddBook;