import { memo, useState } from "react";
import "normalize.css";
import "./newsActive.scss";
import UnderlineNami from './img/nami.png';
import news1 from './img/news1.jpg'
import news2 from './img/news2.jpg'
import news3 from './img/news3.jpg'
import news4 from './img/news4.jpg'
import news5 from './img/news5.jpg'
import news6 from './img/news6.jpg'


export const NewsActive = memo(() => {
  const [active, setActive] = useState<boolean>(false);

    const classToggle = () => {
        setActive (!active);
    };
  
  return (
    <>
    <div id="NEWS" className="news">
      <h3>NEWS</h3>
      <img className="underline" src={UnderlineNami} alt="" />
      <button onClick={classToggle}>
        MORE
        <span></span>
      </button>
      <ul className={active ? "newsListOpen" : "newsListClose"}>
        <li>
          <img src={news1} alt="" />
          <div className="nBox">
            <p className="nTitle">Title</p>
            <p className="date">20xx.xx.xx</p>
            <p className="nText">
              text.text.text.text.text.
              text.text.text.text.text.
              text.text.text.text.text.
            </p>
          </div>
        </li>
        <li>
          <img src={news2} alt="" />
          <div className="nBox">
            <p className="nTitle">Title</p>
            <p className="date">20xx.xx.xx</p>
            <p className="nText">
              text.text.text.text.text.
              text.text.text.text.text.
              text.text.text.text.text.
            </p>
          </div>
        </li>
        <li>
          <img src={news3} alt="" />
          <div className="nBox">
            <p className="nTitle">Title</p>
            <p className="date">20xx.xx.xx</p>
            <p className="nText">
              text.text.text.text.text.
              text.text.text.text.text.
              text.text.text.text.text.
            </p>
          </div>
        </li>
        <li>
          <img src={news4} alt="" />
          <div className="nBox">
            <p className="nTitle">Title</p>
            <p className="date">20xx.xx.xx</p>
            <p className="nText">
              text.text.text.text.text.
              text.text.text.text.text.
              text.text.text.text.text.
            </p>
          </div>
        </li>
        <li>
          <img src={news5} alt="" />
          <div className="nBox">
            <p className="nTitle">Title</p>
            <p className="date">20xx.xx.xx</p>
            <p className="nText">
              text.text.text.text.text.
              text.text.text.text.text.
              text.text.text.text.text.
            </p>
          </div>
        </li>
        <li>
          <img src={news6} alt="" />
          <div className="nBox">
            <p className="nTitle">Title</p>
            <p className="date">20xx.xx.xx</p>
            <p className="nText">
              text.text.text.text.text.
              text.text.text.text.text.
              text.text.text.text.text.
            </p>
          </div>
        </li>
      </ul>
    </div>
    </>
  );
});