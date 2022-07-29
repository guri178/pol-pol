import { memo } from "react";
import "./footerContents.scss";
import { Link as Scroll } from 'react-scroll';
import rogo2 from './img/rogo2.png';

export const FooterContents = memo(() => {
    return (
      <>
      <div id='CONTACT' className='SnsLink'>
        <Scroll to="TOP" smooth={true}>
          <span className="circleButton">
            <span className="underArrow"></span>
          </span>
        </Scroll>
        <ul>
          <li className='FacebookColor'>Share on Facebook</li>
          <li className='TwitterColor'>Share on Twitter</li>
          <li className='BookmarkColor'>Hatena Bookmark</li>
        </ul>
      </div>

      <div className='UnderMenu'>
        <ul>
          <li><Scroll to='TOP' smooth={true}>TOP</Scroll></li>
          <li><Scroll to='ABOUT' smooth={true}>ABOUT</Scroll></li>
          <li><Scroll to='PRODUCT' smooth={true}>PRODUCT</Scroll></li>
          <li><Scroll to='NEWS' smooth={true}>NEWS</Scroll></li>
          <li><Scroll to='CONTACT' smooth={true}>CONTACT</Scroll></li>
        </ul>
      </div>

      <div className='Copyright'>
        <img src={rogo2} alt="rogo2"/>
        <p>Copyright © 2022 POL-POL aguri.</p>
      </div>
      </>
    );
});