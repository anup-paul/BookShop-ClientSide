import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddBook = () => {


    const [imageURL, setImageURL] = useState(null);

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'a015be077e18d483a48d0121165bcbdc')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                console.log(response.data.data.display_url);
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => 
    {
        console.log(data)
        const bookData = {
            bookName:data.bookName,
            price:data.price,
            authorName:data.authorName,
            imageURL:imageURL
        }
        // console.log(bookData);
        fetch('http://localhost:7000/addBook',{
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
            <h1>This is add book page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="bookName" placeholder="Enter book name" ref={register} />
                <br />
                <input name="price" placeholder="Price" ref={register} />
                <br />
                <input name="authorName" placeholder="authorName" ref={register} />
                <br />
                <input name="name" type="file" onChange={handleImageUpload} ref={register} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddBook;