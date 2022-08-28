
import React from 'react'
import { Link, Redirect, useLocation } from 'react-router-dom'

import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./Firebase";
import { v4 } from "uuid";
import CreateProductPage from './CreateProductPage';

const CreateProduct = () => {
    const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);


  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };
  const uploadFile1 = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        localStorage.setItem('img2', url);
        
      });
    });

  };

 
  
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
          
        });
      });
    });
  }, []);
    return(
        <div className="container_register">
        <div className="app-wrapper">
            <div>
                <h2 className="title_1"> Create Product</h2>
            </div>
            <form className="form-wrapper">
              <div className="name"> 
                <label class="lable"><strong>Image 02 </strong></label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1" placeholder="" onChange={(event) => {setImageUpload(event.target.files[0]);}}  />
                    <Link to={"/createProduct"}>
                    <button onClick={uploadFile1} > Upload Image</button>
                    </Link>
              </div>


            </form>
            </div>
        </div>
    );
}

export default CreateProduct;



