import React from "react";
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    return(
<div className="checkout">
<div className="checkout__left">
<img 
className="checkout__Ad"
src="https://images.moneycontrol.com/static-mcnews/2017/10/Amazon-diwali-offer-banner.jpg "
alt=""
/>
<div>
<h2 className="checkout__title">
Your Shopping Card
</h2>
</div>
</div>



<div className="checkout__right">
    <Subtotal />
</div>


</div>

    );
    
}






export default Checkout;