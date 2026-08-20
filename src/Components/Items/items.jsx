import React from 'react'
import './items.css'

const Items = () => {
    return (
        <div className='items'>
    <img src={props.image}
    alt=""/>
    <p>{props.name}</p>
    <div className="items-price">
    <div className="items-price-new">
        {props.new_price}
        </div>
<div className="items-price-old">
    {props.old}

</div>
    </div>

        </div>
        
    )
}
export default Items 