import React from "react";
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className="home">
        <div className="home__container">
        <img className="home__img"
      src="https://reviewed-com-res.cloudinary.com/image/fetch/s--OCGmezmg--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1590656678455/Amazon_Prime_Video_tips_1.jpg"
  alt=""
/>

<div className="home__row">
    <Product
    title='Police Disruptor Round Analog Blue Dial Mens Watch' price={29.99}
    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqvlgYzM8SGyqqZbCix4bv1lDgbnEK28W52w&usqp=CAU'
      rating={5}
    />
    <Product
    title='Dell Inspiron 5409 14.0" FHD WVA AG Display 11th Gen Laptop (i7-1165G7 / 8 GB / 512 SSD / Nvidia MX 350 2GB Graphics / 1 Yr NBD / Win 10 + MS Office H&S / Pebble) D560374WIN9PE' price={99}
    image='https://specials-images.forbesimg.com/imageserve/5d609f0668cb0a0008c045d2/960x0.jpg?cropX1=0&cropX2=1500&cropY1=327&cropY2=1171'
      rating={5}
     />
</div>
<div className="home__row">
  <Product
  title='OnePlus 7 (Nebula Blue, 12GB RAM, 256GB Storage)' price={19.99}
    image='https://www.gizmochina.com/wp-content/uploads/2019/05/oneplus_7_pro--500x500.jpg'
      rating={5}
   />
 <Product
 title='Microsoft 1 TB Xbox One S Console- Forza Horizon' price={26}
    image='https://images-na.ssl-images-amazon.com/images/I/71i0Sdq8fqL._AC_SL1000_.jpg'
      rating={5}
  /> 
 <Product
 title='Sony Bravia 214.8 cm (85 inches) 4K Ultra HD Certified Android LED TV 85X8000H (Black) (2020 Model)' price={219}
    image='https://i.gadgets360cdn.com/products/televisions/large/1548155120_832_sony_65-inch-led-ultra-hd-4k-tv-kd-65x9000e.jpg'
      rating={5}
  /> 
</div>

<div className="home__row">
  <Product
  title='Gucci Guilty Eau de Toilette (EDT) Natural Spray for Women 75 mL/2.5 Oz' price={29.99}
    image='https://logan.nnnow.com/content/dam/nnnow-project/02-nov-2020/kids-lp-revised/2NOV20_GUCCI_WOMEN_BANNER1_640x320.jpg'
      rating={5}
   />
  <Product 
    title='VINTAGE SLIM FIT JEANS' price={29.99}
    image='https://i.ytimg.com/vi/uYvb57wtUMM/maxresdefault.jpg'
      rating={5}
  />
</div>

</div>
</div>


   );
}





export default Home;