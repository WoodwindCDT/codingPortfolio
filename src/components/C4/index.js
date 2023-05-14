import React from 'react';
import Canvas from "../../utils/Canvas";

export default function C4(props) {
  const parseRepoName = (url) => {
    // Remove the last slash from the URL if there is one
    url = url.endsWith('/') ? url.slice(0, -1) : url;
    // Split the URL by slashes and return the last element
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 1].toLowerCase();
  };

  return (
    <>
      <Canvas title='My favorite work.'>
        <div className='grid-container'>
          {props.data.map((item, index) => (
            <div className="grid-item" key={index}>
              <div className="image-wrapper">
                <img src={item.img} alt="image" loading='lazy' width="300" height="300" />
              </div>
              <div className="grid-title">
                <span className='work-title'>{parseRepoName(item.url)}</span>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </div>
              <div className="grid-description">
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Canvas>
    </>
  );  
};