import React, { useContext } from 'react';
import './Food_display.css';
import { StoreContext } from '../../Context/StoreContext';
import Fooditem from '../Fooditem/Fooditem';

const Food_display = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item) => {
                    console.log(item._id); // Inspect each item's _id
                    if (category === "All" || category === item.category) {
                        return (
                            <Fooditem 
                                key={item._id} // Use item._id as the key
                                _id={item._id} 
                                name={item.name} 
                                price={item.price} 
                                description={item.description} 
                                image={item.image} 
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default Food_display;
