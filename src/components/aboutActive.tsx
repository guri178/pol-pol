import { memo } from 'react';
import './aboutActive.scss';

export const AboutActive = memo(() => {
    return (
        <div id='ABOUT' className='about'>
          <div className='contentBox'>
          <h2>Title</h2>
          <p>
          text.text.<br />
          text.text.text.text.text.text.<br />
          text.text.text.text.text.text.<br />
          <br />
          text.text.text.text.text.text.<br />
          text.text.text.text.<br />
          text.text.text.text.<br />
          <br />
          text.text.text.text.<br />
          text.text.text.text.<br />
          text.text.text.text.text.<br />
          text.text.text.text.text.<br />
          </p>
          <h2>Ttile</h2>
          <p>
          text.text.text.text.<br />
          text.text.text.text.<br />
          </p>
          </div>
        </div>
    );
});