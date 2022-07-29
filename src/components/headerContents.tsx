import { memo } from "react";
import "./headerContents.scss";
import { SideMenu } from "./sideMenu";
import rogo1 from './img/rogo1.png';
import { Link as Scroll } from 'react-scroll';

export const HeaderContents = memo(() => {
    return (
        <>
        {/* レスポンシブ　サイドメニュー */}
        <div id="responsiveSideMenu">
            <SideMenu></SideMenu>
        </div>
        
        <div id="TOP" className="header">
            {/* 背景 */}
            <div className='bgImg src1'></div>  
            <div className='bgImg src2'></div>
            <div className='bgImg src3'></div>

            {/* タイトルロゴ */}
            <img className='mainRogo' src={rogo1} alt="rogo" />

            {/* サイドメニュー */}
            <ul className="sideMenu">
                <li><Scroll to='TOP' smooth={true}>TOP</Scroll></li>
                <li><Scroll to='ABOUT' smooth={true}>ABOUT</Scroll></li>
                <li><Scroll to='PRODUCT' smooth={true}>PRODUCT</Scroll></li>
                <li><Scroll to='NEWS' smooth={true}>NEWS</Scroll></li>
                <li><Scroll to='CONTACT' smooth={true}>CONTACT</Scroll></li>
            </ul>

            {/* 矢印 */}
            <span className='underArr'></span>
        </div>
        </>
    );
});