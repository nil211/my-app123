import React from 'react';

function CartItem({ id,name,price,qty }){

return(
<div>
        <div> {name} </div>
        <div> ${price}</div>

        <div><button>-</button>{qty}
        <button>+</button></div>
        <div>Total: ${price * qty}</div>
 </div>
)

}
export default CartItem;