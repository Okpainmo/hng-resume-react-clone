import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import OtherContents from './components/otherContents';
import SellerIntro from './components/sellerIntro';
import SellerResume from './components/sellerResume';

// CSS import

import './index.css';

function Base() {
  return (
    <React.Fragment>
      <Navbar />
      <SellerIntro />
      <SellerResume />
      <OtherContents />
    </React.Fragment>
  );
}

ReactDOM.render(<Base />, document.getElementById('root'));
