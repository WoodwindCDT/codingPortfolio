import React from 'react';
import Canvas from "../../utils/Canvas";

export default function C5(props) {
    return (
      <>
        <Canvas title="contact me.">
          <ul className="fter-ls">
            {props.data.map((item, index) => {
              const contactType = Object.keys(item)[0];
              const contactValue = Object.values(item)[0];
              if (contactType === "email") {
                return (
                  <li key={index} className="fter-itm">
                    <a href={`mailto:${contactValue}`}>{contactType}</a>
                  </li>
                );
              } else {
                return (
                  <li key={index} className="fter-itm">
                    <a
                      href={contactValue}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contactType}
                    </a>
                  </li>
                );
              }
            })}
          </ul>
        </Canvas>
      </>
    );
  };