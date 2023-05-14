import React from "react";

function Container(props) {
    return(
        <div className='div-3'>
            <span className='title-1'><h5>{props.title}</h5></span>
            {props.children}
        </div>
    );
};

export default function Canvas(props) {
    return <Container title={props.title}>{props.children}</Container>
};