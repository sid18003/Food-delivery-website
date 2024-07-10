import React, { useContext } from 'react';
import './Fooditem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const Fooditem = ({ _id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt={name} />
                {
                    !cartItems[_id] ? (
                        <img 
                            className='add' 
                            onClick={() => addToCart(_id)} 
                            src={assets.add_icon_white} 
                            alt="Add to cart"
                        />
                    ) : (
                        <div className='add-item-counter'> 
                            <img 
                                onClick={() => removeFromCart(_id)} 
                                src={assets.remove_icon_red} 
                                alt="Remove from cart" 
                            />
                            <p>{cartItems[_id]}</p>
                            <img 
                                onClick={() => addToCart(_id)} 
                                src={assets.add_icon_green} 
                                alt="Add more to cart" 
                            />
                        </div>
                    )
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="food-item-description">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
};

export default Fooditem;
