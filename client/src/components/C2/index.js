import React from 'react';
import Canvas from "../../utils/Canvas";

export default function C2(props) {
    return(
        <>
        <Canvas title='i utilize.'>
            <div className='wall'>
            <ul>
                {props.data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            </div>
        </Canvas>
        </>
    );
};