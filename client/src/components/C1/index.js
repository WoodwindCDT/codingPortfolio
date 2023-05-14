import React from 'react';

export default function C1(props) {
  // added extra code here to help with dereference as the format of this code is specific
  const intro = props.data.find(item => item.intro)?.intro;
  const about = props.data.find(item => item.about)?.about;
  const current = props.data.find(item => item.current)?.current;
  
  // extract the link and repo name from the text
  const linkText = current.split("--")[1];
  const link = linkText.substring(linkText.indexOf("https"));

  return (
    <>
      <div className="div-1">
        <h1>{intro}</h1>
        <div className="div-2">
          <h4 className="desc">{about}</h4>
          <span className="summary">
            <p className="summary-p">
              {current.split("--")[0]}
              <a href={link} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
                {linkText.substring(linkText.lastIndexOf("/") + 1)}
              </a>
            </p>
          </span>
        </div>
      </div>
    </>
  );
};