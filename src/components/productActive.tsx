import { memo, useState } from "react";
import "normalize.css";
import './productActive.scss';
import UnderlineNami from './img/nami.png';
import product1 from "./img/product1.jpg"; 
import product2 from "./img/product2.jpg"; 
import product3 from "./img/product3.jpg"; 
import product4 from "./img/product4.jpg"; 
import product5 from "./img/product5.jpg"; 
import product6 from "./img/product6.jpg"; 

export const ProductActive = memo(() => {
    const [active, setActive] = useState<boolean>(false);

    const classToggle = () => {
        setActive (!active);
    };

    return (
        <div id='PRODUCT'>
          <h3>PRODUCT</h3>
          <img className="underline" src={UnderlineNami} alt="nami.png" />
          <button onClick={classToggle}>
            MORE
            <span></span>
          </button>
          <ul className={active ? "productListOpen" : "productListClose"}>
              <li>
                <img src={product1} alt="" />
                <p>Title</p>
              </li>
              <li>
                <img src={product2} alt="" />
                <p>Title</p>
              </li>
              <li>
                <img src={product3} alt="" />
                <p>Title</p>
              </li>
              <li>
                <img src={product4} alt="" />
                <p>Title</p>
              </li>
              <li>
                <img src={product5} alt="" />
                <p>Title</p>
              </li>
              <li>
                <img src={product6} alt="" />
                <p>Title</p>
              </li>
              
            </ul>
        </div>
    );
});