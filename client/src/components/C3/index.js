import React from 'react';
import Canvas from "../../utils/Canvas";

export default function C3(props) {
    // added extra code here to help with dereference as the format of this code is specific
    const university = props.data.find(item => item.uni)?.uni;
    const major = props.data.find(item => item.major)?.major;
    const status = props.data.find(item => item.status)?.status;

    return(
        <>
        <Canvas title='i attend.'>
        <ul>
            <li>
                <span className='sub-title-1'>
                    <a href='https://www.sfasu.edu/' target='_blank'>
                        {university}
                    </a>
                </span>
                {/* space here for graphic */}
                <br />
                <span className='sub-title-2'>{major}</span> - {status}
            </li>
        </ul>
        </Canvas>
        </>
    );
};