import React, { FC, memo } from 'react';
import "normalize.css";
import './App.scss';
import { HeaderContents } from './components/headerContents';
import { AboutActive } from './components/aboutActive';
import { ProductActive } from "./components/productActive";
import { NewsActive } from "./components/newsActive";
import { FooterContents } from "./components/footerContents";

export const App:FC = memo(() => {
  return (
    <>
    {/* ヘッダー */}
    <header>
      <HeaderContents></HeaderContents>
    </header>
    
    {/* メイン */}
    <main>
      <AboutActive></AboutActive>
      <ProductActive></ProductActive>
      <NewsActive></NewsActive>
    </main>
    {/* フッター */}
    <footer>
      <FooterContents></FooterContents>
    </footer>
    </>
  );
});