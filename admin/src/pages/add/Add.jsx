import React from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
const Add = () => {
  return (
    <div className='add'>
      <form className='flex-col'>
        <div className="add-img-upload flex-col">
          <p>Upload image</p>
          <label htmlFor="image">

              <img src={assets.upload_area} alt="" />

          </label>
          <input type="file" id='image' hidden required/>
        </div>
        <div className="add-product-name flex-col">

          <p>product name</p>
          <input type="text" name='name' placeholder='Type here' />

        </div>
        <div className="add-product-description flex-col">
          <p>product-description</p>
            <textarea name="description" rows="6" placeholder='Type here'></textarea>
        </div>

      </form>
   </div>
  )
}

export default Add
