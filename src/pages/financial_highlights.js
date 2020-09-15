import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar/Navbar';
import '../components/css/financial_highlights.css'

function financial_highlights() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <h1 className="page-header">Our Commitment to #BeCrueltyFree</h1>
        <div className="container-all">
          <img className="bunny-mobile" src={require('../components/Img/bunny.png')} alt="bunny" />
          <p className="page-para">We are calling for an end to all animal testing to cosmetic products globally, and we're proud to partner with Humane Society
            Internationals's #BeCrueltyFree Campaign to advance that vision</p>
          <br/>
          <br/>
          <p className="page-para">Our support of #BeCrueltyFree is another step in our long-term commitment to make animal testing absolete. Our journey began over 40 years
            ago through ongoing research, investment and partnerships to develop and promote the use of alternatives to animal testing. These efforts have
            contributed to the greater good, enabling us and others to develop products that have not been tested on animals. Our contributions included:</p>
          <div className="grid-container">
          <img className="gallery" src={require('../components/Img/science.png')} alt="science" />
          <img className="gallery" src={require('../components/Img/partnering.png')} alt="science" />
          <img className="gallery-hidden" src={require('../components/Img/advocating.png')} alt="science" />
            <p className="gallery-p"><b>Investing</b> over $440 million over 40 years in alternatives to animal testing, our researchers pioneering over 25 non-animal methods, publishing more than 1,000 scientific articles</p>
            <p className="gallery-p"><b>Partnering</b> with leading itnernational animal welfare organizations, academia, and industry coalitions to promote use of non-animal, cruelty-free method around the world.</p>
            <p className="gallery-p-hidden"><b>Advocating</b> for public use of non-animal method and adoption by scientists and policy makers around the world for over 25 years.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default financial_highlights;