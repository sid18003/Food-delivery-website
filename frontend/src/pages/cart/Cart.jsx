import React, { useContext } from "react";
import "./Cart.css";
import { useCallback } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, addToCart ,gettotalcartamount} =
    useContext(StoreContext);
   const navigate = useNavigate();
    return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="cart-items-item cart-items-title">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price * cartItems[item._id]}</p>
                <p
                  onClick={() => {
                    removeFromCart(item._id);
                  }}
                  className="cross"
                >
                  x
                </p>
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>{gettotalcartamount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{gettotalcartamount()==0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{gettotalcartamount()==0?0:gettotalcartamount()+2}</b>
            </div>
            <button onClick={()=>navigate('/order')}>Proceed To Checkout</button>
            <hr />
          </div>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If You Have A Promo Code , Enter It Here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Enter Promocode Here" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
