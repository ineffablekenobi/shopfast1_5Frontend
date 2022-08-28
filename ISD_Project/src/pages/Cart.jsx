import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import CartItem from '../components/CartItem'
import Button from '../components/Button'

import productData from '../assets/fake-data/products'
import numberWithCommas from '../utils/numberWithCommas'

const Cart = () => {

    const cartItems = useSelector((state) => state.cartItems.value)

    const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems))

    const [totalProducts, setTotalProducts] = useState(0)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
    }, [cartItems])

    const axios = require('axios').default;

    const handleOrder = () =>{

        var orderRequest = {
            "username" : "ineffable",
            "subOrders" : {}
        }

        cartProducts.forEach((item) => {
            var pid = item.product.productid;
            orderRequest.subOrders[pid] = item.quantity;
        })

        axios.post("http://localhost:8080/order/create",
        orderRequest
        ).then(
            function(response){
                alert("Order Placed");
                console.log("Request Successful: ");
                console.log(response)
            }
        ).catch(function(error){
            console.log(error);
        } )



    }

    return (
        <div>        
           


        <Helmet title="Cart">
            <div className="cart">
                <div className="cart__info">
                    <div className="cart__info__txt">
                        <p>
                            You have {totalProducts} Product in cart
                        </p>
                        <div className="cart__info__txt__price">
                            <span>Into money:</span> <span>{numberWithCommas(Number(totalPrice))}</span>
                        </div>
                    </div>
                    <div className="cart__info__btn">

                        
                        <Link to="/catalog">                        
                        <Button size="block" onClick={handleOrder}>
                            Place Order
                        </Button>
                        </Link>


                        <Link to="/catalog">
                            <Button size="block">
                                Continue shopping
                            </Button>
                        </Link>
                        
                    </div>
                </div>
                <div className="cart__list">
                    {
                        cartProducts.map((item, index) => (
                            <CartItem item={item} key={index}/>
                        ))
                    }
                </div>
            </div>
        </Helmet>
        </div>
    )
}

export default Cart
