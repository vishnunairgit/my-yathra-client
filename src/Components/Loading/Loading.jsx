import React from 'react';
import loadingGif from "../Assets/loading...gif";
import './loading.css'


function Loading() {
    return (
        <div className="spinner-container">
            <img src={loadingGif} alt="Loading..." className="spinner" />
        </div>
    )
}

export default Loading