import React from 'react';
import CartItem from './CartItem';

function Cart({initialitems})
{  
    const GrandTotal= initialitems.reduce( (total,items) => (
        total= total + items.price * items.qty
    ), 0).toFixed(2);

 return(
 <div className="Cart">
    <h1>Mall Mart</h1>
      <div className="Car-Item">
    <ul>
      {initialitems.map(items=>(
       
       <div>< CartItem id={items.id} name={items.name} price={items.price} qty={items.qty} /></div>
      ))}
    </ul>
      </div>
      <h1>Grand Total: $ {GrandTotal}</h1>
 </div>

 )

}

export default Cart;