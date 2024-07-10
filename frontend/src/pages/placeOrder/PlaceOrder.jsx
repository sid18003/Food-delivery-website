import React from 'react'
import './PlaceOrder.css'
// import { gettotalcartamount } from '../../Context/StoreContext'
const PlaceOrder = () => {

  const {gettotalcartamount} = useContext(StoreContext);

  return (
    <form className='place-order'>
      <div className="place-order-left">
      <p className="title">Delivery Information</p>
      <div className="multi-fields">
        <input type="text"  placeholder='First Name'/>
        <input type="text" placeholder='Last name'/>
      </div>
      <input type="text" placeholder='Email'/>
      <input type="text" placeholder='street'/>
      <div className="multi-fields">
        <input type="text"  placeholder='City'/>
        <input type="text" placeholder='State'/>
      </div>
      <div className="multi-fields">
        <input type="text"  placeholder='Zip-code'/>
        <input type="text" placeholder='Country'/>
      </div>
      <input type="text" placeholder='Phone'/>
      </div>
      
      <div className="place-order-right">
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
            <button >Proceed To Payment</button>
            <hr />
          </div>
        </div>
      </div>
    </form>
  )
}
import './PlaceOrder.css'
import { Form } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
export default PlaceOrder
