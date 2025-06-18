import React from 'react';
import './Container.css';
import image from './asset/illustration-article.svg'
import avatar from './asset/image-avatar.webp';
import ShadowBox from './shadowbox.js';
function Container() {
  return (
    <div className="container">
        <ShadowBox/>
        <img src={image} alt="simple design image"/>
        <div className="learning">Learning</div>
        <p>Published 21 Dec 2023</p>
        <h2>HTML & CSS foundations</h2>
        <p>
            These languages are the backbone of every website defining structure, content and presentation.
        </p>
        <div className="profile">
            <img src={avatar} alt="avatar"/>
            <span><em>Greg Hooper</em></span>
        </div>
    </div>
  );
}
export default Container;