
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const CreateProduct = () => {
    return(
        <div className="container_register">
        <div className="app-wrapper">
            <div>
                <h2 className="title_1"> Create Product</h2>
            </div>
            <form className="form-wrapper">
                <div className="name1">
                    <label class="lable"><strong>CategorySlug</strong></label>
                    <input className="input" type="text"/>
                </div>
                <div className="name1">
                    <label class="lable"><strong>Description</strong></label>
                    <input className="input" type="text"/>
                </div>
                
                <div className="nameWrapper">
                <div className="name">
                    
                    <label class="lable"><strong>Image01</strong></label>

                    <input className="input" type="text"/>
                </div>
                <div className="name">
                    <label class="lable"><strong>Image02</strong></label>
                    
                    <input className="input" type="text"/>
                </div>
                </div>
             

                <div className="address">
                    <label class="lable"><strong>Price</strong></label>
                    <input className="input" type="text"/>
                </div>
                <div className="address">
                    <label class="lable"><strong>Slug</strong></label>
                    <input className="input" type="text"/>
                </div>
                <div className="address">
                    <label class="lable"><strong>Title</strong></label>
                    <input className="input" type="text"/>
                </div>

                <div className="address">
                    <label class="lable"><strong>variant Name</strong></label>
                    <div class="container">
                        <div class="radio">
                            <input className="radio" type="checkbox" />
                            <label className="radio-label">Red</label>
                         </div>

                        <div class="radio">
                            <input className="radio"type="checkbox"/>
                            <label className="radio-label">Green</label>
                        </div>
                        <div class="radio">
                            <input className="radio"type="checkbox"/>
                            <label className="radio-label">Black</label>
                        </div>
                        <div class="radio">
                            <input className="radio"type="checkbox"/>
                            <label className="radio-label">Purple</label>
                        </div>
                        <div class="radio">
                            <input className="radio"type="checkbox"/>
                            <label className="radio-label">white</label>
                        </div>
                    </div>
                </div>


                <div className="address">
                    <label class="lable"><strong>variant Size</strong></label>
                    <div class="container">
                        <div class="radio">
                            <input className="radio" type="checkbox" />
                            <label className="radio-label">S</label>
                         </div>

                        <div class="radio">
                            <input className="radio"type="checkbox"/>
                            <label className="radio-label">M</label>
                        </div>
                        <div class="radio">
                            <input className="radio"type="checkbox"/>
                            <label className="radio-label">XL</label>
                        </div>
                        <div class="radio">
                            <input className="radio"type="checkbox"/>
                            <label className="radio-label">XXL</label>
                        </div>
                        <div class="radio">
                            <input className="radio"type="checkbox"/>
                            <label className="radio-label">XXXL</label>
                        </div>
                    </div>
                </div>






         



            </form>
            </div>
        </div>
    );
}

export default CreateProduct;



