
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

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

const CreateProduct = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "images/");


  const [catSlug, setCatSlug] = useState("");
  const [desc, setDesc] = useState("");
  const [slug, settSlug] = useState("");
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");
  const [red, toggleRed] = useState(false);
  const [green, toggleGreen] = useState(false);
  const [blue, toggleBlue] = useState(false);
  const [l, toggleL] = useState(false);
  const [m, togglem] = useState(false);
  const [xl, toggleXL] = useState(false);

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        localStorage.setItem('img1', url);
      });
    });
  };
  const uploadFile1 = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
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

  const axios = require('axios').default;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    var obj = {
      "title": title,
      "price": price,
      "image01": localStorage.getItem("img1"),
      "image02": localStorage.getItem("img2"),
      "categorySlug": catSlug,
      "slug": slug,
      "description": desc,
      "variantList": []
    }

    if(red){
      const variant =
      {
        "vid" : {
          "variantName": "color",
          "variantValue": "red"
        }
      }

      obj.variantList.push(variant);
    }

    if(blue){
      const variant =
      {
        "vid" : {
          "variantName": "color",
          "variantValue": "blue"
        }
      }

      obj.variantList.push(variant);
    }

    if(green){
      const variant =
      {
        "vid" : {
          "variantName": "color",
          "variantValue": "green"
        }
      }

      obj.variantList.push(variant);
    }

    if(m){
      const variant =
      {
        "vid" : {
          "variantName": "size",
          "variantValue": "m"
        }
      }
      obj.variantList.push(variant);
    }


    if(l){
      const variant =
      {
        "vid" : {
          "variantName": "size",
          "variantValue": "l"
        }
      }
      obj.variantList.push(variant);
    }

    if(xl){
      const variant =
      {
        "vid" : {
          "variantName": "size",
          "variantValue": "xl"
        }
      }
      obj.variantList.push(variant);
    }


    axios.post("http://localhost:8080/product/create",
        obj
        ).then(
            function(response){
                console.log("Request Successful: ");
                console.log(response)
            }
        ).catch(function(error){
            console.log(error);
        } )

  }

    return(
        <div className="container_register">
        <div className="app-wrapper">
            <div>
                <h2 className="title_1"> Create Product</h2>
            </div>
            <form className="form-wrapper" onSubmit={handleSubmit}>

            <div className="name"> 
                <label class="lable"><strong>Image 01 </strong></label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1" placeholder="" onChange={(event) => {setImageUpload(event.target.files[0]);}}  />
                <Link to="/createProduct1">
                    <button onClick={uploadFile} > Upload Image</button>
                </Link> 
              </div>


                <div className="name1">
                    <label class="lable"><strong>CategorySlug</strong></label>
                    <input className="input" type="text" value={catSlug} onChange = {(e)=> setCatSlug(e.target.value)}/>
                </div>
                <div className="name1">
                    <label class="lable"><strong>Description</strong></label>
                    <input className="input" type="text" value={desc} onChange = {(e)=> setDesc(e.target.value)}/>
                </div>
                
               
             

                <div className="address">
                    <label class="lable"><strong>Price</strong></label>
                    <input className="input" type="text" value={price} onChange = {(e)=> setPrice(e.target.value)}/>
                </div>
                <div className="address">
                    <label class="lable"><strong>Slug</strong></label>
                    <input className="input" type="text" value={slug} onChange = {(e)=> settSlug(e.target.value)}/>
                </div>
                <div className="address">
                    <label class="lable"><strong>Title</strong></label>
                    <input className="input" type="text" value={title} onChange = {(e)=> setTitle(e.target.value)}/>
                </div>

                <div className="address">
                    <label class="lable"><strong>variant Color</strong></label>
                    <div class="container">
                        <div class="radio">
                            <input className="radio" type="checkbox" checked = {red} onChange = {() => {toggleRed(!red)}} />
                            <label className="radio-label">Red</label>
                         </div>

                        <div class="radio">
                            <input className="radio"type="checkbox" checked = {green} onChange = {() => {toggleGreen(!green)}}/>
                            <label className="radio-label">Green</label>
                        </div>
                        <div class="radio">
                            <input className="radio"type="checkbox" checked = {blue} onChange = {() => {toggleBlue(!blue)}}/>
                            <label className="radio-label">Blue</label>
                        </div>
                       
                    </div>
                </div>


                <div className="address">
                    <label class="lable"><strong>variant Size</strong></label>
                    <div class="container">
                        <div class="radio">
                            <input className="radio" type="checkbox" checked = {m} onChange = {() => {togglem(!m)}}/>
                            <label className="radio-label">M</label>
                         </div>

                        <div class="radio">
                            <input className="radio"type="checkbox" checked = {l} onChange = {() => {toggleL(!l)}}/>
                            <label className="radio-label">L</label>
                        </div>
                        <div class="radio">
                            <input className="radio"type="checkbox" checked = {xl} onChange = {() => {toggleXL(!xl)}} />
                            <label className="radio-label">XL</label>
                        </div>
                       
                    </div>
                </div>




                    <div>
                    <button className="submit">Create</button>
                    </div> 

         



            </form>
            </div>
        </div>
    );
}

export default CreateProduct;



