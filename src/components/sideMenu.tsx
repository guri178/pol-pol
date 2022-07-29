import { memo, useState } from "react";
import { Link as Scroll } from 'react-scroll';
import './sideMenu.scss';
import "normalize.css";

export const SideMenu = memo (() => {
    const [open, setOpen] = useState<boolean>(false);

    const classToggle = () => {
        setOpen(!open);
    };

    return (
        <>
        {/* レスポンシブ　ハンバーガー */}
        <div className={open ? "openMenu" : "closeMenu"}>
          <ul className="sideMenu">
            <li><Scroll to='TOP' smooth={true}>TOP</Scroll></li>
            <li><Scroll to='ABOUT' smooth={true}>ABOUT</Scroll></li>
            <li><Scroll to='PRODUCT' smooth={true}>PRODUCT</Scroll></li>
            <li><Scroll to='NEWS' smooth={true}>NEWS</Scroll></li>
            <li><Scroll to='CONTACT' smooth={true}>CONTACT</Scroll></li>
          </ul>
          <div>
            <p>MENU</p>
            <div className="hamburgerButton" onClick={classToggle}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
          </div>
        </div>
        </>
    )
});